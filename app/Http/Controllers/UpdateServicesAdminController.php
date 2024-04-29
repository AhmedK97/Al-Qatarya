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
            // 'company_name' => 'required|string',
            'additional_info' => 'sometimes|array',
            'additional_info.*.title' => 'string',
            'additional_info.*.description' => 'string',
            'files' => ['nullable', 'sometimes', 'image'],
            'lang' => 'required|string',
        ]);

        if ($request->hasFile('files')) {
            $service->clearMediaCollection(Service::SERVICE_MAIN_IMAGE);
            $service->addMediaFromRequest('files')->toMediaCollection(Service::SERVICE_MAIN_IMAGE);
        }

        unset($data['files']);
        // company_name
        $service->update(
            $data + ['company_name' => 'qatarya']
        );

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
