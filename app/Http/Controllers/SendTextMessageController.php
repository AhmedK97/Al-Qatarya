<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SendTextMessageController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {

        $token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbnN0YW5jZU5hbWUiOiJjb2RlY2hhdC1ib3QiLCJhcGlOYW1lIjoid2hhdHNhcHAtYXBpIiwidG9rZW5JZCI6IjM3NTNmNzAwLTNjZGMtNDMxMi1hZGRmLWI0NjA0ZTQ3ZDgwZiIsImlhdCI6MTcwODI4ODkxMiwiZXhwIjoxNzA4Mjg4OTEyLCJzdWIiOiJnLXQifQ.k6foHEseZc14c8j4dUP8BO7nmAgAgnzL6V0COdKD3HQ';

        $header = [
            'Content-Type: application/json',
            'Accept: application/json',
            'Authorization' => $token,
        ];

        $message = $request->message;
        $customerPhone = $request->customerPhone;

        $formData =
            [
                'number' => $customerPhone,
                'options' => [
                    'delay' => 1200,
                    'presence' => 'composing',
                ],
                'textMessage' => [
                    'text' => $message,
                ],
            ];

        $httpRequest = HttpRequest('/message/sendText/codechat-bot', 'post', $header, $formData);
    }
}
