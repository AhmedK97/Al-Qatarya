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
    import EmployeesForm from "@/Pages/Admin/Employee/EmployeesForm.vue";
    import CardBoxComponentEmpty from "@/Components/Admin/CardBoxComponentEmpty.vue";
    import {
        router
    } from "@inertiajs/vue3";
    import Swal from "sweetalert2";

    const {
        employees,
        filters,
    } = defineProps({
        employees: {
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
            if (modalToOpen === "employee::create") {
                currentlyEditedEmployee.value = null;
                isFormModalOpen.value = true;
            }
        });

        eventBus.$on("closeModal", (modalToClose) => {
            if (
                modalToClose === "employee::create" ||
                modalToClose === "employee::update"
            ) {
                isFormModalOpen.value = false;
            }
        });
    });

    const activeFilters = reactive({
        filteredBy: {
            name: filters?.filteredBy?.name,
            phone: filters?.filteredBy?.phone,
            status: filters?.filteredBy?.status,
        },
    });

    watch(activeFilters, (filledFilters) => {
        router.get(route("index.employees"), filledFilters, {
            preserveState: true,
            replace: true,
        });
    });

    const currentlyEditedEmployee = ref(null);

    const formModalTitle = computed(() => {
        return currentlyEditedEmployee.value?.id ?
            `Edit ${currentlyEditedEmployee.value?.name} Employee` :
            "اضافة موظف جديد";
    });

    // const viewModalTitle = computed(() => {
    //     return currentlyViewedUser.value?.id ?
    //         `View ${currentlyViewedUser.value?.name} Employee` :
    //         "View Employee";
    // });

    // const currentlyViewedUser = ref(null);
    const isViewModalOpen = ref(false && currentlyViewedUser.value);

    const isFormModalOpen = ref(false && currentlyEditedEmployee.value);

    const editEmployee = (employee) => {
        currentlyEditedEmployee.value = employee;
        isFormModalOpen.value = true;
    };

    const deleteEmployee = (employee) => {
        Swal.fire({
            title: "هل انت متاكد ؟",
            text: `لن تتمكن من التراجع عن هذا - ${employee.name}!`,
            icon: "error",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
             confirmButtonText: "نعم، احذفه!",
            cancelButtonText: "الغاء",
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(route("delete.employees", employee.id), {
                    preserveState: true,
                    replace: true,
                    onSuccess: () => {
                        Swal.fire({
                            title: "Deleted!",
                            text: `${employee.name} has been deleted.`,
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
        eventBus.$emit("openModal", "employee::create");
    };
</script>

<template>
    <CardBoxModal cardWidthClass="w-[80%] 2xl:w-4/12" scrollable :hasCancel="true" v-model="isFormModalOpen"
        :title="formModalTitle">
        <EmployeesForm :employee="currentlyEditedEmployee" />
    </CardBoxModal>
    <CardBoxModal cardWidthClass="w-[80%] 2xl:w-4/12" scrollable :hasCancel="true" v-model="isViewModalOpen"
        :title="viewModalTitle">
        <EmployeesForm :employee="currentlyEditedEmployee" />
    </CardBoxModal>

    <table>
        <thead>
            <tr>
                <th>#</th>
                <th>الاسم</th>
                <th>الموبايل</th>
                <th>الحالة</th>
                <th>العنوان</th>
                <th>نبذة</th>
                <th>تاريخ الاضافة</th>
                <th>الإجراءات
                </th>
            </tr>
        </thead>
        <tbody>
            <!-- Filters -->
            <tr key="filters">
                <td></td>
                <td data-label="Filter Name">
                    <input placeholder="الاســم" v-model="activeFilters.filteredBy.name"
                        class="w-full h-8 px-2 py-1 border rounded border-primary-100" />
                </td>

                <td data-label="Filter Phone">
                    <input placeholder="الموبايــل" v-model="activeFilters.filteredBy.phone"
                        class="w-full h-8 px-2 py-1 border rounded border-primary-100" />
                </td>
                <td data-label="الحــالة">
                    <select v-model="activeFilters.filteredBy.status"
                        class="w-full h-8 px-2 py-1 border rounded border-primary-100">
                        <option :value="null">فلترة</option>
                        <option value="Active">نشط</option>
                        <option value="Inactive">غير نشط</option>
                    </select>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>

            <!-- empty state -->

            <tr v-if="employees.data.length === 0">
                <td colspan="12">
                    <CardBoxComponentEmpty title="No Users Found, Click here to add new user"
                        description="You can add new user by clicking on the button below" @click="openformModal" />
                </td>
            </tr>

            <!-- User data -->
            <tr v-for="employee in employees.data" :key="employee.id">
                <td data-label="ID">{{ employee . id }}</td>
                <td data-label="Name">{{ employee . name }}</td>
                <td data-label="Phone">{{ employee . phone }}</td>
                <td data-label="Phone">{{ employee . status }}</td>
                <!-- <td data-label="Status" v-if="employee . status == 'Active'">نشظ</td> -->
                <!-- <td data-label="Status" v-else-if="employee . status == 'Inactive'">غير نشط</td> -->
                <td data-label="Address">{{ employee . address }}</td>
                <td data-label="About">{{ employee . about }}</td>
                <td data-label="Created At">{{ employee . created_at }}</td>
                <td data-label="Action" class="before:hidden lg:w-1 whitespace-nowrap">
                    <BaseButtons type="justify-start lg:justify-end" no-wrap>
                        <BaseButton color="info" :icon="mdiSquareEditOutline" small
                            @click = "editEmployee(employee)" />
                        <BaseButton color="danger" :icon="mdiTrashCan" small @click="deleteEmployee(employee)" />
                    </BaseButtons>
                </td>
            </tr>
        </tbody>
    </table>

    <div v-if="employees?.data?.length" class="p-3 mt-5 border-t border-gray-100 pt-7 lg:px-6 dark:border-slate-800">
        <BaseLevel>
            <BaseButtons>
                <BaseButton v-for="(page, index) in employees.links" :key="index" :active="page.active"
                    :label="page.label" :render-label-as-html="true"
                    :class="{
                        'text-white': page.active,
                    }"
                    :color="page.active ? 'contrast' : 'whiteDark'" small :as="page.url ? 'Link' : 'span'"
                    :href="page.url" preserve-state :only="['employees']" />
            </BaseButtons>
            <small>Page {{ employees . current_page }} of {{ employees . total }}</small>
        </BaseLevel>
    </div>
</template>
