<script setup>
import { computed, ref, watch, reactive, toRef, onMounted } from "vue";
import cloneDeep from "lodash/cloneDeep";
import { router, useForm } from "@inertiajs/vue3";
import FormControl from "@/Components/Admin/FormControl.vue";
import InputError from "@/Components/InputError.vue";
import FormField from "@/Components/Admin/FormField.vue";
import CardBox from "@/Components/Admin/CardBox.vue";
import SelectField from "@/Components/Admin/SelectField.vue";
import BaseButtons from "@/Components/Admin/BaseButtons.vue";
import BaseButton from "@/Components/Admin/BaseButton.vue";
import BaseDivider from "@/Components/Admin/BaseDivider.vue";
import { mdiAccount, mdiMail } from "@mdi/js";
import "vue-select/dist/vue-select.css";
import eventBus from "@/Composables/eventBus.js";
import Swal from "sweetalert2";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-vue";
import FormFilePicker from "@/Components/Admin/FormFilePicker.vue";

const props = defineProps({
    blog: {
        type: Object,
        default: () => {},
    },
});

const editor = ClassicEditor;
const editorData = "<p>Content of the editor.</p>";
const editorConfig = {};

onMounted(() => {
    eventBus.$on("openModal", (modalToOpen) => {
        if (modalToOpen === "blog::create") {
            resetForm();
        }
    });
});

const isUpdate = computed(() => {
    if (!props.blog) {
        return false;
    }

    return !!props.blog.id;
});

const blog = reactive(props.blog || {});

const form = useForm({
    title: blog.title,
    description: blog.description,
    files: blog.files,
    language: blog.language,
    status: blog.status,
});

const resetForm = () => {
    // form reset
    form.reset();
    // remove errors
    Object.keys(form.errors).forEach((key) => {
        delete form.errors[key];
    });
};

const statues = [
    {
        id: "published",
        name: "منشورة",
    },
    {
        id: "draft",
        name: "مسودة",
    },
];

const languagesEnum = [
    {
        id: "ar",
        name: "العربية",
    },
    {
        id: "en",
        name: "الانجليزية",
    },
];


watch(
    () => cloneDeep(props),
    (newProps) => {
        if (!newProps.blog) {
            return;
        }
        resetForm();
        Object.assign(blog, newProps.blog);
        form.title = newProps.blog.title;
        form.description = newProps.blog.description;
        form.files = newProps.blog.files;
        form.language = newProps.blog.language;
        form.status = newProps.blog.status;

    }
);

const submit = () => {
    const sharedFormOptions = {
        preserveState: true,
        preserveScroll: true,
        onError: (errors) => {
            // remove errors
            Object.keys(form.errors).forEach((key) => {
                delete form.errors[key];
            });

            Object.assign(form.errors, errors);
        },
    };

    if (isUpdate.value) {
        router.put(
            route("update.blogs", blog.id),
            form,
            Object.assign(sharedFormOptions, {
                onSuccess: () => {
                    eventBus.$emit("closeModal", "blog::update");
                    Swal.fire({
                        icon: "success",
                        title: "تم بنجاح",
                        text: "تم تحديث المدونه بنجاح",
                        timer: 3000,
                        timerProgressBar: true,
                    });
                },
            })
        );

        return;
    }

    router.post(
        route("store.blogs"),
        form,
        Object.assign(sharedFormOptions, {
            onSuccess: () => {
                resetForm();
                eventBus.$emit("closeModal", "blog::create");
                Swal.fire({
                    icon: "success",
                    title: "تم بنجاح",
                    text: "تم انشاء المدونه بنجاح",
                    timer: 3000,
                    timerProgressBar: true,
                });
            },
        })
    );
};
</script>
<template>
    <CardBox form @submit.prevent="submit">
        <FormField label="العنوان">
            <FormControl :errorMessage="form.errors.title" v-model="form.title" />
        </FormField>

        <BaseDivider />

        <FormField label="الوصف">
            <div id="app">
                <ckeditor
                    :editor="editor"
                    v-model="form.description"
                    :config="editorConfig"
                ></ckeditor>
            </div>
        </FormField>

        <!-- uploade image -->
        <FormField label="الصورة">
            <FormFilePicker
                :errorMessage="form.errors.files"
                accept="image/*"
                class="mt-5 text-center"
                label="اختر صورة"
                v-model="form.files"
            />
        </FormField>

        <BaseDivider />

        <FormField label="اللغه">
            <select-field
                :errorMessage="form.errors.language"
                class="flex w-full py-2 border rounded-md border-fieldgray rtl:text-right placeholder:text-black"
                v-model="form.language"
                :items="languagesEnum"
            />
        </FormField>

        <BaseDivider />

        <FormField label="الحاله">
            <select-field
                :errorMessage="form.errors.status"
                class="flex w-full py-2 border rounded-md border-fieldgray rtl:text-right placeholder:text-black"
                v-model="form.status"
                :items="statues"
            />
        </FormField>
        <BaseDivider />

        <template #footer>
            <BaseButtons>
                <BaseButton
                    @click="submit"
                    type="submit"
                    color="info"
                    label="حفظ"
                />
            </BaseButtons>
        </template>
    </CardBox>
</template>
