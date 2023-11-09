<?php

namespace App\Http\Middleware;

use App\Http\Resources\ServiceResource;
use App\Models\Service;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },

            // services
            'services' => function () {
                $services = Service::select('name', 'slug')->where('lang', 'like', '%' . app()->getLocale() . '%')->get();

                return ServiceResource::collection($services);
            },

            'locale' => function () {
                $locales = [];

                foreach (LaravelLocalization::getSupportedLocales() as $localeCode => $properties) {
                    $locales[] = [
                        'name' => $properties['native'],
                        'url' => LaravelLocalization::getLocalizedURL($localeCode, null, [], true),
                        'currentLocaleCode' => LaravelLocalization::getCurrentLocale(),
                        'code' => $localeCode,
                    ];
                }

                return $locales;
            },
        ]);
    }
}
