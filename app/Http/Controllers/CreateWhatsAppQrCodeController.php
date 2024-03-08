<?php

namespace App\Http\Controllers;

use App\Models\WhatsApp;
use Illuminate\Http\Request;

class CreateWhatsAppQrCodeController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {

        $fromData = [
            'instanceName' => 'alqatarya' . rand(1, 999999999),
        ];

        $route = '/instance/create';

        $header = [
            'Content-Type: application/json',
            'Accept: application/json',
            'apikey' => env('GLOBAL_WHATSAPP_API_TOKEN'),
            'groupJid' => env('WHATSAPP_GROUP_JID'),
        ];


        $request =  HttpRequest($route, 'POST', $header, $fromData);

        WhatsApp::create(
            [
                'token' => $request->json()['Auth']['token'],
                'instance_name' => $request->json()['name'],
            ]
        );

        $qrCodeRoute = '/instance/connect/' . $request->json()['name'];
        $getQrCode = HttpRequest($qrCodeRoute, 'GET', $header, null); // get the qr code

        return $getQrCode->json()['base64'];
    }
}
