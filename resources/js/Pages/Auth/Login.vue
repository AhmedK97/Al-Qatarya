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
    phone: "",
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
                    label="رقم الهاتف"
                    label-for="phone"
                    help="ادخل رقم الهاتف"
                >
                    <FormControl
                        v-model="form.phone"
                        :icon="mdiAccount"
                        id="phone"
                        autocomplete="phone"
                        type="phone"
                        required
                    />
                </FormField>

                <FormField
                    label="كلمة المرور"
                    label-for="password"
                    help="ادخل كلمة المرور"
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
                    :options="{ remember: 'تذكرني' }"
                />

                <BaseDivider />

                <BaseLevel>
                    <BaseButtons>
                        <BaseButton
                            type="submit"
                            color="info"
                            label="تسجيل"
                            :class="{ 'opacity-25': form.processing }"
                            :disabled="form.processing"
                        />
                        <!-- <BaseButton
                            v-if="canResetPassword"
                            route-name="password.request"
                            color="info"
                            outline
                            label="نسيت كلمة المرور؟"
                        /> -->
                    </BaseButtons>
                    <!-- <Link :href="route('register')"> Register </Link> -->
                </BaseLevel>
            </CardBox>
        </SectionFullScreen>
    </LayoutGuest>
</template>
