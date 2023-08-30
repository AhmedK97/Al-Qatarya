<template>
    <NavBar />
    <section class="bg-gray-50">
        <div class="container mx-auto my-20 max-w-7xl">
            <div class="flex flex-col items-center justify-center">
                <SectionTitleShadow>
                    <template #upper-title>
                        <span class="text-3xl md:text-4xl">{{ $t('faq.upper') }}</span>
                    </template>
                    <template #title>
                        <span class="text-2xl md:text-3xl">{{ $t('faq.title') }}</span>
                    </template>
                </SectionTitleShadow>
            </div>
            <div class="grid gap-6 px-6 mt-20 sm:grid-rows-3 sm:grid-cols-2 lg:grid-cols-4">
                <!-- {{ project }} -->
                <!-- <Link :href="route('project.show', project.id)"> -->
                <ImageWithDetails v-for="(project, index) in project" :key="index"
                    :project="project" :index="index" />
                />
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
    import {
        ref
    } from "vue";
    import {
        Link
    } from "@inertiajs/vue3";

    defineProps({
        project: Object,
    });

</script>

