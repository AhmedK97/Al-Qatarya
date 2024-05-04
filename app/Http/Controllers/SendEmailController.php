<?php

namespace App\Http\Controllers;

use App\Models\Service;
use App\Models\WhatsApp;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class SendEmailController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'phone' => 'required|numeric',
            'subject' => 'required|string',
            'service_id' => 'required|integer',
            'message' => 'required|string',
            'file' => 'nullable|file|image|mimes:jpeg,png,jpg|max:2048',
        ]);

        // send whatsapp message
        $info = WhatsApp::chat()->inRandomOrder()->whereWhatsappStatus('ONLINE')->first()
        $nubmer = WhatsApp::select('ownerJid')->whereNotNull('ownerJid')->whereStatus('active')->first();
        $nubmer = explode('@', $nubmer->ownerJid)[0];
        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $fileContents = file_get_contents($file->getRealPath());
            $fileExtension = $file->getClientOriginalExtension();

            $formData = [
                'number' => $nubmer,
                'mediatype' => 'image',
            ];

            Http::withHeaders([
                'accept' => 'application/json',
                'Authorization' => $info->token,
                'apikey' => config('app.global_whats_app_api_token'),
                'groupJid' => config('app.group_jid'),
            ])
                ->attach('attachment', $fileContents, 'attachment.'.$fileExtension)
                ->post(config('app.whats_app_url').'/message/sendMediaFile/'.$info->instance_name, $formData);

        }

        $formData = [
            'number' => $nubmer,
            'mediatype' => 'text',
            'message' => $request->message,
        ];

        $header = [
            'Content-Type: application/json',
            'Accept: application/json',
            'Authorization' => $info->token,
            'apikey' => config('app.global_whats_app_api_token'),
            'groupJid' => config('app.group_jid'),
        ];

        $serviceName = Service::find($request->service_id)->name;
        // $message = 'You have received a new email from ' . $request->name . ' (' . $request->email . ')';

        $formData =
        [
            'number' => $nubmer,
            'options' => [
                'delay' => 1200,
                'presence' => 'composing',
            ],
            'textMessage' => [
                'text' => $request->message.' الخدمة: '.$serviceName.' الهاتف: '.$request->phone.' الاسم: '.$request->name.' المحتوى: '.$request->subject,
            ],
        ];

        $httpRequest = HttpRequest('/message/sendText/'.$info->instance_name, 'post', $header, $formData);

        return redirect()
            ->route('show.contact')
            ->with('swalNotification', [
                'title' => __('common.success'),
                'text' => __('common.updated'),
                'icon' => 'success',
                'timer' => 5000,
            ]);

    }
}
