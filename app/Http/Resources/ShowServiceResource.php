<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ShowServiceResource extends JsonResource
{
    public function toArray(Request $request)
    {
        // get media spatie
        // dd($this->getMedia("services"));
        $mediaCollection = $this->getMedia('services');

        $mediaUrls = [];

        foreach ($mediaCollection as $media) {
            $mediaUrls[] = $media->getUrl();
        }

        return [
            'id' => $this->id,
            'name' => $this->getTranslation('name', app()->getLocale()),
            'slug' => $this->slug,
            'body' => $this->getTranslation('body', app()->getLocale()),
            'seo_title' => $this->getTranslation('seo_title', app()->getLocale()),
            'seo_description' => $this->getTranslation('seo_description', app()->getLocale()),
            'seo_keywords' => $this->getTranslation('seo_keywords', app()->getLocale()),
            'images' => $mediaUrls ?? null,
            'main_image' => $this->getFirstMediaUrl('services_main_image') ?? null,
        ];
    }
}
