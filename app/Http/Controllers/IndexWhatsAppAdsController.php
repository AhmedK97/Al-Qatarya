<?php

namespace App\Http\Controllers;

use App\Http\Resources\whatsAppAdsResource;
use App\Models\WhatsAppAds;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\QueryBuilder\QueryBuilder;

class IndexWhatsAppAdsController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {

        $waData = QueryBuilder::for(WhatsAppAds::class)
            ->orderBy('id', 'desc')
            ->paginate(10)
            ->withQueryString()
            ->through(function (WhatsAppAds $whatsAppAds) {
                return new whatsAppAdsResource($whatsAppAds);
            });


        return Inertia::render('Admin/WhatsAppAds/Index', [
            'whatsAppAdsData' => $waData,
            'whatsAppAdsDataCount' => $waData->where('status', 'sent')->count(),
            'queueRunning' => \DB::table('jobs')->where('queue', 'default')->where('payload', 'like', '%SendMessageJob%')->exists(),
        ]);
    }
}
