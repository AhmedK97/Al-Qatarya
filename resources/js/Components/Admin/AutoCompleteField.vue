
<template>
    <div class="flex flex-col w-full">
        <label v-if="hasLabelSlot" class="lg:mb-3 rtl:text-right text-md">
            <slot name="label" />
        </label>

        <input
            class="px-4 py-3 outline-none focus:border-transparent focus:outline-secondary-600 placeholder:text-black placeholder:text-opacity-40 rtl:text-right"
            :class="{ 'border border-red-600': errorMessage }" v-bind="$attrs" v-model="searchTerm" @input="handleInput" />
        <div class="border-l-4 autocomplete-list" v-show="showAutocomplete">
            <div v-for="item in filteredItems" :key="item.id" @click="selectItem(item)"
                class="p-2 cursor-pointer autocomplete-item hover:bg-gray-100">
                <span class="text-gray-700">{{ getItemLabel(item) }}</span>
            </div>
        </div>
        <InputError class="mt-2" v-show="errorMessage" :message="errorMessage" />
    </div>
</template>

<script>
    import InputError from "@/Components/InputError.vue";
    import {
        ref,
        watch,
        computed,
        onMounted
    } from "vue";
    import {
        trans
    } from "laravel-vue-i18n";

    export default {
        inheritAttrs: false,
        components: {
            InputError,
        },
        props: {
            modelValue: [String, Number, Boolean, null],
            errorMessage: String,
            items: Array,
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
            currentVal: {
                 default: "",
            },
        },
        emits: ["update:selectedIdValue"],
        setup(props, {
            emit,
            slots
        }) {
            const selectedValue = ref(props.currentVal);
            const searchTerm = ref(props.currentVal);
            const showAutocomplete = ref(false);


            const getItemLabel = (item) => {
                const label = item[props.itemLabel];
                return props.translated && label ? trans(label) : label;
            };

            const getItemValue = (item) => item[props.itemValue];

            const handleInput = () => {
                showAutocomplete.value = true;
            };

            const selectItem = (item) => {
                selectedValue.value = item.name;
                searchTerm.value = item.name;

                emit("update:selectedIdValue", item);
                showAutocomplete.value = false;
            };

            const filteredItems = computed(() => {
                return searchTerm.value && typeof searchTerm.value === "string" ?
                    props.items.filter((item) =>
                        getItemLabel(item).toLowerCase().includes(searchTerm.value.toLowerCase())
                    ) :
                    [];
            });
            const hasLabelSlot = () => !!slots.label;

            watch(
                () => props.currentVal,
                (newVal) => {
                    selectedValue.value = newVal;
                    searchTerm.value = newVal;
                }
            );

            return {
                getItemLabel,
                getItemValue,
                selectItem,
                selectedValue,
                hasLabelSlot,
                searchTerm,
                showAutocomplete,
                filteredItems,
                handleInput,
            };
        },
    };
</script>
