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
import BlogsTable from "@/Pages/Admin/Blogs/BlogsTable.vue";
import CardBoxWidget from "@/Components/Admin/CardBoxWidget.vue";
// import CardBox from "@/Components/Admin/CardBox.vue";
import BaseButton from "@/Components/Admin/BaseButton.vue";
import LayoutAuthenticated from "@/Layouts/Admin/LayoutAuthenticated.vue";
import SectionTitleLineWithButton from "@/Components/Admin/SectionTitleLineWithButton.vue";
import eventBus from "@/Composables/eventBus.js";
import Swal from "sweetalert2";
// import CardBoxModal from "@/Components/Admin/CardBoxModal.vue";
// import CompaniesImport from "@/Pages/Admin/Companies/CompaniesImport.vue";

const props = defineProps({
    blogs: {
        type: Object,
        default: [],
    },
    blogsCount: {
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
        text: "Export Blogs table to excel file!",
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
            window.open(route("export.blogs"), "_blank");
        }
    });
};


</script>

<template>
    <LayoutAuthenticated>
        <Head title="List Blogs" />

        <SectionMain>
            <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
                <CardBoxWidget
                    :icon="mdiDomain"
                    :number="blogsCount"
                    label="عدد المدونات"
                    color="text-blue-500"
                />
            </div>

            <SectionTitleLineWithButton :icon="mdiDomain" title="المدونات">
                <div class="flex items-center">
                    <BaseButton
                        @click="
                            () => eventBus.$emit('openModal', 'blog::create')
                        "
                        color="info"
                        :icon="mdiPlus"
                        label="اضافه مدونة جديدة"
                        small
                    />

                </div>
             </SectionTitleLineWithButton>
             <!-- {{ blogs }} -->
            <CardBox has-table>
                <BlogsTable
                    :filters="filters"
                    :blogs="blogs"
                />
            </CardBox>
        </SectionMain>
    </LayoutAuthenticated>
</template>
