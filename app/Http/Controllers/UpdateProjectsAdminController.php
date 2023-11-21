<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class UpdateProjectsAdminController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, Project $project)
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
            'notes' => ['nullable', 'string', 'max:255'],
            'services_id' => ['required', 'array'],
            'description' => ['nullable', 'string', 'max:255'],
        ]);


        $project->update(
            [
                'title' => $data['title'],
                'company' => $data['company'],
                'customer_id' => $data['customer_id'],
                'employee_id' => $data['employee_id'],
                'space_area' => $data['space_area'],
                'status' => $data['status'],
                'project_date' => $data['project_date'],
                'address' => $data['address'],
                'notes' => $data['notes'],
                'description' => $data['description'] ?? '',
            ]
        );

        $project->services()->sync($data['services_id']);

        return redirect()
            ->route('index.projects')
            ->with('swalNotification', [
                'title' => __('common.success'),
                'text' => __('common.updated'),
                'icon' => 'success',
                'timer' => 5000,
            ]);

    }
}
