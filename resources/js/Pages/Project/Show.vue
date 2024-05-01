<script setup>
import { ref } from "vue";

import AppLayout from "@/Layouts/AppLayout.vue";
import ImageCarousel from "@/Components/ImageCarousel.vue";
import SectionTitleShadow from "@/Components/SectionTitleShadow.vue";

const props = defineProps({
    project: Object,
});
const openTab = ref(1);
const selectedImage = ref(null);

const toggleTabs = (tabNumber) => {
    openTab.value = tabNumber;
};

const openModal = (image) => {
    selectedImage.value = image;
};

const closeModal = () => {
    selectedImage.value = null;
};
</script>

<template>
    <AppLayout title="Dashboard">
        <main class="pt-8 pb-16 bg-white lg:pt-16 lg:pb-24 dark:bg-gray-900">
            <div class="flex justify-between max-w-screen-xl px-4 mx-auto">
                <article class="px-4 mx-auto w-100">
                    <div
                        class="flex flex-col justify-between lg:flex-row lg:space-x-40 rtl:space-x-reverse"
                    >
                        <div class="m-5 space-y-10 text-center md:w-96">
                            <header class="mb-4 lg:mb-6 not-format">
                                <div class="flex flex-col">
                                    <SectionTitleShadow>
                                        <template #upper-title>
                                            <span class="text-3xl">{{
                                                project.title
                                            }}</span>
                                        </template>
                                        <template #title>
                                            <span class="text-2xl">{{
                                                project.title
                                            }}</span>
                                        </template>
                                    </SectionTitleShadow>
                                </div>
                            </header>
                            <div class="flex flex-col space-y-8 font-medium">
                                <div
                                    class="items-center space-x-2 rtl:space-x-reverse"
                                >
                                    <p>{{ $t("agent") }}</p>
                                    <p class="font-semibold">
                                        {{ project.agent }}
                                    </p>
                                </div>

                                <div
                                    class="items-center space-x-2 rtl:space-x-reverse"
                                >
                                    <p>
                                        {{ $t("location") }}
                                    </p>

                                    <p class="font-semibold">
                                        {{ project.address }}
                                    </p>
                                </div>

                                <div
                                    class="items-center space-x-2 rtl:space-x-reverse"
                                >
                                    <p>
                                        {{ $t("project-date") }}
                                    </p>

                                    <p class="font-semibold">
                                        {{ project.date }}
                                    </p>
                                </div>

                                <div
                                    class="items-center space-x-2 rtl:space-x-reverse"
                                >
                                    <p>
                                        {{ $t("space-area") }}
                                    </p>

                                    <p class="font-semibold">
                                        {{ project.space_area }} &#13217;
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="m-5 space-y-10 text-center md:w-96">
                            <header class="mb-4 lg:mb-6 not-format">
                                <div class="flex flex-col">
                                    <SectionTitleShadow>
                                        <template #upper-title>
                                            {{ $t("project.desc.upper") }}
                                        </template>
                                        <template #title>
                                            {{ $t("project.desc") }}
                                        </template>
                                    </SectionTitleShadow>

                                    <div
                                        v-html="project.description"
                                        class="mt-10 text-lg font-medium text-gray-500"
                                    ></div>
                                </div>
                            </header>
                        </div>
                    </div>
                </article>
            </div>

            <ul class="flex m-5 space-x-2 md:w-2/5 md:m-auto">
                <li class="flex-auto p-1 text-center">
                    <a
                        class="block p-2 mt-5 font-bold leading-normal uppercase rounded shadow-lg text-md md:text-lg"
                        v-on:click="toggleTabs(1)"
                        v-bind:class="{
                            'text-rose-900 bg-white border-2 border-rose-900':
                                openTab !== 1,
                            'text-white bg-rose-900 border-2 border-rose-900':
                                openTab === 1,
                        }"
                    >
                        {{ $t("project.images") }}
                    </a>
                </li>
                <li class="flex-auto p-1 text-center">
                    <a
                        class="block p-2 mt-5 font-bold leading-normal uppercase rounded shadow-lg text-md md:text-lg"
                        v-on:click="toggleTabs(2)"
                        v-bind:class="{
                            'text-rose-900 bg-white border-2 border-rose-900':
                                openTab !== 2,
                            'text-white bg-rose-900 border-2 border-rose-900':
                                openTab === 2,
                        }"
                    >
                        {{ $t("project.videos") }}
                    </a>
                </li>
            </ul>

            <div
                v-if="openTab === 1"
                class="container m-auto max-w-4xl mt-6 mx-auto w-[92%]"
            >
                <div class="flex flex-wrap rtl:space-x-reverse">
                    <div
                        v-for="image in project.images"
                        :key="image"
                        class="w-full p-2 sm:w-1/2 lg:w-1/3"
                    >
                        <img
                            class="w-64 h-56 m-auto rounded-lg gallery"
                            :src="image"
                            @click="openModal(image)"
                            alt=""
                        />
                    </div>
                    <div v-if="selectedImage" class="modal">
                        <div class="modal-content">
                            <span class="close" @click="closeModal"
                                >&times;</span
                            >
                            <img :src="selectedImage" :alt="`Enlarged Image`" />
                        </div>
                    </div>
                </div>
            </div>

            <div
                v-if="openTab === 2"
                class="container m-auto max-w-4xl mt-6 mx-auto w-[92%]"
            >
                <div class="flex flex-wrap justify-center rtl:space-x-reverse">
                    <!-- if there is videos -->
                    <div
                        v-if="project.videos.length > 0"
                        class="flex flex-wrap justify-center rtl:space-x-reverse"
                    >
                        <div
                            v-for="video in project.videos"
                            :key="video"
                            class="flex items-center justify-center p-2"
                        >
                            <video
                                class="h-72 w-[30rem] sm:w-[17rem] rounded-md bg-black"
                                controls
                            >
                                <source :src="video" type="video/mp4" />
                                <source :src="video" type="video/ogg" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    <!-- else -->
                    <div v-else class="flex flex-wrap rtl:space-x-reverse">
                        <div class="w-full p-2 sm:w-1/2 lg:w-1/3">
                            <p
                                style="width: max-content"
                                class="text-lg font-medium text-center text-gray-500"
                            >
                                {{ $t("project.no-videos") }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </AppLayout>
</template>

<style scoped>
/* Gallery styles */
.gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.gallery img {
    cursor: pointer;
    margin: 10px;
}

/* Modal styles */
.modal {
    display: block;
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent overlay */
}

.modal-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fefefe;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.close {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
}
</style>
