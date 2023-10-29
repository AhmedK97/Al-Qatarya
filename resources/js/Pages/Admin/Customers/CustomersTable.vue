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
    import CustomersForm from "@/Pages/Admin/Customers/CustomersForm.vue";
    import CardBoxComponentEmpty from "@/Components/Admin/CardBoxComponentEmpty.vue";
    import {
        router
    } from "@inertiajs/vue3";
    import Swal from "sweetalert2";

    const {
        customers,
        filters,
    } = defineProps({
        customers: {
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
            if (modalToOpen === "customer::create") {
                currentlyEditedCustomer.value = null;
                isFormModalOpen.value = true;
            }
        });

        eventBus.$on("closeModal", (modalToClose) => {
            if (
                modalToClose === "customer::create" ||
                modalToClose === "customer::update"
            ) {
                isFormModalOpen.value = false;
            }
        });
    });

    const activeFilters = reactive({
        filteredBy: {
            name: filters?.filteredBy?.name,
            email: filters?.filteredBy?.email,
            phone: filters?.filteredBy?.phone,
            status: filters?.filteredBy?.status,
        },
    });

    watch(activeFilters, (filledFilters) => {
        router.get(route("index.customers"), filledFilters, {
            preserveState: true,
            replace: true,
        });
    });

    const currentlyEditedCustomer = ref(null);

    const formModalTitle = computed(() => {
        return currentlyEditedCustomer.value?.id ?
            `Edit ${currentlyEditedCustomer.value?.name} Customer` :
            "Add New Employee";
    });

    // const viewModalTitle = computed(() => {
    //     return currentlyViewedUser.value?.id ?
    //         `View ${currentlyViewedUser.value?.name} Customer` :
    //         "View Customer";
    // });

    // const currentlyViewedUser = ref(null);
    const isViewModalOpen = ref(false && currentlyViewedUser.value);

    const isFormModalOpen = ref(false && currentlyEditedCustomer.value);

    const editEmployee = (customer) => {
        currentlyEditedCustomer.value = customer;
        isFormModalOpen.value = true;
    };

    const deleteEmployee = (customer) => {
        Swal.fire({
            title: "Are you sure?",
            text: `You won't be able to revert this - ${customer.name}!`,
            icon: "error",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(route("delete.customers", customers.id), {
                    preserveState: true,
                    replace: true,
                    onSuccess: () => {
                        Swal.fire({
                            title: "Deleted!",
                            text: `${customers.name} has been deleted.`,
                            icon: "success",
                            showConfirmButton: true,
                            timer: 2000,
                        });
                    },
                });
            }
        });
    };

    const openformModal = () => {
        eventBus.$emit("openModal", "customer::create");
    };
</script>

<template>
    <CardBoxModal cardWidthClass="w-[80%] 2xl:w-4/12" scrollable :hasCancel="true" v-model="isFormModalOpen"
        :title="formModalTitle">
        <CustomersForm :customer="currentlyEditedCustomer" />
    </CardBoxModal>
    <CardBoxModal cardWidthClass="w-[80%] 2xl:w-4/12" scrollable :hasCancel="true" v-model="isViewModalOpen"
        :title="viewModalTitle">
        <CustomersForm :customer="currentlyEditedCustomer" />
    </CardBoxModal>

    <table>
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Address</th>
                <th>About</th>
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
                <td data-label="Filter Email">
                    <input placeholder="Filter by email" v-model="activeFilters.filteredBy.email"
                        class="w-full h-8 px-2 py-1 border rounded border-primary-100" />
                </td>
                <td data-label="Filter Phone">
                    <input placeholder="Filter by Phone" v-model="activeFilters.filteredBy.phone"
                        class="w-full h-8 px-2 py-1 border rounded border-primary-100" />
                </td>
                <td data-label="Filter Status">
                    <select v-model="activeFilters.filteredBy.status"
                        class="w-full h-8 px-2 py-1 border rounded border-primary-100">
                        <option :value="null">Filter</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>

            <!-- empty state -->

            <tr v-if="customers.data.length === 0">
                <td colspan="12">
                    <CardBoxComponentEmpty title="No Users Found, Click here to add new user"
                        description="You can add new user by clicking on the button below" @click="openformModal" />
                </td>
            </tr>

            <!-- User data -->
            <tr v-for="customer in customers.data" :key="customer.id">
                <td data-label="ID">{{ customer . id }}</td>
                <td data-label="Name">{{ customer . name }}</td>
                <td data-label="Email">{{ customer . email }}</td>
                <td data-label="Phone">{{ customer . phone }}</td>
                <td data-label="Status">{{ customer . status }}</td>
                <td data-label="Address">{{ customer . address }}</td>
                <td data-label="About">{{ customer . about }}</td>
                <td data-label="Created At">{{ customer . created_at }}</td>
                <td data-label="Action" class="before:hidden lg:w-1 whitespace-nowrap">
                    <BaseButtons type="justify-start lg:justify-end" no-wrap>
                        <BaseButton color="info" :icon="mdiSquareEditOutline" small
                            @click = "editEmployee(customer)" />
                        <BaseButton color="danger" :icon="mdiTrashCan" small @click="deleteEmployee(customer)" />
                    </BaseButtons>
                </td>
            </tr>
        </tbody>
    </table>

    <div v-if="customers?.data?.length" class="p-3 mt-5 border-t border-gray-100 pt-7 lg:px-6 dark:border-slate-800">
        <BaseLevel>
            <BaseButtons>
                <BaseButton v-for="(page, index) in customers.links" :key="index" :active="page.active"
                    :label="page.label" :render-label-as-html="true"
                    :class="{
                        'text-white': page.active,
                    }"
                    :color="page.active ? 'contrast' : 'whiteDark'" small :as="page.url ? 'Link' : 'span'"
                    :href="page.url" preserve-state :only="['customers']" />
            </BaseButtons>
            <small>Page {{ customers . current_page }} of {{ customers . total }}</small>
        </BaseLevel>
    </div>
</template>
