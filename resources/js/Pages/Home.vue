<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import "vue3-carousel/dist/carousel.css";
import BannerSlider from "@/Components/BannerSlider.vue";
import WhyUs from "@/Components/WhyUs.vue";
import WhoWeAre from "@/Components/WhoWeAre.vue";
import PartnerSlider from "@/Components/PartnerSlider.vue";
import HomeProjects from "@/Components/HomeProjects.vue";
import StartPlanning from "@/Components/StartPlanning.vue";
import ServicesSection from "@/Components/ServicesSection.vue";
import { Link } from "@inertiajs/vue3";
import { onMounted, ref } from "vue";

const props = defineProps({
    services_qatarya: Object,
    services_othman: Object,
    blogs: Object,
    project: Object,
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
</script>

<template>
    <AppLayout title="القطرىة">
        <!-- hero section -->
        <BannerSlider />

        <!-- services -->
        <ServicesSection
            :services_qatarya="services_qatarya"
            :services_othman="services_othman"
        />

        <!-- projects -->
        <HomeProjects class="mt-10" :project="project" />

        <!-- why  -->
        <WhyUs class="mt-10" />

        <!-- who we are -->
        <WhoWeAre class="mt-10" />

        <!-- partners slider -->
        <PartnerSlider :items="sponsors" class="mt-10" />

        <!-- start planning your project -->
        <StartPlanning class="-mt-20" />
    </AppLayout>
</template>
