<?php

namespace App\Http\Resources;

use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ShowProjectResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'slug' => $this->slug,
            'title' => $this->title,
            'description' => $this->description,
            'main_image' => $this->getFirstMediaUrl(Project::PROJECT_IMAGES) ?? null,
            'images' => $this->getMedia(Project::PROJECT_IMAGES)->map(function ($item) {
                return $item->getFullUrl();
            }),
            'videos' => $this->getMedia(Project::PROJECT_VIDEOS)->map(function ($item) {
                return $item->getFullUrl();
            }),
            'agent' => $this->customer->name,
            'address' => $this->address,
            'date' => $this->created_at->format('d/m/Y'),
            'space_area' => $this->space_area,
        ];
    }
}
