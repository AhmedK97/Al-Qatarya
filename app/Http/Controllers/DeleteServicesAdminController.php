<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;

class DeleteServicesAdminController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, Service $service)
    {
        $service->delete();

        return redirect()
            ->route('index.services')
            ->with('swalNotification', [
                'title' => __('common.success'),
                'text' => __('common.deleted'),
                'icon' => 'success',
                'timer' => 5000,
            ]);
    }
}
