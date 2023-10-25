<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class DeleteCustomersAdminController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, User $user)
    {
        $user->delete();

        return redirect()->route('index.customers')->with('swalNotification', [
            'title' => __('common.success'),
            'text' => __('common.deleted'),
            'icon' => 'success',
            'timer' => 5000,
        ]);
    }
}
