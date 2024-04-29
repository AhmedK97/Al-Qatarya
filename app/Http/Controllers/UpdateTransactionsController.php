<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use Arr;
use Illuminate\Http\Request;
use Termwind\Components\Dd;

class UpdateTransactionsController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, Transaction $transaction)
    {
        $data = $request->validate([
            'customer_id' => 'required|integer|min:0',
            'employee_id' => 'required|integer|min:0',
            'address' => 'required|string',
            'times_to_pay' => 'required|integer|min:1',
            'services_id' => 'required|array',
            'status' => 'required|string|in:Pending,Paid',
        ]);

        $transaction->project->update([
            'customer_id' => $data['customer_id'],
            'employee_id' => $data['employee_id'],
            'address' => $data['address'],
        ]);

        $transaction->update([
            'times_to_pay' => $data['times_to_pay'],
            'status' => $data['status'],
        ]);
        $transaction->project->services()->sync(Arr::pluck($data['services_id'], 'id'));

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
