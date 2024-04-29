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
use App\Services\CalculationService;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Inertia\Inertia;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class IndexTransactionsController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request, CalculationService $costCalculationService)
    {
        $transactions = QueryBuilder::for(Transaction::class)
            ->when($request->from && $request->to, function ($query) use ($request) {
                $from = Carbon::createFromFormat('Y-m', $request->from)->startOfMonth();
                $to = Carbon::createFromFormat('Y-m', $request->to)->endOfMonth();
                $query->whereBetween('created_at', [$from, $to]);
                $query->where('status', 'paid');
            })
            ->allowedFilters([
                AllowedFilter::callback('customer_name', function ($query, $value) {
                    $query->whereHas('project', function ($query) use ($value) {
                        $query->whereHas('customer', function ($query) use ($value) {
                            $query->where('name', 'like', '%'.$value.'%');
                        });
                    });
                }),

                AllowedFilter::callback('employee_name', function ($query, $value) {
                    $query->whereHas('project', function ($query) use ($value) {
                        $query->whereHas('employee', function ($query) use ($value) {
                            $query->where('name', 'like', '%'.$value.'%');
                        });
                    });
                }),

                AllowedFilter::callback('phone', function ($query, $value) {
                    $query->whereHas('project', function ($query) use ($value) {
                        $query->whereHas('customer', function ($query) use ($value) {
                            $query->where('phone', 'like', '%'.$value.'%');
                        });
                    });
                }),

                AllowedFilter::callback('address', function ($query, $value) {
                    $query->whereHas('project', function ($query) use ($value) {
                        $query->where('address', 'like', '%'.$value.'%');
                    });
                }),

                AllowedFilter::callback('status', function ($query, $value) {
                    $query->where('status', 'like', '%'.$value.'%');
                }),

                AllowedFilter::callback('project_name', function ($query, $value) {
                    $query->whereHas('project', function ($query) use ($value) {
                        $query->where('title', 'like', '%'.$value.'%');
                    });
                }),
            ])
            ->with('customer', 'employee', 'project')
            ->orderBy('id', 'desc')
            ->paginate(10)
            ->withQueryString()
            ->through(function (Transaction $transaction) {
                return new TransactionsAdminResource($transaction);
            });

        $allServicesProfit = $costCalculationService->calculateAllServicesProfit($transactions);

        $allExtraServicesProfit = $costCalculationService->calculateAllExtraServicesProfit($transactions);

        $allWorkerCost = $costCalculationService->calculateAllWorkerCost($transactions);

        $profits = $allServicesProfit + $allExtraServicesProfit - $allWorkerCost;

        return Inertia::render('Admin/Transactions/Index', [
            'transactions' => $transactions,
            'filters' => $request->all('search'),
            'transactionsCount' => Transaction::count(),
            'customers' => UsersProjectsResource::collection(User::Customers()->get()),
            'employees' => UsersProjectsResource::collection(User::Employees()->get()),
            'services' => ServicesAlqataryaaResource::collection(Service::qatarya()->get()),
            'projects' => ProjectsAlqataryaaResource::collection(Project::qatarya()->get()),
            'profits' => $profits,
            'allServicesProfit' => $allServicesProfit,
            'allExtraServicesProfit' => $allExtraServicesProfit,
            'allWorkerCosts' => $allWorkerCost,
        ]);
    }
}
