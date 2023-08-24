<script setup>
import ApplicationMark from "./ApplicationMark.vue";
import "@ebcom/dotlottie-player";
import { Link } from "@inertiajs/vue3";
</script>

<template>
    <footer class="bg-secondary-900">
        <div
            class="container flex justify-between max-w-6xl mx-auto space-x-12 py-14 rtl:space-x-reverse"
        >
            <div class="flex flex-col space-y-4">
                <p class="text-2xl font-bold text-rose-900">عن الشركة</p>
                <div class="relative">
                    <hr
                        class="h-0.5 border-0 rounded-full bg-gray-900 opacity-10"
                    />
                    <hr
                        class="absolute top-0 w-10 h-1 border-0 rounded-full -translate-y-1/3 bg-rose-900"
                    />
                </div>
                <p class="font-medium leading-relaxed text-gray-100 text-md">
                    - كافة اعمال العزل المائي و الحراري للاسطح بانواعها - عزل
                    حمامات السباحة و البحيرات - عزل ضد الحريق - عزل الارضيات ضد
                    الكيماويات والتآكل - عزل الصوت
                </p>
                <div
                    class="flex justify-center px-2 py-4 text-white rounded-full w-44 bg-rose-900"
                >
                    <Link
                        :href="
                            '/' +
                            $page.props.locale[0].currentLocaleCode +
                            '/about'
                        "
                    >
                        {{ $t("why.us-read.more") }}
                    </Link>
                </div>
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
            <!-- <div class="flex flex-col space-y-4">
                <p class="text-2xl font-bold text-rose-900">خارطة الموقع</p>
                <div class="relative">
                    <hr
                        class="h-0.5 border-0 rounded-full bg-gray-900 opacity-10"
                    />
                    <hr
                        class="absolute top-0 w-10 h-1 border-0 rounded-full -translate-y-1/3 bg-rose-900"
                    />
                </div>
                <div>
                    <div class="flex items-center p-5">
                        <div>
                            <div class="">
                                <Link :href="route('blogs')" class="text-right">
                                    {{ $t("home.blogs") }}
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center p-5">
                        <div>
                            <div class="">
                                <Link :href="route('show.faq')">
                                    {{ $t("home.faq") }}
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center p-5">
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
            </div> -->
            <div class="flex flex-col space-y-4">
                <p class="text-2xl font-bold text-rose-900">عن الشركة</p>
                <div class="relative">
                    <hr
                        class="h-0.5 border-0 rounded-full bg-gray-900 opacity-10"
                    />
                    <hr
                        class="absolute top-0 w-10 h-1 border-0 rounded-full -translate-y-1/3 bg-rose-900"
                    />
                </div>
                <p class="font-medium leading-relaxed text-gray-100 text-md">
                    - كافة اعمال العزل المائي و الحراري للاسطح بانواعها - عزل
                    حمامات السباحة و البحيرات - عزل ضد الحريق - عزل الارضيات ضد
                    الكيماويات والتآكل - عزل الصوت
                </p>
                <div
                    class="flex justify-center px-2 py-4 text-white rounded-full w-44 bg-rose-900"
                >
                    <Link
                        :href="
                            '/' +
                            $page.props.locale[0].currentLocaleCode +
                            '/about'
                        "
                    >
                        {{ $t("why.us-read.more") }}
                    </Link>
                </div>
            </div>
            <div class="flex flex-col space-y-4">
                <p class="text-2xl font-bold text-rose-900">عن الشركة</p>
                <div class="relative">
                    <hr
                        class="h-0.5 border-0 rounded-full bg-gray-900 opacity-10"
                    />
                    <hr
                        class="absolute top-0 w-10 h-1 border-0 rounded-full -translate-y-1/3 bg-rose-900"
                    />
                </div>
                <p class="font-medium leading-relaxed text-gray-100 text-md">
                    - كافة اعمال العزل المائي و الحراري للاسطح بانواعها - عزل
                    حمامات السباحة و البحيرات - عزل ضد الحريق - عزل الارضيات ضد
                    الكيماويات والتآكل - عزل الصوت
                </p>
                <div
                    class="flex justify-center px-2 py-4 text-white rounded-full w-44 bg-rose-900"
                >
                    <Link
                        :href="
                            '/' +
                            $page.props.locale[0].currentLocaleCode +
                            '/about'
                        "
                    >
                        {{ $t("why.us-read.more") }}
                    </Link>
                </div>
            </div>
        </div>
    </footer>
</template>
