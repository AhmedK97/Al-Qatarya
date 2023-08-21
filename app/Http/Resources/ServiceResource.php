<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ServiceResource extends JsonResource
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
            'name' => $this->getTranslation('name', currentLocale()),
            'slug' => $this->slug,
            'main_image' => $this->getFirstMediaUrl('services_main_image') ?? null,
            'name' => $this->getTranslation('name', currentLocale()),
        ];
    }
}
