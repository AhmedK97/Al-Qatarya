<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Arr;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class ProjectServiceController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, Project $project)
    {
        // $request->dd();
        $data = $request->validate([
            'services.*.id' => 'required|integer|min:0',
            'services.*.price' => 'required|numeric|min:1',
            // 'services.*.quantity' => 'required|numeric|min:1',
            'services.*.details' => 'nullable',
            'extra_services.*.id' => 'nullable|integer|min:0',
            'extra_services.*.name' => 'required|string',
            'extra_services.*.price' => 'nullable|numeric|min:1|required_if:extra_services.*.type,service',
            // 'extra_services.*.quantity' => Rule::requiredIf(function () use ($request) {
            //     return $request->input('extra_services.*.type') === 'service';
            // }) . '|nullable|numeric|min:1',
            'extra_services.*.type' => 'required|string|in:service,worker',
            'extra_services.*.details' => 'nullable',
        ]);
        // extra_services.*.quantity  will be 1 by default
        // services.*.quantity will be 1 by default



        if (!empty($data['services'])) {
            collect($data['services'])->each(function ($serviceData) use ($project) {
                if ($serviceData['details']['originPrice'] == 0) {
                    $serviceData['details'] = Null;
                    // remove originPrice from details
                    // unset($serviceData['details']['originPrice']);
                }
                $service = $serviceData['id'];
                $project->services()->updateExistingPivot($service, [
                    'price' => $serviceData['price'],
                    'quantity' => 1,
                    'details' => json_encode(Arr::get($serviceData, 'details', [])),
                ]);
            });
        }

        if (!empty($data['extra_services'])) {
            $receivedIds = collect($data['extra_services'])
                ->pluck('id')
                ->filter();

            $project
                ->extraServices()
                ->whereNotIn('id', $receivedIds)
                ->delete();

            collect($data['extra_services'])->each(function ($extraServiceData) use ($project) {
                $id = Arr::get($extraServiceData, 'id');
                $project->extraServices()->updateOrCreate(
                    ['id' => $id],
                    [
                        'name' => $extraServiceData['name'],
                        'price' => $extraServiceData['price'],
                        'quantity' => 1,
                        'type' => $extraServiceData['type'], // 'service' or 'employee'
                        'details' => json_encode(Arr::get($extraServiceData, 'details', [])),
                    ],
                );
            });
        } else {
            // $project->extraServices()->delete();
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
