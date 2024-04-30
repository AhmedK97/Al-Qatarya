<script setup>
import { computed, ref, watch, reactive, onMounted } from "vue";
import eventBus from "@/Composables/eventBus.js";

import {
    mdiSquareEditOutline,
    mdiTrashCan,
    mdiEyeOutline,
    mdiSend,
    mdiFactory,
    mdiCity,
    mdiPlaneCar,
} from "@mdi/js";
import CardBoxModal from "@/Components/Admin/CardBoxModal.vue";
import BaseLevel from "@/Components/Admin/BaseLevel.vue";
import BaseButtons from "@/Components/Admin/BaseButtons.vue";
import BaseButton from "@/Components/Admin/BaseButton.vue";
import PillTag from "@/Components/Admin/PillTag.vue";
import Form from "@/Pages/Admin/WhatsAppAds/AdsForm.vue";
import CardBoxComponentEmpty from "@/Components/Admin/CardBoxComponentEmpty.vue";
import { router } from "@inertiajs/vue3";
import Swal from "sweetalert2";

const { whatsAppAdsData, filters } = defineProps({
    whatsAppAdsData: {
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
        if (modalToOpen === "whatsAppAds::create") {
            AddWhatsAppAds.value = null;
            isFormModalOpen.value = true;
        }
    });

    eventBus.$on("closeModal", (modalToClose) => {
        if (
            modalToClose === "whatsAppAds::create" ||
            modalToClose === "whatsAppAds::update"
        ) {
            isFormModalOpen.value = false;
        }
    });
});

const activeFilters = reactive({
    filteredBy: {
        name: filters?.filteredBy?.name,
        company_name: filters?.filteredBy?.company_name,
        lang: filters?.filteredBy?.lang,
    },
});

watch(activeFilters, (filledFilters) => {
    router.get(route("index.services"), filledFilters, {
        preserveState: true,
        replace: true,
    });
});

const AddWhatsAppAds = ref(null);

const formModalTitle = computed(() => {
    return AddWhatsAppAds.value?.id
        ? `ارسال اعلانات الواتساب`
        : "ارسال اعلانات الواتساب";
});

const isFormModalOpen = ref(false && AddWhatsAppAds.value);
</script>

<template>
    <CardBoxModal
        cardWidthClass="w-[80%] 2xl:w-4/12"
        scrollable
        :hasCancel="true"
        v-model="isFormModalOpen"
        :title="formModalTitle"
    >
        <Form :AddWhatsAppAds="AddWhatsAppAds" />
    </CardBoxModal>

    <table>
        <thead>
            <tr>
                <th>الرقم</th>
                <th>الرسائل</th>
                <th>نوع الملف</th>
                <th>الحالة</th>
                <th>تم الانشاء في</th>
            </tr>
        </thead>

        <tbody>
            <tr v-for="whatsAppAd in whatsAppAdsData.data" :key="whatsAppAd.id">
                <td>{{ whatsAppAd.number }}</td>
                <td>{{ whatsAppAd.message }}</td>
                <td>{{ whatsAppAd.file_type ?? "لا يوجد" }}</td>
                <td>
                    <PillTag
                        v-if="whatsAppAd.status == 'pending'"
                        color="warning"
                        label="جاري"
                    />
                    <PillTag
                        v-if="whatsAppAd.status == 'sent'"
                        color="success"
                        label="ارسال"
                    />
                </td>
                <td>{{ whatsAppAd.created_at }}</td>
            </tr>
        </tbody>

        <CardBoxComponentEmpty v-if="whatsAppAdsData.length === 0" />
    </table>

    <div
        v-if="whatsAppAdsData.data.length > 0"
        class="p-3 mt-5 border-t border-gray-100 pt-7 lg:px-6 dark:border-slate-800"
    >
        <BaseLevel>
            <BaseButtons>
                <BaseButton
                    v-for="(page, index) in whatsAppAdsData.links"
                    :key="index"
                    :active="page.active"
                    :label="page.label"
                    :render-label-as-html="true"
                    :class="{
                        'text-white': page.active,
                    }"
                    :color="page.active ? 'contrast' : 'whiteDark'"
                    small
                    :as="page.url ? 'Link' : 'span'"
                    :href="page.url"
                    preserve-state
                    :only="['whatsAppAdsData']"
                />
            </BaseButtons>
            <!-- <small>Page {{ whatsAppAdsData.current_page }} of {{ whatsAppAdsData.total }}</small> -->
        </BaseLevel>
    </div>
</template>
