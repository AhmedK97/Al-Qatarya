<?php

namespace App\Enums\Blogs;

enum ProjectStatusEnum: string
{
    // pending', 'in_progress', 'finished
    case PENDING = 'pending';
    case IN_PROGRESS = 'in_progress';
    case FINISHED = 'finished';
    case CANCELED = 'canceled';

    static function getValues(): array {
        return [
            self::PENDING->value,
            self::IN_PROGRESS->value,
            self::FINISHED->value,
            self::CANCELED->value,
        ];
    }



}
