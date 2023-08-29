<template>
    <div class="relative"
         @mouseover="showDetails = true"
         @mouseleave="showDetails = false">
        <img :src="imageSrc" :alt="altText"
            class="object-cover w-full h-auto duration-300 rounded-lg cursor-pointer hover:opacity-80" />

        <!-- Image details -->
        <div v-if="showDetails"
            class="absolute inset-0 flex items-center justify-center text-white bg-gray-900 rounded-lg opacity-75">
            <div class="text-center">
                <h3 class="text-lg font-semibold">{{ title }}</h3>
                <p class="mt-2">{{ description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {
        ref
    } from "vue";
    defineProps({
        imageSrc: String,
        altText: String,
        title: String,
        description: String,
    });
    const showDetails = ref(false);
</script>

<style scoped>
    /* Add any necessary styling */
</style>
