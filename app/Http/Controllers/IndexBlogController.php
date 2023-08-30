<?php

namespace App\Http\Controllers;

use App\Http\Resources\BlogResource;
use App\Models\Blog;
use Illuminate\Http\Request;

class IndexBlogController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        return inertia('Blog/Index', [
            'blogs' => Blog::published()->orderBy('created_at', 'DESC')->paginate(9)->through(function (Blog $blog) {
                return new BlogResource($blog);
            }),
        ]);
    }
}
