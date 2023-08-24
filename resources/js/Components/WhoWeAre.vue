<template>
    <section class="container mx-auto max-w-7xl">
        <div
            class="flex flex-col justify-center p-2 space-x-10 space-y-8 md:flex-row ltr:space-x-reverse"
            v-motion-slide-visible-once-right
        >
            <img
                src="/storage/images/banner1.png"
                class="md:w-[45%] md:h-[600px] rounded-lg order-1 md:order-2"
                alt=""
            />
            <div class="order-2 md:order-1">
                <SectionTitleShadow>
                    <template #upper-title>
                        {{ $t("who.we.are-upper") }}
                    </template>
                    <template #title>
                        {{ $t("who.we.are") }}
                    </template>
                </SectionTitleShadow>

                <p class="mt-4 text-lg font-medium text-gray-500">
                    {{ $t("who.we.are-desc") }}
                </p>
                <p
                    class="mt-10 text-base font-medium leading-relaxed text-gray-500 lg:text-lg"
                >
                    {{ $t("who.we.are-paragraph") }}
                </p>

                <div
                    class="flex justify-center mt-32 space-x-4 lg:space-x-12 rtl:space-x-reverse"
                >
                    <Counter :targetNumber="100" :intervalSpeed="20">
                        <template #title>
                            {{ $t("who.we.are-counter") }}
                        </template>
                    </Counter>
                    <Counter :targetNumber="2500" :intervalSpeed="0.1">
                        <template #title>
                            {{ $t("who.we.are-counter") }}
                        </template>
                    </Counter>
                    <Counter :targetNumber="139" :intervalSpeed="20">
                        <template #title>
                            {{ $t("who.we.are-counter") }}
                        </template>
                    </Counter>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import SectionTitleShadow from "@/Components/SectionTitleShadow.vue";
import Counter from "@/Components/Counter.vue";
import { Link } from "@inertiajs/vue3";
</script>

<style></style>
