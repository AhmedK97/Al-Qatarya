<template>
    <div class="relative">
        <img
            :src="imageSrc"
            :alt="altText"
            class="object-cover w-full h-auto transition-opacity duration-300 rounded-lg cursor-pointer hover:opacity-80"
            @mouseenter="showDetails = true"
            @mouseleave="showDetails = false"
        />

        <!-- Image details -->
        <div
            v-if="showDetails"
            class="absolute inset-0 flex items-center justify-center text-white bg-gray-900 rounded-lg bg-opacity-80"
        >
            <div class="text-center">
                <h3 class="text-lg font-semibold">{{ title }}</h3>
                <p class="mt-2">{{ description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ImageWithDetails",
    props: {
        imageSrc: String,
        altText: String,
        title: String,
        description: String,
    },
    data() {
        return {
            showDetails: false,
        };
    },
};
</script>

<style scoped>
/* Add any necessary styling */
</style>
