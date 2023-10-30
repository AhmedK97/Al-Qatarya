<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjectUploadMediaController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request , Project $project)
    {
        dd($request->all());
        // media (image // video // audio // pdf )
        $data = $request->validate([
            'video' => 'nullable|mimes:mp4,mov,ogg,qt',
            'image' => 'nullable|mimes:jpeg,png,jpg,gif,svg',
            'audio' => 'nullable|mimes:mpga,wav',
            'pdf' => 'nullable|mimes:pdf',
        ]);

    }
}
