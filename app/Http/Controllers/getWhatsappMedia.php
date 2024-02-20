<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class getWhatsappMedia extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {

        $response = Http::withHeaders([
            'Content-Type: application/json',
            'Accept: application/json',
            'Authorization' => 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbnN0YW5jZU5hbWUiOiJjb2RlY2hhdC1ib3QiLCJhcGlOYW1lIjoid2hhdHNhcHAtYXBpIiwidG9rZW5JZCI6IjM3NTNmNzAwLTNjZGMtNDMxMi1hZGRmLWI0NjA0ZTQ3ZDgwZiIsImlhdCI6MTcwODI4ODkxMiwiZXhwIjoxNzA4Mjg4OTEyLCJzdWIiOiJnLXQifQ.k6foHEseZc14c8j4dUP8BO7nmAgAgnzL6V0COdKD3HQ',
        ])->post('http://localhost:8084/chat/retrieverMediaMessage/codechat-bot', [
            'keyId' => '3A044DB3CE5FBA2B15CC',
        ]);

        // Check if the request was successful
        if ($response->successful()) {
            // Get the content from the response
            $content = $response->body();

            // Set the appropriate headers for downloading
            $headers = [
                'Content-Type' => 'application/octet-stream',
                'Content-Disposition' => 'attachment; filename="media_filename.ext"',
            ];

            // Use the response() helper to create a download response

            return response($content, 200, $headers);
        } else {
            // Handle the case where the API request was not successful
            return response('Failed to download media', $response->status());
        }
    }
}
