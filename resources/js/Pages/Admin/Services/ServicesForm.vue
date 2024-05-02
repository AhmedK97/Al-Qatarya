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

const props = defineProps({
    service: {
        type: Object,
        default: () => {},
    },
});

onMounted(() => {
    eventBus.$on("openModal", (modalToOpen) => {
        if (modalToOpen === "service::create") {
            resetForm();
        }
    });
});

const isUpdate = computed(() => {
    if (!props.service) {
        return false;
    }
    return !!props.service.id;
});

const service = reactive(props.service || {});

const formItems = reactive([
    {
        title: "",
        description: "",
    },
]);

const addFormItem = () => {
    formItems.push({
        title: "",
        description: "",
    });
};

const addFormItemUpdate = () => {
    service.additional_info.push({
        title: "",
        description: "",
    });
};

watch(formItems, (filledFilters) => {
    form.additional_info = filledFilters;
});

const form = useForm({
    name: service.name,
    company_name: service.company_name,
    additional_info:
        isUpdate.value == true ? service.additional_info : formItems,
    files: null,
    lang: service.lang,
});

const resetForm = () => {
    form.reset();
    Object.keys(form.errors).forEach((key) => {
        delete form.errors[key];
    });
};

// const companies = [{
//     id: "qatarya",
//     name: "القطرية",
// },
// {
//     id: "othman",
//     name: "عثمان",
// },
// ];

const lang = [
    {
        id: "en",
        name: "انجليزي",
    },
    {
        id: "ar",
        name: "عربي",
    },
];

watch(
    () => cloneDeep(props),
    (newProps) => {
        if (!newProps.service) {
            return;
        }
        resetForm();
        Object.assign(service, newProps.service);
        form.name = newProps.service.name;
        form.company_name = newProps.service.company_name;
        form.additional_info = newProps.service.additional_info;
        form.lang = newProps.service.lang;
        // form.files = newProps.service.files;
    }
);

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

    if (isUpdate.value) {
        router.post(
            route("update.services", service.id),
            form,
            Object.assign(sharedFormOptions, {
                onSuccess: () => {
                    eventBus.$emit("closeModal", "service::update");
                    Swal.fire({
                        icon: "success",
                        title: "تم بنجاح",
                        text: "تم تحديث الخدمات بنجاح",
                        timer: 3000,
                        timerProgressBar: true,
                    }).then(() => {
                        form.files = null;
                    });
                },
            })
        );
        return;
    }

    router.post(
        route("store.services"),
        form,
        Object.assign(sharedFormOptions, {
            onSuccess: () => {
                resetForm();
                eventBus.$emit("closeModal", "service::create");
                Swal.fire({
                    icon: "success",
                    title: "تم بنجاح",
                    text: "تم انشاء الخدمات بنجاح",
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
        <FormField label="اسم الخدمة">
            <FormControl :errorMessage="form.errors.name" v-model="form.name" />
        </FormField>

        <BaseDivider />
        <!-- <FormField label="الشركة">
            <select-field :errorMessage="form.errors.company_name"
                class="flex w-full py-2 border rounded-md border-fieldgray rtl:text-right placeholder:text-black"
                v-model="form.company_name" :items="companies" />
        </FormField> -->

        <FormField label="صورة الخدمة">
            <FormFilePicker
                :errorMessage="form.errors.files"
                accept="image/*"
                class="mt-5 text-center"
                label="صورة الغلاف"
                v-model="form.files"
            />

            <!-- <span v-if="form.errors.files" class="text-red-500 ">
                {{ form . errors . files }}
            </span> -->
        </FormField>

        <BaseDivider />
        <div v-if="!isUpdate">
            <div v-for="(formItem, index) in formItems" :key="index">
                <div class="flex justify-end">
                    <BaseButton
                        type="button"
                        class="w-24 h-0"
                        :icon="mdiMinus"
                        color="danger"
                        label="حــذف"
                        @click="formItems.splice(index, 1)"
                    />
                </div>
                <FormField label="العنوان">
                    <FormControl v-model="formItem.title" />
                </FormField>

                <FormField label="الوصــف">
                    <FormControl
                        type="textarea"
                        v-model="formItem.description"
                    />
                </FormField>

                <BaseDivider />
            </div>

            <div class="flex justify-end">
                <BaseButton
                    type="button"
                    :icon="mdiPlus"
                    color="info"
                    label="اضافة المزيد"
                    @click="addFormItem"
                />
            </div>
        </div>

        <!-- {{ isUpdate }} -->
        <div v-if="isUpdate">
            <div
                v-for="(formItem, index) in service.additional_info"
                :key="index"
            >
                <div class="flex justify-end">
                    <BaseButton
                        type="button"
                        class="w-24 h-0"
                        :icon="mdiMinus"
                        color="danger"
                        label="حــذف"
                        @click="service.additional_info.splice(index, 1)"
                    />
                </div>
                <FormField label="العنوان">
                    <FormControl
                        v-model="formItem.title"
                        :error-message="
                            form.errors.additional_info
                                ? form.errors.additional_info[index]?.title
                                : null
                        "
                    />
                </FormField>

                <FormField label="الوصــف">
                    <FormControl
                        type="textarea"
                        :error-message="
                            form.errors.additional_info
                                ? form.errors.additional_info[index]
                                      ?.description
                                : null
                        "
                        v-model="formItem.description"
                    />
                </FormField>

                <BaseDivider />
            </div>
            <span v-if="form.errors" class="text-red-500">
                {{ form.errors.additional_info }}
            </span>

            <div class="flex justify-end">
                <BaseButton
                    type="button"
                    :icon="mdiPlus"
                    color="info"
                    label="اضافة المزيد"
                    @click="addFormItemUpdate"
                />
            </div>
        </div>
        <BaseDivider />

        <FormField label="اللغة">
            <select-field
                :errorMessage="form.errors.lang"
                class="flex w-full py-2 border rounded-md border-fieldgray rtl:text-right placeholder:text-black"
                v-model="form.lang"
                :items="lang"
            />
        </FormField>

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
