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

    const formItems = reactive([{
        name: '',
        price: '',
        quantity: '',
    }, ]);

    const addFormItem = () => {
        formItems.push({
            name: '',
            price: '',
            quantity: '',
        });
    };

    watch(formItems, (filledFilters) => {
        form.additional_info = filledFilters;
    });

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
            <FormField :label="`اسم الخدمة: ${service.name}`">
                <FormControl v-model="form.services[id].price" placeholder="السعر" />
                <FormControl v-model="form.services[id].quantity" placeholder="الكمية" />
            </FormField>
            <base-divider />
        </div>


        <div v-if="!isUpdate">
            <BaseDivider />
            <div v-for="(formItem, index) in formItems" :key="index">
                <div class="flex justify-end">
                    <BaseButton type="button" class="w-24 h-0 mb-4" :icon="mdiMinus" color="danger" label="Remove"
                        @click="formItems.splice(index, 1)" />
                </div>

                <FormField label="">
                    <FormControl v-model="formItem.name"  placeholder="الاسم"/>
                </FormField>

                <FormField >
                    <FormControl v-model="formItem.price" placeholder="السعر"/>
                    <FormControl v-model="formItem.quantity" placeholder="الكمية"/>
                </FormField>

                <BaseDivider />
            </div>

            <div class="flex justify-end">
                <BaseButton type="button" :icon="mdiPlus" color="info" label="Add More Info"
                    @click="addFormItem" />
            </div>
            <BaseDivider />
        </div>

        <!-- {{ isUpdate }} -->


        <template #footer>
            <BaseButtons>
                <BaseButton @click="submit" type="submit" color="info" label="Submit" />
            </BaseButtons>
        </template>
    </CardBox>
</template>
