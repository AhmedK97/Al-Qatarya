<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { trans } from "laravel-vue-i18n";
import SectionTitleShadow from "@/Components/SectionTitleShadow.vue";
import { Link } from "@inertiajs/vue3";
import Tabs from "@/Components/Tabs.vue";
import OurTeam from "@/Components/OurTeam.vue";
import ProgressBar from "@/Components/ProgressBar.vue";
import AllServices from "@/Components/AllServices.vue";

defineProps({
    services: Object,
});
</script>

<template>
    <AppLayout :title="trans('home.about')">
        <section class="mt-10 mb-20 lg:mt-36">
            <div
                class="container flex flex-col justify-center w-full p-2 mx-auto space-y-8 lg:space-y-0 lg:space-x-10 lg:flex-row ltr:space-x-reverse max-w-7xl"
            >
                <div class="relative order-1 lg:order-2">
                    <img
                        src="/storage/images/dots.png"
                        class="hidden xl:block md:w-full lg:h-[500px] absolute top-0 -translate-y-14 -translate-x-14 ltr:translate-x-14"
                        alt=""
                    />
                    <img
                        src="/storage/images/banner1-1.webp"
                        class="md:w-full lg:h-[600px] rounded-lg relative z-10"
                        alt=""
                    />
                </div>
                <div class="order-2 w-full px-4 md:order-1">
                    <SectionTitleShadow>
                        <template #upper-title>
                            {{ $t("who.we.are-upper") }}
                        </template>
                        <template #title>
                            {{ $t("who.we.are") }}
                        </template>
                    </SectionTitleShadow>

                    <p
                        class="mt-10 text-lg font-medium leading-relaxed text-gray-500 lg:text-lg"
                    >
                        {{ $t("who.we.are-paragraph1") }}
                    </p>
                    <p
                        class="mt-2 text-base font-medium leading-relaxed text-gray-500 lg:text-lg"
                    >
                        {{ $t("who.we.are-paragraph2") }}
                    </p>
                    <p
                        class="mt-2 text-base font-medium leading-relaxed text-gray-500 lg:text-lg"
                    >
                        {{ $t("who.we.are-paragraph3") }}
                    </p>
                    <p
                        class="mt-2 text-base font-medium leading-relaxed text-gray-500 lg:text-lg"
                    >
                        {{ $t("who.we.are-paragraph4") }}
                    </p>
                    <p
                        class="mt-2 text-base font-medium leading-relaxed text-gray-500 lg:text-lg"
                    >
                        {{ $t("who.we.are-paragraph5") }}
                    </p>
                    <p
                        class="mt-2 text-base font-medium leading-relaxed text-gray-500 lg:text-lg"
                    >
                        {{ $t("who.we.are-paragraph6") }}
                    </p>
                </div>
            </div>

            <AllServices :services="services" class="mt-20" />

            <OurTeam class="mt-20" />

            <section class="container mx-auto mt-20 max-w-7xl">
                <div
                    class="flex flex-col justify-center p-2 space-y-8 lg:space-y-0 lg:space-x-10 lg:flex-row rtl:space-x-reverse"
                >
                    <img
                        src="/storage/images/banner1.webp"
                        class="w-full lg:w-[45%] lg:h-[600px] rounded-lg"
                        loading="lazy"
                        alt=""
                    />
                    <div class="px-4">
                        <SectionTitleShadow>
                            <template #upper-title>
                                {{ $t("why.us-upper") }}
                            </template>
                            <template #title>
                                {{ $t("why.us") }}
                            </template>
                        </SectionTitleShadow>

                        <p class="mt-8 text-lg font-medium text-gray-500">
                            {{ $t("why.us-desc") }}
                        </p>
                        <p
                            class="mt-4 text-base font-medium leading-relaxed text-gray-500 lg:text-lg"
                        >
                            {{ $t("about.us-desc") }}
                        </p>
                        <div class="flex flex-col w-full mt-4 space-y-8">
                            <div class="flex flex-col space-y-4">
                                <p class="text-lg font-semibold">
                                    {{ $t("progress.bar.1") }}
                                </p>
                                <ProgressBar
                                    :targetNumber="40"
                                    :endDigit="40"
                                />
                            </div>
                            <div class="flex flex-col space-y-4">
                                <p class="text-lg font-semibold">
                                    {{ $t("progress.bar.2") }}
                                </p>
                                <ProgressBar
                                    :targetNumber="80"
                                    :endDigit="80"
                                />
                            </div>
                            <div class="flex flex-col space-y-4">
                                <p class="text-lg font-semibold">
                                    {{ $t("progress.bar.3") }}
                                </p>
                                <ProgressBar
                                    :targetNumber="64"
                                    :endDigit="64"
                                />
                            </div>
                            <div class="flex flex-col space-y-4">
                                <p class="text-lg font-semibold">
                                    {{ $t("progress.bar.4") }}
                                </p>
                                <ProgressBar
                                    :targetNumber="96"
                                    :endDigit="96"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Tabs class="mt-20" />
        </section>
    </AppLayout>
</template>
