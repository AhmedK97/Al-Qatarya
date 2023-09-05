<script setup>
import ImageWithDetails from "@/Components/ImageWithDetails.vue";
import SectionTitleShadow from "@/Components/SectionTitleShadow.vue";
import AppLayout from "@/Layouts/AppLayout.vue";
import { Link } from "@inertiajs/vue3";

const props = defineProps({
    service: Object,
});
</script>

<template>
    <AppLayout title="Dashboard">
        <section class="text-gray-600 body-font">
            <div
                class="container flex flex-col items-center justify-center mx-auto max-w-7xl"
            >
                <div
                    class="flex flex-col items-center justify-center mt-10 md:mt-20"
                >
                    <SectionTitleShadow>
                        <template #upper-title>
                            <span class="text-3xl md:text-4xl">{{
                                $t("services-upper")
                            }}</span>
                        </template>
                        <template #title>
                            <span class="text-2xl md:text-3xl">{{
                                $t("services")
                            }}</span>
                        </template>
                    </SectionTitleShadow>
                    <p class="mt-4 text-lg font-medium text-gray-500">
                        {{ $t("why.us-desc") }}
                    </p>
                </div>

                <div
                    class="container grid grid-cols-1 px-4 mx-auto mt-10 md:grid-cols-2 lg:grid-cols-3 gap-x-10 max-w-7xl gap-y-60 mb-60"
                >
                    <div
                        v-for="(imageUrl, index) in service.images"
                        :key="index"
                    >
                        <Link :href="route('service', service.slug)">
                            <div class="relative">
                                <div class="">
                                    <img
                                        class="w-full rounded-lg h-96"
                                        loading="lazy"
                                        :src="imageUrl"
                                        :alt="`Image ${index + 1}`"
                                    />
                                </div>

                                <div
                                    class="absolute top-0 right-0 z-40 p-5 m-5 transition duration-300 ease-in-out bg-gray-100 rounded-lg shadow-lg hover:translate-y-2/3 h-80 shadow-blue-100 hover:shadow-rose-50 translate-y-3/4"
                                >
                                    <p class="text-xl font-bold text-rose-900">
                                        {{ service.name }}
                                    </p>
                                    <p class="mt-4 text-lg">
                                        {{ service.body }}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </AppLayout>
</template>
