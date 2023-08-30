<script setup>
<<<<<<< HEAD
import AppLayout from "@/Layouts/AppLayout.vue";
import { defineProps } from "vue";
import ImageWithDetails from "@/Components/ImageWithDetails.vue";
import SectionTitleShadow from "@/Components/SectionTitleShadow.vue";
const props = defineProps({
    project: Object,
});
=======
    import AppLayout from "@/Layouts/AppLayout.vue";
    import ImageCarousel from "@/Components/ImageCarousel.vue";
    import {
        defineProps
    } from "vue";
    import SectionTitleShadow from "@/Components/SectionTitleShadow.vue";
    const props = defineProps({
        project: Object,
    });
>>>>>>> new-feature
</script>

<template>
    <AppLayout title="Dashboard">
        <main class="pt-8 pb-16 bg-white lg:pt-16 lg:pb-24 dark:bg-gray-900">
<<<<<<< HEAD
            <div class="flex justify-between max-w-screen-xl px-4 mx-auto">
                <article class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div
                        class="flex flex-col justify-between space-x-10 md:flex-row lg:space-x-20 rtl:space-x-reverse"
                    >
                        <div class="space-y-10">
=======

            <div class="flex justify-between max-w-screen-xl px-4 mx-auto">
                <article class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div class="flex flex-col justify-between space-x-10 md:flex-row lg:space-x-20 rtl:space-x-reverse">
                        <div class="w-1/2 space-y-10">
>>>>>>> new-feature
                            <header class="mb-4 lg:mb-6 not-format">
                                <div class="flex flex-col items-center">
                                    <SectionTitleShadow>
                                        <template #upper-title>
<<<<<<< HEAD
                                            <span
                                                class="text-3xl md:text-4xl"
                                                >{{ project.title.ar }}</span
                                            >
                                        </template>
                                        <template #title>
                                            <span
                                                class="text-2xl md:text-3xl"
                                                >{{ project.title.ar }}</span
                                            >
=======
                                            <span class="text-3xl md:text-4xl">{{ project . title }}</span>
                                        </template>
                                        <template #title>
                                            <span class="text-2xl md:text-3xl">{{ project . title }}</span>
>>>>>>> new-feature
                                        </template>
                                    </SectionTitleShadow>
                                </div>
                            </header>
                            <div class="flex flex-col space-y-8 font-medium">
<<<<<<< HEAD
                                <div
                                    class="flex items-center space-x-2 rtl:space-x-reverse"
                                >
                                    <p>العميل</p>
                                    <hr
                                        class="h-px border-0 rounded w-60 lg:w-80 bg-rose-900"
                                    />
                                    <p class="font-semibold">
                                        {{ project.agent.ar }}
                                    </p>
                                </div>

                                <div
                                    class="flex items-center space-x-2 rtl:space-x-reverse"
                                >
                                    <p>الموقع</p>
                                    <hr
                                        class="h-px border-0 rounded w-60 lg:w-80 bg-rose-900"
                                    />
                                    <p class="font-semibold">
                                        {{ project.address.ar }}
                                    </p>
                                </div>

                                <div
                                    class="flex items-center space-x-2 rtl:space-x-reverse"
                                >
                                    <p>التاريخ</p>
                                    <hr
                                        class="h-px border-0 rounded w-60 lg:w-80 bg-rose-900"
                                    />
                                    <p class="font-semibold">
                                        {{ project.date }}
                                    </p>
                                </div>

                                <div
                                    class="flex items-center space-x-2 rtl:space-x-reverse"
                                >
                                    <p>المساحة</p>
                                    <hr
                                        class="h-px border-0 rounded w-60 lg:w-80 bg-rose-900"
                                    />
                                    <p class="font-semibold">
                                        {{ project.space_area }} &#13217;
=======
                                <div class="flex items-center space-x-2 rtl:space-x-reverse">
                                    <p>العميل</p>
                                    <hr class="h-px border-0 rounded w-60 lg:w-80 bg-rose-900" />
                                    <p class="font-semibold">
                                        {{ project . agent }}
                                    </p>
                                </div>

                                <div class="flex items-center space-x-2 rtl:space-x-reverse">
                                    <p>الموقع</p>
                                    <hr class="h-px border-0 rounded w-60 lg:w-80 bg-rose-900" />
                                    <p class="font-semibold">
                                        {{ project . address }}
                                    </p>
                                </div>

                                <div class="flex items-center space-x-2 rtl:space-x-reverse">
                                    <p>التاريخ</p>
                                    <hr class="h-px border-0 rounded w-60 lg:w-80 bg-rose-900" />
                                    <p class="font-semibold">
                                        {{ project . date }}
                                    </p>
                                </div>

                                <div class="flex items-center space-x-2 rtl:space-x-reverse">
                                    <p>المساحة</p>
                                    <hr class="h-px border-0 rounded w-60 lg:w-80 bg-rose-900" />
                                    <p class="font-semibold">
                                        {{ project . space_area }} &#13217;
>>>>>>> new-feature
                                    </p>
                                </div>
                            </div>
                            <!-- <div class="leading-9">
<<<<<<< HEAD
                                {{ project.description.ar }}
                            </div> -->
                        </div>
                        <img
                            src="/storage/1/720.webp"
                            class="rounded-lg w-96 h-96 lg:w-[33rem] lg:h-[35rem] object-cover object-center"
                            alt=""
                        />
=======
                                {{ project . description }}
                            </div> -->
                        </div>
                        <!-- <img src="/storage/1/720.webp"
                            class="rounded-lg w-96 h-96 lg:w-[33rem] lg:h-[35rem] object-cover object-center" alt="" /> -->
                        <div class="w-1/2 m-auto">
                            <ImageCarousel :Gallery="project.images" />
                        </div>
>>>>>>> new-feature
                    </div>
                </article>
            </div>

            <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">asd</div>
        </main>
    </AppLayout>
</template>
