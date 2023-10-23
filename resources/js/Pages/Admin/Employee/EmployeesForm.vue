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
    user: {
        type: Object,
        default: () => {},
    },
    cities: {
        type: Array,
        default: () => [],
    },
    sectors: {
        type: Array,
        default: () => [],
    },
    roles: {
        type: Array,
        default: () => [],
    },
});

onMounted(() => {
    eventBus.$on("openModal", (modalToOpen) => {
        if (modalToOpen === "user::create") {
            resetForm();
        }
    });
});

const normalizedRoles = computed(() => {
    return props.roles.map((role) => ({
        id: role,
        name: role,
    }));
});

const statues = [
    {
        id: "active",
        name: "Active",
    },
    {
        id: "inactive",
        name: "Inactive",
    },
    {
        id: "blocked",
        name: "Blocked",
    },
];

const isUpdate = computed(() => {
    if (!props.user) {
        return false;
    }

    return !!props.user.id;
});

const user = reactive(props.user || {});

const form = useForm({
    name: user.name,
    email: user.email,
    website: user.website,
    phone: user.phone,
    role: user.role,
    city: user.city?.id,
    category: user.category?.id,
    is_verified: user.isVerified,
    status: user.status,
    password: "",
});

const UserSelectedSector = computed(() => {
    if (!user.category) {
        return null;
    }

    return user.category.parent_id;
});

const selectedSector = ref(UserSelectedSector.value);

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

        <BaseDivider />
        <FormField label="Role">
            <select-field
                :errorMessage="form.errors.role"
                class="flex w-full py-2 border rounded-md border-fieldgray rtl:text-right placeholder:text-black"
                v-model="form.role"
                :items="normalizedRoles"
            />
        </FormField>
        <BaseDivider />

        <FormField label="City">
            <div class="flex flex-col w-full space-y-2">
                <v-select
                    v-model="form.city"
                    :options="cities"
                    label="name"
                    :reduce="(city) => city.id"
                    :class="{
                        'border-red-500 border': form.errors.city,
                    }"
                >
                </v-select>
                <InputError :message="form.errors.city" />
            </div>
        </FormField>

        <BaseDivider />

        <FormField>
            <FormField label="Sector">
                <select-field
                    :errorMessage="form.errors.category"
                    class="flex w-full py-2 border rounded-md border-fieldgray rtl:text-right placeholder:text-black"
                    v-model="selectedSector"
                    :items="sectors"
                />
            </FormField>
            <FormField label="Field">
                <select-field
                    :errorMessage="form.errors.category"
                    class="flex w-full py-2 border rounded-md border-fieldgray rtl:text-right placeholder:text-black"
                    v-if="selectedSector"
                    v-model="form.category"
                    :items="fields"
                />
            </FormField>
        </FormField>
        <BaseDivider />
        <FormField>
            <FormField label="Status">
                <select-field
                    :errorMessage="form.errors.status"
                    class="flex w-full py-2 border rounded-md border-fieldgray rtl:text-right placeholder:text-black"
                    v-model="form.status"
                    :items="statues"
                />
            </FormField>
            <FormField label="Is Verified">
                <select-field
                    class="flex w-full py-2 border rounded-md border-fieldgray rtl:text-right placeholder:text-black"
                    v-model="form.is_verified"
                    :items="[
                        {
                            id: true,
                            name: 'Active (Yes)',
                        },
                        {
                            id: false,
                            name: 'Inactive (No)',
                        },
                    ]"
                />
            </FormField>
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
