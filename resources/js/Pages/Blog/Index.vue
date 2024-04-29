<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { defineProps } from "vue";

</script>

<template>
    <AppLayout title="Blogs">
        <blogs-cards ></blogs-cards>
        <div
            class="container z-20 flex flex-col items-center max-w-6xl mx-auto mb-16 md:px-10"
        >
            <!-- <Pagination :links="blogs.links" /> -->
        </div>
    </AppLayout>
</template>
