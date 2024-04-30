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
        default: () => { },
    },
    services: {
        type: Array,
        default: () => { },
    },
    project: {
        default: () => { },
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
const extra_services = reactive(props.transaction?.extra_services || []);

const form = useForm({
    services: props.services,
    project_id: props.project,
    extra_services: props.transaction?.extra_services,
});


const openTab = ref(1);
const toggleTabs = (id) => {
    openTab.value = id;
};
const filteredExtraServices = computed(() => {
    return form.extra_services?.filter(item => item.type === 'service') || [];
});


const filteredWorkers = computed(() => {
    return form.extra_services?.filter(item => item.type === 'worker') || [];
});


const resetForm = () => {
    // form reset
    form.reset();
    // remove errors
    Object.keys(form.errors).forEach((key) => {
        delete form.errors[key];
    });
};

const removeExtraServices = (formItem) => {
    form.extra_services = form.extra_services.filter(item => item !== formItem);
};

const addFormWorker = () => {
    form.extra_services.push({
        name: "",
        price: "",
        quantity: "",
        type: "worker",
    });
};


const addFormExtraService = () => {
    form.extra_services.push({
        name: "",
        price: "",
        quantity: "",
        type: "service",
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

// submitService

const submit = () => {
    const sharedFormOptions = {
        preserveState: true,
        preserveScroll: true,
        onError: (errors) => {
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
                    text: "Payment Updated successfully",
                    timer: 3000,
                    timerProgressBar: true,
                });
            },

        })
    );
};


