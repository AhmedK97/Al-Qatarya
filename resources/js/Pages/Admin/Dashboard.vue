<script setup>
import LayoutAuthenticated from "@/Layouts/Admin/LayoutAuthenticated.vue";
import SectionMain from "@/Components/Admin/SectionMain.vue";
import {
    mdiAccountPlus,
    mdiCheckCircle,
    mdiCurrencyUsdOff,
    mdiCurrencyUsd,
    mdiPlusBox,
    mdiRocketLaunch,
    mdiClockAlertOutline,
    mdiCloseBox,
    mdiStarCircleOutline,
    mdiCheckCircleOutline,
    mdiAccountCancelOutline,
    mdiStopCircleOutline,
    mdiCash,
    mdiAccountMultipleOutline,
    mdiFileDocumentCheckOutline,
    mdiFileDocumentMultipleOutline,
    mdiFileDocumentRemoveOutline,
    mdiFileDocumentEditOutline,
    mdiFileDocumentRefreshOutline,
    mdiAccountGroup,
    mdiDomain,
} from "@mdi/js";
import CardBoxWidget from "@/Components/Admin/CardBoxWidget.vue";

const props = defineProps({
    employeesCount: {
        type: Number,
        default: 0,
    },
    customersCount: {
        type: Number,
        default: 0,
    },
    allProjectCount: {
        type: Number,
        default: 0,
    },
    pendingProjectCount: {
        type: Number,
        default: 0,
    },
    finishedProjectCount: {
        type: Number,
        default: 0,
    },
    inProgressProjectCount: {
        type: Number,
        default: 0,
    },
    canceledProjectCount: {
        type: Number,
        default: 0,
    },
    serviceAlqataryaProjectCount: {
        type: Number,
        default: 0,
    },
    serviceOthmanProjectCount: {
        type: Number,
        default: 0,
    },
});

import { Head } from "@inertiajs/vue3";
// ...
</script>

<template>
    <LayoutAuthenticated>
        <Head title="Dashboard" />
        <h1
            class="px-4 pb-2 ml-8 text-4xl font-semibold text-gray-500 border-b border-gray-500 dark:text-slate-400"
        >
            لوحة التحكم
        </h1>

        <SectionMain>
            <h1
                class="text-2xl font-semibold text-gray-500 dark:text-slate-400"
            >
                المستخدمين
            </h1>
            <div class="grid grid-cols-1 gap-6 mt-5 mb-6 lg:grid-cols-4">
                <CardBoxWidget
                    :icon="mdiAccountMultipleOutline"
                    :number="employeesCount"
                    label="الموظفين"
                    color="text-green-500"
                />

                <CardBoxWidget
                    :icon="mdiAccountGroup"
                    :number="customersCount"
                    label="العملاء"
                    color="text-green-500"
                />
            </div>

            <h1
                class="text-2xl font-semibold text-gray-500 dark:text-slate-400"
            >
                المشاريع
            </h1>

            <div class="grid grid-cols-1 gap-6 mt-5 mb-6 lg:grid-cols-4">
                <CardBoxWidget
                    :icon="mdiFileDocumentMultipleOutline"
                    :number="allProjectCount"
                    label="جميع المشاريع"
                    color="text-green-500"
                />

                <CardBoxWidget
                    :icon="mdiFileDocumentEditOutline"
                    :number="pendingProjectCount"
                    label="مشاريع قيد الانتظار"
                    color="text-green-500"
                />

                <CardBoxWidget
                    :icon="mdiFileDocumentCheckOutline"
                    :number="finishedProjectCount"
                    label="مشاريع منتهية"
                    color="text-green-500"
                />

                <CardBoxWidget
                    :icon="mdiFileDocumentRefreshOutline"
                    :number="inProgressProjectCount"
                    label="مشاريع جارى العمل عليها"
                    color="text-green-500"
                />

                <CardBoxWidget
                    :icon="mdiFileDocumentRemoveOutline"
                    :number="canceledProjectCount"
                    label="مشاريع ملغية"
                    color="text-green-500"
                />
            </div>

            <!-- <h1 class="text-2xl font-semibold text-gray-500 dark:text-slate-400">
                الشركــــات
            </h1>

            <div class="grid grid-cols-1 gap-6 mt-5 mb-6 lg:grid-cols-4">
                <CardBoxWidget :icon="mdiDomain" :number="serviceAlqataryaProjectCount"
                    label="القطرية" color="text-green-500" />
            </div> -->
        </SectionMain>
        <!-- ... -->
    </LayoutAuthenticated>
</template>
