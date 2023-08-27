<template>
    <div class="relative h-2">
        <div
            class="absolute top-0 left-0 h-full bg-blue-500"
            :style="{ width: progressBarWidth + '%' }"
        ></div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const progressBarWidth = ref(0);
const sectionObserver = ref(null);

const updateProgressBar = (entries) => {
    const entry = entries[0];
    const scrollY = window.scrollY;

    if (entry.isIntersecting) {
        const progress =
            ((scrollY - entry.boundingClientRect.top) /
                entry.boundingClientRect.height) *
            100;
        progressBarWidth.value = Math.min(progress, 100);
    }
};

onMounted(() => {
    sectionObserver.value = new IntersectionObserver(updateProgressBar, {
        root: null,
        rootMargin: "0px",
        threshold: 0,
    });

    const sectionElement = document.querySelector("#my-section"); // Adjust the ID
    if (sectionElement) {
        sectionObserver.value.observe(sectionElement);
    }
});

onBeforeUnmount(() => {
    if (sectionObserver.value) {
        sectionObserver.value.disconnect();
    }
});
</script>

<style scoped>
/* Add your custom styling here */
</style>
