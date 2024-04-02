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
import EditTransactionsForm from "@/Pages/Admin/Transactions/EditTransactionsForm.vue";
import AddMoreTransactionsForm from "@/Pages/Admin/Transactions/AddMoreTransactionsForm.vue";
import ProfitDetailsForm from "@/Pages/Admin/Transactions/ProfitDetailsForm.vue";
import CardBoxComponentEmpty from "@/Components/Admin/CardBoxComponentEmpty.vue";
import TransactionsPayment from "@/Pages/Admin/Transactions/TransactionsPayment.vue";
import WhatsAppMessages from "@/Pages/Admin/Transactions/WhatsAppMessages.vue";

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

    eventBus.$on("openModal", (modalToOpen) => {
        if (modalToOpen === "transaction::showMessagesWhatsapp") {
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
            modalToClose === "transaction::ShowProfitDetails" ||
            modalToClose === "transaction::showMessagesWhatsapp"
        ) {
            isFormModalOpen.value = false;
            isAddMoreTransactionModalOpen.value = false;
            isShowTransactionsPayment.value = false;
            isProfitDetailsModalOpen.value = false;
            isShowWhatsappTransactionModalOpen.value = false;
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
        `اضافة وتعديل المعاملات المالية` :
        "اضافة وتعديل المعاملات المالية` :";
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

const customerPhone = computed(() => {
    return currentWhatsappTransaction?.value?.customer?.phone + "@s.whatsapp.net";
});

const showMessagesWhatsapp = () => {
    axios.get(`/admin/getWhatsappChatMessages?customerPhone=${customerPhone.value}`).then((response) => {
        console.log(response.data.messages);
        messages.value = response.data.messages.records;
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
</script>

<template>
    <CardBoxModal cardWidthClass="w-[80%] 2xl:w-4/12" scrollable :hasCancel="true" v-model="isFormModalOpen"
        :title="formModalTitle">
        <EditTransactionsForm :employees="employees" :customers="customers" :projects="projects"
            :transaction="currentlyEditedTransaction" :services="services" />
    </CardBoxModal>

    <CardBoxModal cardWidthClass="w-[80%] lg:w-7/12" scrollable :hasCancel="true" v-model="isShowTransactionsPayment"
        :title="ShowTransactionsPaymentModalTitle">
        <TransactionsPayment :transaction="currentShowTransactionsPayment"
            :payments="currentShowTransactionsPayment?.payments" :totalServicesPrice="totalServicesPrice"
            :totalExtraServicesPrice="totalExtraServicesPrice" :totalPrice="totalPrice" />
    </CardBoxModal>

    <CardBoxModal cardWidthClass="w-[80%] lg:w-7/12" scrollable :hasCancel="true"
        v-model="isAddMoreTransactionModalOpen" :title="AddMoreTransactionModalTitle">
        <AddMoreTransactionsForm :project="currentAddMoreTransaction?.project.id"
            :services="currentAddMoreTransaction?.services" :transaction="currentAddMoreTransaction" />
    </CardBoxModal>

    <CardBoxModal cardWidthClass="w-[80%] lg:w-7/12" scrollable :hasCancel="true" v-model="isProfitDetailsModalOpen"
        :title="ShowTransactionsPaymentModalTitle">
        <ProfitDetailsForm :project="currentShowProfitDetails?.project.id"
            :services="currentShowProfitDetails?.services" :transaction="currentShowProfitDetails" />
    </CardBoxModal>

    <CardBoxModal cardWidthClass="w-100 lg:w-[40rem] !bg-gray-900 text-green-200 mb-10 pb-10" scrollable
        :hasCancel="true" v-model="isShowWhatsappTransactionModalOpen" title="التواصل عن طريق الواتس اب">
        <WhatsAppMessages :transaction="currentWhatsappTransaction" :messages="messages" />

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
                <th class="text-center">التكلفة الكلية للمشروع</th>
                <th class="text-center">اجمالى دفعات العميل</th>
                <th class="text-center">تكلفة المواد الخام</th>
                <th class="text-center">تكلفة العمال</th>
                <th class="text-center">صافي الربح</th>
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
                <td>

                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>

                </td>
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
            <tr v-for="transaction in transactions.data" :key="transaction.id">
                <td data-label="ID">{{ transaction.id }}</td>
                <td data-label="Project Name">{{ transaction.project.title }}</td>
                <td data-label="Customer Name">{{ transaction.customer.name }}</td>
                <td data-label="Phone Number">{{ transaction.customer.phone }}</td>
                <td data-label="Customer Employee">{{ transaction.employee.name }}</td>
                <td data-label="Address">{{ transaction.address.address }}</td>
                <td data-label="Total Project Cost">{{ transaction.all_services_cost }} دينار</td>
                <td data-label="Total Paid">{{ transaction.total_paid }} دينار</td>
                <td data-label="all payments">{{ transaction.materials_cost }} دينار</td>
                <td data-label="all payments">{{ transaction.worker_cost }} دينار</td>
                <td data-label=" Net profit" class="font-bold"
                    :class="{ 'text-green-500': transaction.profit > 0, 'text-red-500': transaction.profit < 0 }">

                    <span v-if="transaction.profit > 0">
                        {{ transaction.profit }} دينار
                    </span>
                    <span v-else>
                        لم تيم حساب الربح
                    </span>
                </td>
                <td data-label="Times To Pay">{{ transaction.times_to_pay }} مــرات</td>
                <td data-label="Status">
                    <PillTag v-if="transaction.status === 'Paid'" color="success" class="text-center" label="مدفوع" />
                    <PillTag v-if="transaction.status === 'Pending'" color="danger" class="text-center"
                        label="لم يكتمل الدفع" />
                </td>
                <td data-label="Created At" class="p-0">{{ transaction.created_at }}</td>
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

                            <BaseButton color="danger" :icon="mdiTrashCan" small
                                @click="deleteTransaction(transaction)" />
                        </div>

                    </BaseButtons>
                </td>
            </tr>
        </tbody>
    </table>

    <div v-if="transactions?.data?.length" class="p-3 mt-5 border-t border-gray-100 pt-7 lg:px-6 dark:border-slate-800">
        <BaseLevel>
            <BaseButtons>
                <BaseButton v-for="(    page, index    ) in     transactions.links    " :key="index"
                    :active="page.active" :label="page.label" :render-label-as-html="true"
                    :class="{ 'text-white': page.active, }" :color="page.active ? 'contrast' : 'whiteDark'" small
                    :as="page.url ? 'Link' : 'span'" :href="page.url" preserve-state :only="['transactions']" />
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
