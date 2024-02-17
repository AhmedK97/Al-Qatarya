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
        if (modalToOpen === "transaction::ShowProfitDetails") {
            resetForm();
        }
    });
});
const services = reactive(props.services || {});
const extra_services = reactive(props.extra_services || {});
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

const clonedProps = ref(cloneDeep(props));
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


// extra services where has type = service
const extraServicesService = computed(() => {
    return form.extra_services.filter((service) => service.type === "service");
});

const calculateServiceProfit = (service) => {
    return (service.price * service.quantity) - (service.details['originPrice'] * service.quantity);
};

const calculateExtraServiceProfit = (service) => {
    return (service.price * service.quantity) - (service.details['originPrice'] * service.quantity);
};

const calculateWorkerProfit = (service) => {
    return (service.price * service.quantity) - (service.details['originPrice'] * service.quantity);
};

// filteredServices
const filteredServices = computed(() => {
    return form.extra_services?.filter(item => item.type === 'service');
});

// filter worker
const filteredWorkers = computed(() => {
    return form.extra_services?.filter(item => item.type === 'worker');
});

const openServiceTab = ref(1);
const toggleServiceTabs = (tabNumber) => {
    openServiceTab.value = tabNumber;
};

const openExtraServiceTab = ref("");
const toggleExtraServiceTabs = (tabNumber) => {
    openExtraServiceTab.value = tabNumber;
};


const openWorkerTab = ref("");
const toggleWorkerTabs = (tabNumber) => {
    openWorkerTab.value = tabNumber;
};

const calculateWorkerPayment = (worker) => {
    const originPrice = Number(worker['originPrice']) || 0;
    const discount = Number(worker['discount']) || 0;
    const tips = Number(worker['tips']) || 0;

    console.log(originPrice, discount, tips);

    return originPrice + tips - discount;
};
const date = new Date();

const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

const currentDate = `${year}-${month}-${day}`;

const newDetailWorker = ref({
    originPrice: '',
    tips: '',
    discount: '',
    created_at: '',
});

const validateOriginPriceWorker = ref('')
const addNewDetail = (id) => {
    // originPrice required
    if (!newDetailWorker.value.originPrice) {
        validateOriginPriceWorker.value = 'اليومية مطلوبة';
        return
    }

    const newId = parseInt(id)

    newDetailWorker.value.created_at = currentDate;

    form.extra_services[newId - 1].details.push({ ...newDetailWorker.value });

    newDetailWorker.value = {
        originPrice: '',
        tips: '',
        discount: '',
        created_at: '',
    };

};

