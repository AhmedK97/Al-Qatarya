<?php

namespace App\Http\Controllers;

use App\Enums\Blogs\EmployeeStatusEnum;
use App\Enums\Blogs\UserRoleEnum;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Enum;

class StoreCustomersAdminController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, User $user)
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'phone' => ['required', 'numeric', RUle::unique('users', 'phone')],
            'address' => ['required', 'string', 'max:255'],
            'about' => ['required', 'string', 'max:255'],
        ]);

        $data['role'] = UserRoleEnum::CUSTOMER->value;



        User::create($data + [
            'password' => 'password',
        ]);

        return redirect()
            ->route('index.customers')
            ->with('swalNotification', [
                'title' => __('common.success'),
                'text' => __('common.created'),
                'icon' => 'success',
                'timer' => 5000,
            ]);
    }
}
