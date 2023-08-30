<template>
<<<<<<< HEAD
    <div
        class="relative"
        @mouseover="showDetails = true"
        @mouseleave="showDetails = false"
        v-for="(proj, index) in project"
        :key="index"
    >
        <Link :href="route('show.projects', proj.slug)">
            <img
                :src="imageSrc"
                :alt="altText"
                class="object-cover w-full h-auto duration-300 rounded-lg cursor-pointer hover:opacity-80"
            />
        </Link>

        <!-- Image details -->
        <Link :href="route('show.projects', proj.slug)">
            <div
                v-if="showDetails"
                class="absolute inset-0 flex items-center justify-center text-white bg-gray-900 rounded-lg opacity-75"
            >
                <div class="text-center">
                    <h3 class="text-lg font-semibold">{{ proj.title }}</h3>
                    <p class="mt-2">{{ proj.description }}</p>
                </div>
            </div>
        </Link>
=======
    <div class="relative">
        <Link :href="route('show.projects', project.slug)">
        <img :src="project.main_image" :alt="project.title"
            class="object-cover w-full h-auto duration-300 rounded-lg cursor-pointer hover:opacity-80" />

        <div
            class="absolute inset-0 flex items-center justify-center text-white bg-gray-900 rounded-lg opacity-0 hover:opacity-75">
            <div class="text-center">
                <h3 class="text-lg font-semibold">{{ project . title }}</h3>
                <p class="mt-2">{{ project . description }}</p>
            </div>
        </div>
        </Link>

>>>>>>> new-feature
    </div>
</template>

<script setup>
<<<<<<< HEAD
import { ref } from "vue";
import { Link } from "@inertiajs/vue3";
defineProps({
    imageSrc: String,
    altText: String,
    title: String,
    description: String,
    project: Object,
});
// console.log(project);
const showDetails = ref(false);
</script>

<style scoped>
/* Add any necessary styling */
</style>
=======
    import {
        Link
    } from "@inertiajs/vue3";
    import {
        ref
    } from "vue";
    defineProps({
        project: Object,
    });
    const showDetails = ref(false);
</script>
>>>>>>> new-feature