const deleteDetail = (id, index) => {
    const newId = parseInt(id)
    form.extra_services[newId - 1].details.splice(index, 1);
};


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
                eventBus.$emit("closeModal", "transaction::ShowProfitDetails");
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
<template class="bg-gray-500">
    <CardBox form @submit.prevent="submit" :customClass="'overflow-y-auto w-96'">
        <div class="flex flex-wrap">
            <div class="w-full">
                <label class="block mb-2 font-bold">
                    الخدمات الاساسية :
                    <span class="text-red-700">
                        {{ form.services?.length }}
                    </span>
                </label>
                <ul class="flex flex-row flex-wrap pt-3 pb-4 mb-0 list-none">
                    <li v-for="(service, id) in  (form.services) " :key="id" class="flex-auto mr-2 -mb-px text-center">
                        <a class="block px-5 py-3 text-xs font-bold leading-normal uppercase rounded shadow-lg"
                            v-on:click="toggleServiceTabs(service.id)"
                            v-bind:class="{ 'text-blueGray-600 font-medium bg-gray-100 cursor-pointer': openServiceTab !== service.id, 'text-white font-bold bg-gray-700': openServiceTab === service.id }">
                            {{ service.name }}
                        </a>
                    </li>
                </ul>
                <div class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg">
                    <div class="flex-auto px-4 py-5">
                        <div class="tab-content tab-space">
                            <div v-for="(service, id) in  (form.services) " :key="id"
                                v-bind:class="{ 'hidden': openServiceTab !== service.id, 'block': openServiceTab === service.id }">
                                <h1 class="m-3 font-bold text-center bg-red-200">{{ service.name }}</h1>
                                <table class="min-w-full divide-y divide-gray-200">
                                    <thead>
                                        <tr>
                                            <th scope="col"
                                                class="px-6 py-3 text-xs font-semibold tracking-wider text-left text-gray-500 uppercase bg-gray-50">
                                                سعر المتر
                                            </th>
                                            <th scope="col"
                                                class="px-6 py-3 text-xs font-semibold tracking-wider text-left text-gray-500 uppercase bg-gray-50">
                                                عدد الامتار
                                            </th>
                                            <th scope="col"
                                                class="px-6 py-3 text-xs font-semibold tracking-wider text-left text-gray-500 uppercase bg-gray-50">
                                                المجموع
                                            </th>
                                            <th scope="col"
                                                class="px-6 py-3 text-xs font-semibold tracking-wider text-left text-gray-500 uppercase bg-gray-50">
                                                تاريخ الاضافة
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y divide-gray-200">
                                        <tr>
                                            <td class="px-6 py-4 whitespace-nowrap">
                                                {{ service.price }} دينار
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap">
                                                {{ service.quantity }} متر
                                            </td>
                                            <!-- total -->
                                            <td class="px-6 py-4 whitespace-nowrap">
                                                {{ service.price * service.quantity }} دينار
                                            </td>
                                            <!-- created at -->
                                            <td class="px-6 py-4 whitespace-nowrap">
                                                {{ service.created_at }}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <br>
                                <h1 class="font-bold text-cyan-700">حساب الارباح :</h1>
                                <div class="grid grid-flow-row grid-cols-2">
                                    <FormField :label="'سعر المتر في المادة الخام :'">
                                        <FormControl v-model="service.details['originPrice']"
                                            placeholder="سعر المتر في المادة الخام" />
                                    </FormField>

                                    <p class="m-auto" v-if="calculateServiceProfit(service) > 0">
                                        <span class="block ">
                                            المجموع : (سعر المتر الخام * عدد الامتار)=
                                            <strong class="font-bold text-red-700">
                                                {{ service.details['originPrice'] * service.quantity }}
                                                دينار
                                            </strong>
                                        </span>
                                        <span v-if="service.details['originPrice']" class="block font-bold text-green-700">
                                            الربح : {{ calculateServiceProfit(service) }} دينار
                                        </span>
                                    </p>

                                    <p class="m-auto" v-else-if="calculateServiceProfit(service) === 0">
                                        <span class="block font-bold text-red-700">
                                            لا يوجد ربح
                                        </span>
                                    </p>

                                    <p class="m-auto" v-else>
                                        <span class="block ">
                                            المجموع : (سعر المتر الخام * عدد الامتار)=
                                            <strong class="font-bold text-red-700">
                                                <!-- {{ service }} -->
                                                {{ service.details['originPrice'] * service.quantity }}
                                                دينار
                                            </strong>
                                        </span>
                                        <span class="block font-bold text-red-700">
                                            الخسارة : {{ calculateServiceProfit(service) }} دينار
                                        </span>
                                    </p>
                                </div>


                                <div v-if="form && form.errors">
                                    <!-- <span v-if=" form?.errors['services.' + id + '.price']" class="block text-sm text-red-600">
                    {{ form?.errors['services.' + id + '.price'] }}
                </span>
                <span v-if="form?.errors['services.' + id + '.quantity']" class="block text-sm text-red-600">
                    {{ form?.errors['services.' + id + '.quantity'] }}
                </span> -->
                                    <span
                                        v-if="form?.errors['services.' + id + '.price'] || form?.errors['services.' + id + '.quantity']"
                                        class="block text-sm text-red-600">
                                        يجب التاكد من ملأ جميع البيانات بالشكل الصحيح
                                    </span>
                                </div>

                                <BaseButtons>
                                    <BaseButton @click="submit" type="submit" color="info" label="حفظ" />
                                </BaseButtons>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </CardBox>

    <BaseDivider :bold="true" />

    <CardBox form @submit.prevent="submit" :customClass="'overflow-y-auto w-96'">
        <label class="block mb-2 font-bold">
            الخدمات الاضافية :
            <span class="text-red-700">
                {{ filteredServices?.length }}
            </span>
        </label>

        <ul class="flex flex-row flex-wrap pt-3 pb-4 mb-0 list-none">

            <li v-for="(formItem, index) in filteredServices" :key="index" class="flex-auto mr-2 -mb-px text-center">
                <a class="block px-5 py-3 text-xs font-bold leading-normal uppercase rounded shadow-lg"
                    v-on:click="toggleExtraServiceTabs(formItem.id)"
                    v-bind:class="{ 'text-blueGray-600 font-medium bg-gray-100 cursor-pointer': openExtraServiceTab !== formItem.id, 'text-white font-bold bg-gray-700': (openExtraServiceTab ? openExtraServiceTab : filteredServices[0]?.id) === formItem.id }">
                    {{ formItem.name }}
                </a>
            </li>
        </ul>
        <div class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg">
            <div class="flex-auto px-4 py-5">
                <div class="tab-content tab-space">
                    <div v-for="( formItem, index ) in  filteredServices " :key="index" v-bind:class="{
                        'hidden': (openExtraServiceTab ? openExtraServiceTab : filteredServices[0]?.id)
                            !== formItem.id, 'block': openExtraServiceTab === formItem.id
                    }">
                        <h1 class="m-3 font-bold text-center bg-red-200">{{ formItem.name }}</h1>

                        <table class="min-w-full divide-y divide-gray-200">
                            <thead>
                                <tr>
                                    <th scope="col"
                                        class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-50">
                                        سعر المتر
                                    </th>
                                    <th scope="col"
                                        class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-50">
                                        عدد الامتار
                                    </th>
                                    <th scope="col"
                                        class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-50">
                                        المجموع
                                    </th>
                                    <th scope="col"
                                        class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-50">
                                        تاريخ الاضافة
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        {{ formItem.price }} دينار
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        {{ formItem.quantity }} متر
                                    </td>
                                    <!-- total -->
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        {{ formItem.price * formItem.quantity }} دينار
                                    </td>
                                    <!-- created at -->
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        {{ formItem.created_at }}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <br>
                        <h1 class="font-bold text-cyan-700">حساب الارباح :</h1>
                        <div class="grid grid-flow-row grid-cols-2">
                            <FormField :label="'سعر المتر في المادة الخام :'">
                                <FormControl v-model="formItem.details['originPrice']"
                                    placeholder="سعر المتر في المادة الخام" />
                            </FormField>

                            <p class="m-auto" v-if="calculateExtraServiceProfit(formItem) > 0">
                                <span class="block ">
                                    المجموع : (سعر المتر الخام * عدد الامتار)=
                                    <strong class="font-bold text-red-700">
                                        {{ formItem.details['originPrice'] * formItem.quantity }}
                                        دينار
                                    </strong>
                                </span>
                                <span v-if="formItem.details['originPrice']" class="block font-bold text-green-700">
                                    الربح : {{ calculateExtraServiceProfit(formItem) }} دينار
                                </span>
                            </p>

                            <p class="m-auto" v-else-if="calculateExtraServiceProfit(formItem) === 0">
                                <span class="block font-bold text-red-700">
                                    لا يوجد ربح
                                </span>
                            </p>

                            <p class="m-auto" v-else>
                                <span class="block ">
                                    المجموع : (سعر المتر الخام * عدد الامتار)=
                                    <strong class="font-bold text-red-700">
                                        {{ formItem.details['originPrice'] * formItem.quantity }}
                                        دينار
                                    </strong>
                                </span>
                                <span class="block font-bold text-red-700">
                                    الخسارة : {{ calculateExtraServiceProfit(formItem) }} دينار
                                </span>
                            </p>
                        </div>
                        <input type="hidden" v-bind:value="'service'">

                        <!-- <input type="hidden" v-model="formItem.details['type']" value="'service'" /> -->


                        <div v-if="form && form.errors">
                            <!-- <span v-if=" form?.errors['services.' + id + '.price']" class="block text-sm text-red-600">
                    {{ form?.errors['services.' + id + '.price'] }}
                </span>
                <span v-if="form?.errors['services.' + id + '.quantity']" class="block text-sm text-red-600">
                    {{ form?.errors['services.' + id + '.quantity'] }}
                </span> -->
                            <span
                                v-if="form?.errors['services.' + id + '.price'] || form?.errors['services.' + id + '.quantity']"
                                class="block text-sm text-red-600">
                                يجب التاكد من ملأ جميع البيانات بالشكل الصحيح
                            </span>
                            <BaseButtons>
                                <BaseButton @click="submit" type="submit" color="info" label="حفظ" />
                            </BaseButtons>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-for="( formItem, index ) in  form.extra_services " :key="index">
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

        <!-- <div class="flex justify-end">
            <BaseButton type="button" :icon="mdiPlus" color="info" label="خدمات اضافية" @click="addFormItem" />
        </div> -->
        <BaseDivider />


        <!-- <template #footer>
            <BaseButtons>
                <BaseButton @click="submit" type="submit" color="info" label="Submit" />
            </BaseButtons>
        </template> -->
    </CardBox>

    <BaseDivider :bold="true" />

    <CardBox form @submit.prevent="submit" :customClass="'overflow-y-auto w-96'">
        <label class="block mb-2 font-bold">
            العمالة :
            <span class="text-red-700">
                {{ filteredWorkers?.length }}
            </span>
        </label>

        <ul class="flex flex-row flex-wrap pt-3 pb-4 mb-0 list-none">
            <li v-for="( formWorker, index ) in  filteredWorkers " :key="index" class="flex-auto mr-2 -mb-px text-center">
                <a class="block px-5 py-3 text-xs font-bold leading-normal uppercase rounded shadow-lg"
                    v-on:click="toggleWorkerTabs(formWorker.id)"
                    v-bind:class="{ 'text-blueGray-600 font-medium bg-gray-100 cursor-pointer': openWorkerTab !== formWorker.id, 'text-white font-bold bg-gray-700': (openWorkerTab ? openWorkerTab : filteredWorkers[0]?.id) === formWorker.id }">
                    {{ formWorker.name }}
                </a>
            </li>
        </ul>
        <div class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg">
            <div class="flex-auto px-4 py-5">
                <div class="tab-content tab-space">
                    <div v-for="( formWorker, index ) in  filteredWorkers " :key="index" v-bind:class="{
                        'hidden': (openWorkerTab ? openWorkerTab : filteredWorkers[0]?.id) !== formWorker.id, 'block': openWorkerTab === formWorker.id
                    }">
                        <h1 class="m-3 font-bold text-center bg-red-200">{{ formWorker.name }}</h1>

                        <table class="min-w-full divide-y divide-gray-200">
                            <thead>
                                <tr>
                                    <th scope="col"
                                        class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-50">
                                        #
                                    </th>

                                    <th scope="col"
                                        class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-50">
                                        اليومية
                                    </th>

                                    <th scope="col"
                                        class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-50">
                                        اكرامية
                                    </th>

                                    <th scope="col"
                                        class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-50">
                                        خصم
                                    </th>
                                    <th scope="col"
                                        class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-50">
                                        المجموع
                                    </th>

                                    <th scope="col"
                                        class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-50">
                                        التاريخ
                                    </th>
                                    <th scope="col"
                                        class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-50">
                                        اجراء
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                <tr v-for="(details, index) in formWorker.details" :key="details.id">
                                    <!-- {{ details }} -->
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        {{ index + 1 }}
                                    </td>

                                    <td class="px-6 py-4 whitespace-nowrap">
                                        {{ details.originPrice }} دينار
                                    </td>

                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <span v-if="details.tips"> {{ details.tips }} دينار </span>
                                        <span v-else> لا يوجـد</span>
                                    </td>

                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <span v-if="details.discount"> {{ details.discount ?? 0 }} دينار</span>
                                        <span v-else> لا يوجـد</span>
                                    </td>

                                    <!-- المجموع -->
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        {{ calculateWorkerPayment(details) }} دينار
                                    </td>


                                    <td class="px-6 py-4 whitespace-nowrap">
                                        {{ details.created_at }}
                                    </td>

                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <button @click="deleteDetail(formWorker.id, index)" type="button"
                                            class="text-red-600">حذف</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <br>
                        <h1 class="font-bold text-cyan-700">حساب الارباح :</h1>
                        <div>

                            <!-- Form fields for new entry -->
                            <div class="grid grid-flow-row grid-cols-4">
                                <FormField class="mx-2" :label="'اليومية :'">
                                    <FormControl v-model="newDetailWorker.originPrice" placeholder="اليومية" />
                                </FormField>

                                <div class="grid grid-flow-col grid-cols-2 col-span-2">
                                    <FormField class="mx-2" :label="'اكرامية :'">
                                        <FormControl v-model="newDetailWorker.tips" placeholder="اكرامية ان وجد" />
                                    </FormField>

                                    <FormField class="mx-2" :label="'خصم :'">
                                        <FormControl v-model="newDetailWorker.discount" placeholder="خصم ان وجد" />
                                    </FormField>
                                </div>
                                <BaseButtons class="mx-2 mt-5">
                                    <BaseButton @click="addNewDetail(formWorker.id)" type="submit" color="info"
                                        label="اضافة يومية" />
                                </BaseButtons>

                                <p class="text-red-600">
                                    {{ validateOriginPriceWorker }}
                                </p>


                            </div>

                            <!-- <BaseButtons class="mx-2 mt-5">
                            <BaseButton @click="addNewDetail(formWorker.id)" type="submit" color="info"
                                label="اضافة يومية" />
                            </BaseButtons> -->

                        </div>
                        <!-- <p>
                            الاجمالى
                            <span class="block text-red-700 font -bold">
                                {{ calculateWorkerPayment(formWorker) }}
                            </span>
                        </p> -->

                        <input type="hidden" v-bind:value="'worker'">
                        <!-- input created at -->

                        <!-- {{ form?.errors }} -->
                        <!-- form worker -->
                        <!-- formWorker.details['type'] == service  // hidden -->
                        <!-- <FormField :label="'نوع العمالة :'">
                            <FormControl v-model="formWorker.details['type']" placeholder="نوع العمالة" />
                        </FormField> -->

                        <div v-if="form && form.errors">
                            <!-- <span v-if=" form?.errors['services.' + id + '.price']" class="block text-sm text-red-600">
                                {{ form?.errors['services.' + id + '.price'] }}
                            </span>
                            <span v-if="form?.errors['services.' + id + '.quantity']" class="block text-sm text-red-600">
                                {{ form?.errors['services.' + id + '.quantity'] }}
                            </span> -->
                            <span
                                v-if="form?.errors['services.' + id + '.price'] || form?.errors['services.' + id + '.quantity']"
                                class="block text-sm text-red-600">
                                يجب التاكد من ملأ جميع البيانات بالشكل الصحيح
                            </span>

                            <BaseButtons class="mx-2 mt-5">
                                <BaseButton @click="submit" type="submit" color="info" label="حفظ" />
                            </BaseButtons>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-for="( formItem, index ) in  form.extra_services " :key="index">
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

        <!-- <div class="flex justify-end">
            <BaseButton type="button" :icon="mdiPlus" color="info" label="خدمات اضافية" @click="addFormItem" />
        </div> -->
        <BaseDivider />


        <!-- <template #footer>
            <BaseButtons>
                <BaseButton @click="submit" type="submit" color="info" label="Submit" />
            </BaseButtons>
        </template> -->
    </CardBox>
</template>
