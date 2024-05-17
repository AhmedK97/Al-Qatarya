<?php

namespace App\Http\Controllers;

use App\Enums\Blogs\CompaniesEnum;
use App\Enums\Blogs\ProjectStatusEnum;
use App\Models\Project;
use App\Models\Service;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function __invoke(Request $request)
    {
        $customersCount = User::where('role', 'customer')->count();

        $employeesCount = User::where('role', 'employee')->count();

        $allProjectCount = Project::count();

        $pendingProjectCount = Project::where('status', ProjectStatusEnum::PENDING)->count();

        $finishedProjectCount = Project::where('status', ProjectStatusEnum::FINISHED)->count();

        $inProgressProjectCount = Project::where('status', ProjectStatusEnum::IN_PROGRESS)->count();

        $canceledProjectCount = Project::where('status', ProjectStatusEnum::CANCELED)->count();

        $serviceAlqataryaProjectCount = Service::where('company_name', CompaniesEnum::ALQATARYA)->count();

        $serviceOthmanProjectCount = Service::where('company_name', CompaniesEnum::OTHMAN)->count();

        return Inertia::render('Admin/Dashboard', [
            // 'customersCount' => $customersCount,
            // 'employeesCount' => $employeesCount,
            // 'allProjectCount' => $allProjectCount,
            // 'pendingProjectCount' => $pendingProjectCount,
            // 'finishedProjectCount' => $finishedProjectCount,
            // 'inProgressProjectCount' => $inProgressProjectCount,
            // 'canceledProjectCount' => $canceledProjectCount,
            // 'serviceAlqataryaProjectCount' => $serviceAlqataryaProjectCount,
            // 'serviceOthmanProjectCount' => $serviceOthmanProjectCount,
        ]);
    }
}
