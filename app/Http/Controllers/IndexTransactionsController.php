<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProjectsAlqataryaaResource;
use App\Http\Resources\ServicesAlqataryaaResource;
use App\Http\Resources\TransactionsAdminResource;
use App\Http\Resources\UsersProjectsResource;
use App\Models\Project;
use App\Models\Service;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class IndexTransactionsController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $transactions = QueryBuilder::for(Transaction::class)
            ->allowedFilters([
                AllowedFilter::partial('customer.name'),
                AllowedFilter::partial('employee.name'),
                AllowedFilter::partial('customer.phone'),

            ])
            ->with('customer', 'employee', 'payments', 'services', 'project')
            ->orderBy('id', 'desc')
            ->paginate(10)
            ->withQueryString()
            ->through(function (Transaction $transactions) {
                return new TransactionsAdminResource($transactions);
            });

        return Inertia::render('Admin/Transactions/Index', [
            'transactions' => $transactions,
            'filters' => $request->all('search'),
            'transactionsCount' => Transaction::count(),
            'customers' => UsersProjectsResource::collection(User::Customers()->get()),
            'employees' => UsersProjectsResource::collection(User::Employees()->get()),
            'services' => ServicesAlqataryaaResource::collection(Service::qatarya()->get()),
            'projects' => ProjectsAlqataryaaResource::collection(Project::qatarya()->get()),
        ]);
    }
}
