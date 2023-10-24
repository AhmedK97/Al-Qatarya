<?php

namespace App\Http\Controllers;

use App\Http\Resources\EmployeeResource;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class IndexCustomersController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {

        $customers = QueryBuilder::for(User::class)
            ->allowedFilters([
                AllowedFilter::partial('name'),
                AllowedFilter::partial('email'),
                AllowedFilter::partial('phone'),
                AllowedFilter::partial('status'),
            ])->customers()
            ->orderBy('id', 'desc')
            ->paginate(10)
            ->withQueryString()
            ->through(function (User $user) {
                return new EmployeeResource($user);
            });

        return Inertia::render('Admin/Customers/Index', [
            'customers' => $customers,
            'filters' => $request->all('search'),
            'customersCount' => User::where('role', 'customer')->count(),
        ]);
    }
}
