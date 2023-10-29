<?php

namespace App\Http\Resources;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProjectAdminResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this?->id,
            'title' => $this?->title,
            'notes' => $this?->notes,
            'project_date' => $this?->project_date,
            'cost' => $this?->cost,
            'status' => $this?->status,
            'company' => $this?->company,
            'customer_id' => $this?->customer?->id,
            'employee_id' => $this?->employee?->id,
            'customer_name' => $this?->customer?->name,
            'employee_name' => $this?->employee?->name,
            'space_area' => $this?->space_area,
            'address' => $this?->address,
            'customers' => UsersProjectsResource::collection(User::Customers()->get()),
            'employees' => UsersProjectsResource::collection(User::Employees()->get()),
            'created_at' => $this?->created_at->diffForHumans(),
        ];
    }
}
