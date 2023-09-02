<template>
    <div
        class="relative h-3 mt-12 bg-gray-200 rounded-full"
        ref="progressBarContainer"
    >
        <div
            class="h-full rounded-full bg-rose-900"
            :style="{ width: progressBarWidth + '%' }"
        >
            <div
                class="absolute bottom-[-6px] transform -translate-x-1/2 rtl:translate-x-1/2 w-6 h-6 bg-rose-900 text-white text-xs rounded-full flex items-center justify-center"
                :style="{
                    [$page.props.locale[0].currentLocaleCode === 'ar'
                        ? 'right'
                        : 'left']: progressBarWidth + '%',
                }"
            >
                <span class="mt-1">{{ progressBarCounter }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        targetNumber: {
            type: Number,
            required: true,
        },
        endDigit: {
            type: Number,
            default: 0,
        },
    },
    data() {
        return {
            progressBarCounter: 0,
            progressBarWidth: 0,
        };
    },
    mounted() {
        this.observeSection();
    },
    methods: {
        observeSection() {
            const options = {
                rootMargin: "0px",
                threshold: 0.5, // Adjust this threshold as needed
            };

            const observer = new IntersectionObserver(
                this.handleIntersect,
                options
            );
            observer.observe(this.$refs.progressBarContainer);
        },
        handleIntersect(entries) {
            if (entries[0].isIntersecting) {
                this.startProgressBar();
            }
        },
        startProgressBar() {
            const interval = 50; // Milliseconds
            const targetNumber = this.targetNumber;

            const progressBarInterval = setInterval(() => {
                if (this.progressBarCounter >= targetNumber) {
                    clearInterval(progressBarInterval);
                } else {
                    this.progressBarCounter++;
                    this.progressBarWidth =
                        (this.progressBarCounter / targetNumber) *
                        this.endDigit;
                }
            }, interval);
        },
    },
};
</script>

<style scoped>
/* Add your styling here */
</style>
