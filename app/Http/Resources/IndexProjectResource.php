<?php

namespace App\Http\Resources;

use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class IndexProjectResource extends JsonResource
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
<<<<<<< HEAD
            'image' => $this->getFirstMediaUrl(Project::PROJECT_IMAGE) ?? null,
=======
            'main_image' => $this->getFirstMediaUrl(Project::PROJECT_MAIN_IMAGE) ?? null,
>>>>>>> new-feature
            'agent' => $this->agent,
            'address' => $this->address,
            'slug' => $this->slug,
        ];
    }
}
