<?php

namespace App\Http\Controllers;

use App\Models\WhatsApp;
use Illuminate\Http\Request;

class SendTextMessageController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {

        $info = WhatsApp::chat()->inRandomOrder()->first();

        $header = [
            'Content-Type: application/json',
            'Accept: application/json',
            'Authorization' => $info->token,
            'apikey' => env('GLOBAL_WHATSAPP_API_TOKEN'),
            'groupJid' => env('WHATSAPP_GROUP_JID'),
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

        $httpRequest = HttpRequest('/message/sendText/' . $info->instance_name, 'post', $header, $formData);
    }
}
