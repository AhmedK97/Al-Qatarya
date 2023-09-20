<?php

namespace App\Http\Controllers;

use App\Http\Resources\ShowServiceResource;
use App\Models\Service;
use Illuminate\Http\Request;

class aboutController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $services = Service::all();

        return inertia('About/Index', [
            'services' => ShowServiceResource::collection($services),
        ]);
    }
}
