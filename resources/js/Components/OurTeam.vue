<template>
    <section
        class="container px-4 mx-auto max-w-7xl lg:px-0"
        v-motion="{
            initial: { x: -500, opacity: 0 },
            visibleOnce: {
                x: 0,
                opacity: 1,
                transition: { delay: 700 },
            },
        }"
    >
        <div class="flex flex-col justify-between p-2 lg:flex-row">
            <div class="">
                <SectionTitleShadow>
                    <template #upper-title>
                        {{ $t("our.team.upper") }}
                    </template>
                    <template #title>
                        {{ $t("our.team") }}
                    </template>
                </SectionTitleShadow>

                <p class="mt-4 text-lg font-medium text-gray-500">
                    {{ $t("who.we.are-desc") }}
                </p>
                <p
                    class="mt-10 text-base font-medium leading-relaxed text-gray-500 lg:text-lg w-96"
                >
                    {{ $t("our.team-paragraph") }}
                </p>
            </div>

            <div
                class="flex flex-col items-center mt-10 space-y-8 lg:items-start lg:mt-0 lg:space-x-8 lg:flex-row rtl:space-x-reverse lg:space-y-0"
            >
                <div class="">
                    <img
                        src="/storage/images/banner1.png"
                        class="rounded-lg w-96 h-[25rem]"
                        alt=""
                    />
                    <p class="mt-4 text-xl font-semibold">المدير العام</p>
                    <p class="text-xl font-semibold text-rose-900">
                        المهندس سيد مصطفى
                    </p>
                </div>
                <div class="">
                    <img
                        src="/storage/images/banner1.png"
                        class="rounded-lg w-96 h-80"
                        alt=""
                    />
                    <p class="mt-4 text-xl font-semibold">المدير العام</p>
                    <p class="text-xl font-semibold text-rose-900">
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
