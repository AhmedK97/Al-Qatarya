<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class getWhatsappMedia extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke($keyId)
    {

        $response = Http::withHeaders([
            'Content-Type: application/json',
            'Accept: application/json',
            'Authorization' => 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbnN0YW5jZU5hbWUiOiJjb2RlY2hhdC1ib3QiLCJhcGlOYW1lIjoid2hhdHNhcHAtYXBpIiwidG9rZW5JZCI6IjM3NTNmNzAwLTNjZGMtNDMxMi1hZGRmLWI0NjA0ZTQ3ZDgwZiIsImlhdCI6MTcwODI4ODkxMiwiZXhwIjoxNzA4Mjg4OTEyLCJzdWIiOiJnLXQifQ.k6foHEseZc14c8j4dUP8BO7nmAgAgnzL6V0COdKD3HQ',
        ])->post('http://localhost:8084/chat/retrieverMediaMessage/codechat-bot', [
            'keyId' => $keyId,
        ]);

        $finfo = finfo_open(FILEINFO_MIME_TYPE);
        $file_extension = explode('/', $response->header('Content-Type'))[1];
        $file_name = $keyId . '.' . $file_extension;
        $mime_type = finfo_buffer($finfo, $response->body());
        $fileContent = $response->body();

        $tempFile = $this->createTempFile($fileContent);

        return response()->download($tempFile, $file_name, ['Content-Type' => $mime_type]);
    }

    private function createTempFile($content, $prefix = 'media')
    {
        $tempFile = tempnam(sys_get_temp_dir(), $prefix);
        file_put_contents($tempFile, $content);
        return $tempFile;
    }
}
