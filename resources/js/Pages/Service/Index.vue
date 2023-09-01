<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import Pagination from "@/Components/Pagination.vue";
import BlogsCards from "@/Components/BlogsCards.vue";
const props = defineProps({
    service: Object,
    blogs: Object,
});

// console.log(props.service);
</script>

<template>
    <AppLayout title="Dashboard">
        <section class="text-gray-600 body-font">
            <div
                class="container flex flex-col items-center justify-center pt-16 mx-auto"
            >
                <h1
                    class="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl"
                >
                    <span
                        class="text-transparent underline bg-clip-text bg-gradient-to-r to-amber-600 from-black underline-offset-4 decoration-5 decoration-red-700"
                    >
                        {{ service.name }}
                    </span>
                </h1>
            </div>

            <div
                class="items-center max-w-screen-xl gap-16 px-4 mx-auto mt-8 lg:grid lg:px-6"
            >
                <div
                    class="grid grid-cols-2 gap-8 mt-8 text-center sm:grid-cols-4 lg:grid-cols-4"
                >
                    <div
                        v-for="(imageUrl, index) in service.images"
                        :key="index"
                    >
                        <div :class="{ 'mt-10': index % 2 === 1 }">
                            <img
                                class="w-full rounded-lg max-h-[15rem]"
                                loading="lazy"
                                :src="imageUrl"
                                :alt="`Image ${index + 1}`"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <!-- items-center max-w-screen-xl gap-16 px-4 mx-auto mt-8 lg:grid lg:px-6 -->
            <div
                class="container flex flex-col items-center max-w-screen-xl px-5 py-16 mx-auto mt-8 md:flex-row"
            >
                <div class="w-5/6 mb-10 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0">
                    <img
                        loading="lazy"
                        class="object-fill rounded"
                        alt="hero"
                        :src="service.main_image"
                    />
                </div>
                <div
                    class="flex flex-col items-center mx-3 text-center lg:flex-grow md:w-1/2 md:text-left"
                >
                    <h1
                        class="mb-4 text-3xl font-medium text-center text-gray-900 title-font sm:text-4xl"
                    >
                        {{ service.name }}
                    </h1>
                    <p class="mb-8 text-xl leading-relaxed text-center">
                        {{ service.body }}
                    </p>
                </div>
            </div>
        </section>

        <blogs-cards :blogs="blogs"></blogs-cards>
        <div
            class="container z-20 flex flex-col items-center max-w-6xl mx-auto mb-16 md:px-10"
        >
            <Pagination :links="blogs.links" />
        </div>
    </AppLayout>
</template>
