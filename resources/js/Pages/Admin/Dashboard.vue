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

    import {
        Head
    } from "@inertiajs/vue3";
    // ...
</script>

<template>
    <LayoutAuthenticated>

        <Head title="Dashboard" />
        <h1 class="pb-2 ml-8 text-4xl font-semibold text-gray-500 border-b border-gray-500 dark:text-slate-400">
            Dashboard
        </h1>

        <SectionMain>
            <h1 class="text-2xl font-semibold text-gray-500 dark:text-slate-400">
                Users
            </h1>
            <div class="grid grid-cols-1 gap-6 mt-5 mb-6 lg:grid-cols-4">
                <CardBoxWidget :icon="mdiAccountMultipleOutline" :number="employeesCount" label="Employers"
                    color="text-green-500" />

                <CardBoxWidget :icon="mdiAccountGroup" :number="customersCount" label="Customer" color="text-green-500" />
            </div>


            <h1 class="text-2xl font-semibold text-gray-500 dark:text-slate-400">
                Projects
            </h1>

            <div class="grid grid-cols-1 gap-6 mt-5 mb-6 lg:grid-cols-4">
                <CardBoxWidget :icon="mdiFileDocumentMultipleOutline" :number="allProjectCount" label="All Projects"
                    color="text-green-500" />

                <CardBoxWidget :icon="mdiFileDocumentEditOutline" :number="pendingProjectCount" label="Pending Projects"
                    color="text-green-500" />

                <CardBoxWidget :icon="mdiFileDocumentCheckOutline" :number="finishedProjectCount"
                    label="Finished Projects" color="text-green-500" />

                <CardBoxWidget :icon="mdiFileDocumentRefreshOutline" :number="inProgressProjectCount"
                    label="In Progress Projects" color="text-green-500" />

                <CardBoxWidget :icon="mdiFileDocumentRemoveOutline" :number="canceledProjectCount"
                    label="Canceled Projects" color="text-green-500" />
            </div>


            <h1 class="text-2xl font-semibold text-gray-500 dark:text-slate-400">
                Companies
            </h1>

            <div class="grid grid-cols-1 gap-6 mt-5 mb-6 lg:grid-cols-4">
                <CardBoxWidget :icon="mdiDomain" :number="serviceAlqataryaProjectCount"
                    label="Alqatarya Projects" color="text-green-500" />

                <CardBoxWidget :icon="mdiDomain" :number="serviceOthmanProjectCount" label="Othman Projects"
                    color="text-green-500" />
            </div>


        </SectionMain>
        <!-- ... -->
    </LayoutAuthenticated>
</template>
