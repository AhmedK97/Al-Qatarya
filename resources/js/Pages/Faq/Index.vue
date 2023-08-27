<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import FaqItem from "@/Components/FaqItem.vue";

const props = defineProps({
    faqs: Object,
});
</script>

<template>
    <AppLayout title="faq">
        <section class="container mx-auto max-w-7xl">
            <div class="pt-6 space-y-8 lg:pt-10 mb-36 sm:px-6">
                <FaqItem v-for="(faq, index) in faqs" :key="index" :faq="faq" />
            </div>
        </section>
    </AppLayout>
</template>
