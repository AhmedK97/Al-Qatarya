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

import { mdiAccount, mdiMail } from "@mdi/js";
import "vue-select/dist/vue-select.css";
import eventBus from "@/Composables/eventBus.js";
import Swal from "sweetalert2";
import vSelect from "vue-select";

const props = defineProps({
    transaction: {
        type: Object,
        default: () => {},
    },
    customers: {
        type: Array,
        default: () => {},
    },
    employees: {
        type: Array,
        default: () => {},
    },
    services: {
        type: Array,
        default: () => {},
    },
    projects: {
        type: Array,
        default: () => {},
    },
});

onMounted(() => {
    eventBus.$on("openModal", (modalToOpen) => {
        if (modalToOpen === "transaction::create") {
            resetForm();
        }
    });
});

const isUpdate = computed(() => {
    if (!props.transaction) {
        return false;
    }

    return !!props.transaction.id;
});

const transaction = reactive(props.transaction || {});

const form = useForm({
    customer_id: transaction.customer_id,
    employee_id: transaction.employee_id,
    status: transaction.status,
    address: transaction.address,
    times_to_pay: transaction.times_to_pay,
    service_id: transaction.service_id,
    project_id: transaction.project,
    services_id: transaction.services,
});

const resetForm = () => {
    form.reset();
    Object.keys(form.errors).forEach((key) => {
        delete form.errors[key];
    });
};

const statues = [
    {
        id: "Pending",
        name: "في انتظار الدفع",
    },
    {
        id: "Paid",
        name: "تم الدفع",
    },
];

watch(
    () => cloneDeep(props),
    (newProps) => {
        if (!newProps.transaction) {
            return;
        }
        resetForm();
        Object.assign(transaction, newProps.transaction);
        form.customer_id = transaction.customer.id;
        form.employee_id = transaction.employee.id;
        form.status = transaction.status;
        form.address = transaction.address.address;
        form.times_to_pay = transaction.times_to_pay;
        form.service_id = transaction.service_id;
        form.project_id = transaction.project;
        form.services_id = transaction.services;
    }
);

const submit = () => {
    const sharedFormOptions = {
        preserveState: true,
        preserveScroll: true,
        onError: (errors) => {
            Object.keys(form.errors).forEach((key) => {
                delete form.errors[key];
            });

            Object.assign(form.errors, errors);
        },
    };

    if (isUpdate.value) {
        router.post(
            route("update.transactions", transaction.id),
            form,
            Object.assign(sharedFormOptions, {
                onSuccess: () => {
                    eventBus.$emit("closeModal", "transaction::update");
                    Swal.fire({
                        icon: "success",
                        title: "تم بنجاح",
                        text: "تم تحديث المعاملات بنجاح",
                        timer: 3000,
                        timerProgressBar: true,
                    });
                },
            })
        );

        return;
    }

    router.post(
        route("store.transactions"),
        form,
        Object.assign(sharedFormOptions, {
            onSuccess: () => {
                resetForm();
                eventBus.$emit("closeModal", "transaction::create");
                Swal.fire({
                    icon: "success",
                    title: "تم بنجاح",
                    text: "تم انشاء المعاملات بنجاح",
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
        <label class="block mb-2 font-bold"> اختر المشروع </label>
        <v-select
            :options="projects"
            label="title"
            v-model="form.project_id"
            :reduce="(option) => option.id"
        ></v-select>

        <span v-if="form.errors.project_id" class="text-sm text-red-600">{{
            form.errors.project_id
        }}</span>

        <BaseDivider />
        <div v-if="isUpdate">
            <label class="block mb-2 font-bold"> الموظف </label>

            <v-select
                :options="customers"
                label="name"
                v-model="form.customer_id"
                :reduce="(option) => option.id"
            ></v-select>

            <span v-if="form.errors.customer_id" class="text-sm text-red-600">{{
                form.errors.customer_id
            }}</span>

            <BaseDivider />

            <label class="block mb-2 font-bold"> العميل </label>
            <v-select
                :options="employees"
                label="name"
                v-model="form.employee_id"
                :reduce="(option) => option.id"
            ></v-select>
            <span v-if="form.errors.employee_id" class="text-sm text-red-600">{{
                form.errors.employee_id
            }}</span>

            <BaseDivider />

            <label class="block mb-2 font-bold"> الخدمات </label>
            <v-select
                :options="services"
                label="name"
                v-model="form.services_id"
                :reduce="(option) => option"
                multiple
            ></v-select>
            <span v-if="form.errors.services_id" class="text-sm text-red-600">{{
                form.errors.services_id
            }}</span>

            <BaseDivider />

            <label class="block mb-2 font-bold"> عدد مرات الدفع </label>
            <FormControl
                :errorMessage="form.errors.times_to_pay"
                v-model="form.times_to_pay"
            />
            <BaseDivider />

            <FormField label="الحالة">
                <select-field
                    :errorMessage="form.errors.status"
                    class="flex w-full py-2 border rounded-md border-fieldgray rtl:text-right placeholder:text-black"
                    v-model="form.status"
                    :items="statues"
                />
            </FormField>

            <BaseDivider />

            <FormField label="العنوان">
                <FormControl
                    :errorMessage="form.errors.address"
                    v-model="form.address"
                />
            </FormField>
        </div>

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
