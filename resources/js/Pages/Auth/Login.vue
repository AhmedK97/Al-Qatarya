<script setup>
import { useForm, Head, Link } from "@inertiajs/vue3";
import { mdiAccount, mdiAsterisk } from "@mdi/js";
import LayoutGuest from "@/Layouts/Admin/LayoutGuest.vue";
import SectionFullScreen from "@/Components/Admin/SectionFullScreen.vue";
import CardBox from "@/Components/Admin/CardBox.vue";
import FormCheckRadioGroup from "@/Components/Admin/FormCheckRadioGroup.vue";
import FormField from "@/Components/Admin/FormField.vue";
import FormControl from "@/Components/Admin/FormControl.vue";
import BaseDivider from "@/Components/Admin/BaseDivider.vue";
import BaseButton from "@/Components/Admin/BaseButton.vue";
import BaseButtons from "@/Components/Admin/BaseButtons.vue";
import FormValidationErrors from "@/Components/Admin/FormValidationErrors.vue";
import NotificationBarInCard from "@/Components/Admin/NotificationBarInCard.vue";
import BaseLevel from "@/Components/Admin/BaseLevel.vue";

const props = defineProps({
    canResetPassword: Boolean,
    status: {
        type: String,
        default: null,
    },
});

const form = useForm({
    email: "",
    password: "",
    remember: [],
});

const submit = () => {
    form.transform((data) => ({
        ...data,
        remember: form.remember && form.remember.length ? "on" : "",
    })).post(route("login"), {
        onFinish: () => form.reset("password"),
    });
};
</script>

<template>
    <LayoutGuest>
        <Head title="Login" />

        <SectionFullScreen v-slot="{ cardClass }" bg="purplePink">
            <CardBox :class="cardClass" is-form @submit.prevent="submit">
                <FormValidationErrors />

                <NotificationBarInCard v-if="status" color="info">
                    {{ status }}
                </NotificationBarInCard>

                <FormField
                    label="Email"
                    label-for="email"
                    help="Please enter your email"
                >
                    <FormControl
                        v-model="form.email"
                        :icon="mdiAccount"
                        id="email"
                        autocomplete="email"
                        type="email"
                        required
                    />
                </FormField>

                <FormField
                    label="Password"
                    label-for="password"
                    help="Please enter your password"
                >
                    <FormControl
                        v-model="form.password"
                        :icon="mdiAsterisk"
                        type="password"
                        id="password"
                        autocomplete="current-password"
                        required
                    />
                </FormField>

                <FormCheckRadioGroup
                    v-model="form.remember"
                    name="remember"
                    :options="{ remember: 'Remember' }"
                />

                <BaseDivider />

                <BaseLevel>
                    <BaseButtons>
                        <BaseButton
                            type="submit"
                            color="info"
                            label="Login"
                            :class="{ 'opacity-25': form.processing }"
                            :disabled="form.processing"
                        />
                        <BaseButton
                            v-if="canResetPassword"
                            route-name="password.request"
                            color="info"
                            outline
                            label="Remind"
                        />
                    </BaseButtons>
                    <Link :href="route('register')"> Register </Link>
                </BaseLevel>
            </CardBox>
        </SectionFullScreen>
    </LayoutGuest>
</template>
