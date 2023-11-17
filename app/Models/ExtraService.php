<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExtraService extends Model
{
    use HasFactory;
    
    protected $guarded = [];

    protected $table = 'extra_services';

    public function project()
    {
        return $this->belongsTo(Project::class);
    }

}
