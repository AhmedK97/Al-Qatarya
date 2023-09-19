<template>
    <section class="container mx-auto max-w-7xl">
        <div class="flex flex-col justify-center p-2">
            <div class="px-4">
                <SectionTitleShadow>
                    <template #upper-title>
                        {{ $t("why.us-upper") }}
                    </template>
                    <template #title>
                        {{ $t("why.us") }}
                    </template>
                </SectionTitleShadow>

                <p class="mt-8 text-lg font-medium text-gray-500">
                    {{ $t("why.us-desc") }}
                </p>

                <div
                    class="grid grid-cols-2 mt-4 md:grid-cols-3 lg:grid-cols-4 gap-y-10 md:mt-10"
                >
                    <div
                        class="flex space-x-4 rtl:space-x-reverse"
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
                        <Link :href="route('services', service.slug)">
                            <p
                                class="mt-1.5 text-sm xl:text-lg font-semibold text-gray-800"
                            >
                                {{ service.name }}
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import SectionTitleShadow from "@/Components/SectionTitleShadow.vue";

defineProps({
    services: Object,
});
</script>

<style></style>
