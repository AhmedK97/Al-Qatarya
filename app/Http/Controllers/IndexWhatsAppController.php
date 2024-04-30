<?php

namespace App\Http\Controllers;

use App\Http\Resources\IndexWhatsAppResource;
use App\Models\WhatsApp;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class IndexWhatsAppController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {

        $result = DB::connection('external_db')
            ->table('auth')
            ->join('instance', 'auth.instanceId', '=', 'instance.id')
            ->select('auth.token', 'instance.name', 'ownerJid', 'connectionStatus')
            ->get();

        foreach ($result as $row) {
            WhatsApp::UpdateOrCreate(
                [
                    'token' => $row->token,
                    'instance_name' => $row->name,
                    'ownerJid' => $row->ownerJid,
                    'status' => 'active',
                    'type' => 'chat',
                    'whatsapp_status' => $row->connectionStatus,
                ],
            );
        }

        $whatsAppData = WhatsApp::whereNotNull('ownerJid')->get();

        return Inertia::render('Admin/WhatsApp/Index', [
            'whatsAppData' => IndexWhatsAppResource::collection($whatsAppData),
            'whatsAppPhoneCount' => $whatsAppData->count(),
        ]);
    }
}
