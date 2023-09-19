<script setup>
import "vue3-carousel/dist/carousel.css";
import Slider from "@/Pages/Slider.vue";
import Services from "@/Components/Services.vue";
import SectionTitleShadow from "@/Components/SectionTitleShadow.vue";

const props = defineProps({
    services_othman: Object,
    services_qatarya: Object,
});
</script>

<template>
    <section class="">
        <div class="px-6 mx-auto mt-5 text-3xl max-w-7xl lg:px-8">
            <SectionTitleShadow>
                <template #upper-title>
                    {{ $t("services-upper") }}
                </template>
                <template #title>
                    {{ $t("services") }}
                </template>
            </SectionTitleShadow>
            <!-- slider -->
            <p class="text-xl font-semibold leading-snug my-7">
                {{ $t("services-desc") }}
            </p>
            <Slider :services_othman="services_othman" :services_qatarya="services_qatarya"  ></Slider>
        </div>
    </section>
</template>
