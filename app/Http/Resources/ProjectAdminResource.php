<?php

namespace App\Http\Resources;

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
            'slug' => $this?->slug,
            'notes' => $this->notes,
            'description' => $this?->description,
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
            'services_id' => $this?->services?->pluck('id'),
            'services_name' => $this?->services?->pluck('name'),
            'created_at' => $this?->created_at,
            'media' => $this?->getMedia('*')->map(function ($item) {
                return [
                    'id' => $item->id,
                    'url' => $item->getFullUrl(),
                    'type' => $item->mime_type,
                ];
            }),
        ];
    }
}
