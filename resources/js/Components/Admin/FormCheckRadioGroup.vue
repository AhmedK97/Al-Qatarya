<script setup>
import { computed } from "vue";
import FormCheckRadio from "@/Components/Admin/FormCheckRadio.vue";

const props = defineProps({
    options: {
        type: Object,
        default: () => {},
    },
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        default: "checkbox",
        validator: (value) => ["checkbox", "radio", "switch"].includes(value),
    },
    componentClass: {
        type: String,
        default: null,
    },
    isColumn: Boolean,
    modelValue: {
        type: [Array, String, Number, Boolean],
        default: null,
    },
});

const emit = defineEmits(["update:modelValue"]);

const computedValue = computed({
    get: () => props.modelValue,
    set: (value) => {
        emit("update:modelValue", value);
    },
});
</script>

<template>
    <div
        class="flex flex-wrap justify-start -mb-3"
        :class="{ 'flex-col': isColumn }"
    >
        <FormCheckRadio
            v-for="(value, key) in options"
            :key="key"
            v-model="computedValue"
            :type="type"
            :name="name"
            :input-value="key"
            :label="value"
            :class="componentClass"
            class="mb-3 mr-6 last:mr-0"
        />
    </div>
</template>
