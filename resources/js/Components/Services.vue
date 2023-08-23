<script setup>
import "vue3-carousel/dist/carousel.css";
import Slider from "@/Pages/Slider.vue";
import Services from "@/Components/Services.vue";

const props = defineProps({
    services: Object,
});
</script>

<template>
    <section class="mt-40">
        <div class="px-4 mx-auto mt-5 text-3xl max-w-7xl sm:px-6 lg:px-8s">
            <p class="-mb-6 text-5xl font-black text-gray-900 opacity-10">
                {{ $t("services-upper") }}
            </p>
            <p class="text-4xl font-black text-gray-900">
                {{ $t("services") }}
            </p>
            <!-- slider -->
            <p
                class="p-5 text-xl font-semibold leading-snug text-center text-green-600 border my-7"
            >
                نحن نقدر أهمية العمل كما أن شركتنا تتميز بالصدق والجودة والمستوي
                الرفيع بين منافسيها وفريق العمل مدرب علي اعلي مستوي ويتمتع
                بالخبرة في اداء الاعمال وصيانة المنازل.
            </p>
            <Slider :services="services"></Slider>
        </div>
    </section>
</template>

<style></style>
