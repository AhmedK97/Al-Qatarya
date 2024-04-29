<script>
import InputError from "@/Components/InputError.vue";
import { ref, watch } from "vue";
import { trans } from "laravel-vue-i18n";

export default {
    inheritAttrs: false,
    components: {
        InputError,
    },
    props: {
        modelValue: [String, Number, Boolean, null],
        errorMessage: String,
        items: {
            type: Array,
        },
        itemLabel: {
            type: String,
            default: "name",
        },
        itemValue: {
            type: String,
            default: "id",
        },
        translated: {
            type: Boolean,
            default: false,
        },
    },
    emits: ["update:modelValue"],
    setup(props, { emit, slots }) {
        const selectedValue = ref(props.modelValue || null);

        const getItemLabel = (item) => {
            const label = item[props.itemLabel];
            if (props.translated && label) {
                return trans(label);
            }
            return label;
        };

        const getItemValue = (item) => {
            const value = item[props.itemValue];

            return value;
        };

        const selectItem = (value) => {
            selectedValue.value = value;
            emit("update:modelValue", selectedValue.value);
        };

        const hasLabelSlot = () => {
            return !!slots.label;
        };

        watch(props, (newProps) => {
            selectItem(newProps.modelValue);
        });

        watch(selectedValue, (newValue) => {
            emit("update:modelValue", newValue);
        });

        return {
            getItemLabel,
            getItemValue,
            selectItem,
            selectedValue,
            hasLabelSlot,
        };
    },
};
</script>
<template>
    <div class="flex flex-col w-full">
        <label v-if="hasLabelSlot" class="lg:mb-3 rtl:text-right text-md">
            <slot name="label" />
        </label>
        <select
            class="px-4 py-3 outline-none focus:border-transparent focus:outline-secondary-600 placeholder:text-black placeholder:text-opacity-40 rtl:text-right"
            :class="{ 'border border-red-600': errorMessage }"
            v-bind="$attrs"
            v-model="selectedValue"
        >
            <option
                v-for="item in items"
                :key="item.id"
                :value="getItemValue(item)"
            >
                {{ getItemLabel(item) }}
            </option>
        </select>
        <InputError
            class="mt-2"
            v-show="errorMessage"
            :message="errorMessage"
        />
    </div>
</template>
