<script setup>
    import {
        Link
    } from "@inertiajs/vue3";
    import SectionTitleShadow from "@/Components/SectionTitleShadow.vue";

    const props = defineProps({
        blogs: Object,
    });

    console.log(props.blogs);
</script>

<template>
    <section class="">
        <div class="max-w-screen-xl px-4 py-8 mx-auto md:py-20 lg:py-16 lg:px-6">
            <div class="flex flex-col items-center justify-center">
                <SectionTitleShadow>
                    <template #upper-title>
                        {{ $t('blog.upper') }}
                    </template>
                    <template #title>
                        {{ $t('blog') }}
                    </template>
                </SectionTitleShadow>
            </div>
            <div class="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
                <article v-for="(blog, index) in blogs.data" :key="index"
                    class="p-6 border border-gray-200 rounded-lg shadow-lg bg-gray-50">
                    <div class="flex items-center justify-between mb-5 text-gray-500">
                        <!-- image -->
                        <img class="object-fill w-full h-[15rem] rounded-md" loading="lazy" :src="blog.image"
                            alt="Alexandra avatar" />
                    </div>

                    <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                        <Link :href="route('show.blogs', blog.slug)"
                            class="inline-flex items-center font-medium text-rose-900 hover:underline">
                        {{ blog . title }}
                        </Link>
                    </h2>
                    <p class="mb-5 font-normal text-gray-900">
                        {{ blog . description }}
                    </p>

                    <div class="flex items-center space-x-2 rtl:space-x-reverse">
                        <Link :href="route('show.blogs', blog.slug)"
                            class="inline-flex items-center font-medium text-rose-900 hover:underline">
                        اقرأ المزيد
                        </Link>
                        <svg class="w-4 h-4 rtl:rotate-180 text-rose-900" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>
