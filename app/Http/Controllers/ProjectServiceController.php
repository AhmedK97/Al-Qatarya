<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Arr;
class ProjectServiceController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, Project $project)
    {
        $data = $request->validate([
            'services.*.id' => 'required|numeric|min:0',
            'services.*.price' => 'required|numeric|min:0',
            'services.*.quantity' => 'required|integer|min:1',
        ]);


        foreach ($data['services'] as $serviceData) {
            $service = $serviceData['id'];
            $project->services()->updateExistingPivot($service, [
                'price' => $serviceData['price'],
                'quantity' => $serviceData['quantity'],
            ]);
        }

        return redirect()
        ->route('index.transactions')
        ->with('swalNotification', [
            'title' => __('common.success'),
            'text' => __('common.created'),
            'icon' => 'success',
            'timer' => 5000,
        ]);
    }
}
