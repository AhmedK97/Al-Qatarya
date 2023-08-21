<?php

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
