<script setup>
import {
    computed,
    ref,
    watch,
    reactive,
    onMounted
} from "vue";
import eventBus from "@/Composables/eventBus.js";

import {
    mdiSquareEditOutline,
    mdiTrashCan,
    mdiEyeOutline,
    mdiSend,
    mdiFactory,
    mdiCity,
    mdiPlaneCar,
    mdiCashSync,
    mdiBookEdit,
    mdiInvoiceCheck,
    mdiCashMultiple,
    mdiWhatsapp,
} from "@mdi/js";

import BaseButton from "@/Components/Admin/BaseButton.vue";

import {
    router,
    useForm
} from "@inertiajs/vue3";
import Swal from "sweetalert2";
import axios from "axios";
import cloneDeep from "lodash/cloneDeep";

const props = defineProps({
    transaction: {
        type: Object,
        default: [],
    },
    messages: {
        type: Array,
        default: [],
    },
});

const form = reactive({
    message: null,
    transaction: props.transaction,
    messages: props.messages,
});

watch(
    () => cloneDeep(props),
    (newProps) => {
        form.transaction = newProps.transaction;
        form.messages = newProps.messages;
    }, {
    immediate: true,
    deep: true,
}
);

const messages = ref([]);

const loader = ref(false);
const sendTextMessageLoader = ref(false);
const PDFLoader = ref(false);

onMounted(() => {
    eventBus.$on("openModal", (modalToOpen) => {
        if (modalToOpen === "transaction::showMessagesWhatsapp") {
            resetForm();
            showMessagesWhatsapp();
        }
    });
});


const getWhatsappMedia = (keyId, customerPhone) => {
    loader.value = keyId;
    axios.get(`/admin/getWhatsappMedia?keyId=${keyId}&customerPhone=${customerPhone}`)
        .then((response) => {
            window.open(response.data['file_url'], '_blank');
            loader.value = false;
        }).catch((error) => {
            console.log(error);
        });
};


const sendInvoicePDF = (transactionId, customerPhone) => {

    // if transaction.payments.length ==  transaction.times_to_pay
    // then send invoice

    if (form?.transaction?.payments?.length !== form?.transaction?.times_to_pay) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "عدد الدفعات غير متطابق مع عدد الدفعات المطلوبة",
            timer: 3000,
            timerProgressBar: true,
        });
        return;
    }


    Swal.fire({
        title: "هل انت متاكد ؟",
        text: `سيتم ارسال الفاتورة الى العميل`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "نعم، ارسلها!",
        cancelButtonText: "الغاء",
    }).then((result) => {
        PDFLoader.value = true;
        if (result.isConfirmed) {
            const data = {
                customerPhone: parseInt(customerPhone) + "@s.whatsapp.net",
                transactionId: transactionId,
            };
            router.post(route("send.invoice"), data, {
                preserveState: true,
                replace: true,
                preserveScroll: true,
                onSuccess: () => {
                    Swal.fire({
                        icon: "success",
                        title: "عملية ناجحة",
                        text: "تم ارسال الفاتورة بنجاح",
                        timer: 3000,
                        timerProgressBar: true,
                    });
                    PDFLoader.value = false;
                    eventBus.$emit("closeModal", "transaction::showMessagesWhatsapp");
                },
                onError: () => {
                    PDFLoader.value = false;
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                        timer: 3000,
                        timerProgressBar: true,
                    });
                },
            });
        }
        PDFLoader.value = false;

    });
}

const showMessagesWhatsapp = (customerPhone) => {
    axios.get(`/admin/getWhatsappChatMessages?customerPhone=${customerPhone}`).then((response) => {
        form.messages = '';
        form.messages = response?.data?.messages?.records;
    }).catch((error) => {
        console.log(error);
    });
};

const sendTextMessage = () => {
    sendTextMessageLoader.value = true;
    let customerPhone = form.transaction?.customer.phone + "@s.whatsapp.net";
    const data = {
        message: form.message,
        customerPhone: customerPhone,
    };
    router.post(route("send.text.message"), data, {
        preserveState: true,
        replace: true,
        preserveScroll: true,
        onSuccess: () => {
            form.message = null;
            sendTextMessageLoader.value = false;
            showMessagesWhatsapp(customerPhone);
        },
        onError: () => {
            sendTextMessageLoader.value = false;
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                timer: 3000,
                timerProgressBar: true,
            });
        },
    });
};


const isTextMessage = (message) => typeof message.content === 'string';

const getMessageContent = (message) => {
    if (message.messageType === 'extendedTextMessage') {
        return message.content.text;
    }

    if (message.messageType === 'imageMessage') {
        return 'صورة';
    }

    if (message.messageType === 'documentWithCaptionMessage') {
        return 'ملف';
    }

    if (message.messageType === 'videoMessage') {
        return 'فيديو';
    }

    if (message.messageType === 'audioMessage') {
        return 'صوت';
    }

    if (message.messageType === 'contactMessage') {
        return 'جهة اتصال';
    }

    if (message.messageType === 'locationMessage') {
        return 'موقع';
    }
    // documentMessage
    if (message.messageType === 'documentMessage') {
        return 'ملف';
    }

    return message.messageType;
};

