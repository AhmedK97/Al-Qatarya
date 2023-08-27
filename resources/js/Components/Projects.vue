<template>
    <div class="py-20 bg-rose-900">
        <div class="container px-5 mx-auto bg-sidewhite max-w-7xl">
            <SectionTitleShadow>
                <template #upper-title>
                    <span class="!text-secondary-700">
                        {{ $t("projects.upper") }}</span
                    >
                </template>
                <template #title>
                    <span class="!text-secondary-700">{{
                        $t("projects")
                    }}</span>
                </template>
            </SectionTitleShadow>
            <hr class="w-48 h-1 border-0 rounded bg-secondary-700" />
            <p class="mt-4 text-lg font-medium text-gray-50">
                {{ $t("partners-desc") }}
            </p>

            <!-- <div class="grid grid-cols-3 grid-rows-2 gap-6 mt-20">
                <img
                    src="/storage/1/720.webp"
                    class="w-96 h-96 rounded-xl"
                    alt=""
                />
                <img
                    src="/storage/2/720.webp"
                    class="w-96 h-96 rounded-xl"
                    alt=""
                />
                <img
                    src="/storage/3/720.webp"
                    class="w-96 h-96 rounded-xl"
                    alt=""
                />
                <img
                    src="/storage/4/720.webp"
                    class="w-96 h-96 rounded-xl"
                    alt=""
                />
                <img
                    src="/storage/5/720.webp"
                    class="w-96 h-96 rounded-xl"
                    alt=""
                />
                <img
                    src="/storage/6/720.webp"
                    class="w-96 h-96 rounded-xl"
                    alt=""
                />
            </div> -->
            <div
                class="grid gap-6 mt-20 sm:grid-rows-3 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2"
            >
                <ImageWithDetails
                    v-for="(image, index) in images"
                    :key="index"
                    :imageSrc="image.src"
                    :altText="image.alt"
                    :title="image.title"
                    :description="image.description"
                />
            </div>
        </div>
    </div>
</template>

<script>
import ImageWithDetails from "./ImageWithDetails.vue";
import SectionTitleShadow from "@/Components/SectionTitleShadow.vue";

export default {
    components: {
        ImageWithDetails,
        SectionTitleShadow,
    },
    data() {
        return {
            images: [
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
            ],
        };
    },
};
</script>

<style></style>
