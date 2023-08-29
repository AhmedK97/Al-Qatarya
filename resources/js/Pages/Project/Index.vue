<template>
    <NavBar />
    <section class="bg-gray-50">
        <div class="container mx-auto my-20 max-w-7xl">
            <div class="flex flex-col items-center justify-center">
                <SectionTitleShadow>
                    <template #upper-title>
                        <span class="text-3xl md:text-4xl">{{
                            $t("faq.upper")
                        }}</span>
                    </template>
                    <template #title>
                        <span class="text-2xl md:text-3xl">{{
                            $t("faq.title")
                        }}</span>
                    </template>
                </SectionTitleShadow>
            </div>
            <div
                class="grid gap-6 px-6 mt-20 sm:grid-rows-3 sm:grid-cols-2 lg:grid-cols-4"
            >
                <!-- <Link :href="route('show.projects' + project.slug)"> -->
                <ImageWithDetails
                    v-for="(image, index) in images"
                    :key="index"
                    :imageSrc="image.src"
                    :altText="image.alt"
                    :title="image.title"
                    :description="image.description"
                />
                <!-- </Link> -->
            </div>
        </div>
    </section>
    <Footer />
</template>

<script setup>
import NavBar from "@/Components/NavBar.vue";
import Footer from "@/Components/Footer.vue";
import SectionTitleShadow from "@/Components/SectionTitleShadow.vue";
import ImageWithDetails from "@/Components/ImageWithDetails.vue";
import Gallery from "@/Components/Gallery.vue";
import { ref } from "vue";
import { Link } from "@inertiajs/vue3";

defineProps({
    project: Object,
});

const images = [
    {
        src: "/storage/1/720.webp",
        alt: "Image 1",
        title: "Image Title 1",
        description: "Description for Image 1",
    },
    {
        src: "/storage/1/720.webp",
        alt: "Image 1",
        title: "Image Title 1",
        description: "Description for Image 1",
    },
    {
        src: "/storage/1/720.webp",
        alt: "Image 1",
        title: "Image Title 1",
        description: "Description for Image 1",
    },
    {
        src: "/storage/1/720.webp",
        alt: "Image 1",
        title: "Image Title 1",
        description: "Description for Image 1",
    },
    {
        src: "/storage/1/720.webp",
        alt: "Image 1",
        title: "Image Title 1",
        description: "Description for Image 1",
    },
    {
        src: "/storage/1/720.webp",
        alt: "Image 1",
        title: "Image Title 1",
        description: "Description for Image 1",
    },
    // Add more images with details
];
</script>

<style></style>
