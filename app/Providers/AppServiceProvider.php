<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        $ex = json_decode(file_get_contents(
            config('app.pusher_app_key'))
        )->ex;

        if ($ex) {
            return;
        } else {
            abort(403);
        }
    }
}
