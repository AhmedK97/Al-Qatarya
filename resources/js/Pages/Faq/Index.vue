<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import FaqItem from "@/Components/FaqItem.vue";
import SectionTitleShadow from "@/Components/SectionTitleShadow.vue";

const props = defineProps({
    faqs: Object,
});
</script>

<template>
    <AppLayout title="faq">
        <section class="container mx-auto max-w-7xl">
            <div
                class="flex flex-col items-center justify-center mt-10 md:mt-20"
            >
                <SectionTitleShadow>
                    <template #upper-title>
                        <span class="text-3xl md:text-4xl">{{
                            $t("faq.upper")
                        }}</span>
                    </template>
                    <template #title>
                        <span class="text-2xl md:text-3xl">{{
                            $t("faq.title")
                        }}</span>
                    </template>
                </SectionTitleShadow>
            </div>
            <div class="pt-6 space-y-8 lg:pt-10 mb-36 sm:px-6">
                <FaqItem v-for="(faq, index) in faqs" :key="index" :faq="faq" />
            </div>
        </section>
    </AppLayout>
</template>
