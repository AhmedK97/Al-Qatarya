<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CreateWhatsAppQrCodeController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $fromData = [
            'instanceName' => 'alqatarya'.rand(1, 999999999),
        ];

        $route = '/instance/create';

        $header = [
            'Content-Type: application/json',
            'Accept: application/json',
            'apikey' => config('app.global_whats_app_api_token'),
            'groupJid' => config('app.group_jid'),
        ];

        $request = HttpRequest($route, 'POST', $header, $fromData);

        $qrCodeRoute = '/instance/connect/'.$request->json()['name'];
        $getQrCode = HttpRequest($qrCodeRoute, 'GET', $header, null); // get the qr code

        return $getQrCode->json()['base64'];
    }
}
