<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WhatsAppAds extends Model
{
    use HasFactory;

    protected $table = 'whatsapp_ads';

    protected $fillable = [
        'number',
        'status',
        'file_path',
        'file_type',
        'message',
    ];
}
