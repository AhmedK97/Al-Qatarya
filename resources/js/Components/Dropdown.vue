<script setup>
import { computed, onMounted, onUnmounted, ref } from "vue";
import { Link } from "@inertiajs/vue3";

const props = defineProps({
    align: {
        type: String,
        default: "right",
    },
    width: {
        type: String,
        default: "48",
    },
    contentClasses: {
        type: Array,
        default: () => ["py-1", "bg-white"],
    },
});

const closeOnEscape = (e) => {
    if (open.value && e.key === "Escape") {
        open.value = false;
    }
};

onMounted(() => document.addEventListener("keydown", closeOnEscape));
onUnmounted(() => document.removeEventListener("keydown", closeOnEscape));

const widthClass = computed(() => {
    return {
        48: "w-48",
    }[props.width.toString()];
});

const alignmentClasses = computed(() => {
    if (props.align === "left") {
        return "origin-top-left left-0";
    }

    if (props.align === "right") {
        return "origin-top-right right-0";
    }

    return "origin-top";
});

let open = ref(false);
</script>

<template>
    <div class="relative">
        <Link :href="route('services')">
            <div @mouseover="open = true">
                <slot name="trigger" />
            </div>
        </Link>

        <transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
        >
            <div
                v-show="open"
                class="absolute z-50 mt-2 rounded-md shadow-lg md:w-[20rem] w-48"
                :class="[alignmentClasses]"
                style="display: none"
                @mouseleave="open = false"
            >
                <div
                    class="rounded-md ring-1 ring-black ring-opacity-5"
                    :class="contentClasses"
                >
                    <slot name="content" />
                </div>
            </div>
        </transition>
    </div>
</template>
