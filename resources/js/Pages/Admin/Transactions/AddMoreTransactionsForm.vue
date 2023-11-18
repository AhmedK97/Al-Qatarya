<script setup>
    import {
        computed,
        ref,
        watch,
        reactive,
        toRef,
        onMounted,
        nextTick
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
        mdiMail,
        mdiPlus,
        mdiMinus
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
    const services = reactive(props.services || {});

    const form = useForm({
        services: props.services,
        project_id: props.project,
        extra_services: props.transaction?.extra_services,
    });

    const resetForm = () => {
        // form reset
        form.reset();
        // remove errors
        Object.keys(form.errors).forEach((key) => {
            delete form.errors[key];
        });

    };

    const removeExtraServices = (index) => {
        form.extra_services = form.extra_services.filter(
            (item, i) => i !== index
        );
    };

    const addFormItem = () => {
        form.extra_services.push({
            name: "",
            price: "",
            quantity: "",
        });
    };

    watch(
        () => cloneDeep(props),
        (newProps) => {
            if (!newProps.services) {
                return;
            }
            resetForm();
            Object.assign(services, newProps.services);
            form.project_id = newProps.project;
            form.extra_services = newProps.transaction?.extra_services;
            form.services = newProps.services;
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
        <div v-for="(service , id) in (form.services)" :key="id" class="mb-4">
            <FormField :label="`اسم الخدمة: ${service.name}`">
                <FormControl v-model="service.price" placeholder="السعر" />
                <FormControl v-model="service.quantity" placeholder="الكمية" />
            </FormField>
            <base-divider />


            <div v-if="form && form.errors">
                <span v-if=" form?.errors['services.' + id + '.price']" class="block text-sm text-red-600">
                    {{ form?.errors['services.' + id + '.price'] }}
                </span>
                <span v-if="form?.errors['services.' + id + '.quantity']" class="block text-sm text-red-600">
                    {{ form?.errors['services.' + id + '.quantity'] }}
                </span>
            </div>
        </div>
        <!-- {{ form?.extra_services }} -->
            <div v-for="(formItem, index) in form.extra_services" :key="index">
                {{}}
                <div class="flex justify-end">
                    <BaseButton type="button" class="w-24 h-0 mb-4" :icon="mdiMinus" color="danger"
                        label="Remove" @click="removeExtraServices(index)" />
                </div>

                <FormField >
                    <FormControl v-model="formItem.name" placeholder="الاســم" />
                </FormField>

                <FormField>
                    <FormControl v-model="formItem.price" placeholder="السعر" />
                    <FormControl v-model="formItem.quantity" placeholder="الكمية" />
                </FormField>

                <BaseDivider />

                <!-- {{ form.errors }} -->

                <!-- <div class="mb-5" v-if="form && form.errors">
                    <span v-if="form?.errors['extra_services.' + index + '.name']" class="block text-sm text-red-600">
                        {{ form?.errors['extra_services.' + index + '.name'] }}
                    </span>
                    <span v-if="form?.errors['extra_services.' + index + '.price']" class="block text-sm text-red-600">
                        {{ form?.errors['extra_services.' + index + '.price'] }}
                    </span>
                    <span v-if="form?.errors['extra_services.' + index + '.quantity']" class="block text-sm text-red-600">
                        {{ form?.errors['extra_services.' + index + '.quantity'] }}
                    </span>
                </div> -->

            </div>

            <div class="flex justify-end">
                <BaseButton type="button" :icon="mdiPlus" color="info" label="خدمات اضافية"
                    @click="addFormItem" />
            </div>
            <BaseDivider />


        <template #footer>
            <BaseButtons>
                <BaseButton @click="submit" type="submit" color="info" label="Submit" />
            </BaseButtons>
        </template>
    </CardBox>
</template>
