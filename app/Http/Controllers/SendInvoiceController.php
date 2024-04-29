<?php

namespace App\Http\Controllers;

use App\Http\Resources\TransactionsAdminResource;
use App\Models\Transaction;
use App\Models\WhatsApp;
use ArPHP\I18N\Arabic;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;

class SendInvoiceController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $customerPhone = $request->customerPhone;

        $transactionId = $request->transactionId;

        $transactions = Transaction::whereId($transactionId)->get();

        $services = $transactions
            ->map(function ($transaction) {
                return $transaction->project->services;
            })
            ->flatten();

        $extraServices = $transactions
            ->map(function ($transaction) {
                return $transaction->project->extraServices->where('type', 'service');
            })
            ->flatten();

        $totalPaidAmount = $transactions->sum('paid_amount');

        $transactions = TransactionsAdminResource::make($transactions->first());

            // dd($transactions);


        // dd($totalPaidAmount);
        $pdfContent = view('invoice.index', [
            'services' => $services,
            'extraServices' => $extraServices,
            'transactions' => $transactions,
            // 'transactions' => $transactions,
            // 'totalPaidAmount' => $totalPaidAmount,
        ])->render();

        // return view('invoice.index', compact('services', 'extraServices', 'transactions'));

        $pdfContent = $this->convertArabicText($pdfContent);

        $pdf = PDF::loadHTML($pdfContent);

        $directory = 'whatsappMedia/'.$customerPhone;

        if (! Storage::disk('public')->exists($directory)) {
            Storage::disk('public')->makeDirectory($directory);
        }

        $pdf = $pdf->save(storage_path('app/public/'.$directory.'/invoice.pdf'));

        $fileContents = Storage::disk('public')->get($directory.'/invoice.pdf');

        $info = WhatsApp::chat()->inRandomOrder()->first();
        $formData = [
            'number' => $customerPhone,
            'mediatype' => 'document',
        ];

        $httpRequest = Http::withHeaders([
            'accept' => 'application/json',
            'Authorization' => $info->token,
            'apikey' => config('app.global_whats_app_api_token'),
            'groupJid' => config('app.group_jid'),
        ])
            ->attach('attachment', $fileContents, 'invoice.pdf')
            ->post(config('app.whats_app_url').'/message/sendMediaFile/'.$info->instance_name, $formData);

        if ($httpRequest->successful()) {
            return redirect()
                ->route('index.transactions')
                ->with('swalNotification', [
                    'title' => __('common.success'),
                    'text' => __('common.updated'),
                    'icon' => 'success',
                    'timer' => 5000,
                ]);
        }

        return response()->json([
            'message' => 'Failed to send the invoice',
        ], 500);
    }

    protected function convertArabicText($text): string
    {
        $arabic = new Arabic();
        $positions = $arabic->arIdentify($text);

        for ($i = count($positions) - 1; $i >= 0; $i -= 2) {
            $utf8ar = $arabic->utf8Glyphs(substr($text, $positions[$i - 1], $positions[$i] - $positions[$i - 1]));
            $text = substr_replace($text, $utf8ar, $positions[$i - 1], $positions[$i] - $positions[$i - 1]);
        }

        return $text;
    }
}
