<?php

namespace App\Enums\Blogs;

enum CompaniesEnum: string
{
    case ALQATARYA = 'qatarya';
    case OTHMAN = 'othman';

    static function getValues(): array
    {
        return [
            self::ALQATARYA->value,
            self::OTHMAN->value
        ];
    }
}
