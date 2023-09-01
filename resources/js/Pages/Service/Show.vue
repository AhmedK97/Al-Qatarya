<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import ServiceShow from "@/Components/ServiceShow.vue";
const props = defineProps({
    service: Object,
});
</script>

<template>
    <AppLayout title="Dashboard">
        <ServiceShow :service="service" />
    </AppLayout>
</template>
