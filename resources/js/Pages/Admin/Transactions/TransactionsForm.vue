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
        full_price: transaction.full_price,
        service_id: transaction.service_id,
        project_id: transaction.project_id,

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
            id: "Pending",
            name: "Pending",
        },
        {
            id: "Paid",
            name: "Paid",
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
            form.customer_id = transaction.customer_id;
            form.employee_id = transaction.employee_id;
            form.status = transaction.status;
            form.address = transaction.address;
            form.times_to_pay = transaction.times_to_pay;
            form.full_price = transaction.full_price;
            form.service_id = transaction.service_id;
            form.project_id = transaction.project_id;

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
                route("update.transactions", transaction.id),
                form,
                Object.assign(sharedFormOptions, {
                    onSuccess: () => {
                        eventBus.$emit("closeModal", "transaction::update");
                        Swal.fire({
                            icon: "success",
                            title: "Success",
                            text: "Transition updated successfully",
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
                        title: "Success",
                        text: "Transaction created successfully",
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
        <label class="block mb-2 font-bold">
            Customer
        </label>

        {{ employees }}
        <!-- {{ customers }} -->
        <v-select :options="customers" label="name" v-model="form.customer_id"
            :reduce="option => option.id"></v-select>

        <span v-if="form.errors.customer_id" class="text-sm text-red-600">{{ form . errors . customer_id }}</span>

        <BaseDivider />

        <label class="block mb-2 font-bold">
            Employee
        </label>
        <v-select :options="employees" label="name" v-model="form.employee_id"
            :reduce="option => option.id"></v-select>
        <span v-if="form.errors.employee_id" class="text-sm text-red-600">{{ form . errors . employee_id }}</span>

        <BaseDivider />

        <!-- services -->

        <label class="block mb-2 font-bold">
            Service
        </label>
        <v-select :options="services" label="name" v-model="form.service_id"
            :reduce="option => option.id"></v-select>
        <span v-if="form.errors.service_id" class="text-sm text-red-600">{{ form . errors . service_id }}</span>

        <BaseDivider />

        <!-- projects -->

        <!-- <label class="block mb-2 font-bold">
            Project
        </label>
        <v-select :options="projects" label="title" v-model="form.project_id"
            :reduce="option => option.id"></v-select>
        <span v-if="form.errors.project_id" class="text-sm text-red-600">{{ form . errors . project_id }}</span>

        <BaseDivider /> -->



        <FormField label="Status">
            <select-field :errorMessage="form.errors.status"
                class="flex w-full py-2 border rounded-md border-fieldgray rtl:text-right placeholder:text-black"
                v-model="form.status" :items="statues" />
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

        <FormField v-if="!isUpdate" label="Password">
            <FormControl type="password" :errorMessage="form.errors.password" v-model="form.password" />
        </FormField>

        <template #footer>
            <BaseButtons>
                <BaseButton @click="submit" type="submit" color="info" label="Submit" />
            </BaseButtons>
        </template>
    </CardBox>
</template>
