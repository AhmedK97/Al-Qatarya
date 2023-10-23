<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class EmployersController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {

        $employees = QueryBuilder::for(User::class)
            ->allowedFilters([
               AllowedFilter::partial('name'),
               AllowedFilter::partial('email'),
               AllowedFilter::partial('phone'),
            ])->where('role', 'employee')
            ->orderBy('id','desc')
            ->paginate(10);


        return Inertia::render('Admin/Employee/Index', [
            'employees' => $employees,
            'filters' => $request->all('search'),
            'employeesCount' => User::where('role', 'employee')->count(),
        ]);
    }
}
