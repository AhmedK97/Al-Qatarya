<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjectUploadMediaController extends Controller
{
    public function __invoke(Request $request, Project $project)
    {
        $request->validate([
            'files' => 'required|array|max:5',
            'files.*' => 'file|mimes:jpeg,png,pdf,mvk,mp4',
        ]);

        $files = $request->file('files');
        foreach ($files as $file) {
            $project->addMedia($file)->toMediaCollection(Project::PROJECT_IMAGES);
        }

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
