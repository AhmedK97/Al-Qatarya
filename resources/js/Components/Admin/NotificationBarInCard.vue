<script setup>
import { colorsBgLight } from "@/Admin/colors.js";

defineProps({
    color: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <div class="flex flex-col mb-6 -mt-6 -ml-6 -mr-6 animate-fade-in">
        <div
            :class="[colorsBgLight[color]]"
            class="flex flex-col p-6 transition-colors rounded-t-2xl"
        >
            <slot />
        </div>
    </div>
</template>
