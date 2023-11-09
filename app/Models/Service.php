<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class Service extends Model implements HasMedia
{
    use HasSlug;
    use HasFactory;
    use InteractsWithMedia;

    public const SERVICE_MAIN_IMAGE = 'service_main_image';

    protected $guarded = [];

    public function getSlugOptions(): SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('name')
            ->saveSlugsTo('slug');
    }

    public function scopeQatarya()
    {
        return $this->where('company_name', 'qatarya');
    }
    public function scopeOthman()
    {
        return $this->where('company_name', 'othman');
    }
}
