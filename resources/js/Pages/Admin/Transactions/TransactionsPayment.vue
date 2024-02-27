<script setup>
import {
    computed,
    ref,
    watch,
    reactive,
    onMounted,
    nextTick
} from "vue";
import cloneDeep from "lodash/cloneDeep";
import {
    router,
    useForm
} from "@inertiajs/vue3";
import BaseButtons from "@/Components/Admin/BaseButtons.vue";
import BaseButton from "@/Components/Admin/BaseButton.vue";

import {
    mdiAccount,
    mdiMail,
    mdiPlus,
    mdiMinus
} from "@mdi/js";
import "vue-select/dist/vue-select.css";
import eventBus from "@/Composables/eventBus.js";
import Swal from "sweetalert2";

const props = defineProps({
    transaction: {
        type: Object,
        default: () => { },
    },
    payments: {
        type: Array,
        default: () => { },
    },
});

onMounted(() => {
    eventBus.$on("openModal", (modalToOpen) => {
        if (modalToOpen === "transaction::ShowTransactionsPayment") {
            resetForm();
        }
    });
});


const form = useForm({
    transaction: props.transaction,
    payments: props?.payments,
});


const transaction = reactive(props.transaction || {});
const payments = reactive(props.payments || {});

const maxPaymentRetched = ref(false);

const addFormItem = () => {
    if (maxPaymentRetched.value === true) {
        return;
    }
    if (form.payments == null) {
        form.payments = [{
            date: "",
            amount: "",
            percentage: "",
        },];
    } else {
        form.payments.push({
            date: "",
            amount: "",
            percentage: "",
        });
    }
    if (form.payments?.length === transaction.times_to_pay) {
        maxPaymentRetched.value = true;
        return;
    }
};

const removePayment = (index) => {
    form.payments.splice(index, 1);
    maxPaymentRetched.value = false;
};

const resetForm = () => {
    form.reset();
    Object.keys(form.errors).forEach((key) => {
        delete form.errors[key];
    });
    maxPaymentRetched.value = false;
};

watch(
    () => cloneDeep(props),
    (newProps) => {
        if (!newProps.transaction) {
            return;
        }
        resetForm();
        Object.assign(transaction, newProps.transaction);
        form.transaction = newProps.transaction;
        form.payments = newProps.payments;
    }
);



const totalExtraServicesPrice = computed(() => {
    let total = 0;
    transaction.extra_services?.forEach((extraService) => {
        total += extraService.price * extraService.quantity;
    });
    return total;
});

const totalServicesPrice = computed(() => {
    let total = 0;
    transaction.services?.forEach((service) => {
        total += service.price * service.quantity;
    });
    return total;
});

const totalPaid = computed(() => {
    let total = 0;
    transaction.payments?.forEach((payment) => {
        total += payment.amount * 1;
    });
    return total;
});

