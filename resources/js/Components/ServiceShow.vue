<template>
    <section class="container mx-auto mt-16 max-w-7xl">
        <img class="m-auto image-width" :src="service.main_image" alt="" />
        <div class="flex flex-col-reverse mx-3 my-10 md:mt-20 md:flex-row">

            <div class="flex-grow">
                <SectionTitleShadow>
                    <template #upper-title>
                        {{ service . name }}
                    </template>
                    <template #title>
                        {{ service . name }}
                    </template>
                </SectionTitleShadow>

                <p class="mt-8 text-lg font-medium text-gray-500">
                    {{ service . body }}
                </p>
                <div class="flex flex-col gap-8 px-4 mt-10">
                    <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
                        <div v-for="(service, index) in service.additional_info" :key="index" class="m-auto">
                            <div class="flex flex-col">
                                <div class="flex items-center space-x-6 rtl:space-x-reverse">
                                    <img src="/storage/images/check.svg" class="w-6" loading="lazy" alt="" />
                                    <p class="mt-1.5 text-base lg:text-xl font-semibold text-gray-800">
                                        {{ service . title }}
                                    </p>
                                </div>
                                <p class="mt-6 text-base font-medium leading-relaxed text-gray-500 lg:text-lg"
                                    style="max-width: 400px;">
                                    {{ service . description }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<script setup>
    import SectionTitleShadow from "@/Components/SectionTitleShadow.vue";
    import {    
        Link
    } from "@inertiajs/vue3";

    const props = defineProps({
        service: Object,
    });

    console.log(props.service);
</script>

<style>
    .image-width {
        width: 70% !important;
        height: 400px;
    }
</style>
