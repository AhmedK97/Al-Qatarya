<?php

namespace App\Http\Controllers;

use App\Enums\Blogs\DocumentTypeEnum;
use App\Jobs\SendMessageJob;
use App\Models\WhatsApp;
use App\Models\WhatsAppAds;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class SendBulkOfMessagesController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $request->validate([
            'numbers' => 'required|
            regex:/^[0-9\s]+$/',
            'message' => 'required|string',
            'file' => 'nullable|file',
        ]);

        $numbers = $request->input('numbers');
        $message = $request->input('message');

        $filePath = null;

        if ($request->hasFile('file')) {
            $types = ['image', 'video', 'document', 'audio'];
            $file = $request->file('file');
            $fileType = $file->getMimeType();

            $documentMimeTypes = DocumentTypeEnum::getMimeTypes();

            if (in_array($fileType, $documentMimeTypes)) {
                $fileType = 'document';
            }

            $matchingType = collect($types)->first(function ($value) use ($fileType) {
                return \Str::contains($fileType, $value);
            });

            if (!$matchingType) {
                return response()->json([
                    'message' => 'صيغة الملف غير مدعومة',
                ], 422);
            }
            $file = $request->file('file');
            $fileName = time() . '_' . $file->getClientOriginalName();
            $filePath = 'whatsappMedia/' . $fileName;
            $file->storeAs('public', $filePath);
        }
        $numbers = explode("\n", $request->numbers);

        $numbers = array_map(function ($number) {
            return trim($number);
        }, $numbers);


        foreach ($numbers as $number) {
            WhatsAppAds::create([
                'number' => $number,
                'message' => $message,
                'status' => 'pending',
                'file_path' => $filePath ?? null,
                'file_type' => $matchingType ?? null,
            ]);
        }

        // check whatsapp instance
        $whatsApp = WhatsApp::ads()->where('status', 'active')->first();
        if (!$whatsApp) {
            return back()->with('swalNotification', [
                'title' => __('common.error'),
                'text' => __('whatsapp.no_active_instance'),
                'icon' => 'error',
                'timer' => 5000,
            ]);
        }

        dispatch(new SendMessageJob());

        return back()
            ->with('swalNotification', [
                'title' => __('common.success'),
                'text' => __('whatsapp.message_sent'),
                'icon' => 'success',
                'timer' => 5000,
            ]);
    }
}
