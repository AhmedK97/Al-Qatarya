<script setup>
import { computed, ref, onMounted } from "vue";
import { useMainStore } from "@/Admin/Stores/main";
import { Head, router } from "@inertiajs/vue3";
import {
    mdiDomain,
    mdiPlus,
    mdiFileDocumentMultipleOutline,
    mdiPlusBox,
    mdiRocketLaunch,
    mdiExport,
    mdiImport,
    mdiAccountCancelOutline,
    mdiCash,
} from "@mdi/js";
import SectionMain from "@/Components/Admin/SectionMain.vue";
import ProjectsTable from "@/Pages/Admin/Projects/ProjectsTable.vue";
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
    projects: {
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
    projectsCount: {
        type: Number,
        default: 0,
    },
    services:{
        type: Object,
        default: [],
    },
    filters: {
        type: Object,
        default: {},
    },
});



</script>

<template>
    <LayoutAuthenticated>
        <Head title="List Projects" />
        <SectionMain>
            <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
                <CardBoxWidget
                    :icon="mdiFileDocumentMultipleOutline"
                    :number="projectsCount"
                    label="العدد الكلي للمشاريع"
                    color="text-blue-500"
                />
            </div>

            <SectionTitleLineWithButton :icon="mdiDomain" title="المشاريع">
                <div class="flex items-center">
                    <BaseButton
                        @click="
                            () => eventBus.$emit('openModal', 'project::create')
                        "
                        color="info"
                        :icon="mdiPlus"
                        label="اضافة"
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
                <ProjectsTable
                    :filters="filters"
                    :projects="projects"
                    :customers="customers"
                    :employees="employees"
                    :services="services"
                />
            </CardBox>
        </SectionMain>
    </LayoutAuthenticated>
</template>
