<template>
    <section class="container mx-auto max-w-7xl">
        <div
            class="flex flex-col justify-center p-2 my-20 space-y-8 md:space-x-10 md:flex-row ltr:space-x-reverse"
        >
            <img
                :src="service.main_image"
                class="md:w-[45%] md:h-[600px] rounded-lg order-1 md:order-2"
                alt=""
            />
            <div class="order-2 px-4 md:order-1">
                <SectionTitleShadow>
                    <template #upper-title>
                        {{ service.name }}
                    </template>
                    <template #title>
                        {{ service.name }}
                    </template>
                </SectionTitleShadow>

                <p class="mt-8 text-lg font-medium text-gray-500">
                    {{ service.body }}
                </p>

                <div class="flex flex-col gap-8 px-4 mt-10">
                    <div class="flex md:gap-x-2">
                        <div class="flex flex-col">
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
                            <p
                                class="mt-6 text-base font-medium leading-relaxed text-gray-500 lg:text-lg"
                            >
                                متخصصون في اعمال العزل الحراري للابنية والمنشآت
                                الصناعية ولكافة المشاريع الكبرى.
                            </p>
                        </div>
                        <div class="flex flex-col">
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
                            <p
                                class="mt-6 text-base font-medium leading-relaxed text-gray-500 lg:text-lg"
                            >
                                متخصصون في اعمال العزل الحراري للابنية والمنشآت
                                الصناعية ولكافة المشاريع الكبرى.
                            </p>
                        </div>
                    </div>
                    <div class="flex gap-x-2 md:gap-x-2">
                        <div class="flex flex-col">
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
                            <p
                                class="mt-6 text-base font-medium leading-relaxed text-gray-500 lg:text-lg"
                            >
                                متخصصون في اعمال العزل الحراري للابنية والمنشآت
                                الصناعية ولكافة المشاريع الكبرى.
                            </p>
                        </div>
                        <div class="flex flex-col">
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
                            <p
                                class="mt-6 text-base font-medium leading-relaxed text-gray-500 lg:text-lg"
                            >
                                متخصصون في اعمال العزل الحراري للابنية والمنشآت
                                الصناعية ولكافة المشاريع الكبرى.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import SectionTitleShadow from "@/Components/SectionTitleShadow.vue";
import { Link } from "@inertiajs/vue3";

const props = defineProps({
    service: Object,
});

console.log(props.service);
</script>

<style></style>
