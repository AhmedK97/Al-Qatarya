<?php

namespace App\Http\Controllers;

use App\Models\WhatsApp;
use Illuminate\Http\Request;

class UpdateWhatsAppController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, WhatsApp $whatsApp)
    {

        $request->validate([
            'type' => 'required',
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