const totalPrice = computed(() => {
    let total = 0;
    transaction.services?.forEach((service) => {
        total += service.price * service.quantity;
    });
    transaction.extra_services?.forEach((extraService) => {
        total += extraService.price * extraService.quantity;
    });

    return total;
});

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
        route("store.payments.transactions", transaction.id),
        form,
        Object.assign(sharedFormOptions, {
            onSuccess: () => {
                resetForm();
                eventBus.$emit("closeModal", "transaction::ShowTransactionsPayment");
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


const filteredTransactions = computed(() => {
    return transaction?.extra_services?.filter((service) => service.type === "service");
});
</script>
<template >
    <div>
        <div class="px-2 py-4 mt-5 overflow-x-auto bg-white rounded-lg shadow ">
            <h1 class="text-lg text-center underline rounded-full decoration-sky-500 bg-emerald-200">
                تفاصيل حساب الخـــدمات
            </h1>
            <table style="direction  : ltr;" class="my-4 bg-gray-100 table-auto dark rounded-2xl">
                <thead>
                    <tr>
                        <th class="font-bold text-center">الاجمالى</th>
                        <th class="font-bold text-center">سعر المتر</th>
                        <th class="font-bold text-center">عدد الامتار</th>
                        <th class="font-bold text-center">اسم الخدمة</th>
                    </tr>
                </thead>

                <tbody v-for="transaction in transaction.services" :key="transaction.id">
                    <td class="font-bold text-center">{{ transaction.price * transaction.quantity }}</td>
                    <td class="font-bold text-center">{{ transaction.price }}</td>
                    <td class="font-bold text-center">{{ transaction.quantity }}</td>
                    <td class="font-bold text-center">{{ transaction.name }}</td>
                </tbody>

                <!-- total price -->
                <tfoot>
                    <tr>
                        <td colspan="3" class="font-bold text-center text-red-700 bg-gray-400">
                            {{ totalServicesPrice }}</td>
                        <td colspan="1" class="font-bold text-center text-red-700 bg-gray-400 ">الحساب الكلي</td>
                    </tr>
                </tfoot>
            </table>
        </div>

        <hr>
        <div class="px-2 py-4 mt-5 overflow-x-auto bg-white rounded-lg shadow ">
            <h1 class="text-lg text-center underline rounded-full decoration-sky-500 bg-emerald-200">
                تفاصيل حساب الخـــدمات الاضافية
            </h1>
            <table style="direction  : ltr;" class="my-4 bg-gray-100 table-auto dark rounded-2xl">
                <thead>
                    <tr>
                        <th class="font-bold text-center">الاجمالي</th>
                        <th class="font-bold text-center">السعر</th>
                        <th class="font-bold text-center">الكمية</th>
                        <th class="font-bold text-center">اسم الخدمة</th>
                    </tr>
                </thead>
                <tbody v-for="transaction in filteredTransactions" :key="transaction.id">
                    <td class="font-bold text-center">{{ transaction.price * transaction.quantity }}</td>
                    <td class="font-bold text-center">{{ transaction.price }}</td>
                    <td class="font-bold text-center">{{ transaction.quantity }}</td>
                    <td class="font-bold text-center">{{ transaction.name }}</td>
                </tbody>

                <!-- total price -->
                <tfoot>
                    <tr>
                        <td colspan="3" class="font-bold text-center text-red-700 bg-gray-400">
                            {{ totalExtraServicesPrice }} </td>
                        <td colspan="1" class="font-bold text-center text-red-700 bg-gray-400 ">الحساب الكلي</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>

    <div class="px-2 py-4 overflow-x-auto bg-white rounded-lg shadow ">
        <div v-if="transaction.times_to_pay > 0">
            <div class="mt-5">
                <h1 class="text-lg text-center underline bg-orange-200 rounded-full decoration-sky-500">
                    ما تم دفعه من اصل
                    ({{ transaction.times_to_pay }})
                    دفعات
                </h1>
                <div v-if="!Array.isArray(form.payments) || form.payments?.length === 0">
                    <h1 class="w-1/2 m-auto mt-10 text-lg text-center underline bg-red-500 rounded-full decoration-sky-500">
                        لا يوجد دفعات
                    </h1>
                </div>

            </div>
            <div class="pt-4" @submit.prevent="submit">
                <div>
                    <div>
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th class="font-bold text-center">تاريخ الدفع</th>
                                    <th class="font-bold text-center">المدفوع</th>
                                    <th class="font-bold text-center"> % النسبة</th>
                                    <th class="font-bold text-center">المبلغ بحساب النسبة</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(payment, index) in form.payments" :key="index">
                                    <td
                                        v-if="(payment.amount != (payment.percentage * totalPrice) / 100) && payment.percentage">
                                        <span v-if="payment.amount">

                                            <span class="font-bold text-red-800"
                                                v-if="payment.amount - (payment.percentage * totalPrice) / 100 < 0">
                                                <span>
                                                    {{ Math.abs(payment.amount - (payment.percentage * totalPrice) /
                                                        100).toFixed(2) }}
                                                </span>
                                                ناقص
                                            </span>

                                            <span class="font-bold text-red-800"
                                                v-if="payment.amount - (payment.percentage * totalPrice) / 100 > 0">
                                                <span>{{ Math.abs(payment.amount - (payment.percentage * totalPrice) /
                                                    100).toFixed(2) }}</span>
                                                زائدة
                                            </span>

                                        </span>
                                    </td>

                                    <td v-else-if="payment.amount == (payment.percentage * totalPrice) / 100">
                                        <span>
                                            مكتمل
                                        </span>
                                    </td>

                                    <td v-else>
                                        <span class="ml-2 font-bold">
                                            -----------
                                        </span>
                                    </td>

                                    <td class="py-2 font-bold text-center">
                                        <BaseButton :class="'w-5 h-5'" type="button" class="w-20 h-0 mb-4" :icon="mdiMinus"
                                            color="danger" @click="removePayment(index)" />
                                    </td>
                                    <td class="py-2 font-bold text-center">
                                        <span v-if="payment.date" class="ml-2 font-bold">{{ payment.date }}</span>
                                        <span v-else class="ml-2 font-bold">
                                            -----------
                                        </span>
                                    </td>
                                    <td class="py-2 font-bold ">
                                        <div
                                            class="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
                                            <input type="text" id="first-name"
                                                class="w-20 py-3 pr-4 mt-2 text-center text-gray-700 bg-gray-100 border border-transparent rounded-md focus:outline-none focus:bg-white focus:border-gray-500 dark:focus:border-purple-400 dark:bg-gray-700 dark:text-gray-300"
                                                placeholder="المبلغ" v-model="payment.amount" />
                                        </div>
                                    </td>
                                    <td class="py-2 font-bold ">
                                        <div
                                            class="relative text-center text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
                                            <input type="text" id="percentage"
                                                class="w-20 py-3 pr-4 mt-2 text-center text-gray-700 bg-gray-100 border border-transparent rounded-md focus:outline-none focus:bg-white focus:border-gray-500 dark:focus:border-purple-400 dark:bg-gray-700 dark:text-gray-300"
                                                placeholder="%" v-model="payment.percentage" />
                                        </div>
                                    </td>

                                    <td class="py-2 font-bold text-center">
                                        <span class="ml-2 font-bold">
                                            {{ (payment.percentage * totalPrice) / 100 .toFixed(2) }}
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div v-if="(totalPrice - totalPaid) !== 0" class="m-5">
                            <div class="flex">
                                <span class="font-bold text-center text-red-700 ">المتبقى بالنسبة : %</span>
                                <span class="font-bold text-center text-red-700 ">
                                    {{ 100 - (totalPaid / totalPrice) * 100 }}
                                </span>
                            </div>

                            <div class="flex">
                                <span class="font-bold text-center text-red-700 ">
                                    المتبقى من المبلغ : &nbsp;
                                </span>
                                <span class="font-bold text-center text-red-700 ">
                                    {{ totalPrice - totalPaid }}
                                </span>
                            </div>
                        </div>

                        <div v-for="(payment, index) in form.payments" :key="index" class="mt-3 text-center">
                            <span v-if="form?.errors['payments.' + index + '.amount']" class="block text-sm text-red-600">
                                يجيب ان يكون المبلغ عددا صحيحا
                            </span>
                        </div>

                        <div v-if="maxPaymentRetched" class="mt-8 text-center">
                            <span class="block mt-5 text-red-700">
                                تم الوصول للحد الاقصى المحدد لمرات الدفع
                            </span>
                            <div v-if="totalPrice < totalPaid" class="block mx-auto mt-5">
                                <span colspan="1" class="font-bold text-center text-white bg-red-800">
                                    {{ totalPaid - totalPrice }}
                                </span>
                                <span colspan="1" class="font-bold text-center text-white bg-red-800 ">
                                    خطا فائض في الحسابات
                                </span>
                            </div>
                        </div>
                        <div class="flex justify-between mt-8">
                            <BaseButtons>
                                <BaseButton @click="submit" type="submit" color="info" label="حفظ" />
                            </BaseButtons>
                            <BaseButton type="button" v-if="form.payments?.length != transaction.times_to_pay"
                                :icon="mdiPlus" color="info" label="اضافة دفعة" @click="addFormItem" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-else>
            <div>
                <h1 class="text-lg text-center underline bg-red-500 rounded-full decoration-sky-500">
                    يجب تحديد عدد مرات الدفع اولأ لتتمكن لاضافة دفعات
                </h1>
            </div>
        </div>
    </div>

    <div class="px-2 py-4 mt-5 overflow-x-auto bg-white rounded-lg shadow ">
        <h1 class="text-lg text-center underline rounded-full decoration-sky-500 bg-emerald-200">
            الحساب الكلى
        </h1>
        <table class="my-4 bg-gray-100 table-auto dark rounded-2xl">
            <thead style="direction  : ltr;">
                <tr>
                    <th class="font-bold text-center">الحساب الكلى للخدمات</th>
                    <th class="font-bold text-center">ما تم دفعة حتى الان</th>
                </tr>
            </thead>

            <tbody>
                <td class="font-bold text-center">{{ totalPrice }}</td>
                <td class="font-bold text-center">{{ totalPaid }}</td>
            </tbody>

            <tfoot>
                <tr v-if="totalPrice < totalPaid">
                    <td colspan="1" class="font-bold text-center text-white bg-red-800">
                        {{ totalPaid - totalPrice }}
                    </td>
                    <td colspan="1" class="font-bold text-center text-white bg-red-800 ">خطا فائض في الحسابات</td>
                </tr>

                <tr v-else-if="totalPrice === totalPaid && totalPrice !== 0">
                    <td colspan="2" class="font-bold text-center text-green-500 bg-gray-400 ">الحســـــاب مكتمل
                    </td>
                </tr>

                <tr v-else-if="totalPrice === 0">
                    <td colspan="2" class="font-bold text-center text-white bg-gray-400 ">لا يوجد حسابات</td>
                </tr>

                <tr v-else>
                    <td colspan="1" class="font-bold text-center text-red-700 bg-gray-400">
                        {{ totalPrice - totalPaid }}</td>
                    <td colspan="1" class="font-bold text-center text-red-700 bg-gray-400 ">المتبقى</td>
                </tr>
            </tfoot>
        </table>
    </div>
</template>
