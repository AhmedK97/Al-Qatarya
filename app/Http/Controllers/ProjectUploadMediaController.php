<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjectUploadMediaController extends Controller
{
    public function __invoke(Request $request, Project $project)
    {
        $request->validate([
            'files' => 'required|array',
            'files.*' => 'file|mimes:jpeg,png,mkv,mp4|max:51200',
        ]);

        $files = $request->file('files');

        foreach ($files as $file) {
            $extension = mime_content_type($file->getRealPath());

            if (str_contains($extension, 'image')) {
                $mediaCollection = Project::PROJECT_IMAGES;
            } else {
                $mediaCollection = Project::PROJECT_VIDEOS;
            }

            $project->addMedia($file)->toMediaCollection($mediaCollection);
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
