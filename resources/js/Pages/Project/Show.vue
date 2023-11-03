<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import ImageCarousel from "@/Components/ImageCarousel.vue";
import SectionTitleShadow from "@/Components/SectionTitleShadow.vue";
import ProjectDescription from "@/Components/ProjectDescription.vue";
const props = defineProps({
    project: Object,
});
</script>

<template>
    <AppLayout title="Dashboard">
        <main class="pt-8 pb-16 bg-white lg:pt-16 lg:pb-24 dark:bg-gray-900">
            <div class="flex justify-between max-w-screen-xl px-4 mx-auto">
                <article class="px-4 mx-auto w-100">
                    <div
                        class="flex flex-col justify-between lg:flex-row lg:space-x-20 rtl:space-x-reverse"
                    >
                        <div class="w-full space-y-10 lg:w-1/2">
                            <header class="mb-4 lg:mb-6 not-format">
                                <div class="flex flex-col">
                                    <SectionTitleShadow>
                                        <template #upper-title>
                                            <span
                                                class="text-3xl md:text-4xl"
                                                >{{ project.title }}</span
                                            >
                                        </template>
                                        <template #title>
                                            <span
                                                class="text-2xl md:text-3xl"
                                                >{{ project.title }}</span
                                            >
                                        </template>
                                    </SectionTitleShadow>
                                </div>
                            </header>
                            <div
                                class="flex flex-col space-y-8 font-medium "
                            >
                                <div
                                    class="items-center space-x-2 rtl:space-x-reverse"
                                >
                                    <p>{{ $t("agent") }}</p>
                                    <!-- {{ project.images }} -->
                                    <p class="font-semibold">
                                        {{ project.agent }}
                                    </p>
                                </div>

                                <div
                                    class="items-center space-x-2 rtl:space-x-reverse"
                                >
                                    <p>
                                        {{ $t("location") }}
                                    </p>

                                    <p class="font-semibold">
                                        {{ project.address }}
                                    </p>
                                </div>

                                <div
                                    class="items-center space-x-2 rtl:space-x-reverse"
                                >
                                    <p>
                                        {{ $t("project-date") }}
                                    </p>

                                    <p class="font-semibold">
                                        {{ project.date }}
                                    </p>
                                </div>

                                <div
                                    class="items-center space-x-2 rtl:space-x-reverse"
                                >
                                    <p>
                                        {{ $t("space-area") }}
                                    </p>

                                    <p class="font-semibold">
                                        {{ project.space_area }} &#13217;
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="m-auto lg:w-1/2">
                            <ImageCarousel :Gallery="project.images" />
                        </div>
                    </div>
                </article>
            </div>

            <ProjectDescription class="mt-4" :project="project" />
        </main>
    </AppLayout>
</template>
