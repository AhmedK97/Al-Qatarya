<?php

namespace App\Enums\Blogs;

enum CompaniesEnum: string
{
    case ALQATARYA = 'qatarya';
    case OTHMAN = 'othman';

    public static function getValues(): array
    {
        return [
            self::ALQATARYA->value,
            self::OTHMAN->value,
        ];
    }
}
