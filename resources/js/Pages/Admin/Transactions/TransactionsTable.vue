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
import CardBoxModal from "@/Components/Admin/CardBoxModal.vue";
import BaseLevel from "@/Components/Admin/BaseLevel.vue";
import BaseButtons from "@/Components/Admin/BaseButtons.vue";
import BaseButton from "@/Components/Admin/BaseButton.vue";
import PillTag from "@/Components/Admin/PillTag.vue";
import TransactionsForm from "@/Pages/Admin/Transactions/TransactionsForm.vue";
import AddMoreTransactionsForm from "@/Pages/Admin/Transactions/AddMoreTransactionsForm.vue";
import ProfitDetailsForm from "@/Pages/Admin/Transactions/ProfitDetailsForm.vue";
import CardBoxComponentEmpty from "@/Components/Admin/CardBoxComponentEmpty.vue";
import TransactionsPayment from "@/Pages/Admin/Transactions/TransactionsPayment.vue";

import {
    router,
    useForm
} from "@inertiajs/vue3";
import Swal from "sweetalert2";
import axios from "axios";

const {
    transactions,
    filters,
} = defineProps({
    transactions: {
        type: Object,
        default: [],
    },
    customers: {
        type: Object,
        default: [],
    },
    employees: {
        type: Object,
        default: [],
    },
    services: {
        type: Object,
        default: [],
    },
    projects: {
        type: Object,
        default: [],
    },
    filters: {
        type: Object,
        default: {},
    },
});


onMounted(() => {
    eventBus.$on("openModal", (modalToOpen) => {
        if (modalToOpen === "transaction::create") {
            currentlyEditedTransaction.value = null;
            isFormModalOpen.value = true;
        }
    });

    eventBus.$on("openModal", (modalToOpen) => {
        if (modalToOpen === "transaction::AddMoreTransactionForm") {
            currentAddMoreTransaction.value = null;
            isAddMoreTransactionModalOpen.value = true;
        }
    });

    eventBus.$on("openModal", (modalToOpen) => {
        if (modalToOpen === "transaction::ShowTransactionsPayment") {
            currentShowTransactionsPayment.value = null;
            isShowTransactionsPayment.value = true;
        }
    });

    eventBus.$on("openModal", (modalToOpen) => {
        if (modalToOpen === "transaction::ShowProfitDetails") {
            currentShowProfitDetails.value = null;
            isProfitDetailsModalOpen.value = true;
        }
    });

    // whatsappTransaction
    eventBus.$on("openModal", (modalToOpen) => {
        if (modalToOpen === "transaction::whatsappTransaction") {
            currentWhatsappTransaction.value = null;
            isShowWhatsappTransactionModalOpen.value = true;
        }
    });

    eventBus.$on("closeModal", (modalToClose) => {
        if (
            modalToClose === "transaction::create" ||
            modalToClose === "transaction::update" ||
            modalToClose === "transaction::ShowTransactionsPayment" ||
            modalToClose === "transaction::AddMoreTransactionForm" ||
            modalToClose === "transaction::ShowProfitDetails"
        ) {
            isFormModalOpen.value = false;
            isAddMoreTransactionModalOpen.value = false;
            isShowTransactionsPayment.value = false;
            isProfitDetailsModalOpen.value = false;
        }
    });
});

const activeFilters = reactive({
    filteredBy: {
        project_name: filters?.filteredBy?.project_name,
        customer_name: filters?.filteredBy?.customer_name,
        phone: filters?.filteredBy?.phone,
        employee_name: filters?.filteredBy?.employee_name,
        address: filters?.filteredBy?.address,
        status: filters?.filteredBy?.status,
    },
});

watch(activeFilters, (filledFilters) => {
    router.get(route("index.transactions"), filledFilters, {
        preserveState: true,
        replace: true,
    });
});

const currentlyEditedTransaction = ref(null);

const currentAddMoreTransaction = ref(null);

const currentShowTransactionsPayment = ref(null);

const currentShowProfitDetails = ref(null);

const currentWhatsappTransaction = ref(null);

const isShowWhatsappTransactionModalOpen = ref(false && currentWhatsappTransaction.value);

const isFormModalOpen = ref(false && currentlyEditedTransaction.value);

