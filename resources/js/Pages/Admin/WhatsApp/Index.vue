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
    mdiWhatsapp,
} from "@mdi/js";
import SectionMain from "@/Components/Admin/SectionMain.vue";
import WhatsAppTable from "@/Pages/Admin/WhatsApp/WhatsAppTable.vue";
import CardBoxWidget from "@/Components/Admin/CardBoxWidget.vue";
import CardBox from "@/Components/Admin/CardBox.vue";
import BaseButton from "@/Components/Admin/BaseButton.vue";
import LayoutAuthenticated from "@/Layouts/Admin/LayoutAuthenticated.vue";
import SectionTitleLineWithButton from "@/Components/Admin/SectionTitleLineWithButton.vue";
import eventBus from "@/Composables/eventBus.js";
import Swal from "sweetalert2";
import axios from "axios";

const props = defineProps({
    whatsAppData: {
        type: Object,
        default: [],
    },
    whatsAppPhoneCount: {
        type: Number,
        default: 0,
    },
});

const qrCode = ref(null);
const qrLoading = ref(false);

const getQrCode = async () => {
    try {
        qrLoading.value = true;
        const response = await axios.get("/admin/whatsapp/createQrCode");
        qrCode.value = response.data;

        setTimeout(() => {
            location.reload();
        }, 15000);
    } catch (error) {
        console.log(error);
    } finally {
        qrLoading.value = false;
    }
};
</script>

<template>
    <LayoutAuthenticated>

        <Head title="List Services" />

        <SectionMain>
            <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2">
                <CardBoxWidget :icon="mdiWhatsapp" :number="whatsAppPhoneCount" label="عدد الارقام المسجلة للواتساب"
                    color="text-blue-500" />

                <div class="flex items-center">
                    <div class="flex items-center">
                        <BaseButton v-if="qrLoading == false" @click="getQrCode" color="info" :icon="mdiWhatsapp"
                            label="اضافة" small />
                        <div v-else>
                            <div class="w-5 h-5 border-b-2 border-gray-900 rounded-full animate-spin">
                            </div>
                            جاري تحميل الكود
                        </div>
                    </div>

                    <div v-if="qrCode">
                        <div>
                            <img :src="qrCode" alt="QR Code" />
                        </div>
                    </div>
                </div>
            </div>


            <CardBox has-table>
                <WhatsAppTable :filters="filters" :whatsAppData="whatsAppData" />
            </CardBox>
        </SectionMain>
    </LayoutAuthenticated>
</template>
