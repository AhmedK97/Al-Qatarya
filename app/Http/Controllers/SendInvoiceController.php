<?php

namespace App\Http\Controllers;

use App\Http\Resources\TransactionsAdminResource;
use App\Models\Project;
use App\Models\Transaction;
use Illuminate\Http\Request;
use ArPHP\I18N\Arabic;
use Barryvdh\DomPDF\Facade\Pdf;
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

        $transactions = Transaction::whereId($transactionId)->with('customer', 'employee', 'project')->get();

        $transactions = TransactionsAdminResource::collection($transactions);
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

        $pdfContent = view('invoice.index', compact('services', 'extraServices', 'transactions'))->render();

        // return view('invoice.index', compact('services', 'extraServices', 'transactions'));

        $pdfContent = $this->convertArabicText($pdfContent);

        $pdf = PDF::loadHTML($pdfContent);

        $directory = 'whatsappMedia/' . $customerPhone;

        if (!Storage::disk('public')->exists($directory)) {
            Storage::disk('public')->makeDirectory($directory);
        }

        $pdf = $pdf->save(storage_path('app/public/' . $directory . '/invoice.pdf'));

        $token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbnN0YW5jZU5hbWUiOiJjb2RlY2hhdC1ib3QiLCJhcGlOYW1lIjoid2hhdHNhcHAtYXBpIiwidG9rZW5JZCI6IjM3NTNmNzAwLTNjZGMtNDMxMi1hZGRmLWI0NjA0ZTQ3ZDgwZiIsImlhdCI6MTcwODI4ODkxMiwiZXhwIjoxNzA4Mjg4OTEyLCJzdWIiOiJnLXQifQ.k6foHEseZc14c8j4dUP8BO7nmAgAgnzL6V0COdKD3HQ';

        $fileContents = Storage::disk('public')->get($directory . '/invoice.pdf');

        $formData = [
            'number' => $customerPhone,
            'mediatype' => 'document',
        ];

        $httpRequest = Http::withHeaders([
            'accept' => 'application/json',
            'Authorization' => $token,
        ])
            ->attach('attachment', $fileContents, 'invoice.pdf')
            ->post(env('WHATSAPP_API_URL') . '/message/sendMediaFile/codechat-bot', $formData);

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

        return redirect()
            ->route('index.transactions')
            ->with('swalNotification', [
                'title' => __('common.error'),
                'text' => __('common.error'),
                'icon' => 'error',
                'timer' => 5000,
            ]);
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
