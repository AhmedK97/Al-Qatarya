<?php

namespace App\Http\Controllers;

use App\Exports\CustomersExport;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class ExportCustomersAdminController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $date = date('Y-m-d H:i:s');

        return Excel::download(new CustomersExport, "user-{$date}.xlsx");
    }
}
