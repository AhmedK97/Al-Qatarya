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
                    <span class="!text-secondary-700 !no-underline">{{
                        $t("projects")
                    }}</span>
                </template>
            </SectionTitleShadow>
            <hr
                class="w-32 h-1 mt-3 border-0 rounded rtl:w-40 bg-secondary-700"
            />
            <p class="mt-4 text-lg font-medium text-gray-50">
                {{ $t("projects-desc") }}
            </p>

            <div
                class="grid gap-6 mt-20 sm:grid-rows-3 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2"
            >
                <ImageWithDetails
                    v-for="(project, index) in project"
                    :key="index"
                    :project="project"
                    :index="index"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import ImageWithDetails from "@/Components/ImageWithDetails.vue";
import SectionTitleShadow from "@/Components/SectionTitleShadow.vue";

defineProps({
    project: Object,
});
</script>

<style></style>
