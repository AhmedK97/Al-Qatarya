<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Spatie\Sluggable\SlugOptions;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\Sluggable\HasSlug;

class Blog extends Model implements HasMedia
{
    use HasFactory;
     use HasSlug;
    use InteractsWithMedia;



    protected $guarded = [];

    public function getSlugOptions(): SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('title')
            ->saveSlugsTo('slug');

    }

    public function scopePublished($query)
    {
        return $query->where('status', 'published')->where('locale', currentLocale());
    }
}
