<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;

class StoreBlogsController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'status' => 'required',
            'language' => 'required',
            'files' => 'required|file|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $blog = Blog::create([
            'title' => $request->title,
            'description' => $request->description,
            'status' => $request->status,
            'locale' => $request->language,
        ]);

        $blog->addMedia($request->file('files'))->toMediaCollection('blog_image');

        return redirect()
            ->route('index.blogs')
            ->with('swalNotification', [
                'title' => __('common.success'),
                'text' => __('common.created'),
                'icon' => 'success',
                'timer' => 5000,
            ]);
    }
}
