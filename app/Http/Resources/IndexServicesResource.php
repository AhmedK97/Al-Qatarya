<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class IndexServicesResource extends JsonResource
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
            'name' => $this->name,
            'slug' => $this->slug, // 'slug' => 'service-name
            'company_name' => $this->company_name,
            'additional_info' => json_decode($this->additional_info),
            'lang' => $this->lang,
            'created_at' => optional($this->created_at)->format('Y-m-d H:i:s'),
            'image' => $this->getFirstMediaUrl('service_main_image') ?? null,
        ];
    }
}
