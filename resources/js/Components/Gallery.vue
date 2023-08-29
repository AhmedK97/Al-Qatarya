<template>
    <div class="grid grid-cols-4 gap-4">
        <div v-for="project in projects" :key="project.id" class="relative">
            <img
                :src="project.imageUrl"
                alt="Project Image"
                class="w-full h-auto"
            />
            <div
                class="overlay"
                @mouseover="showDetails(project)"
                @mouseleave="hideDetails"
            >
                <div
                    v-if="hoveredProject && hoveredProject.id === project.id"
                    class="p-4 details"
                >
                    <h3 class="text-lg font-semibold">{{ project.title }}</h3>
                    <p class="mt-2">{{ project.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
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
            hoveredProject: null,
        };
    },
    methods: {
        showDetails(project) {
            this.hoveredProject = project;
        },
        hideDetails() {
            this.hoveredProject = null;
        },
    },
};
</script>

<style scoped>
.overlay {
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.7);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}

.overlay:hover {
    opacity: 1;
}

.details {
    color: white;
}
</style>
