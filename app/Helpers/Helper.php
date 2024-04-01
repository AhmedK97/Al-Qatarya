<?php

use Illuminate\Support\Facades\Http;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;

if (!function_exists('supportedLocales')) {
    function supportedLocales()
    {
        return LaravelLocalization::getSupportedLocales();
    }
}

// currentLocale
if (!function_exists('currentLocale')) {
    function currentLocale()
    {
        return LaravelLocalization::getCurrentLocale();
    }
}

if (!function_exists('createHttpRequest')) {

    function HttpRequest($route, string $method, $headers, $formData)
    {
        $request = Http::withoutVerifying();

        if ($headers !== null) {
            $request = $request->withHeaders($headers);
        }

        return $request->$method(config('app.whats_app_url') . $route, $formData);
    }
}
