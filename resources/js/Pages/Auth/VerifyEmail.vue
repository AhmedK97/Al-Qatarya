<script setup>
import { useForm, Head, Link } from "@inertiajs/vue3";
import { computed } from "vue";
import LayoutGuest from "@/Layouts/Admin/LayoutGuest.vue";
import SectionFullScreen from "@/Components/Admin/SectionFullScreen.vue";
import CardBox from "@/Components/Admin/CardBox.vue";
import FormField from "@/Components/Admin/FormField.vue";
import BaseDivider from "@/Components/Admin/BaseDivider.vue";
import BaseButton from "@/Components/Admin/BaseButton.vue";
import FormValidationErrors from "@/Components/Admin/FormValidationErrors.vue";
import NotificationBarInCard from "@/Components/Admin/NotificationBarInCard.vue";
import BaseLevel from "@/Components/Admin/BaseLevel.vue";

const props = defineProps({
    status: {
        type: String,
        default: null,
    },
});

const form = useForm();

const verificationLinkSent = computed(
    () => props.status === "verification-link-sent"
);

const submit = () => {
    form.post(route("verification.send"));
};
</script>

<template>
    <LayoutGuest>
        <Head title="Email Verification" />

        <SectionFullScreen v-slot="{ cardClass }" bg="purplePink">
            <CardBox :class="cardClass" is-form @submit.prevent="submit">
                <FormValidationErrors />

                <NotificationBarInCard v-if="verificationLinkSent" color="info">
                    A new verification link has been sent to the email address
                    you provided during registration.
                </NotificationBarInCard>

                <FormField>
                    <div class="mb-4 text-sm text-gray-600">
                        Thanks for signing up! Before getting started, could you
                        verify your email address by clicking on the link we
                        just emailed to you? If you didn't receive the email, we
                        will gladly send you another.
                    </div>
                </FormField>

                <BaseDivider />

                <BaseLevel>
                    <BaseButton
                        type="submit"
                        color="info"
                        label="Resend Verification Email"
                        :class="{ 'opacity-25': form.processing }"
                        :disabled="form.processing"
                    />
                    <Link :href="route('logout')" method="post" as="button">
                        Logout
                    </Link>
                </BaseLevel>
            </CardBox>
        </SectionFullScreen>
    </LayoutGuest>
</template>
