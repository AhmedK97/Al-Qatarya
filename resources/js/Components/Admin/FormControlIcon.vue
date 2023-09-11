<script setup>
import BaseIcon from "@/Components/Admin/BaseIcon.vue";

defineProps({
    icon: {
        type: String,
        default: null,
    },
    h: {
        type: String,
        default: null,
    },
});
</script>

<template>
    <BaseIcon
        :path="icon"
        w="w-10"
        :h="h"
        class="absolute top-0 left-0 z-10 text-gray-500 pointer-events-none dark:text-slate-400"
    />
</template>
