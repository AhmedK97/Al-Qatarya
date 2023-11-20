<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use Illuminate\Http\Request;

class DeleteTransactionsController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, Transaction $transaction)
    {

        $transaction->project->services()->detach();

        // extra services
        $transaction->project->extraServices()->delete();

        $transaction->delete();

        // $transaction->project->extraServices()->detach();

        return redirect()
            ->route('index.transactions')
            ->with('swalNotification', [
                'title' => __('common.success'),
                'text' => __('common.deleted'),
                'icon' => 'success',
                'timer' => 5000,
            ]);
    }
}
