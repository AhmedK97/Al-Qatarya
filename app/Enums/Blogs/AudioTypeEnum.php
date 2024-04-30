<?php

namespace App\Enums\Blogs;

enum AudioTypeEnum: string
{
    case MP3 = 'audio/mpeg';
    case WAV = 'audio/wav';
    case OGG = 'audio/ogg';
    case MIDI = 'audio/midi';
    case WEBM = 'audio/webm';
    case _3GPP = 'audio/3gpp';
    case _3GPP2 = 'audio/3gpp2';
    case AAC = 'audio/aac';
    case X_AAC = 'audio/x-aac';
    case X_M4A = 'audio/x-m4a';
    case X_WAV = 'audio/x-wav';
    case X_MS_WMA = 'audio/x-ms-wma';
    case X_MS_WAX = 'audio/x-ms-wax';
    case X_MS_WMV = 'audio/x-ms-wmv';
    case X_MS_WVX = 'audio/x-ms-wvx';
    case X_MS_WMZ = 'audio/x-ms-wmz';
    case X_MS_WMD = 'audio/x-ms-wmd';
    case X_MATROSKA = 'audio/x-matroska';
    case X_PN_REALAUDIO = 'audio/x-pn-realaudio';

    public static function getMimeTypes(): array
    {
        return [
            self::MP3->value,
            self::WAV->value,
            self::OGG->value,
            self::MIDI->value,
            self::WEBM->value,
            self::_3GPP->value,
            self::_3GPP2->value,
            self::AAC->value,
            self::X_AAC->value,
            self::X_M4A->value,
            self::X_WAV->value,
            self::X_MS_WMA->value,
            self::X_MS_WAX->value,
            self::X_MS_WMV->value,
            self::X_MS_WVX->value,
            self::X_MS_WMZ->value,
            self::X_MS_WMD->value,
            self::X_MATROSKA->value,
            self::X_PN_REALAUDIO->value,
        ];
    }
}
