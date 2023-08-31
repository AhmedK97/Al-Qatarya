<template>
    <div class="relative h-8">
        <div
            class="h-full bg-blue-500"
            :style="{ width: progressBarWidth + '%' }"
        >
            {{ progressBarWidth }}
        </div>
    </div>
</template>

<script>
export default {
    props: ["targetNumber"],
    data() {
        return {
            progressBarWidth: 0,
        };
    },
    mounted() {
        this.startProgressBar();
    },
    methods: {
        startProgressBar() {
            const interval = 50; // Milliseconds
            let currentNumber = 0;

            const progressBarInterval = setInterval(() => {
                if (currentNumber >= this.targetNumber) {
                    clearInterval(progressBarInterval);
                } else {
                    currentNumber++;
                    this.progressBarWidth =
                        (currentNumber / this.targetNumber) * 100;
                }
            }, interval);
        },
    },
};
</script>

<style scoped>
/* Add your styling here */
</style>
