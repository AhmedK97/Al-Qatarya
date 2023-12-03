<?php

namespace App\Http\Controllers;

use App\Http\Resources\ServiceAdminResource;
use App\Models\Service;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class IndexServicesAdminController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $services = QueryBuilder::for(Service::class)
            ->allowedFilters([
                AllowedFilter::partial('name'),
                AllowedFilter::partial('company_name'),
                AllowedFilter::partial('lang'),
            ])
            ->orderBy('id', 'desc')
            ->paginate(10)
            ->withQueryString()
            ->through(function (Service $project) {
                return new ServiceAdminResource($project);
            });

        return Inertia::render('Admin/Services/Index', [
            'services' => $services,
            'filters' => $request->all('search'),
            'servicesCountQatarya' => Service::qatarya()->count(),
            'servicesCountOthman' => Service::othman()->count(),
        ]);
    }
}
