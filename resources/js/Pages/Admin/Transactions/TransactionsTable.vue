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
    router
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
        `ضبط الخدمات للمعاملة ` :
        "ضبط الخدمات للمعاملة";
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

const showMessagesWhatsapp = () => {
    // showWhatsappClientMessages route
    axios.get('/admin/getWhatsappClientChatMessages').then((response) => {
        console.log(response.data.messages.records);
        messages.value = response.data.messages.records;
    }).catch((error) => {
        console.log(error);
    });
};

const loader = ref(false);

const getWhatsappMedia = (keyId) => {
    loader.value = keyId;
    // getWhatsappMedia/{keyId}
    // we will send the keyId to the server and get the media
    axios.get(`/admin/getWhatsappMedia/${keyId}`).then((response) => {
        // console.log(response.data['file_url']);
        // open the media in new tab
        window.open(response.data['file_url'], '_blank');
        loader.value = false;
    }).catch((error) => {
        console.log(error);
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
const messageClass = (keyFromMe) => ({
    'p-4 my-2 text-lg rounded-2xl': true,
    'bg-gray-500 ': !keyFromMe,
    'bg-green-500': keyFromMe,
});

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

    <CardBoxModal cardWidthClass="w-100 lg:w-2/5 !bg-gray-900 text-green-200" scrollable :hasCancel="true"
        v-model="isShowWhatsappTransactionModalOpen" title="التواصل عن طريق الواتس اب">
        <div class="flex flex-col-reverse items-stretch justify-center">
            <div v-for="message in messages" :key="message.id">
                <div v-if="isTextMessage(message)">
                    <!-- <div class="px-4 py-2 mb-4 text-gray-200 rounded-tr-lg rounded-bl-lg rounded-br-lg single-message"
                        :class="messageClass(message.keyFromMe)">
                        <p> {{ message.content }}</p>
                        <div class="grid grid-cols-2 text-sm !max-w-[9rem]">
                            <span class="mx-2">
                                {{ messageDate(message.messageTimestamp) }}
                            </span>
                            <span>
                                {{ messageTime(message.messageTimestamp) }}
                            </span>
                        </div>
                    </div> -->
                    <!-- <div class="flex justify-end">
                        <div
                            class="px-4 py-2 mb-4 text-gray-200 rounded-tl-lg rounded-bl-lg rounded-br-lg single-message user">
                            Hey! Thought I'd reach out to say how are you? 😊</div>
                    </div> -->
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
                    <!-- <span class="font-bold" v-if="message.messageType === 'extendedTextMessage'">
                        <p class="inline-block" :class="messageClass(message.keyFromMe)">
                            {{ getMessageContent(message) }}
                        </p>
                    </span> -->

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

                    <!-- <div :class="messageClass(message.keyFromMe)" v-else
                        class="!text-end gap-4 grid-cols-2 inline-block justify-items-center p-4 rounded-2xl">
                        <div class="flex">
                            <p class="m-auto mx-2 font-bold">{{ getMessageContent(message) }}</p>
                            <button class="px-2 py-1 mx-2 bg-gray-100 border rounded hover:bg-gray-200"
                                @click="getWhatsappMedia(message.keyId)">
                                <div v-if="loader === message.keyId">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                        class="w-12 h-12 animate-spin" viewBox="0 0 16 16">
                                        <path
                                            d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
                                        <path fill-rule="evenodd"
                                            d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z" />
                                    </svg>
                                </div>
                                <p v-else class="font-bold">عرض</p>
                            </button>
                        </div>
                    </div> -->

                    <div class="flex " v-else :class="message.keyFromMe ? '!justify-start' : '!justify-end'">
                        <div :class="messageClasses(message.keyFromMe)">
                            {{ getMessageContent(message) }}
                            <button class="px-2 mx-2 border rounded"
                                :class="message.keyFromMe ? 'hover:bg-gray-200 hover:text-gray-900' : 'hover:bg-gray-200 hover:text-gray-900'"
                                @click="getWhatsappMedia(message.keyId)">
                                <div v-if="loader === message.keyId">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                        class="w-12 h-12 animate-spin" viewBox="0 0 16 16">
                                        <path
                                            d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
                                        <path fill-rule="evenodd"
                                            d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z" />
                                    </svg>
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

        <!-- input and Button to send message -->
        <div class="flex items-center justify-center">
            <input type="text" class="w-3/4 h-10 px-2 py-1 border rounded border-primary-100" />
            <BaseButton color="success" :icon="mdiSend" label="ارسال" />
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

            <tr v-for="  transaction   in   transactions.data  " :key="transaction.id">
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
                <BaseButton v-for="(  page, index  ) in   transactions.links  " :key="index" :active="page.active"
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
