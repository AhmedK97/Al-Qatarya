<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import {
    defineProps
} from 'vue';
import Pagination from '@/Components/Pagination.vue';
import BlogsCards from '@/Components/BlogsCards.vue';
const props = defineProps({
    blog: Object,
    blogs: Array,
});
    // console.log(props.service);
</script>

<template>
    <AppLayout title="Dashboard">
        <blogs-cards :blogs="blogs"></blogs-cards>
        <div class="container z-20 flex flex-col items-center max-w-6xl mx-auto mb-16 md:px-10">
            <Pagination :links="blogs.links" />
        </div>
    </AppLayout>
</template>
