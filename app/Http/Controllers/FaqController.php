<?php

namespace App\Http\Controllers;

use App\Models\FAQ;
use Illuminate\Http\Request;

class FaqController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        return inertia('Faq/Index' , [
            'faqs' => FAQ::Where('locale', currentLocale())->get(),
        ]);
    }
}
