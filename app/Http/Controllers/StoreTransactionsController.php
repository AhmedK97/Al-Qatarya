<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use Illuminate\Http\Request;

class StoreTransactionsController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $request->validate([
            'project_id' => 'required|exists:projects,id',
        ]);

        // $transaction = Transaction::where('project_id', $request->project_id)->first();

        // if ($transaction) {
        //     return redirect()
        //         ->route('index.transactions')
        //         ->with('swalNotification', [
        //             'title' => __('common.error'),
        //             'text' => __('common.already_exists'),
        //             'icon' => 'error',
        //             'timer' => 5000,
        //         ]);
        // }

        Transaction::create([
            'project_id' => $request->project_id,
            'status' => 'Pending',
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
