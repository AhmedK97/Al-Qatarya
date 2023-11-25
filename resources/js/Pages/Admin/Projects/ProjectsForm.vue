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
    import AutoCompleteField from "@/Components/Admin/AutoCompleteField.vue";
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
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
    import {
        CKEditor
    } from '@ckeditor/ckeditor5-vue';
    import vSelect from "vue-select";


    const editor = ClassicEditor
    const editorData = '<p>Content of the editor.</p>'
    const editorConfig = {}

    const props = defineProps({
        project: {
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

    });
    onMounted(() => {
        eventBus.$on("openModal", (modalToOpen) => {
            if (modalToOpen === "project::create") {
                resetForm();
            }
        });
    });


    const isUpdate = computed(() => {
        if (!props.project) {
            return false;
        }

        return !!props.project.id;
    });

    const project = reactive(props.project || {});

    const form = useForm({
        title: project.title,
        company: project.company,
        customer_id: project.customer_id,
        employee_id: project.employee_id,
        space_area: project.space_area,
        status: project.status,
        project_date: project.project_date,
        address: project.address,
        notes: project.notes,
        description: project.description,
        services_id: project.services_id,
    });

    const resetForm = () => {
        form.reset();
        Object.keys(form.errors).forEach((key) => {
            delete form.errors[key];
        });
    };

    const statues = [{
            id: "pending",
            name: "Pending",
        },
        {
            id: "in_progress",
            name: "In Progress",
        },
        {
            id: "finished",
            name: "Finished",
        },
        {
            id: "canceled",
            name: "Canceled",
        },
    ];

    const companies = [{
            'id': 'othman',
            'name': 'othman'
        },
        {
            'id': 'qatarya',
            'name': 'qatarya'
        }

    ];

    watch(
        () => cloneDeep(props),
        (newProps) => {
            if (!newProps.project) {
                return;
            }
            resetForm();
            Object.assign(project, newProps.project);
            form.title = newProps.project.title;
            form.company = newProps.project.company;
            form.customer_id = newProps.project.customer_id;
            form.employee_id = newProps.project.employee_id;
            form.space_area = newProps.project.space_area;
            form.status = newProps.project.status;
            form.project_date = newProps.project.project_date;
            form.address = newProps.project.address;
            form.notes = newProps.project.notes;
            form.description = newProps.project.description;
            form.services_id = newProps.project.services_id;
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

        console.log(isUpdate.value);

        if (isUpdate.value) {
            router.put(
                route("update.projects", project.id),
                form,
                Object.assign(sharedFormOptions, {
                    onSuccess: () => {
                        eventBus.$emit("closeModal", "project::update");
                        Swal.fire({
                            icon: "success",
                            title: "Success",
                            text: "Project updated successfully",
                            timer: 3000,
                            timerProgressBar: true,
                        });
                    },
                })
            );

            return;
        }

        router.post(
            route("store.projects"), form,
            Object.assign(sharedFormOptions, {
                onSuccess: () => {
                    eventBus.$emit("closeModal", "project::create");
                    resetForm();
                    Swal.fire({
                        icon: "success",
                        title: "Success",
                        text: "Project created successfully",
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
            <FormControl :errorMessage="form.errors.title" v-model="form.title" />
        </FormField>
        <BaseDivider />

        <FormField label="Company">
            <select-field :errorMessage="form.errors.company"
                class="flex w-full py-2 border rounded-md border-fieldgray rtl:text-right placeholder:text-black"
                v-model="form.company" :items="companies" />
        </FormField>
        <BaseDivider />

        <label class="block mb-2 font-bold">
            Customer
        </label>
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


        <label class="block mb-2 font-bold">
            Services
        </label>
        <v-select :options="services" label="name" v-model="form.services_id" :reduce="option => option.id"
            multiple></v-select>
        <span v-if="form.errors.services_id" class="text-sm text-red-600">{{ form . errors . services_id }}</span>

        <BaseDivider />

        <FormField label="Space Area">
            <FormControl type="textarea" :errorMessage="form.errors.space_area" v-model="form.space_area" />
        </FormField>
        <BaseDivider />


        <FormField label="Status">
            <select-field :errorMessage="form.errors.status"
                class="flex w-full py-2 border rounded-md border-fieldgray rtl:text-right placeholder:text-black"
                v-model="form.status" :items="statues" />
        </FormField>
        <BaseDivider />


        <FormField label="Project Date">
            <input type="date"
                class="flex w-full py-2 border rounded-md border-fieldgray rtl:text-right placeholder:text-black"
                v-model="form.project_date" :errorMessage="form.errors.project_date" />

        </FormField>
        <BaseDivider />


        <FormField label="Address">
            <FormControl :errorMessage="form.errors.address" v-model="form.address" />
        </FormField>
        <BaseDivider />


        <FormField label="Notes">
            <FormControl type="textarea" :errorMessage="form.errors.notes" v-model="form.notes" />
        </FormField>
        <BaseDivider />

        <FormField label="Description">
            <div id="app">
                <ckeditor :editor="editor" v-model="form.description" :config="editorConfig"></ckeditor>
            </div>
        </FormField>

        <template #footer>
            <BaseButtons>
                <BaseButton @click="submit" type="submit" color="info" label="Submit" />
            </BaseButtons>
        </template>
    </CardBox>
</template>
