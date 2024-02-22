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

        $directory = 'whatsappMedia';

        $files = Storage::disk('public')->files($directory);

        $foundFile = collect($files)->first(function ($file) use ($keyId) {
            return basename($file, '.' . pathinfo($file, PATHINFO_EXTENSION)) === $keyId;
        });

        if ($foundFile) {
            return response()->json([
                'file_url' => Storage::disk('public')->url($foundFile),
            ]);
        }

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

        if ($response->status() != 200) {
            return response()->json([
                'message' => 'Failed to retrieve media',
            ], 500);
        }

        $file_extension = explode('/', $response->header('Content-Type'))[1];
        $file_name = $keyId . '.' . $file_extension;
        $fileContent = $response->body();

        if (!Storage::disk('public')->exists($directory)) {
            Storage::disk('public')->makeDirectory($directory);
        }
        Storage::disk('public')->put($directory . '/' . $file_name, $fileContent);

        return response()->json([
            'file_url' => Storage::disk('public')->url($directory . '/' . $file_name),
        ]);
    }
}
