<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjectUploadMediaController extends Controller
{
    public function __invoke(Request $request, Project $project)
    {
        $request->validate([
            'files' => 'required',
        ]);

        $file = $request->file('files');
        $project->addMedia($file)->toMediaCollection(Project::PROJECT_FILES);

        return redirect()
            ->route('index.projects')
            ->with('swalNotification', [
                'title' => __('common.success'),
                'text' => __('common.created'),
                'icon' => 'success',
                'timer' => 5000,
            ]);
    }
}
