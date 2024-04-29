<script setup>
import {
    computed,
    ref,
    onMounted
} from "vue";
import {
    useMainStore
} from "@/Admin/Stores/main";
import {
    Head,
    router
} from "@inertiajs/vue3";
import {
    mdiDomain,
    mdiPlus,
    mdiAccountPlus,
    mdiPlusBox,
    mdiRocketLaunch,
    mdiExport,
    mdiImport,
    mdiAccountCancelOutline,
    mdiCash,
    mdiCashMultiple,
    mdiTextBoxSearchOutline
} from "@mdi/js";
import SectionMain from "@/Components/Admin/SectionMain.vue";
import TransactionsTable from "@/Pages/Admin/Transactions/TransactionsTable.vue";
import CardBoxWidget from "@/Components/Admin/CardBoxWidget.vue";
import CardBox from "@/Components/Admin/CardBox.vue";
import BaseButton from "@/Components/Admin/BaseButton.vue";
import LayoutAuthenticated from "@/Layouts/Admin/LayoutAuthenticated.vue";
import SectionTitleLineWithButton from "@/Components/Admin/SectionTitleLineWithButton.vue";
import eventBus from "@/Composables/eventBus.js";
import Swal from "sweetalert2";

const props = defineProps({
    transactions: {
        type: Object,
        default: [],
    },
    transactionsCount: {
        type: Number,
        default: 0,
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
    allServicesProfit: {
        type: Number,
        default: 0,
    },
    allExtraServicesProfit: {
        type: Number,
        default: 0,
    },
    allWorkerCosts: {
        type: Number,
        default: 0,
    },
    profits: {
        type: Number,
        default: 0,
    },

});

// const exportTable = () => {
//     // ask for confirmation
//     Swal.fire({
//         title: "هل انت متاكد ؟",
//         text: "Export Transactions table to excel file!",
//         icon: "info",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Yes, export it!",
//     }).then((result) => {
//         if (result.dismiss === Swal.DismissReason.cancel) {
//             // User clicked cancel button
//             console.log('Export cancelled');
//         } else if (result.value) {
//             // User clicked export button
//             window.open(route("export.transactions"), "_blank");
//         }
//     });
// };


const showTable = ref(false);

const from = ref(null);

const to = ref(null);

onMounted(() => {
    const urlParams = new URLSearchParams(window.location.search);
    showTable.value = urlParams.get('showTable') === 'true';
});


const searchDates = () => {
    router.get(route("index.transactions"), {
        from: from.value.year + '-' + (from.value.month + 1),
        to: to.value.year + '-' + (to.value.month + 1),
    }, {
        preserveState: true,
        replace: true,
    });

    showTable.value = true;

};
</script>

<template>
    <LayoutAuthenticated>

        <Head title="List Transaction" />

        <SectionMain>
            <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
                <CardBoxWidget :icon="mdiCashMultiple" :number="transactionsCount" label="عدد المعاملات "
                    color="text-blue-500" />
            </div>

            <SectionTitleLineWithButton :icon="mdiDomain" title="المعاملات المالية">
                <div class="flex items-center">
                    <BaseButton @click="() => eventBus.$emit('openModal', 'transaction::create')
                    " color="info" :icon="mdiPlus" label="اضافة" small />

                </div>


            </SectionTitleLineWithButton>

            <!-- filter by between dates -->
            <div class="grid grid-flow-col grid-cols-4 gap-4 mb-5 space-x-3">
                <VueDatePicker v-model="from" month-picker placeholder="من" />
                <VueDatePicker v-model="to" month-picker placeholder="الى" />
                <BaseButton @click="(searchDates)" color="info" :icon="mdiTextBoxSearchOutline" class="w-1/2"
                    label="بحث" small />
            </div>

            <table :class="showTable ? '' : 'hidden'"
                class="w-full mb-8 border border-gray-200 divide-y divide-gray-300 table-fixed ">
                <thead class="bg-gray-50">
                    <tr>

                        <th class="px-6 py-3 text-xs font-bold tracking-wider text-center text-gray-500 uppercase">
                            صافي الربح الخدمات
                        </th>

                        <th class="px-6 py-3 text-xs font-bold tracking-wider text-center text-gray-500 uppercase">
                            صافي الربح الخدمات الاضافية
                        </th>

                        <th class="px-6 py-3 text-xs font-bold tracking-wider text-center text-gray-500 uppercase">
                            تكلفة العمال
                        </th>

                        <th class="px-6 py-3 text-xs font-bold tracking-wider text-center text-gray-500 uppercase">
                            صافي الربح بعد خصم العمالة
                        </th>

                    </tr>

                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    <tr>
                        <td class="px-6 py-4 font-bold text-center text-gray-500">
                            {{ allServicesProfit }} دينار
                        </td>
                        <td class="px-6 py-4 font-bold text-center text-gray-500">
                            {{ allExtraServicesProfit }} دينار
                        </td>
                        <td class="px-6 py-4 font-bold text-center text-gray-500">
                            {{ allWorkerCosts }} دينار
                        </td>
                        <td class="px-6 py-4 font-bold text-center text-green-500">
                            {{ profits }} دينار
                        </td>
                    </tr>
                </tbody>
            </table>


            <!-- search -->
            <CardBox has-table>
                <TransactionsTable :projects="projects" :filters="filters" :customers="customers" :employees="employees"
                    :services="services" :transactions="transactions" />
            </CardBox>
        </SectionMain>
    </LayoutAuthenticated>
</template>
