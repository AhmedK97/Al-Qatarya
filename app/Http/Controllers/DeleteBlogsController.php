<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;

class DeleteBlogsController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, Blog $blog)
    {

        $blog->delete();

        return redirect()
            ->route('index.blogs')
            ->with('swalNotification', [
                'title' => __('common.success'),
                'text' => __('common.deleted'),
                'icon' => 'success',
                'timer' => 5000,
            ]);
    }
}
