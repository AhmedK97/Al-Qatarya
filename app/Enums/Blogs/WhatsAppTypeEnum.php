<?php

namespace App\Enums\Blogs;

enum WhatsAppTypeEnum: string
{
    case ADS = 'ads';
    case CHAT = 'chat';


    public static function getValues(): array
    {
        return [
            self::ADS,
            self::CHAT,
        ];
    }
}
