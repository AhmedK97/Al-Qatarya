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
        $transactions = $request->transactions;

        $transactions = Transaction::find(1)->with('customer', 'employee', 'project')->get();

        // TransactionsAdminResource($transactions)

        $transactions = TransactionsAdminResource::collection($transactions);

        $services = $transactions->map(function ($transaction) {
            return $transaction->project->services;
        })->flatten();

        $extraServices = $transactions->map(function ($transaction) {
            return $transaction->project->extraServices->where('type', 'service');
        })->flatten();

        // dd($extraServices);
        return view('invoice.index', compact(
            'services',
            'extraServices',
            'transactions'

        ));
        $pdfContent = view('invoice.index')->render();

        $pdfContent = $this->convertArabicText($pdfContent);

        $pdf = PDF::loadHTML($pdfContent);

        $directory = 'whatsappMedia/' . $customerPhone;

        if (!Storage::disk('public')->exists($directory)) {
            Storage::disk('public')->makeDirectory($directory);
        }

        $pdf = $pdf->save(storage_path('app/public/' . $directory . '/invoice.pdf'));


        $token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbnN0YW5jZU5hbWUiOiJjb2RlY2hhdC1ib3QiLCJhcGlOYW1lIjoid2hhdHNhcHAtYXBpIiwidG9rZW5JZCI6IjM3NTNmNzAwLTNjZGMtNDMxMi1hZGRmLWI0NjA0ZTQ3ZDgwZiIsImlhdCI6MTcwODI4ODkxMiwiZXhwIjoxNzA4Mjg4OTEyLCJzdWIiOiJnLXQifQ.k6foHEseZc14c8j4dUP8BO7nmAgAgnzL6V0COdKD3HQ';

        $header = [
            'Content-Type: multipart/form-data; boundary=<calculated when request is sent>',
            'Accept: */*',
            'Authorization' => $token,
        ];

        $mediaUrl = Storage::disk('public')->url($directory . '/invoice.pdf');

        $formData = [
            'number' => $customerPhone,
            'mediaMessage' => [
                'mediatype' => 'document',
                'media' => 'https://s29.q4cdn.com/175625835/files/doc_downloads/test.pdf',
                'fileName' => 'invoice.pdf',
            ],
        ];

        $httpRequest = HttpRequest('/message/sendMedia/codechat-bot', 'post', $header, $formData);

        if ($httpRequest->status() != 200) {
            return redirect()->back()->with('swalNotification', [
                'title' => 'Failed to send invoice',
                'text' => 'Failed to send invoice to customer',
                'icon' => 'error',
            ]);
        }

        return redirect()->back()->with('swalNotification', [
            'title' => 'Invoice sent',
            'text' => 'Invoice sent to customer',
            'icon' => 'success',
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
