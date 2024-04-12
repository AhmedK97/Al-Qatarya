<?php

namespace App\Http\Controllers;

use App\Models\WhatsApp;
use Illuminate\Http\Request;

class DeleteWhatsAppController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, WhatsApp $whatsApp)
    {

        $instanceInfo = WhatsApp::where('instance_name', $whatsApp->instance_name)->first();



        $route = '/instance/logout/' . $whatsApp->instance_name;

        $header = [
            'Content-Type: application/json',
            'Accept: application/json',
            'apikey' => config('app.global_whats_app_api_token'),
            'groupJid' => config('app.group_jid'),
            'token' => $instanceInfo->token,
        ];

        try {
            $request =  HttpRequest($route, 'DELETE', $header, null);
        } catch (\Exception $e) {
            // return  response()->json([
            //     'message' => 'Failed to logout the user',
            // ], 500);
        }
        // $request =  HttpRequest($route, 'DELETE', $header, null);

        // if ($request->status() != 200) {
        //     return  response()->json([
        //         'message' => 'Failed to logout the user',
        //     ], 500);
        // }

        $route = '/instance/delete/' . $whatsApp->instance_name . '?force=true';

        $header = [
            'Content-Type: application/json',
            'Accept: application/json',
            'apikey' => config('app.global_whats_app_api_token'),
            'groupJid' => config('app.group_jid'),
            'token' => $instanceInfo->token,
        ];

        $formData = [
            'instanceName' => $whatsApp->instance_name,
        ];


        try {
            $request =  HttpRequest($route, 'DELETE', $header, $formData);
        } catch (\Exception $e) {
            // return  response()->json([
            //     'message' => 'Failed to delete the instance',
            // ], 500);
        }
        // $request =  HttpRequest($route, 'DELETE', $header, $formData);
        // $delete = ;
        // if ($request->status() == 200) {
        //     $whatsApp->delete();
        //     return redirect()
        //         ->route('index.whatsapp')
        //         ->with('swalNotification', [
        //             'title' => __('common.success'),
        //             'text' => __('common.deleted'),
        //             'icon' => 'success',
        //             'timer' => 5000,
        //         ]);
        // }

        // delete the instance
        $whatsApp->delete();
        // dd($whatsApp->instance_name);

        // return  response()->json([
        //     'message' => 'Failed to delete the instance',
        // ], 500);
    }
}
