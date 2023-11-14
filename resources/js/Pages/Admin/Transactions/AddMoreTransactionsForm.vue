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
        // customers: {
        //     type: Array,
        //     default: () => {},
        // },
        // employees: {
        //     type: Array,
        //     default: () => {},
        // },
        services: {
            type: Array,
            default: () => {},
        },
        project: {
            default: () => {},
        },


    });

    onMounted(() => {
        eventBus.$on("openModal", (modalToOpen) => {
            if (modalToOpen === "transaction::AddMoreTransactionForm") {
                resetForm();
            }
        });
    });

    const form = useForm({
        services: props.services,
        project_id: props.project,
        // price: props.services.price,
        // quantity: props.services.quantity,
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

    const services = reactive(props.services || {});


    watch(
        () => cloneDeep(props),
        (newProps) => {
            if (!newProps.services) {
                return;
            }
            resetForm();
            Object.assign(services, newProps.services);
            form.services = services;
            form.project_id = props.project;

            for (let i = 0; i < newProps.services.length; i++) {
                form.services[i] = {
                    id: newProps.services[i].id,
                    name: newProps.services[i].name,
                    price: newProps.services[i].price,
                    quantity: newProps.services[i].quantity,
                };
            }

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

        router.post(
            route("store.service.transactions", form.project_id),
            form,
            Object.assign(sharedFormOptions, {
                onSuccess: () => {
                    resetForm();
                    eventBus.$emit("closeModal", "transaction::AddMoreTransactionForm");
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
            Services
        </label>

        <div v-for="(service , id) in (services)" :key="id" class="mb-4">
            <label class="block mb-2 font-bold">
             اسم الخدمه :   {{ service . name }}
            </label>
            <div class="mb-3 ">
                <div class="mb-5 md:flex">
                    <label class="block mx-4 mb-2 font-bold">
                        السعر :
                    </label>

                    <input type="number" v-model="form.services[id].price"
                        class="w-full px-3 py-2 mb-2 mr-0 leading-tight text-gray-700 border rounded shadow appearance-none md:w-1/2 md:mb-0 md:mr-2 focus:outline-none focus:shadow-outline"
                        placeholder="Enter Cost" />

                    <p>دينار</p>

                </div>

                <!-- <span v-if="form.errors" class="text-sm text-red-600">{{ form . errors }}</span> -->
                <div class="mb-5 md:flex">
                    <label class="block mx-4 mb-2 font-bold">
                        الكمية :
                    </label>

                    <input type="number" v-model="form.services[id].quantity"
                        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none md:w-1/2 focus:outline-none focus:shadow-outline"
                        placeholder="Enter Quantity" />

                    <p class="mx-2"> عدد</p>
                </div>

                <!-- error -->
                <!-- <span v-if="form.errors.services[id].quantity" class="text-sm text-red-600">{{ form . errors . services[id] . quantity }}</span> -->


            </div>
            <base-divider />
        </div>



        <template #footer>
            <BaseButtons>
                <BaseButton @click="submit" type="submit" color="info" label="Submit" />
            </BaseButtons>
        </template>
    </CardBox>
</template>
