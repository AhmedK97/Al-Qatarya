<script setup>
import MobileControllers from "@/Components/MobileControllers.vue";
import ApplicationMark from "./ApplicationMark.vue";

import { Link } from "@inertiajs/vue3";
</script>

<template>
    <footer class="bg-secondary-900">
        <div
            class="container flex flex-col justify-between max-w-6xl px-6 pb-32 mx-auto lg:space-x-12 lg:flex-row pt-14 md:pb-14 rtl:space-x-reverse"
        >
            <div class="flex flex-col space-y-4">
                <p class="text-2xl font-bold text-rose-900">
                    {{ $t("footer.about") }}
                </p>
                <div class="relative">
                    <hr
                        class="h-0.5 border-0 rounded-full bg-gray-900 opacity-10"
                    />
                    <hr
                        class="absolute top-0 w-10 h-1 border-0 rounded-full -translate-y-1/3 bg-rose-900"
                    />
                </div>
                <p
                    class="font-medium leading-relaxed text-gray-900 text-md sm:w-80"
                >
                    {{ $t("footer.about-text") }}
                </p>
                <Link
                    :href="
                        '/' + $page.props.locale[0].currentLocaleCode + '/about'
                    "
                >
                    <div
                        class="flex justify-center px-2 py-4 text-white rounded-full w-44 bg-rose-900 hover:bg-rose-800"
                    >
                        {{ $t("why.us-read.more") }}
                    </div>
                </Link>
                <div class="flex p-5 space-x-6 rtl:space-x-reverse">
                    <img
                        src="/storage/images/facebook-ham.svg"
                        class="w-5 h-5"
                        alt=""
                    />
                    <img
                        src="/storage/images/instagram-ham.svg"
                        class="w-5 h-5"
                        alt=""
                    />
                    <img
                        src="/storage/images/twitter-ham.svg"
                        class="w-5 h-5"
                        alt=""
                    />
                </div>
            </div>

            <div class="flex flex-col space-y-4">
                <p class="text-2xl font-bold text-rose-900">
                    {{ $t("footer.links") }}
                </p>
                <div class="relative">
                    <hr
                        class="h-0.5 border-0 rounded-full bg-gray-900 opacity-10"
                    />
                    <hr
                        class="absolute top-0 w-10 h-1 border-0 rounded-full -translate-y-1/3 bg-rose-900"
                    />
                </div>
                <div class="w-40 space-y-4 text-gray-900">
                    <div class="flex items-center">
                        <div>
                            <div class="">
                                <Link :href="route('blogs')" class="text-right">
                                    {{ $t("home.blogs") }}
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center">
                        <div>
                            <div class="">
                                <Link :href="route('show.faq')">
                                    {{ $t("home.faq") }}
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center">
                        <div>
                            <div class="">
                                <Link
                                    href="#contact-us"
                                    :active="route().current('profile.show')"
                                >
                                    {{ $t("home.contact") }}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex flex-col space-y-4">
                <p class="text-2xl font-bold text-rose-900">
                    {{ $t("footer.address") }}
                </p>
                <div class="relative">
                    <hr
                        class="h-0.5 border-0 rounded-full bg-gray-900 opacity-10"
                    />
                    <hr
                        class="absolute top-0 w-10 h-1 border-0 rounded-full -translate-y-1/3 bg-rose-900"
                    />
                </div>
                <div class="flex flex-col space-y-4">
                    <div class="flex space-x-4 rtl:space-x-reverse">
                        <img src="storage/images/location.svg" alt="" />
                        <p
                            class="font-medium leading-relaxed text-gray-900 text-md"
                        >
                            {{ $t("footer.address-text") }}
                        </p>
                    </div>
                    <div class="flex space-x-4 rtl:space-x-reverse">
                        <img src="storage/images/phone-footer.svg" alt="" />
                        <p
                            class="font-medium leading-relaxed text-gray-900 direction text-md"
                        >
                            {{ $t("footer.address-text1") }}
                        </p>
                    </div>
                    <div class="flex space-x-4 rtl:space-x-reverse">
                        <img src="storage/images/mail-footer.svg" alt="" />
                        <p
                            class="font-medium leading-relaxed text-gray-900 text-md"
                        >
                            {{ $t("footer.address-text2") }}
                        </p>
                    </div>
                </div>
            </div>

            <div class="flex flex-col mt-4 lg:mt-0">
                <div class="space-y-4">
                    <p class="text-2xl font-bold text-rose-900">
                        {{ $t("footer.support") }}
                    </p>
                    <div class="relative">
                        <hr
                            class="h-0.5 border-0 rounded-full bg-gray-900 opacity-10"
                        />
                        <hr
                            class="absolute top-0 w-10 h-1 border-0 rounded-full -translate-y-1/3 bg-rose-900"
                        />
                    </div>
                    <p
                        class="font-medium leading-relaxed text-gray-900 text-md"
                    >
                        {{ $t("footer.support-text") }}
                    </p>
                </div>
            </div>
        </div>


        <div
            class="fixed z-50 hidden sm:block rtl:space-y-4 bottom-4 left-6 rtl:right-6 rtl:left-auto"
        >
            <!-- telephone icon -->
            <div class="w-16 h-16 bg-white rounded-full shadow-lg">
                <a
                :href="`tel:${$t('footer.address-text1')}`"

                    class="flex items-center justify-center w-full h-full"
                >
                    <dotlottie-player
                        src="/storage/images/lottiefiles/phone.lottie"
                        style="width: 50px"
                        autoplay
                        loop
                    >
                    </dotlottie-player>
                </a>
            </div>
            <!-- whatsapp icon -->
            <div class="w-16 h-16 mt-4 bg-white rounded-full shadow-lg">
                <a
                    href="https://wa.me/96599959053"
                    class="flex items-center justify-center w-full h-full"
                >
                    <dotlottie-player
                        src="/storage/images/lottiefiles/whatsapp.lottie"
                        style="width: 50px"
                        autoplay
                        loop
                    >
                    </dotlottie-player>
                </a>
            </div>
        </div>

        <MobileControllers />
    </footer>
</template>

<style scoped>
html[dir="ltr"] .direction {
    direction: rtl !important;
}

html[dir="rtl"] .direction {
    direction: ltr !important;
}
</style>
