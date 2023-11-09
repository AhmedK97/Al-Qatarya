<?php

namespace App\Http\Resources;

use App\Models\Service;
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
            'name' => $this->name,
            'slug' => $this->slug,
            // 'body' => $this->getTranslation('body', app()->getLocale()),
            // 'seo_title' => $this->getTranslation('seo_title', app()->getLocale()),
            // 'seo_description' => $this->getTranslation('seo_description', app()->getLocale()),
            // 'seo_keywords' => $this->getTranslation('seo_keywords', app()->getLocale()),
            // 'images' => $mediaUrls ?? null,
            'additional_info' => json_decode($this->additional_info) ?? null,

            'main_image' => $this->getFirstMediaUrl(Service::SERVICE_MAIN_IMAGE) ?? null,
        ];
    }
}
