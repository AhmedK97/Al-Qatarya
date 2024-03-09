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
    mdiPhoneCheck,
} from "@mdi/js";
import SectionMain from "@/Components/Admin/SectionMain.vue";
import Table from "@/Pages/Admin/WhatsAppAds/Table.vue";
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
    whatsAppAdsData: {
        type: Object,
        default: [],
    },
    filters: {
        type: Object,
        default: {},
    },

    whatsAppAdsDataCount: {
        type: Number,
        default: 0,
    },

    queueRunning: {
        type: Boolean,
        default: false,
    },

});


</script>

<template>
    <LayoutAuthenticated>

        <Head title=" قائمة الخدمات" />

        <SectionMain>
            <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
                <CardBoxWidget :icon="mdiPhoneCheck" :number="whatsAppAdsDataCount" label='عدد رسائل الاعلانات المرسله'
                    color="text-blue-500" />

            </div>
            <SectionTitleLineWithButton v:icon="mdiDomain" title="الخدمات">
                <div class="flex items-center">
                    <BaseButton @click="() => eventBus.$emit('openModal', 'whatsAppAds::create')
                    " color="info" :icon="mdiPlus" label="اضافة" small :disabled="queueRunning" />
                </div>
            </SectionTitleLineWithButton>

            <CardBox has-table>
                <Table :filters="filters" :whatsAppAdsData="whatsAppAdsData" />
            </CardBox>
        </SectionMain>
    </LayoutAuthenticated>
</template>
