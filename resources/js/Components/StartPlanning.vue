<template>
    <div class="bg-rose-900">
        <div
            class="container flex flex-col items-center justify-between px-4 mx-auto lg:flex-row max-w-7xl"
        >
            <div
                class="flex flex-col items-center px-4 py-8 md:space-x-6 md:flex-row lg:py-20 lg:px-0 lg:space-x-20 rtl:space-x-reverse"
            >
                <img
                    src="storage/images/building.svg"
                    class="w-20 h-20"
                    alt=""
                />
                <div class="text-center ltr:text-left md:rtl:text-right">
                    <SectionTitleShadow>
                        <template #upper-title>
                            <span class="!text-gray-50 text-3xl lg:text-4xl">
                                {{ $t("planning-upper") }}</span
                            >
                        </template>
                        <template #title>
                            <span class="!text-gray-50 text-xl md:text-4xl">{{
                                $t("planning")
                            }}</span>
                        </template>
                    </SectionTitleShadow>
                    <hr class="h-1 border-0 rounded bg-gray-50 md:w-48" />
                    <p
                        class="mt-4 font-medium md:text-lg ltr:lg:pl-0 ltr:lg:pr-20 rtl:lg:pl-20 rtl:lg:pr-0 text-gray-50"
                    >
                        {{ $t("planning-desc") }}
                    </p>
                </div>
            </div>
            <Link
                :href="
                    '/' +
                    $page.props.locale[0].currentLocaleCode +
                    '/contact-us'
                "
            >
                <div
                    class="flex items-center justify-center w-32 h-16 mb-8 text-xl text-gray-900 rounded-full lg:mb-0 bg-gray-50 hover:bg-gray-200"
                >
                    {{ $t("home.call_us") }}
                </div>
            </Link>
        </div>
    </div>
</template>

<script setup>
import SectionTitleShadow from "@/Components/SectionTitleShadow.vue";
import { Link } from "@inertiajs/vue3";
</script>

<style></style>
