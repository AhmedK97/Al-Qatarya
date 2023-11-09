<?php

namespace App\Http\Controllers;

use App\Http\Resources\IndexServicesResource;
use App\Http\Resources\ShowServiceResource;
use App\Models\Service;
use Illuminate\Http\Request;

class IndexServicesController extends Controller
{
    public function __invoke(Request $request)
    {
        $lang = app()->getLocale();

        $service = Service::where('lang', 'like', '%' . $lang . '%')->get();

        return inertia('Service/Index', [
            'service' => IndexServicesResource::collection($service),
        ]);
    }
}
