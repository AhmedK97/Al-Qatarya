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
        $qatarya = Service::where('company_name', 'qatarya')->get();
        $othman = Service::where('company_name', 'othman')->get();

        
        return Inertia::render('Home', [
            'services_qatarya' => ServiceResource::collection($qatarya),
            'services_othman' => ServiceResource::collection($othman),
            'project' => ShowProjectResource::collection(Project::take(6)->get()),
        ]);
    }
}
