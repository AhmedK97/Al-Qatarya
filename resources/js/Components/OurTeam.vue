<template>
    <section class="px-4 bg-rose-900">
        <div
            class="container flex flex-col justify-between p-2 px-4 py-20 mx-auto lg:flex-row max-w-7xl lg:px-0"
        >
            <div class="">
                <SectionTitleShadow>
                    <template #upper-title>
                        <span class="text-secondary-900">
                            {{ $t("our.team.upper") }}</span
                        >
                    </template>
                    <template #title>
                        <span class="text-secondary-900">{{
                            $t("our.team")
                        }}</span>
                    </template>
                </SectionTitleShadow>

                <p class="mt-4 text-lg font-medium text-gray-50">
                    {{ $t("who.we.are-desc") }}
                </p>
                <p
                    class="mt-10 text-base font-medium leading-relaxed text-gray-50 lg:text-lg lg:w-96"
                >
                    {{ $t("our.team-paragraph") }}
                </p>
            </div>

            <div
                class="flex flex-col items-center mt-10 space-y-8 lg:items-start lg:mt-0 lg:space-x-8 lg:flex-row rtl:space-x-reverse lg:space-y-0"
            >
                <div class="">
                    <img
                        src="/storage/images/banner1.webp"
                        class="rounded-lg w-96 h-[25rem]"
                        alt=""
                    />
                    <p class="mt-4 text-xl font-semibold text-secondary-700">
                        {{ $t("general.manager") }}
                    </p>
                    <p class="text-xl font-semibold text-gray-50">
                        المهندس سيد مصطفى
                    </p>
                </div>
                <div class="">
                    <img
                        src="/storage/images/banner1.webp"
                        class="rounded-lg w-96 h-80"
                        alt=""
                    />
                    <p class="mt-4 text-xl font-semibold text-secondary-700">
                        {{ $t("general.manager") }}
                    </p>
                    <p class="text-xl font-semibold text-gray-50">
                        المهندس سيد مصطفى
                    </p>
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
