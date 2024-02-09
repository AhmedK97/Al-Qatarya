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
        mdiCashMultiple,
    } from "@mdi/js";
    import CardBoxModal from "@/Components/Admin/CardBoxModal.vue";
    import BaseLevel from "@/Components/Admin/BaseLevel.vue";
    import BaseButtons from "@/Components/Admin/BaseButtons.vue";
    import BaseButton from "@/Components/Admin/BaseButton.vue";
    import PillTag from "@/Components/Admin/PillTag.vue";
    import TransactionsForm from "@/Pages/Admin/Transactions/TransactionsForm.vue";
    import AddMoreTransactionsForm from "@/Pages/Admin/Transactions/AddMoreTransactionsForm.vue";
    import CardBoxComponentEmpty from "@/Components/Admin/CardBoxComponentEmpty.vue";
    import TransactionsPayment from "@/Pages/Admin/Transactions/TransactionsPayment.vue";

    import {
        router
    } from "@inertiajs/vue3";
    import Swal from "sweetalert2";

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

        eventBus.$on("closeModal", (modalToClose) => {
            if (
                modalToClose === "transaction::create" ||
                modalToClose === "transaction::update" ||
                modalToClose === "transaction::ShowTransactionsPayment" ||
                modalToClose === "transaction::AddMoreTransactionForm"
            ) {
                isFormModalOpen.value = false;
                isAddMoreTransactionModalOpen.value = false;
                isShowTransactionsPayment.value = false;
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


    const isFormModalOpen = ref(false && currentlyEditedTransaction.value);

    const isAddMoreTransactionModalOpen = ref(false && currentAddMoreTransaction.value);

    const isShowTransactionsPayment = ref(false && currentShowTransactionsPayment.value);

    const addMoreTransaction = (transaction) => {
        currentAddMoreTransaction.value = transaction;
        isAddMoreTransactionModalOpen.value = true;
    };

    const editTransaction = (transaction) => {
        currentlyEditedTransaction.value = transaction;
        isFormModalOpen.value = true;
    };

    const showTransactionsPayment = (transaction) => {
        currentShowTransactionsPayment.value = transaction;
        isShowTransactionsPayment.value = true;
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
            `المعاملات الملية` :
            "المعاملات الملية";
    });



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

    const openFormModal = () => {
        eventBus.$emit("openModal", "transaction::create");
    };
</script>

<template>
    <CardBoxModal cardWidthClass="w-[80%] 2xl:w-4/12" scrollable :hasCancel="true" v-model="isFormModalOpen"
        :title="formModalTitle">
        <TransactionsForm :employees="employees" :customers="customers" :projects="projects"
            :transaction="currentlyEditedTransaction" :services="services" />
    </CardBoxModal>


    <CardBoxModal cardWidthClass="w-[80%] lg:w-7/12" scrollable :hasCancel="true"
        v-model="isShowTransactionsPayment" :title="ShowTransactionsPaymentModalTitle">
        <TransactionsPayment :transaction="currentShowTransactionsPayment"
            :payments="currentShowTransactionsPayment?.payments" :totalServicesPrice="totalServicesPrice"
            :totalExtraServicesPrice="totalExtraServicesPrice" :totalPrice="totalPrice" />
    </CardBoxModal>



    <CardBoxModal cardWidthClass="w-96 overflow-y-auto 2xl:w-4/12" scrollable :hasCancel="true"
        v-model="isAddMoreTransactionModalOpen" :title="AddMoreTransactionModalTitle">
        <AddMoreTransactionsForm :project="currentAddMoreTransaction?.project.id"
            :services="currentAddMoreTransaction?.services" :transaction="currentAddMoreTransaction" />
    </CardBoxModal>


    <table>
        <thead>
            <tr>
                <th>#</th>
                <th>اسم المشورع</th>
                <th>العميل</th>
                <th>موبايل</th>
                <th>الموظف</th>
                <th>العنوان</th>
                <th>عدد مرات الدفع</th>
                <th>الحاله</th>
                <th>تاريخ الانشاء</th>
                <th>اجراء</th>
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

            <tr v-for="transaction in transactions.data" :key="transaction.id">
                <td data-label="ID">{{ transaction . id }}</td>
                <td data-label="Project Name">{{ transaction . project . title }}</td>
                <td data-label="Customer Name">{{ transaction . customer . name }}</td>
                <td data-label="Phone Number">{{ transaction . customer . phone }}</td>
                <td data-label="Customer Employee">{{ transaction . employee . name }}</td>
                <td data-label="Address">{{ transaction . address . address }}</td>
                <td data-label="Times To Pay">{{ transaction . times_to_pay }}</td>
                <td data-label="Status">
                    <PillTag v-if="transaction . status === 'Paid'" color="success" class="text-center" label="مدفوع" />
                    <PillTag v-if="transaction . status === 'Pending'" color="danger" class="text-center" label="لم يكتمل الدفع" />
                </td>
                <td data-label="Created At">{{ transaction . created_at }}</td>
                <td data-label="Action" class="before:hidden lg:w-1 whitespace-nowrap">
                    <BaseButtons type="justify-start lg:justify-end" no-wrap>
                        <BaseButton color="info" :icon="mdiSquareEditOutline" small
                            @click = "editTransaction(transaction)" />
                        <BaseButton color="danger" :icon="mdiTrashCan" small
                            @click="deleteTransaction(transaction)" />
                        <!-- extra payments -->
                        <BaseButton color="success" :icon="mdiCashMultiple" small
                            @click="addMoreTransaction(transaction)" />

                        <BaseButton color="success" :icon="mdiSend" small
                            @click="showTransactionsPayment(transaction)" />
                        <!-- file transaction table contain all payments -->


                    </BaseButtons>
                </td>
            </tr>
        </tbody>
    </table>

    <div v-if="transactions?.data?.length" class="p-3 mt-5 border-t border-gray-100 pt-7 lg:px-6 dark:border-slate-800">
        <BaseLevel>
            <BaseButtons>
                <BaseButton v-for="(page, index) in transactions.links" :key="index" :active="page.active"
                    :label="page.label" :render-label-as-html="true"
                    :class="{
                        'text-white': page.active,
                    }"
                    :color="page.active ? 'contrast' : 'whiteDark'" small :as="page.url ? 'Link' : 'span'"
                    :href="page.url" preserve-state :only="['transactions']" />
            </BaseButtons>
            <small>Page {{ transactions . current_page }} of {{ transactions . total }}</small>
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
