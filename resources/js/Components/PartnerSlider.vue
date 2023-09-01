<script>
import { ref, computed, nextTick, reactive } from "vue";
import { Carousel, Navigation, Slide, Pagination } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import SectionTitleShadow from "@/Components/SectionTitleShadow.vue";
export default {
    props: {
        items: {
            type: Array,
            required: true,
        },
    },
    components: {
        Carousel,
        Navigation,
        Pagination,
        Slide,
        SectionTitleShadow,
    },
    setup(props) {
        const slider = ref(null);

        const settings = reactive({
            itemsToShow: 2,
            snapAlign: "center",
            wrapAround: true,
            autoplay: false,
        });

        const breakpoints = {
            100: {
                itemsToShow: 4,
                snapAlign: "center",
            },
            640: {
                itemsToShow: 4,
                snapAlign: "center",
            },
            700: {
                itemsToShow: 4,
                snapAlign: "start",
            },
            768: {
                itemsToShow: 5,
                snapAlign: "start",
            },
            1024: {
                itemsToShow: 6,
                snapAlign: "start",
            },
            1100: {
                itemsToShow: 6,
                snapAlign: "start",
            },
            1280: {
                itemsToShow: 8,
                snapAlign: "start",
            },
            1640: {
                itemsToShow: 9,
                snapAlign: "start",
            },
            1720: {
                itemsToShow: 10,
                snapAlign: "start",
            },
            1920: {
                itemsToShow: 11,
                snapAlign: "start",
            },
        };

        const autoplaySlider = (faster = false) => {
            if (settings.autoplay === false) {
                settings.autoplay = faster ? 2000 : 3000;

                slider.value.restartCarousel();
            }
        };

        const previous = () => {
            slider.value.prev();
            slider.value.updateSlideWidth();
        };

        const next = () => {
            slider.value.next();
            slider.value.updateSlideWidth();
        };

        return {
            settings,
            autoplaySlider,
            breakpoints,
            slider,
            previous,
            next,
        };
    },
};
</script>
<template>
    <div class="container px-6 mx-auto bg-sidewhite max-w-7xl">
        <SectionTitleShadow>
            <template #upper-title>
                {{ $t("partners-upper") }}
            </template>
            <template #title>
                {{ $t("partners") }}
            </template>
        </SectionTitleShadow>
        <p class="mt-4 text-lg font-medium text-gray-500">
            {{ $t("partners-desc") }}
        </p>
        <div
            class="mb-40 mt-20 flex bg-sidewhite flex-col items-center overflow-hidden select-none rtl:xl:flex-row-reverse xl:items-center xl:h-[5rem] ltr:xl:flex-row-reverse xl:space-x-20 ltr:xl:space-x-reverse xl:px-4"
        >
            <Carousel
                ref="slider"
                @click="autoplaySlider"
                class="w-full p-2"
                :settings="settings"
                :breakpoints="breakpoints"
            >
                <Slide
                    v-for="({ image, title, classes }, index) in items"
                    :key="index"
                    class="select-none"
                >
                    <img
                        loading="lazy"
                        class="xl:!h-16 xl:w-20 !h-[5rem] select-none aspect-square grayscale"
                        :src="image"
                        :alt="title"
                        :class="classes"
                    />
                </Slide>
            </Carousel>
        </div>
    </div>
</template>

<style></style>
