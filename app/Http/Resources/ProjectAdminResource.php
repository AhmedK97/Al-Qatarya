<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

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
            'notes' => Str::limit($this->notes, 100),
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
            'created_at' => $this?->created_at->diffForHumans(),
            // 'media_files' => MediaFilesResource::collection($this->getMedia("*")),
        ];
    }
}
