<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use Illuminate\Http\Request;

class PaymentTransactionsController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, Transaction $transaction)
    {
        $data = $request->validate([
            'payments.*.amount' => 'required|integer',
            'payments.*.date' => 'nullable',
        ]);

        $data['payments'] = collect($data['payments'])->map(function ($payment) {
            return [
                'amount' => $payment['amount'],
                'date' => $payment['date'] ?? now()->format('Y-m-d'),
            ];
        });

        $transaction->update( [
            'payments' => $data['payments'],
        ]);

        return redirect()
            ->route('index.transactions')
            ->with('swalNotification', [
                'title' => __('common.success'),
                'text' => __('common.updated'),
                'icon' => 'success',
                'timer' => 5000,
            ]);
    }
}
