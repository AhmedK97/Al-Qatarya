<?php

namespace App\Http\Controllers;

use App\Http\Resources\BlogResource;
use App\Models\Blog;
use Illuminate\Http\Request;
use Inertia\Inertia;

class IndexBlogController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        return Inertia::render('Blog/Index', [
            'blogs' => Blog::published()->orderBy('created_at', 'DESC')->paginate(9)->through(function (Blog $blog) {
                return new BlogResource($blog);
            })
        ]);
    }
}
