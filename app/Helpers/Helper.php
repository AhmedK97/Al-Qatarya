<?php

use Illuminate\Support\Facades\Http;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;

if (! function_exists('supportedLocales')) {
    function supportedLocales()
    {
        return LaravelLocalization::getSupportedLocales();
    }
}

// currentLocale
if (! function_exists('currentLocale')) {
    function currentLocale()
    {
        return LaravelLocalization::getCurrentLocale();
    }
}

// $response = Http::withHeaders([
//     'Content-Type: application/json',
//     'Accept: application/json',
//     'Authorization' => 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbnN0YW5jZU5hbWUiOiJjb2RlY2hhdC1ib3QiLCJhcGlOYW1lIjoid2hhdHNhcHAtYXBpIiwidG9rZW5JZCI6IjM3NTNmNzAwLTNjZGMtNDMxMi1hZGRmLWI0NjA0ZTQ3ZDgwZiIsImlhdCI6MTcwODI4ODkxMiwiZXhwIjoxNzA4Mjg4OTEyLCJzdWIiOiJnLXQifQ.k6foHEseZc14c8j4dUP8BO7nmAgAgnzL6V0COdKD3HQ',
// ])->post('http://localhost:8084/chat/retrieverMediaMessage/codechat-bot', [
//     'keyId' => $keyId,
// ]);

if (! function_exists('createHttpRequest')) {
    function HttpRequest($route, string $method, $headers, $formData)
    {
        return Http::withoutVerifying()->withHeaders($headers)->$method(env('WHATSAPP_API_URL').$route, $formData);
    }
}
