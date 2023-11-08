<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;

class UpdateServicesAdminController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, Service $service)
    {
        $data = $request->validate([
            'name' => 'required|string',
            'company_name' => 'required|string',
            'additional_info' => 'sometimes|array',
            'additional_info.*.title' => 'string',
            'additional_info.*.description' => 'string',
        ]);
        $service->update($data);

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
