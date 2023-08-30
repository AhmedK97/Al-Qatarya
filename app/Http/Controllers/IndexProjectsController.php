<?php

namespace App\Http\Controllers;

use App\Http\Resources\IndexProjectResource;
use App\Models\Project;
use Illuminate\Http\Request;

class IndexProjectsController extends Controller
{
    public function __invoke(Request $request)
    {
        $project = Project::all();

        return inertia('Project/Index', [
            'project' => IndexProjectResource::collection($project),
        ]);
    }
}
