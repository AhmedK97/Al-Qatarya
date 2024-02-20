<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class getWhatsappClientChatMessages extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $messages = Http::withHeaders([
            'Authorization' => 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbnN0YW5jZU5hbWUiOiJjb2RlY2hhdC1ib3QiLCJhcGlOYW1lIjoid2hhdHNhcHAtYXBpIiwidG9rZW5JZCI6IjM3NTNmNzAwLTNjZGMtNDMxMi1hZGRmLWI0NjA0ZTQ3ZDgwZiIsImlhdCI6MTcwODI4ODkxMiwiZXhwIjoxNzA4Mjg4OTEyLCJzdWIiOiJnLXQifQ.k6foHEseZc14c8j4dUP8BO7nmAgAgnzL6V0COdKD3HQ',
        ])->post('http://localhost:8084/chat/findMessages/codechat-bot', [
            'where' => [
                'keyRemoteJid' => '201122061032@s.whatsapp.net',
            ],
            'offset' => 20,
            'page' => 1,
        ]);

        return $messages->json();
    }
}
