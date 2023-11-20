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
    import CardBoxModal from "@/Components/Admin/CardBoxModal.vue";
    import BaseLevel from "@/Components/Admin/BaseLevel.vue";
    import BaseButtons from "@/Components/Admin/BaseButtons.vue";
    import BaseButton from "@/Components/Admin/BaseButton.vue";
    import PillTag from "@/Components/Admin/PillTag.vue";
    import ServicesForm from "@/Pages/Admin/Services/ServicesForm.vue";
    import CardBoxComponentEmpty from "@/Components/Admin/CardBoxComponentEmpty.vue";
    import {
        router
    } from "@inertiajs/vue3";
    import Swal from "sweetalert2";

    const {
        services,
        filters,
    } = defineProps({
        services: {
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
            if (modalToOpen === "service::create") {
                currentlyEditedService.value = null;
                isFormModalOpen.value = true;
            }
        });

        eventBus.$on("closeModal", (modalToClose) => {
            if (
                modalToClose === "service::create" ||
                modalToClose === "service::update"
            ) {
                isFormModalOpen.value = false;
            }
        });
    });

    const activeFilters = reactive({
        filteredBy: {
            name: filters?.filteredBy?.name,
            phone: filters?.filteredBy?.phone,
            company_name: filters?.filteredBy?.company_name,
        },
    });

    watch(activeFilters, (filledFilters) => {
        router.get(route("index.services"), filledFilters, {
            preserveState: true,
            replace: true,
        });
    });

    const currentlyEditedService = ref(null);

    const formModalTitle = computed(() => {
        return currentlyEditedService.value?.id ?
            `Edit ${currentlyEditedService.value?.name} Service` :
            "Add New Service";
    });

    const isFormModalOpen = ref(false && currentlyEditedService.value);

    const editService = (service) => {
        currentlyEditedService.value = service;
        isFormModalOpen.value = true;
    };

    const deleteService = (service) => {
        Swal.fire({
            title: "Are you sure?",
            text: `You won't be able to revert this - ${service.name}!`,
            icon: "error",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(route("delete.services", service.id), {
                    preserveState: true,
                    replace: true,
                    onSuccess: () => {
                        Swal.fire({
                            title: "Deleted!",
                            text: `${service.name} has been deleted.`,
                            icon: "success",
                            showConfirmButton: true,
                            timer: 2000,
                        });
                    },
                });
            }
        });
    };

    const openFormModal = () => {
        eventBus.$emit("openModal", "service::create");
    };
</script>

<template>
    <CardBoxModal cardWidthClass="w-[80%] 2xl:w-4/12" scrollable :hasCancel="true" v-model="isFormModalOpen"
        :title="formModalTitle">
        <ServicesForm :service="currentlyEditedService" />
    </CardBoxModal>
    <!-- <CardBoxModal cardWidthClass="w-[80%] 2xl:w-4/12" scrollable :hasCancel="true" v-model="isViewModalOpen"
        :title="viewModalTitle">
        <ServicesForm :service="currentlyEditedService" />
    </CardBoxModal> -->

    <table>
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Company</th>
                <th>Language</th>
                <th>Created At</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <!-- Filters -->
            <tr key="filters">
                <td></td>
                <td data-label="Filter Name">
                    <input placeholder="Filter by name" v-model="activeFilters.filteredBy.name"
                        class="w-full h-8 px-2 py-1 border rounded border-primary-100" />
                </td>
                <td data-label="Filter Status">
                    <select v-model="activeFilters.filteredBy.company_name"
                        class="w-full h-8 px-2 py-1 border rounded border-primary-100">
                        <option :value="null">Filter</option>
                        <option value="qatarya">Qatarya</option>
                        <option value="othman">Othman</option>
                    </select>
                </td>
                <td data-label="Filter Status">
                    <select v-model="activeFilters.filteredBy.company_name"
                        class="w-full h-8 px-2 py-1 border rounded border-primary-100">
                        <option :value="null">Filter</option>
                        <option value="ar">Arabic</option>
                        <option value="en">English</option>
                    </select>
                </td>
                <td></td>
                <td></td>
            </tr>

            <!-- empty state -->

            <tr v-if="services.data.length === 0">
                <td colspan="12">
                    <CardBoxComponentEmpty title="No Users Found, Click here to add new user"
                        description="You can add new user by clicking on the button below" @click="openFormModal" />
                </td>
            </tr>

            <!-- User data -->
            <!-- {{ services.data }} -->
            <tr v-for="service in services.data" :key="service.id">
                <td data-label="ID">{{ service . id }}</td>
                <td data-label="Name">{{ service . name }}</td>
                <td data-label="Status">{{ service . company_name }}</td>
                <td data-label="Language">{{ service . lang == 'ar'  ? 'Arabic' : 'English'}}</td>
                <td data-label="Created At">{{ service . created_at }}</td>
                <td data-label="Action" class="before:hidden lg:w-1 whitespace-nowrap">
                    <BaseButtons type="justify-start lg:justify-end" no-wrap>
                        <BaseButton color="info" :icon="mdiSquareEditOutline" small
                            @click = "editService(service)" />
                        <BaseButton color="danger" :icon="mdiTrashCan" small @click="deleteService(service)" />
                    </BaseButtons>
                </td>
            </tr>
        </tbody>
    </table>

    <div v-if="services?.data?.length" class="p-3 mt-5 border-t border-gray-100 pt-7 lg:px-6 dark:border-slate-800">
        <BaseLevel>
            <BaseButtons>
                <BaseButton v-for="(page, index) in services.links" :key="index" :active="page.active"
                    :label="page.label" :render-label-as-html="true"
                    :class="{
                        'text-white': page.active,
                    }"
                    :color="page.active ? 'contrast' : 'whiteDark'" small :as="page.url ? 'Link' : 'span'"
                    :href="page.url" preserve-state :only="['services']" />
            </BaseButtons>
            <small>Page {{ services . current_page }} of {{ services . total }}</small>
        </BaseLevel>
    </div>
</template>
