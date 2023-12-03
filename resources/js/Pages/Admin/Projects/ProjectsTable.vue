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
        mdiMultimedia
    } from "@mdi/js";
    import CardBoxModal from "@/Components/Admin/CardBoxModal.vue";
    import BaseLevel from "@/Components/Admin/BaseLevel.vue";
    import BaseButtons from "@/Components/Admin/BaseButtons.vue";
    import BaseButton from "@/Components/Admin/BaseButton.vue";
    import PillTag from "@/Components/Admin/PillTag.vue";
    import ProjectsForm from "@/Pages/Admin/Projects/ProjectsForm.vue";
    import CardBoxComponentEmpty from "@/Components/Admin/CardBoxComponentEmpty.vue";
    import ProjectsUploadMediaForm from "@/Pages/Admin/Projects/ProjectsUploadMediaForm.vue";
    import {
        router
    } from "@inertiajs/vue3";
    import Swal from "sweetalert2";

    const {
        projects,
        filters,
        customers,
        employees,
    } = defineProps({
        projects: {
            type: Object,
            default: [],
        },
        services: {
            type: Object,
            default: [],
        },
        filters: {
            type: Object,
            default: {},
        },
        customers: {
            type: Array,
            default: () => {},
        },
        employees: {
            type: Array,
            default: () => {},
        },
    });


    onMounted(() => {
        eventBus.$on("openModal", (modalToOpen) => {
            if (modalToOpen === "project::create") {
                currentlyEditedProject.value = null;
                isFormModalOpen.value = true;
            }
        });

        eventBus.$on("closeModal", (modalToClose) => {
            if (
                modalToClose === "project::create" ||
                modalToClose === "project::update"
            ) {
                isFormModalOpen.value = false;
                isUploadMediaModalOpen.value = false;
            }
        });
    });

    const activeFilters = reactive({
        filteredBy: {
            title: filters?.filteredBy?.title,
            address: filters?.filteredBy?.address,
            employee: filters?.filteredBy?.employee,
            customer: filters?.filteredBy?.customer,
            company: filters?.filteredBy?.company,
            status: filters?.filteredBy?.status,
        },
    });

    watch(activeFilters, (filledFilters) => {
        router.get(route("index.projects"), filledFilters, {
            preserveState: true,
            replace: true,
        });
    });

    const currentlyEditedProject = ref(null);

    const currentlyUploadMediaProject = ref(null);

    const formModalTitle = computed(() => {
        return currentlyEditedProject.value?.id ?
            `Edit ${currentlyEditedProject.value?.title} Project` :
            "Add New Project";
    });

    const formUploadMediaModalTitle = computed(() => {
        return currentlyUploadMediaProject.value?.id ?
            `رفع فديوهات وصور ${currentlyUploadMediaProject.value?.title}
            ` : "رفع فديوهات وصور";
    });

    const isFormModalOpen = ref(false && currentlyEditedProject.value);

    const isUploadMediaModalOpen = ref(false && currentlyUploadMediaProject.value);

    const editProject = (project) => {
        currentlyEditedProject.value = project;
        isFormModalOpen.value = true;
    };

    const uploadMedia = (project) => {
        currentlyUploadMediaProject.value = project;
        isUploadMediaModalOpen.value = true;
    };

    const deleteProject = (project) => {
        Swal.fire({
            title: "هل انت متاكد ؟",
            text: `لن تتمكن من التراجع عن هذا - ${project.title}!`,
            icon: "error",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "نعم، احذفه!",
            cancelButtonText: "الغاء",
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(route("delete.projects", project.id), {
                    preserveState: true,
                    replace: true,
                    onSuccess: () => {
                        Swal.fire({
                            title: "Deleted!",
                            text: `${project.title} has been deleted.`,
                            icon: "success",
                            showConfirmButton: true,
                            timer: 2000,
                        });
                    },
                });
            }
        });
    };

    // viewProject
    const viewProject = (project) => {
        const url = route("show.projects", project.slug);
        window.open(url, '_blank');
    };

    const upload = ref(false);

    const uploading = (value) => {
        upload.value = value;
    };
</script>

