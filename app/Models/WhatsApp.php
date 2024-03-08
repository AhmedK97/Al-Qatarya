<?php

namespace App\Models;

use App\Enums\Blogs\WhatsAppTypeEnum;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WhatsApp extends Model
{
    use HasFactory;

    protected $table = 'whatsapp';

    protected $fillable = [
        'instance_name',
        'token',
        'Status',
        'type',
        'ownerJid'
    ];

    // where type ads
    public function scopeAds($query)
    {
        return $query->where('type', WhatsAppTypeEnum::ADS);
    }

    // chat
    public function scopeChat($query)
    {
        return $query->where('type', WhatsAppTypeEnum::CHAT);
    }
}
