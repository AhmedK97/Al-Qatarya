<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;


class EmployersController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        // $employers = User::where('role', 'employer')->get();

        $users = QueryBuilder::for(User::class)
            ->allowedFilters([



        return Inertia::render('Admin/Employee/Index', [
            'employers' => $employers,
        ]);
    }
}
