<script setup>
import { computed } from "vue";
import { useStyleStore } from "@/Admin/Stores/style";
import {
    gradientBgPurplePink,
    gradientBgDark,
    gradientBgPinkRed,
} from "@/Admin/colors";

const props = defineProps({
    bg: {
        type: String,
        required: true,
        validator: (value) => ["purplePink", "pinkRed"].includes(value),
    },
});

const colorClass = computed(() => {
    if (useStyleStore().darkMode) {
        return gradientBgDark;
    }

    switch (props.bg) {
        case "purplePink":
            return gradientBgPurplePink;
        case "pinkRed":
            return gradientBgPinkRed;
    }

    return "";
});
</script>

<template>
    <div
        class="flex items-center justify-center min-h-screen"
        :class="colorClass"
    >
        <slot card-class="w-11/12 shadow-2xl md:w-7/12 lg:w-6/12 xl:w-4/12" />
    </div>
</template>
