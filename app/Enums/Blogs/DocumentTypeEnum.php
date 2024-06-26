<?php

namespace App\Enums\Blogs;

enum DocumentTypeEnum: string
{
    case PDF = 'application/pdf';
    case DOC = 'application/msword';
    case DOCX = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
    case XLS = 'application/vnd.ms-excel';
    case XLSX = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
    case PPT = 'application/vnd.ms-powerpoint';
    case PPTX = 'application/vnd.openxmlformats-officedocument.presentationml.presentation';

    public static function getMimeTypes(): array
    {
        return [
            self::PDF->value,
            self::DOC->value,
            self::DOCX->value,
            self::XLS->value,
            self::XLSX->value,
            self::PPT->value,
            self::PPTX->value,
        ];
    }
}
