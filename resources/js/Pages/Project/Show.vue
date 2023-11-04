<script setup>
    import {
        ref
    } from "vue";

    import AppLayout from "@/Layouts/AppLayout.vue";
    import ImageCarousel from "@/Components/ImageCarousel.vue";
    import SectionTitleShadow from "@/Components/SectionTitleShadow.vue";
    import ProjectDescription from "@/Components/ProjectDescription.vue";
    const props = defineProps({
        project: Object,
    });
    const openTab = ref(1);

    const toggleTabs = (tabNumber) => {
        openTab.value = tabNumber;
    };
</script>

<template>
    <AppLayout title="Dashboard">
        <main class="pt-8 pb-16 bg-white lg:pt-16 lg:pb-24 dark:bg-gray-900">
            <div class="flex justify-between max-w-screen-xl px-4 mx-auto">
                <article class="px-4 mx-auto w-100">
                    <div class="flex flex-col justify-between lg:flex-row lg:space-x-20 rtl:space-x-reverse">
                        <div class="w-full m-5 space-y-10 lg:w-1/2">
                            <header class="mb-4 lg:mb-6 not-format">
                                <div class="flex flex-col">
                                    <SectionTitleShadow>
                                        <template #upper-title>
                                            <span class="text-3xl md:text-4xl">{{ project . title }}</span>
                                        </template>
                                        <template #title>
                                            <span class="text-2xl md:text-3xl">{{ project . title }}</span>
                                        </template>
                                    </SectionTitleShadow>
                                </div>
                            </header>
                            <div class="flex flex-col space-y-8 font-medium ">
                                <div class="items-center space-x-2 rtl:space-x-reverse">
                                    <p>{{ $t('agent') }}</p>
                                    <p class="font-semibold">
                                        {{ project . agent }}
                                    </p>
                                </div>

                                <div class="items-center space-x-2 rtl:space-x-reverse">
                                    <p>
                                        {{ $t('location') }}
                                    </p>

                                    <p class="font-semibold">
                                        {{ project . address }}
                                    </p>
                                </div>

                                <div class="items-center space-x-2 rtl:space-x-reverse">
                                    <p>
                                        {{ $t('project-date') }}
                                    </p>

                                    <p class="font-semibold">
                                        {{ project . date }}
                                    </p>
                                </div>

                                <div class="items-center space-x-2 rtl:space-x-reverse">
                                    <p>
                                        {{ $t('space-area') }}
                                    </p>

                                    <p class="font-semibold">
                                        {{ project . space_area }} &#13217;
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="lg:w-1/2">
                            <!-- <ImageCarousel :Gallery="project.images" /> -->
                            <ProjectDescription :project="project" />
                        </div>
                    </div>
                </article>

            </div>


            <ul class="flex m-5 space-x-2 md:w-2/5 md:m-auto">
                <li class="flex-auto p-1 text-center">
                    <a class="block p-2 mt-5 font-bold leading-normal uppercase rounded shadow-lg text-md md:text-lg"
                        v-on:click="toggleTabs(1)"
                        v-bind:class="{
                        'text-rose-900 bg-white border-2 border-rose-900':
                            openTab !== 1,
                        'text-white bg-rose-900 border-2 border-rose-900':
                            openTab === 1,
                    }">
                        {{ $t('project.images') }}
                    </a>
                </li>
                <li class="flex-auto p-1 text-center">
                    <a class="block p-2 mt-5 font-bold leading-normal uppercase rounded shadow-lg text-md md:text-lg"
                        v-on:click="toggleTabs(2)"
                        v-bind:class="{
                        'text-rose-900 bg-white border-2 border-rose-900':
                            openTab !== 2,
                        'text-white bg-rose-900 border-2 border-rose-900':
                            openTab === 2,
                    }">
                        {{ $t('project.videos') }}
                    </a>
                </li>
            </ul>

            <div v-if="
                openTab === 1
            " class="container m-auto max-w-4xl mt-6 mx-auto w-[92%]">
                <div class="flex flex-wrap rtl:space-x-reverse">
                    <div v-for="image in project.images" :key="image" class="w-full p-2 sm:w-1/2 lg:w-1/3">
                        <img :src="image" alt="" class="w-64 m-auto rounded-lg">
                    </div>
                </div>
            </div>

            <div v-if="
                openTab === 2
                " class="container m-auto max-w-4xl mt-6 mx-auto w-[92%]">
                <div class="flex flex-wrap rtl:space-x-reverse">
                    <div v-for="video in project.videos" :key="video" class="w-full p-2 sm:w-1/2 lg:w-1/3">
                        <!-- <img :src="video" alt="" class="w-64 m-auto rounded-lg"> -->
                        <!-- <video>
                            <source :src="video" type="video/mp4">
                        </video> -->
                        <!-- <h1>{{ video }}</h1> -->
                        <video width="320" height="240" controls>
                            <source :src="video" type="video/mp4">
                            <source :src="video" type="video/ogg">
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>

            <!-- <ProjectDescription class="mt-4" :project="project" /> -->
        </main>
    </AppLayout>
</template>
