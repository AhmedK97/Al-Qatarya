<?php

namespace App\Http\Controllers;

use App\Models\WhatsApp;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class getWhatsappMedia extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {

        $keyId = $request->keyId;
        $customerPhone = $request->customerPhone;

        $directory = 'whatsappMedia/' . $customerPhone;

        $files = Storage::disk('public')->files($directory);

        $foundFile = collect($files)->first(function ($file) use ($keyId) {
            return basename($file, '.' . pathinfo($file, PATHINFO_EXTENSION)) === $keyId;
        });

        if ($foundFile) {
            return response()->json([
                'file_url' => Storage::disk('public')->url($foundFile),
            ]);
        }

        $info = WhatsApp::chat()->inRandomOrder()->first();

        $header = [
            'Content-Type: application/json',
            'Accept: application/json',
            'Authorization' =>  $info->token,
            'apikey' => config('app.global_whats_app_api_token'),
            'groupJid' => config('app.group_jid'),
        ];

        $formData = [
            'keyId' => $keyId,
        ];

        $response = HttpRequest('/chat/retrieverMediaMessage/' . $info->instance_name, 'post', $header, $formData);

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
