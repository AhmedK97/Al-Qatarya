<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class IndexBlogResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // dd($this->getFirstMediaUrl('blog_image'));
        return [
            'id' => $this->id,
            'title' => $this->title,
            'seo_title' => $this->seo_title,
            'seo_description' => $this->seo_description,
            'seo_keywords' => $this->seo_keywords,
            'description' => $this->description,
            'image' => $this->getFirstMediaUrl('blog_image') ?? null,
            'slug' => $this->slug,
            'local' => $this->local,
        ];
    }
}
