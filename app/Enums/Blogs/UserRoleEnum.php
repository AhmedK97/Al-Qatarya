<?php

namespace App\Enums\Blogs;

enum UserRoleEnum: string
{
    // role: admin, employee, customer
    case ADMIN = 'admin';
    case employee = 'employee';
    case customer = 'customer';

    public static function getValues(): array
    {
        return [
            self::ADMIN => 'admin',
            self::employee => 'employee',
            self::customer => 'customer',
        ];
    }
}
