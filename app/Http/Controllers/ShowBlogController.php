<?php

namespace App\Http\Controllers;

use App\Http\Resources\BlogResource;
use App\Http\Resources\IndexBlogResource;
use App\Models\Blog;
use Illuminate\Http\Request;

class ShowBlogController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request )
    {
        $blog = Blog::Published()->where('slug', $request->slug)->firstOrFail();
        // $blogs = Blog::Published()->orderBy('created_at', 'DESC')->paginate(6)->through(function (Blog $blog) {
        //     return new IndexBlogResource($blog);
        // });

        return inertia('Blog/ShowBlog', [
            'blog' => IndexBlogResource::make($blog),
            'blogs' => Blog::published()->orderBy('created_at', 'DESC')->paginate(6)->through(function (Blog $blog) {
                return new BlogResource($blog);
            })
        ]);
        //
    }
}
