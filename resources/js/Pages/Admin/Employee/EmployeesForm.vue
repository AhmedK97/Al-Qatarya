<script setup>
import { computed, ref, watch, reactive, toRef, onMounted } from "vue";
import cloneDeep from "lodash/cloneDeep";
import { router, useForm } from "@inertiajs/vue3";
import FormControl from "@/Components/Admin/FormControl.vue";
import InputError from "@/Components/InputError.vue";
import FormField from "@/Components/Admin/FormField.vue";
import CardBox from "@/Components/Admin/CardBox.vue";
import BaseButtons from "@/Components/Admin/BaseButtons.vue";
import BaseButton from "@/Components/Admin/BaseButton.vue";
import BaseDivider from "@/Components/Admin/BaseDivider.vue";
import SelectField from "@/Components/Admin/SelectField.vue";
import VSelect from "vue-select";
import { mdiAccount, mdiMail } from "@mdi/js";
import "vue-select/dist/vue-select.css";
import eventBus from "@/Composables/eventBus.js";
import Swal from "sweetalert2";

const props = defineProps({
    employee: {
        type: Object,
        default: () => {},
    },

});

onMounted(() => {
    eventBus.$on("openModal", (modalToOpen) => {
        if (modalToOpen === "user::create") {
            resetForm();
        }
    });
});


const isUpdate = computed(() => {
    if (!props.user) {
        return false;
    }

    return !!props.user.id;
});

const employee = reactive(props.employee || {});

const form = useForm({
    name: employee.name,
    email: employee.email,
    phone: employee.phone,
    password: "",
});


const fields = computed(() => {
    if (!selectedSector.value) {
        return [];
    }

    const sector = props.sectors.find((s) => s.id == selectedSector.value);

    return sector.fields;
});

const resetForm = () => {
    // form reset
    form.reset();
    // remove errors
    Object.keys(form.errors).forEach((key) => {
        delete form.errors[key];
    });

    // form reset
    selectedSector.value = null;
};

watch(
    () => cloneDeep(props),
    (newProps) => {
        if (!newProps.user) {
            return;
        }
        resetForm();
        Object.assign(user, newProps.user);
        form.name = newProps.user.name;
        form.name_en = newProps.user.name_en;
        form.email = newProps.user.email;
        form.phone = newProps.user.phone;
        selectedSector.value = newProps.user.category?.parent_id;
        form.category = newProps.user.category?.id;
        form.city = newProps.user.city?.id;
        form.registerType = newProps.user.registerType;
        form.status = newProps.user.status;
        form.is_verified = newProps.user.isVerified;
        form.role = newProps.user.role;
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
        router.put(
            route("admin.users.update", user.id),
            form,
            Object.assign(sharedFormOptions, {
                onSuccess: () => {
                    eventBus.$emit("closeModal", "user::update");
                    Swal.fire({
                        icon: "success",
                        title: "Success",
                        text: "User updated successfully",
                        timer: 3000,
                        timerProgressBar: true,
                    });
                },
            })
        );

        return;
    }

    router.post(
        route("admin.users.store"),
        form,
        Object.assign(sharedFormOptions, {
            onSuccess: () => {
                resetForm();
                eventBus.$emit("closeModal", "user::create");
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: "User created successfully",
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
            <FormField label="Name">
                <FormControl :errorMessage="form.errors.name" v-model="form.name" />
            </FormField>

            <FormField>
                <FormField label="Email">
                    <FormControl
                        :errorMessage="form.errors.email"
                        v-model="form.email"
                        type="email"
                    />
                </FormField>

                <FormField label="Phone">
                    <FormControl
                        :errorMessage="form.errors.phone"
                        v-model="form.phone"
                    />
                </FormField>
            </FormField>

            <FormField v-if="!isUpdate" label="Password">
                <FormControl
                    type="password"
                    :errorMessage="form.errors.password"
                    v-model="form.password"
                />
            </FormField>




            <template #footer>
                <BaseButtons>
                    <BaseButton
                        @click="submit"
                        type="submit"
                        color="info"
                        label="Submit"
                    />
                </BaseButtons>
            </template>
        </CardBox>
</template>
