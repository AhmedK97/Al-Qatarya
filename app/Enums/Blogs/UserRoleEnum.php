<?php

namespace App\Enums\Blogs;

enum UserRoleEnum: string
{
    // role: admin, employee, customer
    case ADMIN = 'admin';
    case EMPLOYEE = 'employee';
    case CUSTOMER = 'customer';

    public static function getValues(): array
    {
        return [
            self::ADMIN->value,
            self::EMPLOYEE->value,
            self::CUSTOMER->value,
        ];
    }
}
