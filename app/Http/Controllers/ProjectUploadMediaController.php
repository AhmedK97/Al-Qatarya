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

        $fileTypeMappings = [
            'mkv' => Project::PROJECT_VIDEOS,
            'mp4' => Project::PROJECT_VIDEOS,
            'jpeg' => Project::PROJECT_IMAGES,
            'png' => Project::PROJECT_IMAGES,
        ];

        $files = $request->file('files');

        foreach ($files as $file) {
            $extension = $file->getMimeType();

            $extension = str_replace(['image/', 'video/'], '', $extension);

            $fileType = $fileTypeMappings[$extension];

            $mediaCollection = $fileType === Project::PROJECT_VIDEOS ? Project::PROJECT_VIDEOS : Project::PROJECT_IMAGES;

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
