<template>
    <section class="container mx-auto max-w-7xl">
        <div
            class="flex flex-col items-center justify-center p-2 space-y-8 lg:space-y-0 lg:space-x-10 lg:flex-row ltr:space-x-reverse"
        >
            <img
                src="/storage/images/banner1.png"
                class="hidden md:block w-[92%] md:w-[95%] lg:w-[40%] lg:h-[370px] rounded-lg shadow-2xl order-1 lg:order-2"
            />
            <div class="order-2 px-4 lg:order-1">
                <SectionTitleShadow>
                    <template #title>
                        <slot />
                    </template>
                </SectionTitleShadow>

                <p class="mt-8 text-lg font-medium text-gray-500">
                    {{ $t("services.top.desc") }}
                </p>

                <div>
                    <div
                        class="grid grid-cols-2 mt-4 md:grid-cols-3 lg:grid-cols-3 gap-y-10 md:mt-10"
                    >
                        <div
                            class="flex space-x-2 rtl:space-x-reverse"
                            v-for="service in services"
                            :key="service.id"
                        >
                            <div
                                class="flex items-center justify-center w-6 h-6 rounded-full xl:w-8 xl:h-8 bg-rose-900 shrink-0"
                            >
                                <img
                                    src="/storage/images/check-white.svg"
                                    class="w-3 xl:w-5"
                                    loading="lazy"
                                    alt=""
                                />
                            </div>
                            <Link :href="route('service', service.slug)">
                                <p
                                    class="mt-1.5 text-md xl:text-lg font-semibold text-gray-800 hover:text-gray-500"
                                >
                                    {{ service.name }}
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import SectionTitleShadow from "@/Components/SectionTitleShadow.vue";
import WhyUsTabs from "@/Components/WhyUsTabs.vue";
import { Link } from "@inertiajs/vue3";

defineProps({
    services: Object,
});
</script>

<style></style>
