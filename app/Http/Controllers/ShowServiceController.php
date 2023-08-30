<?php

namespace App\Http\Controllers;

use App\Http\Resources\BlogResource;
use App\Http\Resources\ShowServiceResource;
use App\Models\Blog;
use App\Models\Service;
use Illuminate\Http\Request;

class ShowServiceController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $service = Service::where('slug', 'like', '%'.$request->slug.'%')->firstOrFail();

        return inertia('Service/Index', [
            'service' => ShowServiceResource::make($service),
            'blogs' => Blog::published()->orderBy('created_at', 'DESC')->paginate(6)->through(function (Blog $blog) {
                return new BlogResource($blog);
            }),
        ]);
    }
}
