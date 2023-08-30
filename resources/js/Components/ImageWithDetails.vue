<template>
    <div class="relative">
        <Link :href="route('show.projects', project.slug)">

        <img :src="project.image" :alt="project.title"
            class="object-cover w-full h-auto duration-300 rounded-lg cursor-pointer hover:opacity-80" />

        <div
            class="absolute inset-0 flex items-center justify-center text-white bg-gray-900 rounded-lg opacity-0 hover:opacity-75">
            <div class="text-center">
                <h3 class="text-lg font-semibold">{{ project . title }}</h3>
                <p class="mt-2">{{ project . description }}</p>
            </div>

        </div>
        </Link>

    </div>
</template>

<script setup>
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
