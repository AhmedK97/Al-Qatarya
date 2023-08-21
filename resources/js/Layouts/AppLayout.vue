<script setup>
    import {
        ref
    } from 'vue';
    import {
        Head,
        Link,
        router
    } from '@inertiajs/vue3';
    import ApplicationMark from '@/Components/ApplicationMark.vue';
    import Banner from '@/Components/Banner.vue';
    import Dropdown from '@/Components/Dropdown.vue';
    import DropdownLink from '@/Components/DropdownLink.vue';
    import NavLink from '@/Components/NavLink.vue';
    import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
    import Footer from '@/Components/Footer.vue';

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
        router.post(route('logout'));
    };
</script>

<template>
    <div >

        <Head :title="title" />

        <Banner />

        <div class="min-h-screen bg-red-50">

            <nav class="p-2 pt-2 border-b border-gray-100 bg-amber-800 ">
                <!-- Primary Navigation Menu -->
                <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div class="flex justify-between h-16">
                        <div class="flex">
                            <!-- Logo -->
                            <div class="flex items-center shrink-0">
                                <Link :href="route('home')">
                                <ApplicationMark class="block w-auto h-16" />
                                </Link>
                            </div>



                            <div class="flex items-center shrink-0 sm:hidden">
                                <h1 class="space-x-8 text-xl font-bold sm:-my-px sm:ml-10">
                                    <NavLink :href="route('home')" class="text-2xl text-white">
                                        {{ $t('home.company_name') }}
                                    </NavLink>
                                </h1>
                            </div>

                            <!-- Navigation Links -->
                            <div class="hidden sm:flex sm:items-center sm:ml-6">
                                <NavLink :href="route('home')" class="px-2 text-2xl text-white">
                                    {{ $t('home.company_name') }}
                                </NavLink>

                                <div
                                    class="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-gray-900 transition duration-150 ease-in-out ">
                                    <Dropdown
                                        :align="$page.props.locale[0].currentLocaleCode === 'ar' ? 'right' : 'left'"
                                        width="48">
                                        <template #trigger>
                                            <span class="inline-flex rounded-md">
                                                <button type="button"
                                                    class="inline-flex px-3 text-sm font-medium leading-4 text-white transition duration-150 ease-in-out rounded-md focus:outline-none ">
                                                    {{ $t('home.services') }}
                                                    <!-- <svg class=" -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                                        fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                        stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                    </svg> -->
                                                    <img class="w-5 h-5 mx-2" loading="lazy"
                                                        src="/storage/images/down-arrow.webp" alt="arrow-down">
                                                </button>
                                            </span>
                                        </template>

                                        <template #content>
                                            <!-- Account Management -->

                                            <div>
                                                <div v-for="service in $page.props.services" :key="service.slug"
                                                    class="py-4 ltr:pl-6 rtl:pr-6 hover:bg-sky-700">
                                                    <Link :href="route('service', service.slug)"
                                                        class="text-base font-medium text-gray-800 ">
                                                    <p class="w-full">{{ service . name }}</p>
                                                    </Link>
                                                    <!-- {{ service . name }} -->
                                                </div>
                                            </div>

                                            <!-- <div class="block px-4 py-2 text-xs text-gray-400">
                                                Manage Account
                                            </div>

                                            <DropdownLink :href="route('profile.show')">
                                                Profile
                                            </DropdownLink> -->

                                        </template>
                                    </Dropdown>
                                </div>

                                <NavLink :href="route('about')" class="px-2 text-2xl text-white"
                                    :active="route().current('about')">
                                    {{ $t('home.about') }}
                                </NavLink>

                                <NavLink :href="'/' + $page.props.locale[0].currentLocaleCode + '#contact-us'"
                                    class="px-2 text-2xl text-white" :active="route().current('contact')">
                                    {{ $t('home.contact') }}
                                </NavLink>

                                <NavLink :href="route('blogs')" class="px-2 text-2xl text-white"
                                    :active="route().current('blogs')">
                                    {{ $t('home.blogs') }}
                                </NavLink>

                                <NavLink :href="route('show.faq')" class="px-2 text-2xl text-white"
                                    :active="route().current('show.faq')">
                                    {{ $t('home.faq') }}
                                </NavLink>

                            </div>
                        </div>

                        <!-- language tab for mobiles -->
                        <div class="flex items-center sm:hidden">
                            <ul>
                                <li v-for="local in $page.props.locale" :key="local.code">
                                    <a v-if="local.currentLocaleCode !== local.code" rel="alternate"
                                        class="inline-flex items-center px-2 py-1 mx-4 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                                        :hreflang="local.code" :href="local.url">
                                        {{ local . name }}
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div class="hidden sm:flex sm:items-center sm:ml-6">
                            <!-- Settings Dropdown -->
                            <div class="relative ml-3">
                                <Dropdown :align="$page.props.locale[0].currentLocaleCode === 'ar' ? 'left' : 'right'"
                                    width="48">
                                    <template #trigger>
                                        <span class="inline-flex rounded-md">
                                            <button type="button"
                                                class="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50">

                                                {{ $t('home.admin') }}

                                                <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                                    fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                    stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                </svg>
                                            </button>
                                        </span>
                                    </template>

                                    <template #content>
                                        <!-- Account Management -->
                                        <div class="block px-4 py-2 text-xs text-gray-400">
                                            Manage Account
                                        </div>

                                        <DropdownLink :href="route('profile.show')">
                                            Profile
                                        </DropdownLink>

                                        <div class="border-t border-gray-200" />

                                        <!-- Authentication -->
                                        <form @submit.prevent="logout">
                                            <DropdownLink as="button">
                                                {{ $t('home.logout') }}
                                            </DropdownLink>
                                        </form>
                                    </template>
                                </Dropdown>
                            </div>

                            <!-- Available languages -->

                            <ul>
                                <li v-for="local in $page.props.locale" :key="local.code">
                                    <a v-if="local.currentLocaleCode !== local.code" rel="alternate"
                                        class="inline-flex items-center px-2 py-1 mx-4 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                                        :hreflang="local.code" :href="local.url">
                                        {{ local . name }}
                                    </a>
                                </li>
                            </ul>

                        </div>

                        <!-- Hamburger -->
                        <div class="flex items-center -mr-2 sm:hidden">
                            <button aria-label="Menu"
                                class="inline-flex items-center justify-center p-2 text-white transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                                @click="showingNavigationDropdown = ! showingNavigationDropdown">
                                <svg class="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        :class="{
                                            'hidden': showingNavigationDropdown,
                                            'inline-flex': !
                                                showingNavigationDropdown
                                        }"
                                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 6h16M4 12h16M4 18h16" />
                                    <path
                                        :class="{
                                            'hidden': !
                                                showingNavigationDropdown,
                                            'inline-flex': showingNavigationDropdown
                                        }"
                                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Responsive Navigation Menu -->
                <div :class="{ 'block': showingNavigationDropdown, 'hidden': !showingNavigationDropdown }"
                    class="mt-2 bg-white sm:hidden">
                    <div>
                    </div>

                    <!-- Responsive Settings Options -->
                    <div class="pt-4 pb-1 border-t border-gray-200">

                        <div @click="showServices" class="flex items-center p-5 px-4">
                            <div>
                                <div class="text-base font-medium text-gray-800">

                                    {{ $t('home.services') }}
                                </div>
                            </div>
                        </div>

                        <div v-if="serviceDropdown == true" class="ltr:ml-10 rtl:mr-10 ">
                            <div v-for="service in $page.props.services" :key="service.slug" class="my-4">
                                <Link :href="route('service', service.slug)"
                                    :active="route().current('service', service.slug)"
                                    class="text-base font-medium text-gray-800">
                                {{ service . name }}
                                </Link>
                            </div>
                        </div>


                        <div class="flex items-center p-5 px-4">
                            <div>
                                <div class="text-base font-medium text-gray-800">
                                    <Link href="#contact-us" :active="route().current('profile.show')">
                                    {{ $t('home.contact') }}
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div class="flex items-center p-5 px-4">
                            <div>
                                <div class="text-base font-medium text-gray-800">
                                    <Link :href="route('about')" class="text-right"
                                        :active="route().current('about')">
                                    {{ $t('home.about') }}
                                    </Link>
                                </div>
                            </div>
                        </div>


                        <div class="flex items-center p-5 px-4">
                            <div>
                                <div class="text-base font-medium text-gray-800">
                                    <Link :href="route('blogs')" class="text-right">
                                    {{ $t('home.blogs') }}
                                    </Link>
                                </div>
                            </div>
                        </div>


                        <div class="flex items-center p-5 px-4">
                            <div>
                                <div class="text-base font-medium text-gray-800">
                                    <Link :href="route('show.faq')">
                                    {{ $t('home.faq') }}
                                    </Link>
                                </div>
                            </div>
                        </div>








                        <!-- <div class="mt-3 space-y-1"> -->
                        <!-- Authentication -->
                        <!-- <form method="POST" @submit.prevent="logout"> -->
                        <!-- <ResponsiveNavLink as="button"> -->
                        <!-- {{ $t('home.logout') }} -->
                        <!-- </ResponsiveNavLink> -->
                        <!-- </form> -->
                        <!-- </div> -->
                    </div>
                </div>
            </nav>

            <!-- Page Heading -->
            <header v-if="$slots.header" class="bg-white shadow">
                <div class="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <slot name="header" />
                </div>
            </header>

            <!-- Page Content -->
            <main>
                <slot />
            </main>

            <!-- footer -->
            <Footer></Footer>
        </div>
    </div>
</template>
