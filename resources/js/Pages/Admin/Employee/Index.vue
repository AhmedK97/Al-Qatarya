<script setup>
import { computed, ref, onMounted } from "vue";
import { useMainStore } from "@/Admin/Stores/main";
import { Head, router } from "@inertiajs/vue3";
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
} from "@mdi/js";
import SectionMain from "@/Components/Admin/SectionMain.vue";
import EmployeesTable from "@/Pages/Admin/Employee/EmployeesTable.vue";
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
    employees: {
        type: Object,
        default: [],
    },
    employeesCount: {
        type: Number,
        default: 0,
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
        text: "Export Employees table to excel file!",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, export it!",
    }).then((result) => {
        if (result.dismiss === Swal.DismissReason.cancel) {
            // User clicked cancel button
        } else if (result.value) {
            // User clicked export button
            window.open(route("export.employees"), "_blank");
        }
    });
};


</script>

<template>
    <LayoutAuthenticated>
        <Head title="List Employee" />

        <SectionMain>
            <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
                <CardBoxWidget
                    :icon="mdiAccountPlus"
                    :number="employeesCount"
                    label="عدد الموظفين"
                    color="text-blue-500"
                />
            </div>

            <SectionTitleLineWithButton :icon="mdiDomain" title="الموظفين">
                <div class="flex items-center">
                    <BaseButton
                        @click="
                            () => eventBus.$emit('openModal', 'employee::create')
                        "
                        color="info"
                        :icon="mdiPlus"
                        label="اضافه موظف جديد"
                        small
                    />
                    <!-- <BaseButton
                        @click="exportTable"
                        color="success"
                        :icon="mdiExport"
                        label="Export"
                        small
                    /> -->

                </div>
             </SectionTitleLineWithButton>

            <CardBox has-table>
                <EmployeesTable
                    :filters="filters"
                    :employees="employees"
                />
            </CardBox>
        </SectionMain>
    </LayoutAuthenticated>
</template>
