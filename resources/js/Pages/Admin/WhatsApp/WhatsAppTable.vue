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
} from "@mdi/js";
import BaseLevel from "@/Components/Admin/BaseLevel.vue";
import BaseButtons from "@/Components/Admin/BaseButtons.vue";
import BaseButton from "@/Components/Admin/BaseButton.vue";
import {
    router
} from "@inertiajs/vue3";
import Swal from "sweetalert2";

const {
    whatsAppData,
} = defineProps({
    whatsAppData: {
        type: Object,
        default: [],
    },

});


// const type = {
//     'ads': 'اعلانات',
//     'chat': 'تواصل وفواتير',
// };

const status = {
    'active': 'مفعل',
    'inactive': 'غير مفعل',
};


const deleteWhatsApp = (whatsapp) => {
    Swal.fire({
        title: "هل انت متاكد ؟",
        text: `لن تتمكن من التراجع عن هذا - ${whatsapp.ownerJid}`,
        icon: "error",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "نعم، احذفه!",
        cancelButtonText: "الغاء",
    }).then((result) => {
        if (result.isConfirmed) {
            router.delete(route("delete.whatsapp", whatsapp.id), {
                preserveState: true,
                replace: true,
                onSuccess: () => {
                    Swal.fire({
                        icon: "success",
                        title: "عملية ناجحة",
                        text: "WhatsApp deleted successfully",
                        timer: 3000,
                        timerProgressBar: true,
                    });
                },
                onError: () => {
                    Swal.fire({
                        icon: "error",
                        title: "Error",
                        text: "WhatsApp not deleted",
                        timer: 3000,
                        timerProgressBar: true,
                    });
                },
            });
        }
    });
};


const updateWhatsAppType = (whatsapp) => {
    router.post(route("update.whatsapp", whatsapp.id), {
        type: whatsapp.type,
        status: whatsapp.status,
        onSuccess: () => {
            Swal.fire({
                icon: "success",
                title: "عملية ناجحة",
                text: "WhatsApp type updated successfully",
                timer: 3000,
                timerProgressBar: true,
            });
        },
    });
};
</script>

<template>
    <table>
        <thead>
            <tr>
                <th>#</th>
                <th>رقم الموبايل</th>
                <th>الاسم</th>
                <!-- <th>النوع</th> -->
                <th>الحاله</th>
                <th>حاله الاتصال للواتس</th>
                <th>تاريخ الاضافه</th>
                <th>اجزاء</th>
            </tr>
        </thead>
        <tbody>
            <!-- Filters -->

            <tr v-for="whatsapp in whatsAppData" :key="whatsapp.id">
                <td>{{ whatsapp.id }}</td>
                <td>{{ whatsapp.ownerJid }}</td>
                <td>{{ whatsapp.instance_name }}</td>
                <!-- <td>
                    <select v-model="whatsapp.type" class="form-select" @change="() => updateWhatsAppType(whatsapp)">
                        <option v-for="(value, key) in type" :value="key">{{ value }}</option>
                    </select>

                </td> -->

                <td>
                    {{ whatsapp.whatsapp_status}}
                </td>

                <td>
                    <select v-model="whatsapp.status" class="form-select" @change="() => updateWhatsAppType(whatsapp)">
                        <option v-for="(value, key) in status" :value="key">{{ value }}</option>
                    </select>
                </td>

                <td>{{ whatsapp.created_at }}</td>
                <td>
                    <BaseButton :icon="mdiTrashCan" color="danger" small @click="() => deleteWhatsApp(whatsapp)" />
                </td>
            </tr>
        </tbody>
    </table>

    <div v-if="whatsAppData?.data?.length" class="p-3 mt-5 border-t border-gray-100 pt-7 lg:px-6 dark:border-slate-800">
        <BaseLevel>
            <BaseButtons>
                <BaseButton v-for="(page, index) in whatsAppData.links" :key="index" :active="page.active"
                    :label="page.label" :render-label-as-html="true" :class="{
                'text-white': page.active,
            }" :color="page.active ? 'contrast' : 'whiteDark'" small :as="page.url ? 'Link' : 'span'" :href="page.url"
                    preserve-state :only="['whatsAppData']" />
            </BaseButtons>
            <!-- <small>Page {{ whatsAppData.current_page }} of {{ whatsAppData.total }}</small> -->
        </BaseLevel>
    </div>
</template>
