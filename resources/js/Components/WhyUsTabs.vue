<template>
    <div class="flex flex-wrap">
        <div class="container w-full mx-auto max-w-7xl">
            <ul class="flex flex-row flex-wrap pt-3 pb-4 mb-0 space-x-2 list-none rtl:space-x-reverse">
                <li class="flex-auto text-center">
                    <a class="block p-5 text-xs font-bold leading-normal uppercase rounded shadow-lg md:text-lg"
                        v-on:click="toggleTabs(1)"
                        v-bind:class="{
                            'text-rose-900 bg-white': openTab !== 1,
                            'text-secondary-700 bg-rose-900': openTab === 1,
                        }">
                        {{ $t('insulation') }}
                    </a>
                </li>
                <li class="flex-auto text-center">
                    <a class="block p-5 text-xs font-bold leading-normal uppercase rounded shadow-lg md:text-lg"
                        v-on:click="toggleTabs(2)"
                        v-bind:class="{
                            'text-rose-900 bg-white': openTab !== 2,
                            'text-secondary-700 bg-rose-900': openTab === 2,
                        }">
                        {{ $t('buildings') }}
                    </a>
                </li>
            </ul>

            <div
                v-bind:class="{
                    hidden: openTab !== 1,
                    block: openTab === 1,
                }">
                <div class="grid grid-cols-2 mt-4 md:grid-cols-3 lg:grid-cols-3 gap-y-10 md:mt-10">
                    <div class="flex space-x-4 rtl:space-x-reverse" v-for="service in services_qatarya" :key="service.id">
                        <div
                            class="flex items-center justify-center w-6 h-6 rounded-full xl:w-8 xl:h-8 bg-rose-900 shrink-0">
                            <img src="/storage/images/check-white.svg" class="w-3 xl:w-5" loading="lazy"
                                alt="" />
                        </div>
                        <Link :href="route('service', service.slug)">
                        <p class="mt-1.5 text-sm xl:text-lg font-semibold text-gray-800 hover:text-gray-500">
                            {{ service . name }}
                        </p>
                        </Link>
                    </div>
                </div>
            </div>

            <div
                v-bind:class="{
                    hidden: openTab !== 2,
                    block: openTab === 2,
                }">
                <div class="grid grid-cols-2 mt-4 md:grid-cols-3 lg:grid-cols-3 gap-y-10 md:mt-10">
                    <div class="flex space-x-4 rtl:space-x-reverse" v-for="service in services_othman" :key="service.id">
                        <div
                            class="flex items-center justify-center w-6 h-6 rounded-full xl:w-8 xl:h-8 bg-rose-900 shrink-0">
                            <img src="/storage/images/check-white.svg" class="w-3 xl:w-5" loading="lazy"
                                alt="" />
                        </div>
                        <Link :href="route('service', service.slug)">
                        <p class="mt-1.5 text-sm xl:text-lg font-semibold text-gray-800 hover:text-gray-500">
                            {{ service . name }}
                        </p>
                        </Link>
                    </div>
                </div>
            </div>

            <!-- <div
                class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg"
            >
                <div class="flex-auto px-4 py-5">
                    <div class="tab-content tab-space">
                        <div
                            v-bind:class="{
                                hidden: openTab !== 1,
                                block: openTab === 1,
                            }"
                        >
                            <p class="font-normal md:text-xl">
                                {{ $t('vision-desc') }}
                            </p>
                        </div>
                        <div
                            v-bind:class="{
                                hidden: openTab !== 2,
                                block: openTab === 2,
                            }"
                        >
                            <p class="font-normal md:text-xl">
                                {{ $t('mission-desc') }}
                            </p>
                        </div>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
    import {
        Link
    } from "@inertiajs/vue3";
    export default {
        name: "pink-tabs",
        components: {
            Link,
        },
        props: {
            services_othman: Object,
            services_qatarya: Object,
        },


        data() {
            return {
                openTab: 1,
            };
        },
        methods: {
            toggleTabs: function(tabNumber) {
                this.openTab = tabNumber;
            },
        },
    };
</script>
