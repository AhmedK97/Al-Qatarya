<script setup>
    import {
        computed,
        ref,
        watch,
        reactive,
        toRef,
        onMounted
    } from "vue";
    import cloneDeep from "lodash/cloneDeep";
    import {
        router,
        useForm
    } from "@inertiajs/vue3";
    import FormControl from "@/Components/Admin/FormControl.vue";
    import InputError from "@/Components/InputError.vue";
    import FormField from "@/Components/Admin/FormField.vue";
    import CardBox from "@/Components/Admin/CardBox.vue";
    import SelectField from "@/Components/Admin/SelectField.vue";
    import BaseButtons from "@/Components/Admin/BaseButtons.vue";
    import BaseButton from "@/Components/Admin/BaseButton.vue";
    import BaseDivider from "@/Components/Admin/BaseDivider.vue";
    import {
        mdiAccount,
        mdiMail
    } from "@mdi/js";
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
            if (modalToOpen === "employee::create") {
                resetForm();
            }
        });
    });

    const isUpdate = computed(() => {
        if (!props.employee) {
            return false;
        }

        return !!props.employee.id;
    });

    const employee = reactive(props.employee || {});

    const form = useForm({
        name: employee.name,
        phone: employee.phone,
        address: employee.address,
        status: employee.status,
        about: employee.about,
        password: "",
    });


    const resetForm = () => {
        // form reset
        form.reset();
        // remove errors
        Object.keys(form.errors).forEach((key) => {
            delete form.errors[key];
        });

    };

    const statues = [{
            id: "Active",
            name: "نشط",
        },
        {
            id: "Inactive",
            name: "غير نشط",
        },
    ];


    watch(
        () => cloneDeep(props),
        (newProps) => {
            if (!newProps.employee) {
                return;
            }
            resetForm();
            Object.assign(employee, newProps.employee);
            form.name = newProps.employee.name;
            form.phone = newProps.employee.phone;
            form.address = newProps.employee.address;
            form.status = newProps.employee.status;
            form.about = newProps.employee.about;
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
                route("update.employees", employee.id),
                form,
                Object.assign(sharedFormOptions, {
                    onSuccess: () => {
                        eventBus.$emit("closeModal", "employee::update");
                        Swal.fire({
                            icon: "success",
                            title: "Success",
                            text: "Employees updated successfully",
                            timer: 3000,
                            timerProgressBar: true,
                        });
                    },
                })
            );

            return;
        }

        router.post(
            route("store.employees"),
            form,
            Object.assign(sharedFormOptions, {
                onSuccess: () => {
                    resetForm();
                    eventBus.$emit("closeModal", "employee::create");
                    Swal.fire({
                        icon: "success",
                        title: "Success",
                        text: "Employees created successfully",
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
        <FormField label="الاسم">
            <FormControl :errorMessage="form.errors.name" v-model="form.name" />
        </FormField>

        <BaseDivider />

        <FormField label="موبايل">
            <FormControl :errorMessage="form.errors.phone" v-model="form.phone" />
        </FormField>

        <BaseDivider />

        <FormField label="الحالة">
            <select-field :errorMessage="form.errors.status"
                class="flex w-full py-2 border rounded-md border-fieldgray rtl:text-right placeholder:text-black"
                v-model="form.status" :items="statues" />
        </FormField>

        <BaseDivider />

        <FormField label="العنوان">
            <FormControl :errorMessage="form.errors.address" v-model="form.address" />
        </FormField>

        <BaseDivider />

        <FormField label="نبذة">
            <FormControl :errorMessage="form.errors.about" v-model="form.about" />
        </FormField>

        <BaseDivider v-if="!isUpdate" />

        <FormField v-if="!isUpdate" label="باسورد">
            <FormControl type="password" :errorMessage="form.errors.password" v-model="form.password" />
        </FormField>

        <template #footer>
            <BaseButtons>
                <BaseButton @click="submit" type="submit" color="info" label="Submit" />
            </BaseButtons>
        </template>
    </CardBox>
</template>
