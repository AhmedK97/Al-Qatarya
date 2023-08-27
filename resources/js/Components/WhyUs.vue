<template>
    <section class="container mx-auto max-w-7xl">
        <div
            class="flex flex-col justify-center p-2 space-x-10 space-y-8 md:flex-row rtl:space-x-reverse"
            v-motion="{
                initial: { x: -500, opacity: 0 },
                visibleOnce: {
                    x: 0,
                    opacity: 1,
                    transition: { delay: 700 },
                },
            }"
        >
            <img
                src="/storage/images/banner1.png"
                class="md:w-[45%] md:h-[600px] rounded-lg"
                loading="lazy"
                alt=""
            />
            <div class="">
                <SectionTitleShadow>
                    <template #upper-title>
                        {{ $t("why.us-upper") }}
                    </template>
                    <template #title>
                        {{ $t("why.us") }}
                    </template>
                </SectionTitleShadow>

                <p class="mt-4 text-lg font-medium text-gray-500">
                    {{ $t("why.us-desc") }}
                </p>
                <p
                    class="mt-10 text-base font-medium leading-relaxed text-gray-500 lg:text-lg"
                >
                    {{ $t("why.us-paragraph") }}
                </p>

                <div class="flex flex-col gap-8 px-4 mt-10">
                    <div class="flex gap-x-24 md:gap-x-[8.5rem]">
                        <div
                            class="flex items-center space-x-6 rtl:space-x-reverse"
                        >
                            <img
                                src="/storage/images/check.svg"
                                class="w-6"
                                loading="lazy"
                                alt=""
                            />
                            <p
                                class="mt-1.5 text-base lg:text-xl font-semibold text-gray-800"
                            >
                                {{ $t("why.us-feature-1") }}
                            </p>
                        </div>
                        <div
                            class="flex items-center space-x-6 rtl:space-x-reverse"
                        >
                            <img
                                src="/storage/images/check.svg"
                                class="w-6"
                                loading="lazy"
                                alt=""
                            />
                            <p
                                class="mt-1.5 text-base lg:text-xl font-semibold text-gray-800"
                            >
                                {{ $t("why.us-feature-2") }}
                            </p>
                        </div>
                    </div>
                    <div class="flex gap-x-20 md:gap-x-28">
                        <div
                            class="flex items-center space-x-6 rtl:space-x-reverse"
                        >
                            <img
                                src="/storage/images/check.svg"
                                class="w-6"
                                loading="lazy"
                                alt=""
                            />
                            <p
                                class="mt-1.5 text-base lg:text-xl font-semibold text-gray-800"
                            >
                                {{ $t("why.us-feature-3") }}
                            </p>
                        </div>
                        <div
                            class="flex items-center space-x-6 rtl:space-x-reverse"
                        >
                            <img
                                src="/storage/images/check.svg"
                                class="w-6"
                                loading="lazy"
                                alt=""
                            />
                            <p
                                class="mt-1.5 text-base lg:text-xl font-semibold text-gray-800"
                            >
                                {{ $t("why.us-feature-4") }}
                            </p>
                        </div>
                    </div>
                </div>

                <div
                    class="flex justify-center px-5 py-4 mt-20 text-white rounded-full w-52 bg-rose-900"
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
    </section>
</template>

<script setup>
import SectionTitleShadow from "@/Components/SectionTitleShadow.vue";
import { Link } from "@inertiajs/vue3";
</script>

<style></style>