</script>
<template>
    <ul class="flex flex-row flex-wrap pt-3 pb-4 mb-0 list-none">
        <li class="flex-auto mr-2 -mb-px text-center">
            <a class="block px-5 py-3 text-xs font-bold leading-normal uppercase rounded shadow-lg"
                v-on:click="toggleTabs(1)"
                v-bind:class="{ 'text-blueGray-600 font-medium bg-gray-100 cursor-pointer': openTab !== 1, 'text-white font-bold bg-gray-700': openTab === 1 }">
                الخدمات الاساسية
            </a>
        </li>

        <li class="flex-auto mr-2 -mb-px text-center">
            <a class="block px-5 py-3 text-xs font-bold leading-normal uppercase rounded shadow-lg"
                v-on:click="toggleTabs(2)"
                v-bind:class="{ 'text-blueGray-600 font-medium bg-gray-100 cursor-pointer': openTab !== 2, 'text-white font-bold bg-gray-700': openTab === 2 }">
                الخدمات الاضافية
            </a>
        </li>

        <li class="flex-auto mr-2 -mb-px text-center">
            <a class="block px-5 py-3 text-xs font-bold leading-normal uppercase rounded shadow-lg"
                v-on:click="toggleTabs(3)"
                v-bind:class="{ 'text-blueGray-600 font-medium bg-gray-100 cursor-pointer': openTab !== 3, 'text-white font-bold bg-gray-700': openTab === 3 }">
                العمالة
            </a>
        </li>
    </ul>

    <CardBox v-if="openTab == 1" form @submit.prevent="submit" :customClass="'overflow-y-auto w-96'">
        <div>
            <div v-for="(service, id) in (form.services)" :key="id" class="mb-4">
                <FormField  :label="`اسم الخدمة : ${service.name}`">
                    <FormControl v-model="service.price" placeholder="السعر" />
                </FormField>


                <div v-if="form && form.errors">
                    <span
                        v-if="form?.errors['services.' + id + '.price'] || form?.errors['services.' + id + '.quantity']"
                        class="block text-sm text-red-600">
                        يجب التاكد من ملأ جميع البيانات بالشكل الصحيح
                    </span>
                </div>
                <base-divider />

            </div>
        </div>
        <template #footer>
            <BaseButtons>
                <BaseButton @click="submit" type="submit" color="info" label="Submit" />
            </BaseButtons>
        </template>
    </CardBox>


    <CardBox v-if="openTab == 2" form @submit.prevent="submit" :customClass="'overflow-y-auto w-96'">
        <div>
            <div v-for="(formItem, index) in filteredExtraServices" :key="index">
                <div>
                    <div class="grid grid-cols-2">
                        <label class="block mb-2 font-bold">
                            الاســم
                        </label>
                         <div class="flex justify-end">
                            <BaseButton type="button" class="w-24 h-0 mb-4" :icon="mdiMinus" color="danger"
                                label="حــذف" @click="removeExtraServices(formItem)" />
                        </div>
                    </div>

                    <FormField>
                        <FormControl v-model="formItem.name" placeholder="الاســم" />
                    </FormField>
                </div>

                <div class="gap-3 mt-5 grid !grid-cols-1">
                    <div>
                        <label class="block mb-2 font-bold">
                            السعر
                        </label>
                        <FormField>
                            <FormControl v-model="formItem.price" placeholder="السعر" />
                        </FormField>

                        <span v-if="form.errors.length" class="block text-sm text-red-600">
                           من فضلك تاكد من اضافه جميع الحقول بشكل صحيح
                        </span>
                    </div>
                    <!-- <div>
                        <label class="block mb-2 font-bold">
                            الكمية
                        </label>
                        <FormField>

                            <FormControl v-model="formItem.quantity" placeholder="الكمية" />
                        </FormField>
                    </div> -->
                </div>
                <!-- <FormControl v-model="formItem.quantity" placeholder="الكمية" /> -->

                <input type="hidden" v-bind:value="'service'">
                <BaseDivider  />

                <div class="mb-5" v-if="form && form.errors">
                    <!-- <span v-if="form?.errors['extra_services.' + index + '.name']" class="block text-sm text-red-600">
                        {{ form?.errors['extra_services.' + index + '.name'] }}
                    </span>
                    <span v-if="form?.errors['extra_services.' + index + '.price']" class="block text-sm text-red-600">
                        {{ form?.errors['extra_services.' + index + '.price'] }}
                    </span>
                    <span v-if="form?.errors['extra_services.' + index + '.quantity']" class="block text-sm text-red-600">
                        {{ form?.errors['extra_services.' + index + '.quantity'] }}
                    </span> -->
                    <span v-if="form?.errors['extra_services.' + index + '.name'] ||
                    form?.errors['extra_services.' + index + '.price'] ||
                    form?.errors['extra_services.' + index + '.quantity']
                    " class="block text-sm text-red-600">
                        يجب التاكد من ملأ جميع البيانات بالشكل الصحيح
                    </span>


                </div>

            </div>
        </div>

        <div class="flex justify-end">
            <BaseButton type="button" :icon="mdiPlus" color="info" label="اضف خدمة اضافية"
                @click="addFormExtraService" />
        </div>

        <template #footer>
            <BaseButtons>
                <BaseButton @click="submit" type="submit" color="info" label="Submit" />
            </BaseButtons>
        </template>
    </CardBox>


    <CardBox v-if="openTab == 3" form @submit.prevent="submit" :customClass="'overflow-y-auto w-96'">
        <div>
            <div v-for="(formItem, index) in filteredWorkers" :key="index">
                <div>
                    <div class="grid grid-cols-2">
                        <label class="block mb-2 font-bold">
                            الاســم
                        </label>
                        <div class="flex justify-end">
                            <BaseButton type="button" class="w-24 h-0 mb-4" :icon="mdiMinus" color="danger"
                                label="حــذف" @click="removeExtraServices(formItem)" />
                        </div>
                    </div>

                    <FormField>
                        <FormControl v-model="formItem.name" placeholder="الاســم" />
                    </FormField>
                </div>

                <div class="gap-3 mt-5 grid !grid-cols-2">
                    <!-- <div>
                        <label class="block mb-2 font-bold">
                            اليومية
                        </label>
                        <FormField>

                            <FormControl v-model="formItem.price" placeholder="اليومية" />
                        </FormField>
                    </div> -->
                    <!-- <div>
                        <label class="block mb-2 font-bold">
                            الكمية
                        </label>
                        <FormField>

                            <FormControl v-model="formItem.quantity" placeholder="الكمية" />
                        </FormField>
                    </div> -->
                </div>

                <input type="hidden" v-bind:value="'worker'">

                <BaseDivider />


                <div class="mb-5" v-if="form && form.errors">
                    <!-- <span v-if="form?.errors['extra_services.' + index + '.name']" class="block text-sm text-red-600">
                        {{ form?.errors['extra_services.' + index + '.name'] }}
                    </span>
                    <span v-if="form?.errors['extra_services.' + index + '.price']" class="block text-sm text-red-600">
                        {{ form?.errors['extra_services.' + index + '.price'] }}
                    </span>
                    <span v-if="form?.errors['extra_services.' + index + '.quantity']" class="block text-sm text-red-600">
                        {{ form?.errors['extra_services.' + index + '.quantity'] }}
                    </span> -->
                    <span v-if="form?.errors['extra_services.' + index + '.name'] ||
                    form?.errors['extra_services.' + index + '.price'] ||
                    form?.errors['extra_services.' + index + '.quantity']
                    " class="block text-sm text-red-600">
                        يجب التاكد من ملأ جميع البيانات بالشكل الصحيح
                    </span>


                </div>

            </div>
        </div>

        <div class="flex justify-end">
            <BaseButton type="button" :icon="mdiPlus" color="info" label="اضف عمالة" @click="addFormWorker" />
        </div>
        <template #footer>
            <BaseButtons>
                <BaseButton @click="submit" type="submit" color="info" label="Submit" />
            </BaseButtons>
        </template>


    </CardBox>



    <!-- <BaseDivider /> -->


    <!-- <template #footer>
        <BaseButtons>
            <BaseButton @click="submit" type="submit" color="info" label="Submit" />
        </BaseButtons>
    </template> -->
</template>
