<?php

namespace App\Enums\Blogs;

enum PaymentTypeEnum: string
{
    // type: water // extra // main
    case WATER = 'water';
    case EXTRA = 'extra';
    case MAIN = 'main';

    public static function getValues(): array
    {
        return [
            self::WATER->value,
            self::EXTRA->value,
            self::MAIN->value,
        ];
    }
}
