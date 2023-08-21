<script setup>
    import ApplicationMark from './ApplicationMark.vue';
    import '@ebcom/dotlottie-player';
    import {
        Link,
    } from '@inertiajs/vue3';
</script>

<template>
    <footer class="p-4 border-gray-100 bg-amber-800 md:p-8 lg:p-10 ">
        <div class="max-w-screen-xl mx-auto text-center">
            <a href="#" class="flex items-center justify-center mb-4 text-2xl font-semibold text-white ">
                <ApplicationMark class="w-10 h-10 mr-3" />
                <h1 class="mx-4">شركه القطريه للعوازل

                </h1>
            </a>

            <ul class="flex flex-wrap items-center justify-center mb-6 text-white ">
                <li>
                    <Link :href="route('about')" class="mr-4 hover:underline md:mr-6 ">عن القطريه</Link>
                </li>
                <li>
                    <Link :href="route('blogs')" class="mr-4 hover:underline md:mr-6">المدونه</Link>
                </li>
                <li>
                    <Link :href="route('show.faq')" class="mr-4 hover:underline md:mr-6 ">{{ $t('home.faq') }}</Link>
                </li>
                <li>
                    <Link :href="'/' + $page.props.locale[0].currentLocaleCode + '#contact-us'" class="mr-4 hover:underline md:mr-6">{{ $t('home.contact') }}</Link>
                </li>
            </ul>
            <span class="text-sm text-white sm:text-center ">© 2022-2023 <a href="#"
                    class="hover:underline"></a>All Rights Reserved </span>
        </div>

        <!-- fixed-buttons for telephone -->
        <div class="fixed bottom-0 right-0 z-10 flex flex-col items-center justify-center mb-4 mr-4 md:mr-8 md:mb-8">
            <!-- telephone icon -->
            <div class="w-16 h-16 bg-white rounded-full shadow-lg">
                <a href="tel:01000000000" class="flex items-center justify-center w-full h-full">
                    <dotlottie-player src="/storage/images/lottiefiles/phone.lottie" style="width: 50px;" autoplay loop>
                    </dotlottie-player>
                </a>
            </div>
            <!-- whatsapp icon -->
            <div class="w-16 h-16 mt-4 bg-white rounded-full shadow-lg">
                <a href="https://wa.me/01000000000" class="flex items-center justify-center w-full h-full">
                    <dotlottie-player src="/storage/images/lottiefiles/whatsapp.lottie" style="width: 50px;" autoplay
                        loop>
                    </dotlottie-player>
                </a>
            </div>
        </div>


    </footer>
</template>
