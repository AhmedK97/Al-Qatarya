<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
 

class IndexContactUsController extends Controller
{
    public function __invoke(Request $request)
    {
        return inertia('ContactUs');
    }
}
