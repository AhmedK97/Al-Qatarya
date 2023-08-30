<?php

namespace App\Http\Controllers;

use App\Http\Resources\BlogResource;
use App\Http\Resources\ServiceResource;
use App\Models\Blog;
use App\Models\Service;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        return Inertia::render('Home', [
            'services' => ServiceResource::collection(Service::all()),
            'blogs' => Blog::published()->orderBy('created_at', 'DESC')->paginate(6)->through(function (Blog $blog) {
                return new BlogResource($blog);
            }),
        ]);
    }
}
