<?php

namespace App\Http\Controllers;

use App\Http\Resources\ServiceResource;
use App\Http\Resources\ShowProjectResource;
use App\Models\Project;
use App\Models\Service;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        return Inertia::render('Home', [
            'services' => ServiceResource::collection(Service::all()),
            'project' => ShowProjectResource::collection(Project::take(6)->get()),
        ]);
    }
}
