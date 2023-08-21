<script setup>
    import AppLayout from '@/Layouts/AppLayout.vue';


    const props = defineProps({
        faqs: Object,

    });

</script>

<template>
    <AppLayout title="faq">
        <section class="space-y-4">
            <div class="px-4 mx-auto my-10 max-w-7xl sm:px-6 lg:px-8s">
                <h2 class="my-10 text-3xl font-bold text-center tracki sm:text-5xl">
                    <span
                        class="text-transparent underline bg-clip-text bg-gradient-to-r to-amber-600 from-black underline-offset-4 decoration-5 decoration-red-700">
                        الاسئلة الشائعة
                    </span>
                </h2>
                <div class="divide-y divide-gray-700">
                    <div v-for="faq in faqs" :key="faq.id" class="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                        <h3 class="font-semibold md:col-span-5">{{ faq.question }}</h3>
                        <p class="md:pl-0 md:col-span-7">{{ faq.answer }}</p>
                    </div>
                </div>
            </div>
        </section>
    </AppLayout>
</template>
