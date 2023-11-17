<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function customer()
    {
        return $this->belongsTo(User::class, 'customer_id');
    }

    public function employee()
    {
        return $this->belongsTo(User::class, 'employee_id');
    }

    public function services()
    {
        return $this->belongsToMany(Service::class);
    }

    public function payments()
    {
        return $this->hasMany(Payment::class);
    }

    public function project()
    {
        return $this->belongsTo(Project::class);
    }
}
