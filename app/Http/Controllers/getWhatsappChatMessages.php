<?php

namespace App\Http\Controllers;

use App\Models\WhatsApp;
use Illuminate\Http\Request;

class getWhatsappChatMessages extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {

        $customerPhone = $request->customerPhone;

        $info = WhatsApp::chat()->inRandomOrder()->first();

        $header = [
            'Content-Type: application/json',
            'Accept: application/json',
            'apikey' => env('GLOBAL_WHATSAPP_API_TOKEN'),
            'groupJid' => env('WHATSAPP_GROUP_JID'),
            'Authorization' => $info->token,
        ];

        $formData =
            [
                'where' => [
                    'keyRemoteJid' => $customerPhone,
                ],
                'offset' => 20,
                'page' => 1,
            ];

        $messages = HttpRequest('/chat/findMessages/' . $info->instance_name, 'post', $header, $formData);

        return $messages->json();
    }
}
