<?php

namespace App\Http\Controllers;

use App\Http\Resources\ShowProjectResource;
use App\Models\Project;
use Illuminate\Http\Request;

class ShowProjectsController extends Controller
{
    public function __invoke(Request $request)
    {
        $project = Project::where('slug', $request->slug)->firstOrFail();

        return inertia('Project/Show', [
            'project' => ShowProjectResource::make($project),
        ]);
    }
}