<template>
    <CardBoxModal cardWidthClass="w-[80%] 2xl:w-4/12" scrollable :hasCancel="true" v-model="isFormModalOpen"
        :title="formModalTitle">
        <ProjectsForm :employees="employees" :customers="customers" :project="currentlyEditedProject"
            :services="services" />
    </CardBoxModal>

    <CardBoxModal cardWidthClass="w-[80%] 2xl:w-4/12" scrollable :hasCancel="true" v-model="isUploadMediaModalOpen"
        :noExit="upload" :title="formUploadMediaModalTitle">
        <ProjectsUploadMediaForm :project="currentlyUploadMediaProject" @uploading="uploading" />
    </CardBoxModal>

    <table>
        <thead>
            <tr>
                <th>#</th>
                <th>اسم المشروع</th>
                <th>العميل</th>
                <th>الموظف</th>
                <th>الخدمات</th>
                <th>المساحه</th>
                <th>الحالة</th>
                <th>تاريخ البدء</th>
                <th>العنوان</th>
                <th>ملاحظات</th>
                <th>تاريخ الاضافة</th>
                <th>اجراء</th>
            </tr>
        </thead>
        <tbody>
            <!-- Filters -->
            <tr key="filters">
                <td></td>
                <td data-label="Filter Name">
                    <input placeholder="Filter by name" v-model="activeFilters.filteredBy.title"
                        class="w-full h-8 px-2 py-1 border rounded border-primary-100" />
                </td>


                <td data-label="Filter Customer">
                    <input placeholder="Filter by Customer" v-model="activeFilters.filteredBy.customer"
                        class="w-full h-8 px-2 py-1 border rounded border-primary-100" />
                </td>

                <td data-label="Filter Employee">
                    <input placeholder="Filter by Employee" v-model="activeFilters.filteredBy.employee"
                        class="w-full h-8 px-2 py-1 border rounded border-primary-100" />
                </td>
                <td></td>

                <td></td>
                <td data-label="Filter status">
                    <select v-model="activeFilters.filteredBy.status"
                        class="w-full h-8 px-2 py-1 border rounded border-primary-100">
                        <option :value="null">فلترة</option>
                        <option value="pending">قيد الانتظار</option>
                        <option value="in_progress">جارى العمل عليها</option>
                        <option value="finished">منتهي</option>
                        <option value="canceled">ملغى</option>
                    </select>
                </td>
                <td data-label="Filter Address">
                    <input placeholder="Filter by Address" v-model="activeFilters.filteredBy.address"
                        class="w-full h-8 px-2 py-1 border rounded border-primary-100" />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>

            </tr>
            <tr v-for="project in projects.data" :key="project.id">
                <td data-label="ID">{{ project . id }}</td>
                <td data-label="Name">{{ project . title }}</td>

                <td data-label="Phone">{{ project . customer_name }}</td>
                <td data-label="Status">{{ project . employee_name }}</td>
                <td data-label="Services">
                    <span v-if="project.services_name.length > 0">
                        <span v-for="service_name in project.services_name" :key="service_name">
                            {{ service_name }}
                        </span>
                    </span>
                    <span v-else>
                        <span class="text-red-500">No Services</span>
                    </span>
                </td>
                <td data-label="Address">{{ project . space_area }}</td>
                <td data-label="status">
                    <PillTag v-if="project.status == 'pending'" label="قيد الانتظار"
                        class="inline-flex px-2 text-xs font-semibold leading-5 text-center text-yellow-800 bg-yellow-100 rounded-full" />

                    <PillTag v-else-if="project.status == 'in_progress'" label="جارى العمل عليها"
                        class="inline-flex px-2 text-xs font-semibold leading-5 text-center text-blue-800 bg-blue-100 rounded-full" />

                    <PillTag v-else-if="project.status == 'finished'" label="منتهي"
                        class="inline-flex px-2 text-xs font-semibold leading-5 text-center text-green-800 bg-green-100 rounded-full" />

                    <PillTag v-else-if="project.status == 'canceled'" label="ملغى"
                        class="inline-flex px-2 text-xs font-semibold leading-5 text-center text-red-800 bg-red-100 rounded-full" />

                </td>
                <td data-label="project_date">{{ project . project_date }}</td>
                <td data-label="About">{{ project . address }}</td>
                <td data-label="notes">
                    <span v-if="project.notes.length > 50">
                        {{ project . notes . substring(0, 50) }}...
                    </span>
                    <span v-else>
                        {{ project . notes }}
                    </span>
                </td>
                <td data-label="Created At">{{ project . created_at }}</td>
                <td data-label="Action" class="before:hidden lg:w-1 whitespace-nowrap">
                    <BaseButtons type="justify-start lg:justify-end" no-wrap>
                        <BaseButton color="info" :icon="mdiSquareEditOutline" small
                            @click = "editProject(project)" />
                        <BaseButton color="danger" :icon="mdiTrashCan" small @click="deleteProject(project)" />
                        <BaseButton color="success" :icon="mdiMultimedia" small @click="uploadMedia(project)" />
                        <BaseButton color="primary" :icon="mdiEyeOutline" small @click="viewProject(project)" />
                    </BaseButtons>
                </td>
            </tr>
        </tbody>
    </table>

    <div v-if="projects?.data?.length" class="p-3 mt-5 border-t border-gray-100 pt-7 lg:px-6 dark:border-slate-800">
        <BaseLevel>
            <BaseButtons>
                <BaseButton v-for="(page, index) in projects.links" :key="index" :active="page.active"
                    :label="page.label" :render-label-as-html="true"
                    :class="{
                        'text-white': page.active,
                    }"
                    :color="page.active ? 'contrast' : 'whiteDark'" small :as="page.url ? 'Link' : 'span'"
                    :href="page.url" preserve-state :only="['projects']" />
            </BaseButtons>
            <small>Page {{ projects . current_page }} of {{ projects . total }}</small>
        </BaseLevel>
    </div>
</template>
