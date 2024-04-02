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
import axios from "axios";
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

    whatsAppAdsActiveNumbers: {
        type: Number,
        default: 0,
    },


});



const sensJob = () => {
    Swal.fire({
        title: "هل انت متاكد ؟",
        text: `سيتم ارسال الاعلانات لجميع الارقام المسجله`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "نعم، ارسلها!",
        cancelButtonText: "الغاء",
    }).then((result) => {
        if (result.isConfirmed) {
            router.post(route("send.message.job"))
        }
    });
};

</script>

<template>
    <LayoutAuthenticated>

        <Head title=" قائمة الخدمات" />

        <!-- intimation -->

        <SectionMain>
            <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
                <CardBoxWidget :icon="mdiPhoneCheck" :number="whatsAppAdsDataCount" label='عدد رسائل الاعلانات المرسله'
                    color="text-blue-500" />

                <CardBoxWidget :icon="mdiAccountPlus" :number="whatsAppAdsActiveNumbers"
                    label='عدد الارقام المسجله للرسائل الاعلانيه' color="text-blue-500" />


                <div v-if="whatsAppAdsActiveNumbers === 0"
                    class="col-span-3 p-3 mt-5 border-t border-gray-100 pt-7 lg:px-6 dark:border-slate-800">
                    <div class="flex justify-between items -center">
                        <span class="font-extrabold text-red-500 ">
                            لا يوجد ارقام مسجله للرسائل الاعلانيه لن يتم ارسال الاعلانات حتى يتم اضافه رقم على الاقل
                        </span>
                    </div>
                </div>


            </div>


            <SectionTitleLineWithButton v:icon="mdiDomain" title="الخدمات">
                <div class="flex items-center">
                    <BaseButton @click="() => eventBus.$emit('openModal', 'whatsAppAds::create')
                    " color="info" :icon="mdiPlus" label="اضافة" small :disabled="queueRunning" />
                    <BaseButton @click="(sensJob)
                    " color="info" :icon="mdiRocketLaunch" label=" بدء ارسال الاعلانات" small
                        :disabled="queueRunning" />
                </div>



            </SectionTitleLineWithButton>

            <CardBox has-table>
                <Table :filters="filters" :whatsAppAdsData="whatsAppAdsData" />
            </CardBox>
        </SectionMain>
    </LayoutAuthenticated>
</template>
