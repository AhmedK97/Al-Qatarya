<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class DeleteProjectsAdminController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, Project $project)
    {
        $project->extraServices()->delete();

        $project->services()->detach();

        $project->transaction()->delete();

        $project->delete();

        return redirect()
            ->route('index.projects')
            ->with('swalNotification', [
                'title' => __('common.success'),
                'text' => __('common.deleted'),
                'icon' => 'success',
                'timer' => 5000,
            ]);
    }
}
