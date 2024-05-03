<?php

namespace App\Http\Controllers;

use App\Http\Resources\IndexAdminBlogResource;
use App\Models\Blog;
use Illuminate\Http\Request;

class IndexBlogsAdminController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $blogs = Blog::orderBy('id', 'desc')
            ->paginate(10)
            ->withQueryString()
            ->through(function (Blog $blog) {
                return new IndexAdminBlogResource($blog);
            });

        return inertia('Admin/Blogs/Index', [
            'blogs' => $blogs,
            'filters' => $request->all('search'),
            'blogsCount' => Blog::count(),
        ]);

    }
}
