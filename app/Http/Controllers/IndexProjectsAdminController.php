<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProjectAdminResource;
use App\Http\Resources\ServicesAlqataryaaResource;
use App\Http\Resources\UsersProjectsResource;
use App\Models\Project;
use App\Models\Service;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class IndexProjectsAdminController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $projects = QueryBuilder::for(Project::class)
            ->allowedFilters([
                AllowedFilter::partial('name'),
                AllowedFilter::partial('notes'),
                AllowedFilter::partial('cost'),
                AllowedFilter::partial('status'),
                AllowedFilter::partial('company'),
                AllowedFilter::partial('customer'),
                AllowedFilter::partial('employee'),
                AllowedFilter::partial('space_area'),
            ])
            ->with(['employee:id,name', 'customer:id,name'])
            ->orderBy('id', 'desc')
            ->paginate(10)
            ->withQueryString()
            ->through(function (Project $project) {
                return new ProjectAdminResource($project);
            });

        return Inertia::render('Admin/Projects/Index', [
            'projects' => $projects,
            'filters' => $request->all('search'),
            'projectsCount' => Project::count(),
            'customers' => UsersProjectsResource::collection(User::Customers()->get()),
            'employees' => UsersProjectsResource::collection(User::Employees()->get()),
            'services' => ServicesAlqataryaaResource::collection(Service::qatarya()->get()),
        ]);
    }
}
