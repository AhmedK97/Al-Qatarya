<script setup>
import { computed, ref, watch, reactive, onMounted } from "vue";
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
import BlogsForm from "@/Pages/Admin/Blogs/BlogsForm.vue";
import CardBoxComponentEmpty from "@/Components/Admin/CardBoxComponentEmpty.vue";
import { router } from "@inertiajs/vue3";
import Swal from "sweetalert2";

const { blogs, filters } = defineProps({
    blogs: {
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
        if (modalToOpen === "blog::create") {
            currentlyEditedBlog.value = null;
            isFormModalOpen.value = true;
        }
    });

    eventBus.$on("closeModal", (modalToClose) => {
        if (
            modalToClose === "blog::create" ||
            modalToClose === "blog::update"
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
    router.get(route("index.blogs"), filledFilters, {
        preserveState: true,
        replace: true,
    });
});

const currentlyEditedBlog = ref(null);

const formModalTitle = computed(() => {
    return currentlyEditedBlog.value?.id
        ? `تعديل المدةنه/ ${currentlyEditedBlog.value?.name}`
        : "اضافة مودنه جديد";
});

// const viewModalTitle = computed(() => {
//     return currentlyViewedUser.value?.id ?
//         `View ${currentlyViewedUser.value?.name} Blog` :
//         "View Blog";
// });

// const currentlyViewedUser = ref(null);
const isViewModalOpen = ref(false && currentlyViewedUser.value);

const isFormModalOpen = ref(false && currentlyEditedBlog.value);

const editBlog = (blog) => {
    currentlyEditedBlog.value = blog;
    isFormModalOpen.value = true;
};

const deleteBlog = (blog) => {
    Swal.fire({
        title: "هل انت متاكد ؟",
        text: `لن تتمكن من التراجع عن هذا الاجراء!`,
        icon: "error",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "نعم، احذفه!",
        cancelButtonText: "الغاء",
    }).then((result) => {
        if (result.isConfirmed) {
            router.delete(route("delete.blogs", blog.id), {
                preserveState: true,
                replace: true,
                onSuccess: () => {
                    Swal.fire({
                        title: "تم الحذف!",
                        text: `تم حذف المدونه ${blog.name}`,
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
    eventBus.$emit("openModal", "blog::create");
};
</script>

<template>
    <CardBoxModal
        cardWidthClass="w-[80%] 2xl:w-4/12"
        scrollable
        :hasCancel="true"
        v-model="isFormModalOpen"
        :title="formModalTitle"
    >
        <BlogsForm :blog="currentlyEditedBlog" />
    </CardBoxModal>
    <CardBoxModal
        cardWidthClass="w-[80%] 2xl:w-4/12"
        scrollable
        :hasCancel="true"
        v-model="isViewModalOpen"
        :title="viewModalTitle"
    >
        <BlogsForm :blog="currentlyEditedBlog" />
    </CardBoxModal>

    <table>
        <thead>
            <tr>
                <th>#</th>
                <th>العنوان</th>
                <!-- <th>الوصف</th> -->
                <th>اللغة</th>
                <th>الحالة</th>
                <th>التاريخ</th>
                <th>اجراء</th>

            </tr>
        </thead>
        <tbody>
            <!-- Filters -->
            <!-- <tr key="filters">
                <td></td>
                 <td data-label="Filter Name">
                    <input
                        placeholder="الاســم"
                        v-model="activeFilters.filteredBy.name"
                        class="w-full h-8 px-2 py-1 border rounded border-primary-100"
                    />
                </td>

                <td data-label="Filter Phone">
                    <input
                        placeholder="الموبايــل"
                        v-model="activeFilters.filteredBy.phone"
                        class="w-full h-8 px-2 py-1 border rounded border-primary-100"
                    />
                </td>
                <td data-label="الحــالة">
                    <select
                        v-model="activeFilters.filteredBy.status"
                        class="w-full h-8 px-2 py-1 border rounded border-primary-100"
                    >
                        <option :value="null">فلترة</option>
                        <option value="Active">نشط</option>
                        <option value="Inactive">غير نشط</option>
                    </select>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr> -->

            <!-- empty state -->

            <tr v-if="blogs?.data?.length === 0">
                <td colspan="12">
                    <CardBoxComponentEmpty
                        title="No Users Found, Click here to add new user"
                        description="You can add new user by clicking on the button below"
                        @click="openformModal"
                    />
                </td>
            </tr>
            <!-- User data -->
            <tr v-for="blog in blogs?.data" :key="blog.id">
                <td data-label="ID">{{ blog.id }}</td>
                <td data-label="Name">{{ blog.title }}</td>
                <!-- <td data-label="Description">{{ blog.description }}</td> -->
                <td >
                    <PillTag
                        :label="blog.language == 'ar' ? 'العربية' : 'الانجليزية'"
                        :color="blog.language == 'ar' ? 'success' : 'danger'"
                    />
                </td>
                <td data-label="Status">
                    <PillTag
                        :color="blog.status == 'published' ? 'success' : 'danger'"
                        :label="blog.status"
                    />
                </td>

                <td data-label="Created At">{{ blog.created_at }}</td>
                <td
                    data-label="Action"
                    class="before:hidden lg:w-1 whitespace-nowrap"
                >
                    <BaseButtons type="justify-start lg:justify-end" no-wrap>
                        <BaseButton
                            color="info"
                            :icon="mdiSquareEditOutline"
                            small
                            @click="editBlog(blog)"
                        />
                        <BaseButton
                            color="danger"
                            :icon="mdiTrashCan"
                            small
                            @click="deleteBlog(blog)"
                        />
                    </BaseButtons>
                </td>
            </tr>
        </tbody>
    </table>

    <div
        v-if="blogs?.data?.length"
        class="p-3 mt-5 border-t border-gray-100 pt-7 lg:px-6 dark:border-slate-800"
    >
        <BaseLevel>
            <BaseButtons>
                <BaseButton
                    v-for="(page, index) in blogs.links"
                    :key="index"
                    :active="page.active"
                    :label="page.label"
                    :render-label-as-html="true"
                    :class="{
                        'text-white': page.active,
                    }"
                    :color="page.active ? 'contrast' : 'whiteDark'"
                    small
                    :as="page.url ? 'Link' : 'span'"
                    :href="page.url"
                    preserve-state
                    :only="['blogs']"
                />
            </BaseButtons>
            <!-- <small>Page {{ blogs . current_page }} of {{ blogs . total }}</small> -->
        </BaseLevel>
    </div>
</template>
