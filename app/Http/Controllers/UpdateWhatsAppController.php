<?php

namespace App\Http\Controllers;

use App\Enums\Blogs\WhatsAppTypeEnum;
use App\Models\WhatsApp;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class UpdateWhatsAppController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, WhatsApp $whatsApp)
    {

        $request->validate([
            'type' => [
                'required',
                function ($attribute, $value, $fail) {
                    if ($value === 'chat') {
                        $chatCount = WhatsApp::where('type', 'chat')->count();
                        if ($chatCount > 0) {
                            $fail(__('whatsapp.chat_type_exists'));
                        }
                    }
                },
                Rule::in(WhatsAppTypeEnum::getValues())
            ],
        ]);


        $whatsApp->update(
            [
                'type' => $request->type,
            ]
        );

        return redirect()
            ->route('index.whatsapp')
            ->with('swalNotification', [
                'title' => __('common.success'),
                'text' => __('common.updated'),
                'icon' => 'success',
                'timer' => 5000,
            ]);
    }
}
