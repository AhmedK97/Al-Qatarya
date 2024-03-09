<?php

namespace App\Jobs;

use App\Enums\Blogs\DocumentTypeEnum;
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
        $whatsAppNumbers = $whatsAppData->pluck('number');

        $this->info = WhatsApp::ads()->inRandomOrder()->first();

        foreach ($whatsAppData as $data) {
            $this->message = $data->message;
            $this->filePath = $data->file_path ? Storage::disk('public')->url($data->file_path) : '';
            $this->matchingType = $data->file_type;
            // $this->fileName = basename($data->file_path);
            // remove any spaces from the file name
            $this->fileName = preg_replace('/\s+/', '', basename($data->file_path));
        }

        // dd($this->filePath);
        foreach ($whatsAppNumbers as $number) {
            sleep(rand(5, 10));
            if ($this->filePath) {
                $formData = [
                    'number' => $number . '@s.whatsapp.net',
                    'mediatype' => $this->matchingType,
                ];

                $httpRequest = Http::withHeaders([
                    'accept' => 'application/json',
                    'Authorization' => $this->info->token,
                    'apikey' => env('GLOBAL_WHATSAPP_API_TOKEN'),
                    'groupJid' => env('WHATSAPP_GROUP_JID'),
                ])
                    ->attach('attachment', $this->filePath, $this->fileName)
                    ->post(env('WHATSAPP_API_URL') . '/message/sendMediaFile/' . $this->info->instance_name, $formData);
            }

            $header = ['Content-Type: application/json', 'Accept: application/json', 'Authorization' => $this->info->token, 'apikey' => env('GLOBAL_WHATSAPP_API_TOKEN'), 'groupJid' => env('WHATSAPP_GROUP_JID')];

            $formData = [
                'number' => $number . '@s.whatsapp.net',
                'options' => [
                    'delay' => 1200,
                    'presence' => 'composing',
                ],
                'textMessage' => [
                    'text' => $this->message,
                ],
            ];

            $httpRequest = HttpRequest('/message/sendText/' . $this->info->instance_name, 'post', $header, $formData);

            $this->saveData($number, $this->message, $this->filePath, $httpRequest);
        }


        // foreach ($whatsAppNumbers as $number) {
        //     $formData = [
        //         'number' => $number . '@s.whatsapp.net',
        //         'options' => [
        //             'delay' => 1200,
        //             'presence' => 'composing',
        //         ],
        //         'textMessage' => [
        //             'text' => $this->message,
        //         ],
        //     ];

        //     $httpRequest = HttpRequest('/message/sendText/' . $this->info->instance_name, 'post', $header, $formData);

        //     dd($httpRequest);
        //     $this->saveData($number, $this->message, $this->filePath, $httpRequest);
        // }
    }

    public function saveData($number, $message, $filePath, $httpRequest)
    {
        // createOrUpdate([
        WhatsAppAds::where('number', $number)
            ->update([
                'status' => $httpRequest->successful() ? 'sent' : 'failed',
                'created_at' => now(),
            ]);
    }
}
