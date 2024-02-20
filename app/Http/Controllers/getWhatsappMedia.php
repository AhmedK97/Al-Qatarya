<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;

class getWhatsappMedia extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke($keyId)
    {

        $token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbnN0YW5jZU5hbWUiOiJjb2RlY2hhdC1ib3QiLCJhcGlOYW1lIjoid2hhdHNhcHAtYXBpIiwidG9rZW5JZCI6IjM3NTNmNzAwLTNjZGMtNDMxMi1hZGRmLWI0NjA0ZTQ3ZDgwZiIsImlhdCI6MTcwODI4ODkxMiwiZXhwIjoxNzA4Mjg4OTEyLCJzdWIiOiJnLXQifQ.k6foHEseZc14c8j4dUP8BO7nmAgAgnzL6V0COdKD3HQ';

        $header = [
            'Content-Type: application/json',
            'Accept: application/json',
            'Authorization' => $token,
        ];

        $formData = [
            'keyId' => $keyId,
        ];

        $response = HttpRequest('/chat/retrieverMediaMessage/codechat-bot', 'post', $header, $formData);

        // $finfo = finfo_open(FILEINFO_MIME_TYPE);
        $file_extension = explode('/', $response->header('Content-Type'))[1];
        $file_name = $keyId . '.' . $file_extension;
        // $mime_type = finfo_buffer($finfo, $response->body());
        $fileContent = $response->body();


        Storage::disk('public')->put($file_name, $fileContent);

        $directory = 'whatsappMedia';
        // create whatsappMedia directory if not exist
        if (!Storage::disk('public')->exists($directory)) {
            // If the directory doesn't exist, create it
            Storage::disk('public')->makeDirectory($directory);
        }
        // Get the path of the stored file
        Storage::disk('public')->put($directory . '/' . $file_name, $fileContent);


        // return response()->download($filePath, $file_name, ['Content-Type' => $mime_type]);
    }
}
