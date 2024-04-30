<script setup>
import { computed, ref, watch, reactive, toRef, onMounted } from "vue";
import cloneDeep from "lodash/cloneDeep";
import { router, useForm } from "@inertiajs/vue3";
import FormControl from "@/Components/Admin/FormControl.vue";
import InputError from "@/Components/InputError.vue";
import FormField from "@/Components/Admin/FormField.vue";
import CardBox from "@/Components/Admin/CardBox.vue";
import SelectField from "@/Components/Admin/SelectField.vue";
import BaseButtons from "@/Components/Admin/BaseButtons.vue";
import BaseButton from "@/Components/Admin/BaseButton.vue";
import BaseDivider from "@/Components/Admin/BaseDivider.vue";
import FormFilePicker from "@/Components/Admin/FormFilePicker.vue";
import { mdiPlus, mdiMinus } from "@mdi/js";
import "vue-select/dist/vue-select.css";
import eventBus from "@/Composables/eventBus.js";
import Swal from "sweetalert2";

const form = useForm({
    numbers: "",
});

const resetForm = () => {
    form.numbers = "";
    form.message = "";
    form.file = "";
};

const submit = () => {
    const sharedFormOptions = {
        preserveState: true,
        preserveScroll: true,
        onError: (errors) => {
            // remove errors
            Object.keys(form.errors).forEach((key) => {
                delete form.errors[key];
            });
            Object.assign(form.errors, errors);
        },
    };
    router.post(
        route("send.bulk.messages.whatsapp"),
        form,
        Object.assign(sharedFormOptions, {
            onSuccess: () => {
                resetForm();
                eventBus.$emit("closeModal", "whatsAppAds::create");
                Swal.fire({
                    icon: "success",
                    title: "عملية ناجحة",
                    text: "جار ارسالل الرسائل الى الارقام المدخلة",
                    timer: 3000,
                    timerProgressBar: true,
                });
            },
            onError: (errors) => {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "لا يوجد رقم واتساب مدخل في للاعلانات",
                    timer: 3000,
                    timerProgressBar: true,
                });
            },
        })
    );
};
</script>
<template>
    <CardBox form @submit.prevent="submit">
        <FormField label="ادخل الارقام">
            <FormControl type="textarea" v-model="form.numbers" />
        </FormField>

        {{ form.errors.numbers }}

        <BaseDivider />

        <FormField label="الرسالة">
            <FormControl type="textarea" v-model="form.message" />
        </FormField>

        {{ form.errors.message }}

        <br />
        <br />

        <FormFilePicker
            label="اختر الملف"
            multi
            v-model="form.file"
            accept="image/*,video/*,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        />

        <template #footer>
            <BaseButtons>
                <BaseButton
                    @click="submit"
                    type="submit"
                    color="info"
                    label="حفظ"
                />
            </BaseButtons>
        </template>
    </CardBox>
</template>
