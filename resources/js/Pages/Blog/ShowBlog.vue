<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { defineProps } from "vue";
import Pagination from "@/Components/Pagination.vue";
import BlogsCards from "@/Components/BlogsCards.vue";
import SectionTitleShadow from "@/Components/SectionTitleShadow.vue";
const props = defineProps({
    blog: Object,
    blogs: Array,
});
</script>

<template>
    <AppLayout title="Dashboard">
        <main class="pt-8 pb-16 bg-white lg:pt-16 lg:pb-24 dark:bg-gray-900">
            <div class="flex justify-between max-w-screen-xl px-4 mx-auto">
                <article class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <header class="mb-4 lg:mb-6 not-format">
                        <div
                            class="flex flex-col items-center justify-center my-10 text-center"
                        >
                            <h1
                                class="text-4xl font-black underline text-rose-900"
                            >
                                {{ blog.title }}
                            </h1>
                        </div>
                        <div class="container max-w-5xl mx-auto">
                            <img
                                class="object-contain w-full  m-auto max-h-[25rem] rounded"
                                alt="hero"
                                :src="blog.image"
                            />
                        </div>
                    </header>
                    <div
                        class="container max-w-5xl mx-auto leading-9"
                        v-html="blog.description"
                    ></div>
                </article>
            </div>
        </main>

        <blogs-cards :blogs="blogs"></blogs-cards>
        <div
            class="container z-20 flex flex-col items-center max-w-6xl mx-auto mb-16 md:px-10"
        >
            <Pagination :links="blogs.links" />
        </div>
    </AppLayout>
</template>
