<template>
    <div class="relative">
        <div class="relative">
            <img
                :src="project.main_image"
                :alt="project.title"
                class="object-cover w-full h-auto duration-300 rounded-lg cursor-pointer hover:opacity-80"
            />
            <div
                class="absolute flex justify-center px-5 py-4 text-white rounded-full cursor-pointer right-5 bottom-10 bg-rose-900 hover:bg-rose-800"
            >
                <Link :href="route('show.projects', project.slug)">
                    {{ $t("why.us-read.more") }}
                </Link>
            </div>
        </div>

        <div
            class="absolute inset-0 flex items-center justify-center text-white bg-gray-900 rounded-lg opacity-0 hover:opacity-75"
        >
            <div class="flex flex-col items-center justify-center text-center">
                <h3 class="px-2 text-lg font-semibold">{{ project.title }}</h3>
                <p class="px-2 mt-2">{{ project.description }}</p>
                <div
                    class="flex justify-center px-5 py-4 mt-4 text-white rounded-full cursor-pointer bg-rose-900 hover:bg-rose-800"
                >
                    <Link :href="route('show.projects', project.slug)">
                        {{ $t("why.us-read.more") }}
                    </Link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Link } from "@inertiajs/vue3";
import { ref } from "vue";
defineProps({
    project: Object,
});
</script>
<style scoped>
.relative:hover .absolute.right-5 {
    display: none;
}
</style>
