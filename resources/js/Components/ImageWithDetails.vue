<template>
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
    </div>
</template>

<script setup>
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
