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
    mdiBriefcase,
    mdiAccountCancelOutline,
    mdiCash,
} from "@mdi/js";
import SectionMain from "@/Components/Admin/SectionMain.vue";
import ServicesTable from "@/Pages/Admin/Services/ServicesTable.vue";
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
    services: {
        type: Object,
        default: [],
    },

});


</script>

<template>
    <LayoutAuthenticated>

        <Head title="List Services" />

        <SectionMain>
            <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
                <CardBoxWidget :icon="mdiBriefcase" :number="servicesCountQatarya" label="خدمات شركة قطرية"
                    color="text-blue-500" />
                <CardBoxWidget :icon="mdiBriefcase" :number="servicesCountOthman" label="خدمات شركة عثمان"
                    color="text-blue-500" />
            </div>
            <!-- <SectionTitleLineWithButton :icon="mdiDomain" title="الخدمات">
                <div class="flex items-center">
                    <BaseButton @click="() => eventBus.$emit('openModal', 'service::create')
                    " color="info" :icon="mdiPlus" label="اضافة" small />
                </div>
            </SectionTitleLineWithButton> -->

            <CardBox has-table>
                <!-- <ServicesTable
                    :filters="filters"
                    :services="services"
                /> -->
            </CardBox>
        </SectionMain>
    </LayoutAuthenticated>
</template>
