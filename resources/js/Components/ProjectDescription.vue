<template>
    <section class="container mx-auto max-w-7xl">
        <div class="flex flex-col p-2 space-y-8 md:space-x-10 md:flex-row rtl:space-x-reverse">
            <div class="px-4">
                <SectionTitleShadow>
                    <template #upper-title>
                        {{ $t('project.desc.upper') }}
                    </template>
                    <template #title>
                        {{ $t('project.desc') }}
                    </template>
                </SectionTitleShadow>

                <div v-html="project.description" class="mt-10 text-lg font-medium text-gray-500">
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import SectionTitleShadow from "@/Components/SectionTitleShadow.vue";
    import {
        Link
    } from "@inertiajs/vue3";

    defineProps({
        project: Object,
    });
</script>

<style></style>
