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
        customer: {
            type: Object,
            default: () => {},
        },

    });

    onMounted(() => {
        eventBus.$on("openModal", (modalToOpen) => {
            if (modalToOpen === "customer::create") {
                resetForm();
            }
        });
    });

    const isUpdate = computed(() => {
        if (!props.customer) {
            return false;
        }

        return !!props.customer.id;
    });

    const customer = reactive(props.customer || {});

    const form = useForm({
        name: customer.name,
        phone: customer.phone,
        address: customer.address,
        about: customer.about,
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
            name: "Active",
        },
        {
            id: "Inactive",
            name: "Inactive",
        },
    ];


    watch(
        () => cloneDeep(props),
        (newProps) => {
            if (!newProps.customer) {
                return;
            }
            resetForm();
            Object.assign(customer, newProps.customer);
            form.name = newProps.customer.name;
            form.phone = newProps.customer.phone;
            form.address = newProps.customer.address;
            form.about = newProps.customer.about;
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
                route("update.customers", customer.id),
                form,
                Object.assign(sharedFormOptions, {
                    onSuccess: () => {
                        eventBus.$emit("closeModal", "customer::update");
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
            route("store.customers"),
            form,
            Object.assign(sharedFormOptions, {
                onSuccess: () => {
                    resetForm();
                    eventBus.$emit("closeModal", "customer::create");
                    Swal.fire({
                        icon: "success",
                        title: "Success",
                        text: "Customer created successfully",
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

        <BaseDivider />

        <FormField label="Phone">
            <FormControl :errorMessage="form.errors.phone" v-model="form.phone" />
        </FormField>

        <BaseDivider />


        <FormField label="address">
            <FormControl :errorMessage="form.errors.address" v-model="form.address" />
        </FormField>

        <BaseDivider />

        <FormField label="About">
            <FormControl :errorMessage="form.errors.about" v-model="form.about" />
        </FormField>

        <BaseDivider v-if="!isUpdate" />


        <template #footer>
            <BaseButtons>
                <BaseButton @click="submit" type="submit" color="info" label="Submit" />
            </BaseButtons>
        </template>
    </CardBox>
</template>
