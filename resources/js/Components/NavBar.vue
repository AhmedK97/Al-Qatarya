<script setup>
import { ref } from "vue";
import { Head, Link, router } from "@inertiajs/vue3";
import ApplicationMark from "@/Components/ApplicationMark.vue";
import Banner from "@/Components/Banner.vue";
import Dropdown from "@/Components/Dropdown.vue";
import DropdownLink from "@/Components/DropdownLink.vue";
import NavLink from "@/Components/NavLink.vue";
import NavBar from "@/Components/NavBar.vue";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink.vue";
import Footer from "@/Components/Footer.vue";

const props = defineProps({
    title: String,
});

const showDropDown = ref(false);

const dropDownService = () => {
    showDropDown.value = !showDropDown.value;
    console.log(showDropDown.value);
};

const showingNavigationDropdown = ref(false);
const serviceDropdown = ref(false);

const showServices = () => {
    serviceDropdown.value = !serviceDropdown.value;
};

const logout = () => {
    router.post(route("logout"));
};
</script>

<template>
    <!-- upper menu -->
    <div class="bg-secondary-900">
        <div class="container flex justify-between max-w-6xl px-5 py-3 mx-auto">
            <div class="flex items-center space-x-2 rtl:space-x-reverse">
                <img src="/storage/images/house.svg" class="w-5 h-7" alt="" />
                <p
                    class="mt-1 text-xs font-normal ltr:mt-2 sm:text-base text-gray-50"
                >
                    {{ $t("home.top.nav") }}
                </p>
            </div>
            <!-- change language and social icons -->
            <div class="flex items-center space-x-16 rtl:space-x-reverse">
                <!-- language -->
                <div
                    class="flex items-center space-x-2 rtl:flex-row rtl:space-x-reverse"
                >
                    <img src="/storage/images/globe.svg" alt="" />
                    <ul class="mt-1">
                        <li
                            v-for="local in $page.props.locale"
                            :key="local.code"
                        >
                            <a
                                v-if="local.currentLocaleCode !== local.code"
                                rel="alternate"
                                class="text-sm font-medium text-gray-50"
                                :hreflang="local.code"
                                :href="local.url"
                            >
                                {{ local.name }}
                            </a>
                        </li>
                    </ul>
                </div>
                <!-- social icons -->
                <div class="hidden space-x-6 sm:flex rtl:space-x-reverse">
                    <a href="#">
                        <img
                            src="/storage/images/facebook-upper.svg"
                            class="w-4 h-4"
                            alt=""
                        />
                    </a>
                    <a href="#">
                        <img
                            src="/storage/images/instagram-upper.svg"
                            class="w-4 h-4"
                            alt=""
                        />
                    </a>
                    <a href="#">
                        <img
                            src="/storage/images/twitter-upper.svg"
                            class="w-4 h-4"
                            alt=""
                        />
                    </a>
                </div>
            </div>
        </div>
    </div>
    <nav class="relative py-3 md:h-40 bg-rose-900">
        <!-- Primary Navigation Menu -->
        <div class="max-w-6xl px-4 mx-auto md:px-6 lg:px-8 md:mt-8">
            <div class="flex justify-between">
                <div class="flex">
                    <!-- Logo -->
                    <div class="flex items-center shrink-0">
                        <Link :href="route('home')">
                            <ApplicationMark class="block w-auto h-16" />
                        </Link>
                    </div>

                    <!-- Navigation Links -->
                    <NavLink
                        :href="route('home')"
                        class="px-2 text-white md:text-lg"
                    >
                        {{ $t("home.company_name") }}
                    </NavLink>
                </div>

                <div class="flex">
                    <!-- Hamburger -->
                    <div class="flex items-center md:hidden">
                        <button
                            aria-label="Menu"
                            class="inline-flex items-center justify-center p-2 text-white transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                            @click="
                                showingNavigationDropdown =
                                    !showingNavigationDropdown
                            "
                        >
                            <svg
                                class="w-6 h-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    :class="{
                                        hidden: showingNavigationDropdown,
                                        'inline-flex':
                                            !showingNavigationDropdown,
                                    }"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                                <path
                                    :class="{
                                        hidden: !showingNavigationDropdown,
                                        'inline-flex':
                                            showingNavigationDropdown,
                                    }"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                <div
                    class="hidden md:space-x-12 lg:space-x-20 md:flex rtl:space-x-reverse"
                >
                    <div
                        class="flex items-center space-x-4 rtl:space-x-reverse"
                    >
                        <img
                            src="/storage/images/phone-circle.svg"
                            class="w-12"
                            alt=""
                        />
                        <div class="space-y-1">
                            <p class="text-sm font-medium text-gray-300">
                                {{ $t("home.phone_number") }}
                            </p>
                            <p class="font-medium text-md text-gray-50">
                                0123456789
                            </p>
                        </div>
                    </div>
                    <div
                        class="flex items-center space-x-4 rtl:space-x-reverse"
                    >
                        <img
                            src="/storage/images/email-circle.svg"
                            class="w-12"
                            alt=""
                        />
                        <div class="space-y-1">
                            <p class="text-sm font-medium text-gray-300">
                                {{ $t("home.email") }}
                            </p>
                            <p class="font-medium text-md text-gray-50">
                                info@alqatarya.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-center">
                <div
                    class="absolute bottom-0 hidden px-2 py-1.5 translate-y-1/2 rounded-full space-x-20 lg:space-x-80 md:flex md:items-center md:justify-between z-50 bg-secondary-900 rtl:space-x-reverse"
                >
                    <div>
                        <div
                            class="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-gray-900 transition duration-150 ease-in-out"
                        >
                            <Dropdown
                                :align="
                                    $page.props.locale[0].currentLocaleCode ===
                                    'ar'
                                        ? 'right'
                                        : 'left'
                                "
                                width="48"
                            >
                                <template #trigger>
                                    <span class="">
                                        <button
                                            type="button"
                                            class="inline-flex px-3 text-sm font-medium text-white transition duration-150 ease-in-out rounded-md focus:outline-none"
                                        >
                                            {{ $t("home.services") }}
                                            <img
                                                class="w-4 h-4 mx-2 mt-[1.5px]"
                                                loading="lazy"
                                                src="/storage/images/down-arrow.svg"
                                                alt="arrow-down"
                                            />
                                        </button>
                                    </span>
                                </template>

                                <template #content>
                                    <!-- Account Management -->
                                    <div>
                                        <div
                                            v-for="service in $page.props
                                                .services"
                                            :key="service.slug"
                                            class="py-4 ltr:pl-6 rtl:pr-6 hover:bg-secondary-700"
                                        >
                                            <Link
                                                :href="
                                                    route(
                                                        'service',
                                                        service.slug
                                                    )
                                                "
                                                class="text-base font-medium text-gray-800"
                                            >
                                                <p class="w-full">
                                                    {{ service.name }}
                                                </p>
                                            </Link>
                                        </div>
                                    </div>
                                </template>
                            </Dropdown>
                        </div>

                        <NavLink
                            :href="route('about')"
                            class="px-2 text-2xl text-white"
                            :active="route().current('about')"
                        >
                            {{ $t("home.about") }}
                        </NavLink>

                        <NavLink
                            :href="route('blogs')"
                            class="px-2 text-2xl text-white"
                            :active="route().current('blogs')"
                        >
                            {{ $t("home.blogs") }}
                        </NavLink>

                        <NavLink
                            :href="route('projects')"
                            class="px-2 text-2xl text-white"
                            :active="route().current('projects')"
                        >
                            {{ $t("home.projects") }}
                        </NavLink>

                        <NavLink
                            :href="route('show.faq')"
                            class="px-2 text-2xl text-white"
                            :active="route().current('show.faq')"
                        >
                            {{ $t("home.faq") }}
                        </NavLink>
                    </div>
                    <div class="px-5 py-2 text-white rounded-full bg-rose-900">
                        <Link
                            :href="
                                '/' +
                                $page.props.locale[0].currentLocaleCode +
                                '/contact-us'
                            "
                        >
                            {{ $t("home.call_us") }}
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        <!-- Responsive Navigation Menu -->
        <div
            :class="{
                block: showingNavigationDropdown,
                hidden: !showingNavigationDropdown,
                'h-[50rem]': serviceDropdown == true,
            }"
            class="w-[22rem] h-[35rem] absolute top-[5.5rem] bg-secondary-900 left-0 rtl:right-0 z-50 rounded-tr-2xl rounded-br-2xl rtl:rounded-tr-none rtl:rounded-br-none rtl:rounded-tl-2xl rtl:rounded-bl-2xl"
        >
            <!-- Responsive Settings Options -->
            <div
                class="px-4 pt-4 overflow-hidden font-semibold text-md text-gray-50"
            >
                <div class="flex items-center p-5">
                    <div>
                        <div class="">
                            <Link
                                :href="route('about')"
                                class="text-right"
                                :active="route().current('about')"
                            >
                                {{ $t("home.about") }}
                            </Link>
                        </div>
                    </div>
                </div>

                <div @mouseleave="serviceDropdown = false">
                    <Link :href="route('services')">
                        <div
                            @mouseover="serviceDropdown = true"
                            class="flex items-center p-5 space-x-4 transition duration-150 ease-in-out rtl:space-x-reverse"
                        >
                            <div class="">
                                {{ $t("home.services") }}
                            </div>
                            <img
                                src="/storage/images/down-arrow-faq-white.svg"
                                alt=""
                            />
                        </div>
                    </Link>

                    <div
                        v-show="serviceDropdown"
                        class="transition duration-150 ease-in-out ltr:ml-10 rtl:mr-10"
                    >
                        <div
                            v-for="service in $page.props.services"
                            :key="service.slug"
                            class="my-4 transition duration-150 ease-in-out select-none"
                        >
                            <Link
                                :href="route('service', service.slug)"
                                :active="
                                    route().current('service', service.slug)
                                "
                                class=""
                            >
                                {{ service.name }}
                            </Link>
                        </div>
                    </div>
                </div>

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
                            <Link :href="route('projects')" class="text-right">
                                {{ $t("home.projects") }}
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
                                href="/contact-us"
                                :active="route().current('show.contact')"
                            >
                                {{ $t("home.contact") }}
                            </Link>
                        </div>
                    </div>
                </div>

                <!-- social icons -->
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
        </div>
    </nav>
</template>

<style scoped>
/* slide animation to navbar for vue3 */
/* enter-active-class, leave-active-class, enter-from-class, fade-leave-to */
.slide-enter-active,
.slide-leave-active {
    transition: all 0.3s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateX(-100%);
}

/* when html dir is rtl transform will tranlatex -100% for both classes slide-enter-from and slide-leave-to */
[dir="rtl"] .slide-enter-from,
[dir="rtl"] .slide-leave-to {
    transform: translateX(100%);
}
</style>
