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
     * @var Project $project
     */

    public function __invoke(Request $request)
    {
        // $request->dd();
        $projects = QueryBuilder::for(Project::class)
            ->allowedFilters([
                AllowedFilter::partial('title'),
                AllowedFilter::partial('address'),
                AllowedFilter::partial('status'),
                AllowedFilter::partial('company'),
                AllowedFilter::callback('customer', function ($query, $value) {
                    $query->whereHas('customer', function ($query) use ($value) {
                        $query->where('name', 'like', '%' . $value . '%');
                    });
                }),
                AllowedFilter::callback('employee', function ($query, $value) {
                    $query->whereHas('employee', function ($query) use ($value) {
                        $query->where('name', 'like', '%' . $value . '%');
                    });
                }),
                AllowedFilter::partial('space_area'),
            ])
            ->latest()
            ->with(['employee:id,name', 'customer:id,name'])
            ->orderBy('id', 'desc')
            ->paginate(10)
            ->through(function (Project $project) {
                return new ProjectAdminResource($project);
            });

        return Inertia::render('Admin/Projects/Index', [
            'projects' => $projects,
            'filters' => $request->all(),
            'projectsCount' => Project::count(),
            'customers' => UsersProjectsResource::collection(User::Customers()->get()),
            'employees' => UsersProjectsResource::collection(User::Employees()->get()),
            'services' => ServicesAlqataryaaResource::collection(Service::qatarya()->get()),
        ]);
    }
}
