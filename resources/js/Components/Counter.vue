<template>
    <div
        class="flex flex-col items-center justify-center space-y-4"
        ref="sectionRef"
    >
        <div class="text-6xl font-normal" v-if="isVisible">
            {{ currentCount }}
        </div>
        <div
            class="flex justify-center px-5 py-2 text-base text-white rounded-full bg-rose-900 whitespace-nowrap hover:bg-rose-700"
        >
            <slot name="title" />
        </div>
    </div>
</template>

<script>
import { ref, onMounted, watch } from "vue";

export default {
    name: "Counter",
    props: {
        targetNumber: Number,
        intervalSpeed: {
            type: Number,
            default: 50, // Default interval speed
        },
    },
    setup(props) {
        const currentCount = ref(0);
        const isVisible = ref(false);
        const sectionRef = ref(null);
        let interval;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    isVisible.value = true;
                    startCounter();
                    observer.disconnect(); // Disconnect once the section is in view
                }
            },
            { threshold: 0.5 }
        );

        const startCounter = () => {
            interval = setInterval(() => {
                if (currentCount.value >= props.targetNumber) {
                    clearInterval(interval);
                } else {
                    currentCount.value++;
                }
            }, props.intervalSpeed); // Use the intervalSpeed prop
        };

        onMounted(() => {
            observer.observe(sectionRef.value);
        });

        watch(props.intervalSpeed, () => {
            // Update the interval speed if the prop changes
            clearInterval(interval);
            startCounter();
        });

        return {
            currentCount,
            isVisible,
            sectionRef,
        };
    },
};
</script>

<style>
/* Add any necessary styling for your counter section and counter element */
</style>
