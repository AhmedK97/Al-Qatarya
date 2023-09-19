<template>
    <section class="container mx-auto max-w-7xl">
        <div
            class="flex flex-col items-center justify-center p-2 space-y-8 lg:space-y-0 lg:space-x-10 lg:flex-row ltr:space-x-reverse"
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
                class="w-[92%] md:w-[95%] lg:w-[40%] lg:h-[370px] rounded-lg shadow-2xl order-1 lg:order-2"
                alt=""
            />
            <div class="order-2 px-4 lg:order-1">
                <SectionTitleShadow>
                    <template #upper-title>
                        {{ $t("who.we.are-upper") }}
                    </template>
                    <template #title>
                        {{ $t("who.we.are") }}
                    </template>
                </SectionTitleShadow>

                <p class="mt-8 text-lg font-medium text-gray-500">
                    {{ $t("who.we.are-desc") }}
                </p>
                <p
                    class="mt-10 text-lg font-medium leading-relaxed text-gray-500 lg:text-lg"
                >
                    {{ $t("who.we.are-paragraph") }}
                </p>

                <div class="mt-10">
                    <Counter :targetNumber="100" :intervalSpeed="10">
                        <template #title>
                            {{ $t("who.we.are-counter") }}
                        </template>
                    </Counter>
                </div>

                <!-- <div class="flex flex-wrap justify-center gap-8 mt-10 md:mt-16">
                    <div class="flex gap-x-8">
                        <Counter :targetNumber="100" :intervalSpeed="10">
                            <template #title>
                                {{ $t("who.we.are-counter") }}
                            </template>
                        </Counter>
                        <Counter :targetNumber="500" :intervalSpeed="0.1">
                            <template #title>
                                {{ $t("who.we.are-counter") }}
                            </template>
                        </Counter>
                    </div>
                    <Counter :targetNumber="139" :intervalSpeed="10">
                        <template #title>
                            {{ $t("who.we.are-counter") }}
                        </template>
                    </Counter>
                </div> -->
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
