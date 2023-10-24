<?php

namespace App\Enums\Blogs;

enum EmployeeStatusEnum: string
{
    // active // inactive
    case ACTIVE = "Active";
    case INACTIVE = "Inactive";

    public static function getValues(): array
    {
        return [
           self::ACTIVE,
           self::INACTIVE
        ];
    }
}