const isAddMoreTransactionModalOpen = ref(false && currentAddMoreTransaction.value);

const isShowTransactionsPayment = ref(false && currentShowTransactionsPayment.value);

const isProfitDetailsModalOpen = ref(false && currentShowProfitDetails.value);

const addMoreTransaction = (transaction) => {
    currentAddMoreTransaction.value = transaction;
    isAddMoreTransactionModalOpen.value = true;
};

const whatsappTransaction = (transaction) => {
    currentWhatsappTransaction.value = transaction;
    isShowWhatsappTransactionModalOpen.value = true;
    showMessagesWhatsapp();

};

const editTransaction = (transaction) => {
    currentlyEditedTransaction.value = transaction;
    isFormModalOpen.value = true;
};

const showTransactionsPayment = (transaction) => {
    currentShowTransactionsPayment.value = transaction;
    isShowTransactionsPayment.value = true;
};

const profitDetails = (transaction) => {
    currentShowProfitDetails.value = transaction;
    isProfitDetailsModalOpen.value = true;
};


const formModalTitle = computed(() => {
    return currentlyEditedTransaction.value?.id ?
        `المعاملات المالية` :
        "المعاملات المالية";
});

const AddMoreTransactionModalTitle = computed(() => {
    return currentAddMoreTransaction.value?.id ?
        `العمـــــالة ` :
        "العمـــــالة";
});

const ShowTransactionsPaymentModalTitle = computed(() => {
    return currentShowTransactionsPayment.value?.id ?
        `المعاملات  المالية وحساب الارباح` :
        "المعاملات  المالية وحساب الارباح";
});

const openFormModal = () => {
    eventBus.$emit("openModal", "transaction::create");
};


const messages = ref(null);
const loader = ref(false);
const sendTextMessageLoader = ref(false);

const form = useForm({
    message: null,
});

const customerPhone = computed(() => {
    return currentWhatsappTransaction?.value?.customer?.phone + "@s.whatsapp.net";
});

const showMessagesWhatsapp = () => {
    axios.get(`/admin/getWhatsappChatMessages?customerPhone=${customerPhone.value}`).then((response) => {
        messages.value = response.data.messages.records;
    }).catch((error) => {
        console.log(error);
    });
};


const getWhatsappMedia = (keyId) => {
    loader.value = keyId;
    axios.get(`/admin/getWhatsappMedia?keyId=${keyId}&customerPhone=${customerPhone.value}`)
        .then((response) => {
            window.open(response.data['file_url'], '_blank');
            loader.value = false;
        }).catch((error) => {
            console.log(error);
        });
};


