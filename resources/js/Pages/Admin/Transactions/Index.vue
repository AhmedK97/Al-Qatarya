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
        mdiCashMultiple
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
    // import CardBoxModal from "@/Components/Admin/CardBoxModal.vue";
    // import CompaniesImport from "@/Pages/Admin/Companies/CompaniesImport.vue";

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
    });

    const exportTable = () => {
        // ask for confirmation
        Swal.fire({
            title: "Are you sure?",
            text: "Export Transactions table to excel file!",
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, export it!",
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.cancel) {
                // User clicked cancel button
                console.log('Export cancelled');
            } else if (result.value) {
                // User clicked export button
                window.open(route("export.transactions"), "_blank");
            }
        });
    };
</script>

<template>
    <LayoutAuthenticated>

        <Head title="List Transaction" />

        <SectionMain>
            <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
                <CardBoxWidget :icon="mdiCashMultiple" :number="transactionsCount" label="Transactions"
                    color="text-blue-500" />
            </div>

            <SectionTitleLineWithButton :icon="mdiDomain" title="Transactions">
                <div class="flex items-center space-x-3">
                    <BaseButton
                        @click="
                            () => eventBus.$emit('openModal', 'transaction::create')
                        "
                        color="info" :icon="mdiPlus" label="Add" small />


                    <BaseButton @click="exportTable" color="success" :icon="mdiExport" label="Export" small />

                </div>
            </SectionTitleLineWithButton>
            <CardBox has-table>
                <TransactionsTable
                :projects = "projects"
                :filters="filters"
                :customers="customers"
                :employees="employees"
                :services="services"
                :transactions="transactions" />
            </CardBox>
        </SectionMain>
    </LayoutAuthenticated>
</template>
