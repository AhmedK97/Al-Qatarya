<script setup>
import { computed } from "vue";
import { Link } from "@inertiajs/vue3";
import { getButtonColor } from "@/Admin/colors.js";
import BaseIcon from "@/Components/Admin/BaseIcon.vue";

const props = defineProps({
    label: {
        type: [String, Number],
        default: null,
    },
    icon: {
        type: String,
        default: null,
    },
    iconSize: {
        type: [String, Number],
        default: null,
    },
    href: {
        type: String,
        default: null,
    },
    target: {
        type: String,
        default: null,
    },
    routeName: {
        type: String,
        default: null,
    },
    type: {
        type: String,
        default: null,
    },
    color: {
        type: String,
        default: "white",
    },
    as: {
        type: String,
        default: null,
    },
    renderLabelAsHtml: {
        type: Boolean,
        default: false,
    },
    small: Boolean,
    outline: Boolean,
    active: Boolean,
    disabled: {
        type: Boolean,
        default: false,
    },
    roundedFull: Boolean,
    loading: {
        type: Boolean,
        default: false,
    },
});

const is = computed(() => {
    if (props.as && props.as === "Link") {
        return Link;
    }

    if (props.as) {
        return props.as;
    }

    if (props.routeName) {
        return Link;
    }

    if (props.href) {
        return "a";
    }

    return "button";
});

const computedType = computed(() => {
    if (is.value === "button") {
        return props.type ?? "button";
    }

    return null;
});

const labelClass = computed(() =>
    props.small && props.icon ? "px-1" : "px-2"
);

const isDisabled = computed(() => props.disabled || props.loading);

const componentClass = computed(() => {
    const base = [
        "inline-flex",
        "justify-center",
        "items-center",
        "whitespace-nowrap",
        "focus:outline-none",
        "transition-colors",
        "focus:ring",
        "duration-150",
        "border",
        isDisabled.value ? "cursor-not-allowed" : "cursor-pointer",
        props.roundedFull ? "rounded-full" : "rounded",
        getButtonColor(
            props.color,
            props.outline,
            !isDisabled.value,
            props.active
        ),
    ];

    if (!props.label && props.icon) {
        base.push("p-1");
    } else if (props.small) {
        base.push("text-sm", props.roundedFull ? "px-3 py-1" : "p-1");
    } else {
        base.push("py-2", props.roundedFull ? "px-6" : "px-3");
    }

    if (isDisabled.value) {
        base.push(props.outline ? "opacity-50" : "opacity-70");
    }

    return base;
});
</script>

<template>
    <component v-bind="$attrs" :is="is" :class="componentClass" :href="routeName ? route(routeName) : href"
        :type="computedType" :target="target" :disabled="disabled">
        <BaseIcon v-if="icon" :path="icon" :size="iconSize" />
        <span v-if="label && !renderLabelAsHtml" :class="labelClass">{{
            label
        }}</span>
        <span v-else-if="label && renderLabelAsHtml" v-html="label" :class="labelClass"></span>
    </component>
</template>
