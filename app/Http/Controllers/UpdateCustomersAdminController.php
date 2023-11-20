<?php

namespace App\Http\Controllers;

use App\Enums\Blogs\EmployeeStatusEnum;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Enum;

class UpdateCustomersAdminController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, User $user)
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'phone' => ['required', 'numeric', RUle::unique('users', 'phone')->ignore($user->id)],
            'address' => ['required', 'string', 'max:255'],
            'about' => ['required', 'string', 'max:255'],
        ]);

        $user->update($data);

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
