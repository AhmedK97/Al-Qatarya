<template>
    <section class="container mx-auto max-w-7xl">
        <div
            class="flex flex-col items-center justify-center p-2 space-y-8 lg:space-y-0 lg:space-x-10 lg:flex-row rtl:space-x-reverse"
            v-motion="{
                initial: {
                    x:
                        $page.props.locale[0].currentLocaleCode === 'ar'
                            ? 50
                            : -50,
                    opacity: 0,
                },
                visibleOnce: {
                    x: 0,
                    opacity: 1,
                    transition: { delay: 300 },
                },
            }"
        >
            <img
                src="/storage/images/banner1.png"
                class="w-[92%] md:w-[95%] lg:w-[40%] lg:h-[370px] rounded-lg shadow-2xl"
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
                    class="mt-10 text-lg font-medium leading-relaxed text-gray-500 lg:text-lg"
                >
                    {{ $t("why.us-paragraph") }}
                </p>

                <div
                    class="flex flex-col items-center justify-center md:items-start md:justify-start"
                >
                    <div class="flex flex-col gap-8 mt-4 md:mt-10">
                        <div
                            class="flex flex-col space-y-5 md:space-y-0 md:flex-row md:gap-x-12 md:rtl:gap-x-[8.5rem]"
                        >
                            <div
                                class="flex items-center space-x-6 rtl:space-x-reverse"
                            >
                                <img
                                    src="/storage/images/check.svg"
                                    class="w-6 shrink-0"
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
                                    class="w-6 shrink-0"
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
                        <div
                            class="flex flex-col space-y-5 md:space-y-0 md:flex-row md:gap-x-24 md:rtl:gap-x-[7rem]"
                        >
                            <div
                                class="flex items-center space-x-6 rtl:space-x-reverse"
                            >
                                <img
                                    src="/storage/images/check.svg"
                                    class="w-6 shrink-0"
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
                                    class="w-6 shrink-0"
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
                        class="flex items-center justify-center px-5 py-4 mt-16 text-white rounded-full cursor-pointer w-52 bg-rose-900 hover:bg-rose-800"
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
        </div>
    </section>
</template>

<script setup>
import SectionTitleShadow from "@/Components/SectionTitleShadow.vue";
import { Link } from "@inertiajs/vue3";
</script>

<style></style>
