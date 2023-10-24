<?php

namespace App\Http\Controllers;

use App\Enums\Blogs\EmployeeStatusEnum;
use App\Enums\Blogs\UserRoleEnum;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\Enum;
use Illuminate\Validation\Rule;
class StoreCustomersController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, User $user)
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', Rule::unique('users', 'email')],
            'phone' => ['required', 'numeric', RUle::unique('users', 'phone')],
            'status' => ['required', 'string', 'max:255', new Enum(EmployeeStatusEnum::class)],
            'address' => ['required', 'string', 'max:255'],
            'about' => ['required', 'string', 'max:255'],
            'password' => ['required', 'string', 'min:5'],
        ]);

        $data['role'] = UserRoleEnum::CUSTOMER->value;

        if ($request->has('password')) {
            $data['password'] = bcrypt($request->password);
        }

        User::create($data);

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
