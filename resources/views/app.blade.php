<!DOCTYPE html>
<html dir="{{ app()->getLocale() == 'ar' ? 'rtl' : 'ltr' }}" lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'الشركه القطريه للمقاولات العامه للمباني') }}</title>

    {{-- icon --}}
    <link rel="icon" href="{{ asset('images/logo.webp') }}" type="image/webp" sizes="16x16">

    @routes
    @vite(['resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"])
    @inertiaHead
</head>

<body class="bg-gray-50 font-tajawal debug-screens">

    @inertia

</body>


</html>
