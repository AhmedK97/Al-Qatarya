<?php

namespace App\Enums\Blogs;

enum BlogStatusEnum: string
{
    case PENDING = 'pending';
    case PUBLISHED = 'published';

    public static function getValues(): array
    {
        return [
            self::PENDING->value,
        self::PUBLISHED->value];
    }
}
