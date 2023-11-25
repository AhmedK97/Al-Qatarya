<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Arr;
use Illuminate\Http\Request;

class StoreProjectsAdminController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {

        $data = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'company' => ['required', 'string', 'max:255'],
            'customer_id' => ['required', 'integer', 'exists:users,id'],
            'employee_id' => ['required', 'integer', 'exists:users,id'],
            'space_area' => ['required', 'string', 'max:255'],
            'status' => ['required', 'string', 'max:255'],
            'project_date' => ['required', 'date'],
            'address' => ['required', 'string', 'max:255'],
            'notes' => ['nullable', 'string'],
            'services_id' => ['required', 'array'],
            'description' => ['nullable', 'string', 'max:255'],
        ]);

        $project = Project::create(Arr::except($data, 'services_id'));

        $project->services()->attach($data['services_id']);

        return redirect()
            ->route('index.projects')
            ->with('swalNotification', [
                'title' => __('common.success'),
                'text' => __('common.created'),
                'icon' => 'success',
                'timer' => 5000,
            ]);
    }
}