const messageClasses = (keyFromMe) => ({
    'single-message user mb-4 rounded-bl-lg rounded-br-lg rounded-tl-lg px-4 py-2 text-gray-200': keyFromMe,
    'single-message mb-4 rounded-bl-lg rounded-br-lg rounded-tr-lg px-4 py-2 text-gray-200': !keyFromMe,
});


const messageDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()
};

const messageTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString();
};
</script>

<template>
    <div v-if="!form.messages" class="flex items-center justify-center h-96">
        <h1>تاكد من اتصال الموقع بالواتس اب // تاكد من رقم الهاتف</h1>
    </div>
    <div v-else>
        <div class="flex flex-col-reverse items-stretch justify-center">
            <div v-for="message in form.messages" :key="message.id">
                <div v-if="isTextMessage(message)">
                    <div class="flex " :class="message.keyFromMe ? '!justify-start' : '!justify-end'">
                        <div :class="messageClasses(message.keyFromMe)">
                            {{ message.content }}
                            <div class="grid grid-cols-2 text-[12px] !max-w-[9rem]">
                                <span class="mx-2">
                                    {{ messageDate(message.messageTimestamp) }}
                                </span>
                                <span>
                                    {{ messageTime(message.messageTimestamp) }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <div class="flex " v-if="message.messageType === 'extendedTextMessage'"
                        :class="message.keyFromMe ? '!justify-start' : '!justify-end'">
                        <div :class="messageClasses(message.keyFromMe)">
                            {{ getMessageContent(message) }}
                            <div class="grid grid-cols-2 text-[12px] !max-w-[9rem]">
                                <span class="mx-2">
                                    {{ messageDate(message.messageTimestamp) }}
                                </span>
                                <span>
                                    {{ messageTime(message.messageTimestamp) }}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="flex " v-else :class="message.keyFromMe ? '!justify-start' : '!justify-end'">
                        <div :class="messageClasses(message.keyFromMe)">
                            {{ getMessageContent(message) }}
                            <button class="px-2 mx-2 border rounded" :class="message.keyFromMe ? 'hover:bg-gray-200 hover:text-gray-900' :
        'hover:bg-gray-200 hover:text-gray-900'" @click="getWhatsappMedia(message.keyId, transaction.customer.phone)">
                                <div v-if="loader === message.keyId">
                                    <div class="flex items-center justify-center">
                                        <svg class="w-5 h-5 mr-3 -ml-1 text-blue-900 animate-spin"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                                stroke-width="4"></circle>
                                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 0116 0H4z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                                <p v-else class="font-bold">عرض</p>
                            </button>
                            <div class="grid grid-cols-2 text-[12px] !max-w-[9rem]">
                                <span class="mx-2">
                                    {{ messageDate(message.messageTimestamp) }}
                                </span>
                                <span>
                                    {{ messageTime(message.messageTimestamp) }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="fixed flex items-center w-2/5 bottom-28">
            <input type="text" v-model="form.message" placeholder="اكتب رسالة"
                class="w-3/4 h-10 px-2 py-1 text-black border rounded border-primary-100" />
            <div>
                <BaseButton v-if="!sendTextMessageLoader" @click="sendTextMessage()" color="success" :icon="mdiSend"
                    label="ارسال" />
                <div v-else
                    class="inline-flex items-center justify-center px-3 py-2 mx-2 text-white transition-colors duration-150 border rounded cursor-pointer whitespace-nowrap focus:outline-none focus:ring border-emerald-600 dark:border-emerald-500 ring-emerald-300 dark:ring-emerald-700 bg-emerald-600 dark:bg-emerald-500 hover:bg-emerald-700 hover:border-emerald-700 hover:dark:bg-emerald-600 hover:dark:border-emerald-600">
                    <h1>جار الارسال</h1>
                    <svg class="w-5 h-5 mr-3 -ml-1 text-green-900 animate-spin" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                        </circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 0116 0H4z"></path>
                    </svg>
                </div>
            </div>

            <BaseButton v-if="!PDFLoader " color="info" :icon="mdiInvoiceCheck" @click="sendInvoicePDF(transaction.id, transaction.customer.phone)" />

            <div v-else
                class="inline-flex items-center justify-center px-3 py-2 mx-2 text-white transition-colors duration-150 bg-blue-700 border rounded cursor-pointer whitespace-nowrap focus:outline-none focus:ring border-emerald-600 dark:border-emerald-500 ring-emerald-300 dark:ring-emerald-700 dark:bg-blue-700 hover:bg-emerald-700 hover:border-emerald-700 hover:dark:bg-emerald-600 hover:dark:border-emerald-600">
                <h1>جار الارسال</h1>
                <svg class="w-5 h-5 mr-3 -ml-1 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                    </circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 0116 0H4z"></path>
                </svg>
            </div>
        </div>
    </div>
</template>
