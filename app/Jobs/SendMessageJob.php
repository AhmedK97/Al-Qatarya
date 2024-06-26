<?php

namespace App\Jobs;

use App\Models\WhatsApp;
use App\Models\WhatsAppAds;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;

class SendMessageJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    protected $numbers;

    protected $message;

    protected $filePath;

    protected $matchingType;

    protected $fileName;

    protected $info;

    public function __construct()
    {
        $this->numbers = [];
        $this->message = '';
        $this->filePath = '';
        $this->matchingType = '';
        $this->fileName = '';
        $this->info = '';
    }

    /**
     * Execute the job.
     */
    public function handle()
    {
        $whatsAppData = WhatsAppAds::where('status', 'pending')->get();
        // WhatsAppAds::all()->delete();
        // $whatsAppNumbers = $whatsAppData->pluck('number');
        $senderWhatsapp = WhatsApp::ads()->where('status', 'active')->first();

        // foreach ($whatsAppData as $data) {
        //     $this->message = $data->message;
        //     $this->filePath = $data->file_path ? Storage::disk('public')->url($data->file_path) : '';
        //     // dd(Storage::disk('public')->url($data->file_path));
        //     $this->matchingType = $data->file_type;
        // $this->fileName = basename($data->file_path);
        //     // remove any spaces from the file name
        //     $this->fileName = preg_replace('/\s+/', '', basename($data->file_path));
        // }

        // dd($this->filePath);
        foreach ($whatsAppData as $data) {
            sleep(rand(5, 10));
            $filePath = $data->file_path ? Storage::disk('public')->url($data->file_path) : '';
            $fileName = basename($data->file_path);

            if ($filePath) {
                $formData = [
                    'number' => $data->number.'@s.whatsapp.net',
                    'mediatype' => $data->file_type,
                ];

                $httpRequest = Http::withHeaders([
                    'accept' => 'application/json',
                    'Authorization' => $senderWhatsapp->token,
                    'apikey' => config('app.global_whats_app_api_token'),
                    'groupJid' => config('app.group_jid'),
                ])
                    ->attach('attachment', file_get_contents($filePath), $fileName)
                    ->post(config('app.whats_app_url').'/message/sendMediaFile/'.$senderWhatsapp->instance_name, $formData);

                return;
            }

            $header = ['Content-Type: application/json', 'Accept: application/json', 'Authorization' => $senderWhatsapp->token, 'apikey' => config('app.global_whats_app_api_token'), 'groupJid' => config('app.group_jid')];

            $formData = [
                'number' => $data->number.'@s.whatsapp.net',
                'options' => [
                    'delay' => 1200,
                    'presence' => 'composing',
                ],
                'textMessage' => [
                    'text' => $data->message,
                ],
            ];

            $httpRequest = HttpRequest('/message/sendText/'.$senderWhatsapp->instance_name, 'post', $header, $formData);

            $this->saveData($data->number, $data->message, $filePath, $httpRequest);
        }
    }

    public function saveData($number, $message, $filePath, $httpRequest)
    {
        WhatsAppAds::where('number', $number)
            ->update([
                'status' => $httpRequest->successful() ? 'sent' : 'failed',
                'created_at' => now(),
            ]);
    }
}
