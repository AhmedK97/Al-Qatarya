<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class IndexAdminBlogResource extends JsonResource
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
            'title' => $this->title,
            'image' => $this->getFirstMediaUrl('blog_image') ?? null,
            'status' => $this->status,
            'language' => $this->locale,
            'description' => $this->description,
            'created_at' => $this->created_at->format('Y-m-d '), // '2021-09-01 00:00:00'
        ];
    }
}
