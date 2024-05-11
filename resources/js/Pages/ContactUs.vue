<template>
    <NavBar />
    <section class="bg-gray-50">
        <div
            class="container flex flex-col items-center px-4 mx-auto mt-20 space-y-8 md:space-y-0 md:items-start md:space-x-10 md:flex-row max-w-7xl rtl:space-x-reverse"
        >
            <div class="flex flex-col items-center space-y-8 md:items-start">
                <img
                    src="/storage/images/1-3.png"
                    class="object-cover object-center rounded-md w-[99%] md:w-80 lg:w-96 h-60"
                    alt=""
                />
                <div
                    class="flex items-center justify-center p-5 border rounded-md md:w-80 h-80 border-rose-900"
                >
                    <div class="flex flex-col space-y-14">
                        <div
                            class="flex items-start space-x-4 rtl:space-x-reverse"
                        >
                            <img
                                src="/storage/images/location.svg"
                                class="w-10 mt-1"
                                alt=""
                            />
                            <p
                                class="text-xl font-medium leading-relaxed text-rose-900"
                            >
                                {{ $t("footer.address-text") }}
                            </p>
                        </div>
                        <div class="flex space-x-4 rtl:space-x-reverse">
                            <img
                                src="/storage/images/phone-footer.svg"
                                class="w-8"
                                alt=""
                            />
                            <p
                                class="text-xl font-medium leading-relaxed text-rose-900"
                            >
                                {{ $t("footer.address-text1") }}
                            </p>
                        </div>
                        <div class="flex space-x-4 rtl:space-x-reverse">
                            <img
                                src="/storage/images/mail-footer.svg"
                                class="w-8"
                                alt=""
                            />
                            <p
                                class="text-xl font-medium leading-relaxed text-rose-900"
                            >
                                {{ $t("footer.address-text2") }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col w-full space-y-24">
                <div class="">
                    <SectionTitleShadow>
                        <template #upper-title>
                            {{ $t("contact-us-upper") }}
                        </template>
                        <template #title>
                            {{ $t("contact.us") }}
                        </template>
                    </SectionTitleShadow>
                    <p class="mt-8 text-lg font-medium text-gray-500">
                        {{ $t("contact.us-desc") }}
                    </p>
                    <p
                        class="mt-4 text-base font-medium leading-relaxed text-gray-500 lg:text-lg"
                    >
                        {{ $t("contact.us-paragraph") }}
                    </p>
                </div>
                <div class="">
                    <form action="">
                        <div class="flex w-full space-x-8 rtl:space-x-reverse">
                            <div class="w-full mb-6">
                                <!-- FormField -->
                                <FormField :label="$t('Name')">
                                    <FormControl
                                        :errorMessage="form.errors.name"
                                        v-model="form.name"
                                    />
                                </FormField>
                            </div>
                            <div class="w-full mb-6">
                                <!-- FormField -->
                                <FormField :label="$t('Phone')">
                                    <FormControl
                                        :errorMessage="form.errors.phone"
                                        v-model="form.phone"
                                    />
                                </FormField>
                            </div>
                        </div>
                        <div class="w-full mb-6">
                            <FormField :label="$t('Subject')">
                                <FormControl
                                    :errorMessage="form.errors.subject"
                                    v-model="form.subject"
                                />
                            </FormField>
                        </div>

                        <FormField :label="$t('Service')">
                            <select-field
                                :errorMessage="form.errors.service_id"
                                class="flex w-full py-2 border rounded-md border-fieldgray rtl:text-right placeholder:text-black"
                                v-model="form.service_id"
                                :items="services"
                            />
                        </FormField>

                        <div class="w-full mb-6">
                            <FormField :label="$t('Message')">
                                <FormControl
                                    :errorMessage="form.errors.message"
                                    v-model="form.message"
                                />
                            </FormField>
                        </div>

                        <div class="w-full mb-6">
                            <FormField :label="$t('Send Image')">
                                <FormFilePicker
                                    :errorMessage="form.errors.file"
                                    accept="image/*"
                                    class="mt-5 text-center"
                                    v-model="form.file"
                                />
                            </FormField>
                        </div>

                        <BaseButtons>
                            <BaseButton
                                @click="submit"
                                color="info"
                                :label="$t('Send')"
                            />
                        </BaseButtons>
                    </form>
                </div>
            </div>
        </div>
        <div
            id="map-container"
            class="container px-4 mx-auto my-10 border md:px-0 h-72 max-w-7xl"
        >
            <iframe
                class="w-full h-full"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                :src="mapSrc"
            ></iframe>
        </div>
    </section>
    <Footer />
</template>

<script setup>
import NavBar from "@/Components/NavBar.vue";
import Footer from "@/Components/Footer.vue";
import SectionTitleShadow from "@/Components/SectionTitleShadow.vue";
import { computed } from "@vue/reactivity";
import { router, useForm, usePage } from "@inertiajs/vue3";
import { reactive } from "vue";
import { ref } from "vue";
import FormField from "@/Components/Admin/FormField.vue";
import FormControl from "@/Components/Admin/FormControl.vue";
import selectField from "@/Components/Admin/SelectField.vue";
import FormFilePicker from "@/Components/Admin/FormFilePicker.vue";
import BaseButton from "@/Components/Admin/BaseButton.vue";
import BaseButtons from "@/Components/Admin/BaseButtons.vue";
import Swal from "sweetalert2";
import axios from "axios";

const mapSrc = computed(() => {
    return `https://maps.google.com/maps?q=1600%20Amphitheatre%20Parkway,%20Mountain%20View,%20CA%2094043,%20USA&output=embed`;
});

const page = usePage();
const services = page.props.services;

const serviceId = ref(null);

const form = useForm({
    name: "",
    phone: "",
    subject: "",
    service_id: "",
    message: "",
    file: "",
});

const submit = () => {
    // send.phone
    // Route::post('/send-phone', SendphoneController::class)->name('send.phone');
    // form.post(route("send.contact"))
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
    const resetForm = () => {
    // form reset
    form.reset();
    // remove errors
    Object.keys(form.errors).forEach((key) => {
        delete form.errors[key];
    });
};

    // router.post(
    //     route("send.contact"),
    //     form,
    //     Object.assign(sharedFormOptions, {
    //         onSuccess: () => {
    //             resetForm();
    //             Swal.fire({
    //                 icon: "success",
    //                 title: "شكرا لك",
    //                 text: "تم ارسال الرسالة بنجاح",
    //                 timer: 3000,
    //                 timerProgressBar: true,
    //             });
    //         },
    //     })
    // );

    // use axios
    axios
        .post(route("send.contact"), form)
        .then((response) => {
            resetForm();
            Swal.fire({
                icon: "success",
                title: "شكرا لك",
                text: "تم ارسال الرسالة بنجاح",
                timer: 3000,
                timerProgressBar: true,
            });
        })
        .catch((error) => {
            console.log(error);
        });
};
</script>

<style></style>
