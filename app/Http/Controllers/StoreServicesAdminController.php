<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;

class StoreServicesAdminController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'company_name' => 'required|string',
            'additional_info' => 'sometimes|array',
            'additional_info.*.title' => 'string',
            'additional_info.*.description' => 'string',
        ]);

        Service::create([
            'name' => $request->name,
            'company_name' => $request->company_name,
            'additional_info' => json_encode($request->additional_info),
        ]);

        return redirect()
            ->route('index.services')
            ->with('swalNotification', [
                'title' => __('common.success'),
                'text' => __('common.created'),
                'icon' => 'success',
                'timer' => 5000,
            ]);
    }
}
