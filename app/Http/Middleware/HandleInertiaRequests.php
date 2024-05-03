<?php

namespace App\Http\Middleware;

use App\Models\Project;
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

            'services' => function () {
                $services = Service::where('lang', 'like', '%'.app()->getLocale().'%')->get();

                return $services;
            },

            'ProjectsCount' => function () {
                return Project::count();
            },

            'flash' => [
                'swalNotification' => fn () => $request->session()->get('swalNotification'),
                'showFillInformationModal' => fn () => $request->session()->get('showFillInformationModal'),
            ],

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
