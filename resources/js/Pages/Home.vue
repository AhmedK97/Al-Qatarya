<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import "vue3-carousel/dist/carousel.css";
import Slider from "@/Pages/Slider.vue";
import BannerSlider from "@/Components/BannerSlider.vue";
import Pagination from "@/Components/Pagination.vue";
import BlogsCards from "@/Components/BlogsCards.vue";
import Services from "@/Components/Services.vue";
import WhyUs from "@/Components/WhyUs.vue";
import WhoWeAre from "@/Components/WhoWeAre.vue";
// import "@lottiefiles/lottie-player";
import "@ebcom/dotlottie-player";
import PartnerSlider from "@/Components/PartnerSlider.vue";
import HomeProjects from "@/Components/HomeProjects.vue";
import StartPlanning from "@/Components/StartPlanning.vue";
import ServicesTop from "@/Components/ServicesTop.vue";

import { Link } from "@inertiajs/vue3";
import { onMounted, ref } from "vue";

const props = defineProps({
    services_qatarya: Object,
    services_othman: Object,
    blogs: Object,
    project: Object,
    services: Object,
});

console.log(props.project);

const lottiePlayButton = onMounted(() => {
    // Find the element by its ID
    const lottiePlayButton = document.getElementById("lottie-play-button");

    // Trigger a click event on the element
    if (lottiePlayButton) {
        lottiePlayButton.click();
    }
});

const sponsors = [
    {
        title: "alfanar",
        image: "storage/1/720.webp",
    },
    {
        title: "alhabib",
        image: "storage/1/720.webp",
    },
    {
        title: "Almarai",
        image: "storage/1/720.webp",
    },
    {
        title: "al-nahdi",
        image: "storage/1/720.webp",
    },

    {
        title: "Alshaya",
        image: "storage/1/720.webp",
    },
    {
        title: "elm",
        image: "storage/1/720.webp",
    },

    {
        title: "qiddiya",
        image: "storage/1/720.webp",
    },
    {
        title: "riyadh-airports",
        image: "storage/1/720.webp",
    },
    {
        title: "sary",
        image: "storage/1/720.webp",
    },
];

const openTab = ref(1);

const toggleTabs = (tabNumber) => {
    openTab.value = tabNumber;
};
</script>

<template>
    <AppLayout title="القطرىة">
        <!-- hero section -->
        <BannerSlider />

        <!-- services top -->

        <!-- services_othman or services_qatarya based on active tap  -->

        <div class="container px-4 mx-auto max-w-7xl">
            <ul
                class="flex flex-row flex-wrap pt-3 pb-4 mb-0 space-x-2 list-none rtl:space-x-reverse"
            >
                <li class="flex-auto text-center">
                    <a
                        class="block p-5 text-xs font-bold leading-normal uppercase rounded shadow-lg md:text-lg"
                        v-on:click="toggleTabs(1)"
                        v-bind:class="{
                            'text-rose-900 bg-white': openTab !== 1,
                            'text-secondary-700 bg-rose-900': openTab === 1,
                        }"
                    >
                        {{ $t("insulation") }}
                    </a>
                </li>
                <li class="flex-auto text-center">
                    <a
                        class="block p-5 text-xs font-bold leading-normal uppercase rounded shadow-lg md:text-lg"
                        v-on:click="toggleTabs(2)"
                        v-bind:class="{
                            'text-rose-900 bg-white': openTab !== 2,
                            'text-secondary-700 bg-rose-900': openTab === 2,
                        }"
                    >
                        {{ $t("buildings") }}
                    </a>
                </li>
            </ul>
            <ServicesTop
                :class="{
                    hidden: openTab !== 1,
                    block: openTab === 1,
                }"
                class="md:mt-16"
                :services_qatarya="services_qatarya"
            >
                {{ $t("services.insulation") }}
            </ServicesTop>

            <!-- services  -->
            <Services
                :class="{
                    hidden: openTab !== 1,
                    block: openTab === 1,
                }"
                class="mt-20 md:mt-40"
                :services_qatarya="services_qatarya"
            />

            <ServicesTop
                :class="{
                    hidden: openTab !== 2,
                    block: openTab === 2,
                }"
                class="md:mt-16"
                :services_othman="services_othman"
            >
                {{ $t("services.buildings") }}
            </ServicesTop>

            <!-- services  -->
            <Services
                :class="{
                    hidden: openTab !== 2,
                    block: openTab === 2,
                }"
                class="mt-20 md:mt-40"
                :services_othman="services_othman"
            />
        </div>

        <!-- projects -->
        <HomeProjects class="mt-20 md:mt-40" :project="project" />

        <!-- why  -->
        <WhyUs class="mt-20 md:mt-40" />

        <!-- who we are -->
        <WhoWeAre class="mt-20 md:mt-40" />

        <!-- partners slider -->
        <PartnerSlider :items="sponsors" class="mt-20 md:mt-40" />

        <!-- start planning your project -->
        <StartPlanning />
    </AppLayout>
</template>
