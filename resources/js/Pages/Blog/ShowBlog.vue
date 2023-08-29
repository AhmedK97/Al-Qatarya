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
        <main class="pt-8 pb-16 bg-white lg:pt-16 lg:pb-24 dark:bg-gray-900">
            <div class="flex justify-between max-w-screen-xl px-4 mx-auto ">
                <article class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <header class="mb-4 lg:mb-6 not-format">
                        <div
                            class="w-5/6 m-auto mb-10 lg:min-w-[40rem] md:min-w-[30rem] lg:max-w-lg max-h-[25rem] lg:w-full md:w-1/2 md:mb-0">
                            <img class="object-cover lg:min-w-[40rem] md:min-w-[30rem] object-center m-auto max-h-[25rem] rounded"
                                alt="hero" :src="blog.image">
                        </div>
                        <h1
                            class="mt-10 mb-4 text-3xl font-extrabold leading-tight text-center text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                            <span
                                class="text-transparent underline bg-clip-text bg-gradient-to-r to-amber-600 from-black underline-offset-4 decoration-5 decoration-red-700 dark:decoration-blue-600">
                                {{ blog.title }}
                            </span>
                        </h1>
                    </header>
                    <div class="leading-9" v-html="blog.description">

                    </div>
                </article>
            </div>
        </main>

        <blogs-cards :blogs="blogs"></blogs-cards>
        <div class="container z-20 flex flex-col items-center max-w-6xl mx-auto mb-16 md:px-10">
            <Pagination :links="blogs.links" />
        </div>
    </AppLayout>
</template>
