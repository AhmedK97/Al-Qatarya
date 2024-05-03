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

    public function getCreatedAtAttribute($value)
    {
        // Convert the timestamp to the desired format
        return \Carbon\Carbon::parse($value)->format('d-m-y  h:i A');
    }

    public function project()
    {
        return $this->belongsTo(Project::class);
    }
}