const sendInvoicePDF = () => {
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
        if (result.isConfirmed) {
            const data = {
                customerPhone: customerPhone.value,
                projectId: currentWhatsappTransaction.value.id,
            };
            router.post(route("send.invoice"), data, {
                preserveState: true,
                replace: true,
                preserveScroll: true,
                onSuccess: () => {
                    showMessagesWhatsapp();
                    Swal.fire({
                        icon: "success",
                        title: "Success",
                        text: "Transaction created successfully",
                        timer: 3000,
                        timerProgressBar: true,
                    });
                },
                onError: () => {
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
    });



}

const sendTextMessage = () => {
    sendTextMessageLoader.value = true;
    const data = {
        message: form.message,
        customerPhone: customerPhone.value,
    };
    router.post(route("send.text.message"), data, {
        preserveState: true,
        replace: true,
        preserveScroll: true,
        onSuccess: () => {
            form.message = null;
            sendTextMessageLoader.value = false;
            showMessagesWhatsapp();
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


const deleteTransaction = (transaction) => {
    Swal.fire({
        title: "هل انت متاكد ؟",
        text: `لن تتمكن من التراجع عن هذا!`,
        icon: "error",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "نعم، احذفه!",
        cancelButtonText: "الغاء",
    }).then((result) => {
        if (result.isConfirmed) {
            router.delete(route("delete.transactions", transaction.id), {
                preserveState: true,
                replace: true,
                onSuccess: () => {
                    Swal.fire({
                        title: "Deleted!",
                        text: `${transaction.name} has been deleted.`,
                        icon: "success",
                        showConfirmButton: true,
                        timer: 2000,
                    });
                },
            });
        }
    });
};

const isTextMessage = (message) => typeof message.content === 'string';

const getMessageContent = (message) => {
    if (message.messageType === 'extendedTextMessage') {
        return message.content.text;
    }

    // imageMessage // documentWithCaptionMessage // videoMessage // audioMessage // contactMessage // locationMessage

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
    <CardBoxModal cardWidthClass="w-[80%] 2xl:w-4/12" scrollable :hasCancel="true" v-model="isFormModalOpen"
        :title="formModalTitle">
        <TransactionsForm :employees="employees" :customers="customers" :projects="projects"
            :transaction="currentlyEditedTransaction" :services="services" />
    </CardBoxModal>

    <CardBoxModal cardWidthClass="w-[80%] lg:w-7/12" scrollable :hasCancel="true" v-model="isShowTransactionsPayment"
        :title="ShowTransactionsPaymentModalTitle">
        <TransactionsPayment :transaction="currentShowTransactionsPayment"
            :payments="currentShowTransactionsPayment?.payments" :totalServicesPrice="totalServicesPrice"
            :totalExtraServicesPrice="totalExtraServicesPrice" :totalPrice="totalPrice" />
    </CardBoxModal>

    <CardBoxModal cardWidthClass="w-[80%] lg:w-7/12" scrollable :hasCancel="true" v-model="isAddMoreTransactionModalOpen"
        :title="AddMoreTransactionModalTitle">
        <AddMoreTransactionsForm :project="currentAddMoreTransaction?.project.id"
            :services="currentAddMoreTransaction?.services" :transaction="currentAddMoreTransaction" />
    </CardBoxModal>

    <CardBoxModal cardWidthClass="w-[80%] lg:w-7/12" scrollable :hasCancel="true" v-model="isProfitDetailsModalOpen"
        :title="ShowTransactionsPaymentModalTitle">
        <ProfitDetailsForm :project="currentShowProfitDetails?.project.id" :services="currentShowProfitDetails?.services"
            :transaction="currentShowProfitDetails" />
    </CardBoxModal>

    <CardBoxModal cardWidthClass="w-100 lg:w-[40rem] !bg-gray-900 text-green-200 mb-10 pb-10" scrollable :hasCancel="true"
        v-model="isShowWhatsappTransactionModalOpen" title="التواصل عن طريق الواتس اب">
        <div class="flex flex-col-reverse items-stretch justify-center">
            <div v-for="message in messages" :key="message.id">
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
                                'hover:bg-gray-200 hover:text-gray-900'" @click="getWhatsappMedia(message.keyId)">
                                <div v-if="loader === message.keyId">
                                    <div class="flex items-center justify-center">
                                        <svg class="w-5 h-5 mr-3 -ml-1 text-blue-900 animate-spin"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                                stroke-width="4"></circle>
                                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 0116 0H4z"></path>
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
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 0116 0H4z"></path>
                    </svg>
                </div>
            </div>

            <BaseButton color="info" :icon="mdiInvoiceCheck" @click="sendInvoicePDF()" />

        </div>

    </CardBoxModal>

    <table>
        <thead>
            <tr>
                <th class="text-center">#</th>
                <th class="text-center">اسم المشورع</th>
                <th class="text-center">العميل</th>
                <th class="text-center">موبايل</th>
                <th class="text-center">الموظف</th>
                <th class="text-center">العنوان</th>
                <th class="text-center">عدد مرات الدفع</th>
                <th class="text-center">الحاله</th>
                <th class="text-center">تاريخ الانشاء</th>
                <th class="text-center">اجراء</th>
            </tr>
        </thead>
        <tbody>
            <!-- Filters -->
            <tr key="filters">
                <td></td>
                <td data-label="Filter project Name">
                    <input placeholder="الاسـم" v-model="activeFilters.filteredBy.project_name"
                        class="w-full h-8 px-2 py-1 border rounded border-primary-100" />
                </td>

                <td data-label="Filter Customer Name">
                    <input placeholder="العميل" v-model="activeFilters.filteredBy.customer_name"
                        class="w-full h-8 px-2 py-1 border rounded border-primary-100" />
                </td>

                <td data-label="Filter Phone Number">
                    <input placeholder="الموبايل" v-model="activeFilters.filteredBy.phone"
                        class="w-full h-8 px-2 py-1 border rounded border-primary-100" />
                </td>

                <td data-label="Filter Employee Name">
                    <input placeholder="الموظف" v-model="activeFilters.filteredBy.employee_name"
                        class="w-full h-8 px-2 py-1 border rounded border-primary-100" />
                </td>
                <td data-label="Address">
                    <input placeholder="العنوان" v-model="activeFilters.filteredBy.address"
                        class="w-full h-8 px-2 py-1 border rounded border-primary-100" />
                </td>
                <td></td>
                <td>
                    <select v-model="activeFilters.filteredBy.status"
                        class="w-full h-8 px-2 py-1 border rounded border-primary-100">
                        <option :value="null">فلترة</option>
                        <option value="Paid">مدفوع</option>
                        <option value="Pending">لم يكتمل الدفع</option>
                    </select>
                </td>
                <td></td>
                <td></td>
            </tr>

            <!-- empty state -->

            <tr v-if="transactions?.data?.length === 0">
                <td colspan="12">
                    <CardBoxComponentEmpty title="No Users Found, Click here to add new user"
                        description="You can add new user by clicking on the button below" @click="openFormModal" />
                </td>
            </tr>

            <!-- User data -->

            <tr v-for="    transaction     in     transactions.data    " :key="transaction.id">
                <td data-label="ID">{{ transaction.id }}</td>
                <td data-label="Project Name">{{ transaction.project.title }}</td>
                <td data-label="Customer Name">{{ transaction.customer.name }}</td>
                <td data-label="Phone Number">{{ transaction.customer.phone }}</td>
                <td data-label="Customer Employee">{{ transaction.employee.name }}</td>
                <td data-label="Address">{{ transaction.address.address }}</td>
                <td data-label="Times To Pay">{{ transaction.times_to_pay }}</td>
                <td data-label="Status">
                    <PillTag v-if="transaction.status === 'Paid'" color="success" class="text-center" label="مدفوع" />
                    <PillTag v-if="transaction.status === 'Pending'" color="danger" class="text-center"
                        label="لم يكتمل الدفع" />
                </td>
                <td data-label="Created At">{{ transaction.created_at }}</td>
                <td data-label="Action" class="before:hidden lg:w-1 whitespace-nowrap">
                    <BaseButtons type="justify-start lg:justify-end" no-wrap>
                        <div>
                            <BaseButton color="success" :icon="mdiCashMultiple" small
                                @click="addMoreTransaction(transaction)" />

                            <BaseButton color="success" :icon="mdiCashSync" small @click="profitDetails(transaction)" />

                            <BaseButton color="success" :icon="mdiSend" small
                                @click="showTransactionsPayment(transaction)" />

                            <br />
                            <BaseButton color="success" :icon="mdiWhatsapp" small
                                @click="whatsappTransaction(transaction)" />

                            <BaseButton color="info" :icon="mdiSquareEditOutline" small
                                @click="editTransaction(transaction)" />

                            <BaseButton color="danger" :icon="mdiTrashCan" small @click="deleteTransaction(transaction)" />


                        </div>

                    </BaseButtons>
                </td>
            </tr>
        </tbody>
    </table>

    <div v-if="transactions?.data?.length" class="p-3 mt-5 border-t border-gray-100 pt-7 lg:px-6 dark:border-slate-800">
        <BaseLevel>
            <BaseButtons>
                <BaseButton v-for="(    page, index    ) in     transactions.links    " :key="index" :active="page.active"
                    :label="page.label" :render-label-as-html="true" :class="{
                        'text-white': page.active,
                    }
                        " :color="page.active ? 'contrast' : 'whiteDark'" small :as="page.url ? 'Link' : 'span'"
                    :href="page.url" preserve-state :only="['transactions']" />
            </BaseButtons>
            <small>Page {{ transactions.current_page }} of {{ transactions.total }}</small>
        </BaseLevel>
    </div>
</template>

<style scope>
/* th text center */
th {
    text-align: end;
}

td {
    text-align: end;
}
</style>
