<script setup>
import { computed } from "vue";
import { mdiClose } from "@mdi/js";
import BaseButton from "@/Components/Admin/BaseButton.vue";
import BaseButtons from "@/Components/Admin/BaseButtons.vue";
import CardBox from "@/Components/Admin/CardBox.vue";
import OverlayLayer from "@/Components/Admin/OverlayLayer.vue";
import CardBoxComponentTitle from "@/Components/Admin/CardBoxComponentTitle.vue";

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    button: {
        type: String,
        default: "info",
    },
    buttonLabel: {
        type: String,
        default: "Done",
    },
    hasCancel: Boolean,
    hasCancelButton: Boolean,
    hasConfirm: Boolean,
    scrollable: Boolean,
    cardWidthClass: {
        type: String,
        default: "w-11/12 md:w-3/5 lg:w-2/5 xl:w-4/12",
    },
    modelValue: {
        type: [String, Number, Boolean],
        default: null,
    },
});

const emit = defineEmits(["update:modelValue", "cancel", "confirm"]);

const value = computed({
    get: () => props.modelValue,
    set: (value) => emit("update:modelValue", value),
});

const confirmCancel = (mode) => {
    value.value = false;
    emit(mode);
};

const confirm = () => confirmCancel("confirm");

const cancel = () => confirmCancel("cancel");

window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && value.value) {
        cancel();
    }
});
</script>

<template>
    <OverlayLayer v-show="value" @overlay-click="cancel">
        <!-- <dummy-element class="w-11/12 md:w-3/5 lg:w-2/5 xl:w-4/12" /> -->
        <CardBox :class="{
            'overflow-y-auto': scrollable,
            [cardWidthClass]: true,
        }" v-show="value" class="z-50 shadow-lg max-h-modal" is-modal>
            <CardBoxComponentTitle :title="title">
                <BaseButton v-if="hasCancel" :icon="mdiClose" color="whiteDark" small rounded-full
                    @click.prevent="cancel" />
            </CardBoxComponentTitle>

            <div class="space-y-3">
                <slot />
            </div>

            <template v-if="hasConfirm && hasCancelButton" #footer>
                <BaseButtons>
                    <BaseButton v-if="hasConfirm" :label="buttonLabel" :color="button" @click="confirm" />
                    <BaseButton v-if="hasCancelButton" label="Cancel" :color="button" outline @click="cancel" />
                </BaseButtons>
            </template>
        </CardBox>
    </OverlayLayer>
</template>
