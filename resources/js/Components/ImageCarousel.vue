<template>
    <Carousel id="activeClasses" :breakpoints="breakpoints" :wrapAround="true" :autoplay="1500">
        <Slide v-for="gal in Gallery" :key="gal">
            <div>
                <div class="mb-10 carousel__item">
                    <img class="w-full mt-4 rounded-lg max-h-[20rem] lg:mt-10" loading="lazy" :src="gal"/>
                </div>
            </div>
        </Slide>
        <template #addons>
            <Navigation />
            <Pagination />
        </template>
    </Carousel>
</template>

<script setup>
import { Link } from "@inertiajs/vue3";
import { Carousel, Pagination, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
const props = defineProps({
    Gallery: Object,
});

const breakpoints = {
    100: {
        itemsToShow: 1.5,
    },
    600: {
        itemsToShow: 2,
    },
    700: {
        itemsToShow: 2,
    },
    768: {
        itemsToShow: 3,
    },
    1024: {
        itemsToShow: 2,
    },
};
</script>

<style scoped>
.carousel__viewport {
    perspective: 2000px;
}

.carousel__track {
    transform-style: preserve-3d;
}

.carousel__slide--sliding {
    transition: 0.5s;
}

.carousel__slide {
    opacity: 0.9;
    transform: rotateY(-20deg) scale(0.8);
}

.carousel__slide--active~.carousel__slide {
    transform: rotateY(20deg) scale(0.8);
}

.carousel__slide--prev {
    opacity: 1;
    transform: rotateY(-12deg) scale(0.85);
}

.carousel__slide.carousel__slide--next {
    opacity: 1;
    transform: rotateY(12deg) scale(0.85);
}

.carousel__slide--active {
    opacity: 1;
    transform: rotateY(0) scale(1);
}
</style>
