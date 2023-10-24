<?php

namespace App\Http\Controllers;

use App\Enums\Blogs\EmployeeStatusEnum;
use App\Enums\Blogs\UserRoleEnum;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\Enum;
use Illuminate\Validation\Rule;

class StoreEmployeesController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request , User $user)
    {
        // dd($request->all());
        $data = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', Rule::unique('users', 'email')->ignore($user->id)],
            'phone' => ['required', 'numeric', RUle::unique('users', 'phone')->ignore($user->id)],
            'status' => ['required', 'string', 'max:255', new Enum(EmployeeStatusEnum::class)],
            'address' => ['required', 'string', 'max:255'],
            'about' => ['required', 'string', 'max:255'],
        ]);

        $data['role'] = UserRoleEnum::EMPLOYEE->value;
        
        $user->update($data);

        return redirect()
            ->route('index.employees')
            ->with('swalNotification', [
                'title' => __('common.success'),
                'text' => __('common.created'),
                'icon' => 'success',
                'timer' => 5000,
            ]);
    }
}
