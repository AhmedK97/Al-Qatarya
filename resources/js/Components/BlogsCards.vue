<script setup>
import { Link } from "@inertiajs/vue3";

const props = defineProps({
    blogs: Object,
});

console.log(props.blogs);
</script>

<template>
    <section class="">
        <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
            <div class="max-w-screen-sm mx-auto mb-8 text-center lg:mb-16">
                <p
                    class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 lg:text-4xl"
                >
                    <span
                        class="text-transparent underline bg-clip-text bg-gradient-to-r to-amber-600 from-black underline-offset-4 decoration-5 decoration-red-700"
                    >
                        المدونــة
                    </span>
                </p>
            </div>
            <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <article
                    v-for="(blog, index) in blogs.data"
                    :key="index"
                    class="p-6 bg-white border border-gray-200 rounded-lg shadow-md"
                >
                    <div
                        class="flex items-center justify-between mb-5 text-gray-500"
                    >
                        <!-- image -->
                        <img
                            class="object-fill w-full h-[15rem]"
                            loading="lazy"
                            :src="blog.image"
                            alt="Alexandra avatar"
                        />
                    </div>

                    <h2
                        class="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900"
                    >
                        <Link
                            :href="route('show.blogs', blog.slug)"
                            class="inline-flex items-center font-medium text-primary-600 hover:underline"
                        >
                            {{ blog.title }}
                        </Link>
                    </h2>
                    <p class="mb-5 font-semibold text-center text-gray-500">
                        <!-- ltr:text-left rtl:text-right -->
                        {{ blog.description }}
                    </p>

                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-4"></div>
                        <Link
                            :href="route('show.blogs', blog.slug)"
                            class="inline-flex items-center font-medium text-primary-600 hover:underline"
                        >
                            اقرأ المزيد
                            <svg
                                class="w-4 h-4 mt-1 ml-2"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </Link>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>
