<template>
    <div class="slider">
        <transition name="slide-fade" mode="out-in">
            <div :key="currentSlideIndex" class="slide">
                <img :src="slides[currentSlideIndex].image" alt="Banner" />
                <div
                    class="container right-0 px-8 mx-auto text-gray-50 text max-w-7xl rtl:left-0"
                    :class="{ animate: animateText }"
                >
                    <p class="text-2xl md:text-4xl">
                        <!-- {{ slides[currentSlideIndex].text }} -->
                        {{ $t("banner.title") }}
                    </p>
                    <div>
                        <p class="mt-8 text-md md:text-xl md:w-[27rem]">
                            {{ $t("banner.desc") }}
                        </p>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
// JavaScript code to change the CSS variable value

export default {
    data() {
        return {
            currentSlideIndex: 0,
            slides: [
                {
                    image: "/storage/images/banner1.png",
                    text: "شركة القطرية للعوازل",
                    description:
                        "توفر شركة القطريه مجموعة مدربة و متميزة من الفنيين لتوفير أعلي مستويات بتقنية عالية و بأقل وقت ممكن",
                },
                {
                    image: "/storage/images/banner2.png",
                    text: "شركة القطرية للعوازل",
                    description:
                        "توفر شركة القطريه مجموعة مدربة و متميزة من الفنيين لتوفير  أعلي مستويات بتقنية عالية و بأقل وقت ممكن",
                },
                {
                    image: "/storage/images/banner3.png",
                    text: "شركة القطرية للعوازل",
                    description:
                        "توفر شركة القطريه مجموعة مدربة و متميزة من الفنيين لتوفير أعلي مستويات بتقنية عالية و بأقل وقت ممكن",
                },
                // Add more slides here
            ],
            animateText: false,
        };
    },
    created() {
        this.startSlideShow();
    },
    methods: {
        startSlideShow() {
            setInterval(this.nextSlide, 5000);
        },
        nextSlide() {
            this.animateText = false;
            setTimeout(() => {
                this.currentSlideIndex =
                    (this.currentSlideIndex + 1) % this.slides.length;
                this.animateText = false;
            }, 300); // Delay text animation after slide change
        },
    },
};
</script>

<style scoped>
:root {
    --translateXValue: 100%; /* Define your variable with a default value */
}

.slide {
    position: relative;
    width: 100%;
    height: 44rem; /* Adjust as needed */
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.text {
    position: absolute;
    top: 40%; /* Initial position above the slide */
    width: 100%;
    transition: top 0.5s;
}

.animate {
    top: 40%; /* Final centered position */
}

/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

[dir="rtl"] .slide-fade-enter-from,
[dir="rtl"] .slide-fade-leave-to {
    transform: translateX(100%);
    opacity: 0;
}

[dir="ltr"] .slide-fade-enter-from,
[dir="ltr"] .slide-fade-leave-to {
    transform: translateX(-100%);
    opacity: 0;
}
</style>
