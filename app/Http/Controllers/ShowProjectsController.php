<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ShowProjectsController extends Controller
{
    public function __invoke(Request $request)
    {
        return inertia('Project/Show');

    }
}
