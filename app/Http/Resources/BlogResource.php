<?php

namespace App\Http\Resources;

use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Str;

class BlogResource extends JsonResource
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
            'title' => Str::limit($this->title, 100),
            'slug' => $this->slug,
            'description' => Str::limit($this->description, 300),
            'image' => $this->getFirstMediaUrl(Blog::BLOG_IMAGE) ?? null,
        ];
    }
}
