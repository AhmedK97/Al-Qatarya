<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;
use Spatie\Translatable\HasTranslations;

class Project extends Model implements HasMedia
{
    use HasFactory;
    use HasSlug;
    use HasTranslations;
    use InteractsWithMedia;

    public const PROJECT_MAIN_IMAGE = 'project_main_image';

    public const PROJECT_IMAGES = 'project_images';

    public const PROJECT_FILES = 'project_files';

    public const PROJECT_VIDEOS = 'project_videos';

    protected $guarded = [];

    public $translatable = ['title', 'description', 'address'];

    public function getSlugOptions(): SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('title')
            ->saveSlugsTo('slug');
    }

    public function employee()
    {
        return $this->belongsTo(User::class, 'employee_id');
    }

    public function customer()
    {
        return $this->belongsTo(User::class, 'customer_id');
    }

    public function transaction()
    {
        return $this->hasOne(Transaction::class);
    }

    public function getCreatedAtAttribute($value)
    {
        // Convert the timestamp to the desired format
        return \Carbon\Carbon::parse($value)->format('d-m-y / h:i A');
    }

    public function scopeQatarya()
    {
        return $this->where('company', 'qatarya');
    }

    public function scopeOthman()
    {
        return $this->where('company', 'othman');
    }

    public function services()
    {
        return $this->belongsToMany(Service::class, 'project_service')->withPivot('price', 'quantity', 'details')->withTimestamps();
    }

    public function extraServices()
    {
        return $this->hasMany(ExtraService::class);
    }
}
