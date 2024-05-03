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

        $blogs = Blog::published()
            ->where('locale', app()->getLocale())
            ->latest()->paginate(10)->through(function (Blog $blog) {
                return new BlogResource($blog);
            });

        return inertia('Blog/Index', [
            'blogs' => $blogs,
        ]);
    }
}
