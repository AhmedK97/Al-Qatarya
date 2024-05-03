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
        // dd($request->all());
        $request->validate([
            'name' => 'required|string',
            'additional_info' => 'required|array',
            'additional_info.*.title' => 'string|required',
            'additional_info.*.description' => 'string|required',
            'files' => 'required|image',
            'lang' => 'required|string',
        ]);

        $service = Service::create([
            'name' => $request->name,
            'company_name' => 'qatarya',
            'additional_info' => json_encode($request->additional_info),
            'lang' => $request->lang,
        ]);

        if ($request->hasFile('files')) {
            $service->clearMediaCollection(Service::SERVICE_MAIN_IMAGE);
            $service->addMediaFromRequest('files')->toMediaCollection(Service::SERVICE_MAIN_IMAGE);
        }

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
