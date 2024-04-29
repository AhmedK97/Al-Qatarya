<script setup>
import { useForm, Head, Link } from "@inertiajs/vue3";
import { mdiEmail } from "@mdi/js";
import LayoutGuest from "@/Layouts/Admin/LayoutGuest.vue";
import SectionFullScreen from "@/Components/Admin";
import CardBox from "@/Components/Admin/CardBox.vue";
import FormField from "@/Components/Admin/FormField.vue";
import FormControl from "@/Components/Admin/FormControl.vue";
import BaseDivider from "@/Components/Admin/BaseDivider.vue";
import FormValidationErrors from "@/Components/Admin/FormValidationErrors.vue";
import BaseLevel from "@/Components/Admin/BaseLevel.vue";
import NotificationBarInCard from "@/Components/Admin/NotificationBarInCard.vue";

defineProps({
    status: {
        type: String,
        default: null,
    },
});

const form = useForm({
    email: "",
});

const submit = () => {
    form.post(route("password.email"));
};
</script>

<template>
    <LayoutGuest>

        <Head title="Forgot Password" />

        <SectionFullScreen v-slot="{ cardClass }" bg="purplePink">
            <CardBox :class="cardClass" is-form @submit.prevent="submit">
                <FormValidationErrors />

                <NotificationBarInCard v-if="status" color="info">
                    {{ status }}
                </NotificationBarInCard>

                <FormField>
                    <div class="mb-4 text-sm text-gray-600">
                        Forgot your password? No problem. Just let us know your
                        email address and we will email you a password reset
                        link that will allow you to choose a new one.
                    </div>
                </FormField>

                <FormField label="Email" help="Please enter your email">
                    <FormControl v-model="form.email" :icon="mdiEmail" autocomplete="email" type="email" required />
                </FormField>

                <BaseDivider />

                <BaseLevel>
                    <BaseButton type="submit" color="info" label="Email link" :class="{ 'opacity-25': form.processing }"
                        :disabled="form.processing" />
                    <Link :href="route('login')"> Back to login </Link>
                </BaseLevel>
            </CardBox>
        </SectionFullScreen>
    </LayoutGuest>
</template>
