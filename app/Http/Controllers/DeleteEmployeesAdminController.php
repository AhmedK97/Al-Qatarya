<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\User;
use Illuminate\Http\Request;

class DeleteEmployeesAdminController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, User $user)
    {
        Project::where('employee_id', $user->id)->update(['employee_id' => 1]);

        $user->delete();

        return redirect()->route('index.employees')->with('swalNotification', [
            'title' => __('common.success'),
            'text' => __('common.deleted'),
            'icon' => 'success',
            'timer' => 5000,
        ]);
    }
}
