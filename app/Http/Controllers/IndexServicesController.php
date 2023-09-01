<?php

namespace App\Http\Controllers;

use App\Http\Resources\ShowServiceResource;
use Illuminate\Http\Request;
use App\Models\Service;

class IndexServicesController extends Controller
{
    public function __invoke(Request $request)
    {
        $service = Service::where('slug', 'like', '%'.$request->slug.'%')->firstOrFail();

        return inertia('Service/Index', [
            'service' => ShowServiceResource::make($service),
        ]);
    }
}
