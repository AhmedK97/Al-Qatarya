<script setup>
    import {
        useForm,
    } from '@inertiajs/vue3'

    import {
        defineProps,
        ref,
        defineEmits
    } from 'vue'

    import {
        mdiPlus,
    } from '@mdi/js'

    import BaseButton from "@/Components/Admin/BaseButton.vue";
    import Swal from 'sweetalert2'
    import eventBus from "@/Composables/eventBus.js";

    const props = defineProps({
        project: {
            type: Object,
            default: () => {},
        },
    })

    const form = useForm({
        files: null,
        project: props.project,
    })

    const file = ref(null);

    const emit = defineEmits(['uploading'])

    function submit() {
        if (form.files.length > 0) {
            for (let i = 0; i < form.files.length; i++) {
                if (form.files[i].size > 50000000) {
                    Swal.fire({
                        title: 'Error!',
                        text: 'يوجد ملف بحجم اكبير من 50 ميجا',
                        icon: 'error',
                        confirmButtonText: 'OK',
                    })
                    return;
                }
            }
        }
        emit('uploading', true);
        form.post(route('uploadMedia.projects', props.project?.id), {
            preserveScroll: true,
            onSuccess: () => {
                eventBus.$emit("closeModal", "project::create");
                Swal.fire({
                    title: 'عملية ناجحة',
                    text: 'تم اضافة الملفات بنجاح',
                    icon: 'success',
                    confirmButtonText: 'OK',
                }).then(() => {
                    emit('uploading', false);
                    file.value.value = null;
                })
            },
            onError: () => {
                emit('uploading', false);
                file.value.value = null;
                Swal.fire({
                    title: 'Error!',
                    text: 'يوجد ملف بحجم اكبير من 50 ميجا',
                    icon: 'error',
                    confirmButtonText: 'OK',
                })
            }
        })
    }

    // deleteMedia
    function deleteMedia(id) {
        Swal.fire({
            title: 'هل انت متاكد ؟',
            text: 'لن تتمكن من التراجع عن هذا الاجراء!',
            icon: 'error',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'نعم، احذفه!',
            cancelButtonText: 'الغاء',
        }).then((result) => {
            if (result.isConfirmed) {
                form.delete(route('deleteMedia.projects', id), {
                    preserveScroll: true,
                    onSuccess: () => {
                        Swal.fire({
                            title: 'تم الحذف!',
                            text: `تم حذف الملف`,
                            icon: 'success',
                            showConfirmButton: true,
                            timer: 2000,
                        });
                    },
                });
            }
        }).finally(() => {
            eventBus.$emit("closeModal", "project::create");
        });
    }
</script>

<template>

<div class="container max-w-3xl mx-auto">
    <div class="flex flex-wrap">
        <div class="w-2/4 p-4" v-for="media in project?.media">
            <img v-if="media?.type.includes('image')" :src="media.url" alt="media" class="w-64 h-56 rounded-lg shadow-lg " />
            <video v-else :src="media.url" controls class="w-64 h-56 rounded shadow-lg"></video>

            <button @click="deleteMedia(media.id)" class="p-2 mt-2 text-white bg-red-500 rounded">حذف</button>
        </div>
    </div>
</div>


    <progress class="w-full" v-if="form.progress" :value="form.progress.percentage" max="100">
        Progress : {{ form . progress . percentage }}%
    </progress>

    <form @submit.prevent="submit">
        <input ref="file" type="file" multiple @input="form.files = $event.target.files" :disabled="form.progress"
            accept=".jpg, .jpeg, .png, .mkv, .mp4" />

        <BaseButton :disabled="form.progress" color="info" :icon="mdiPlus" label="اضافة" small type="submit">
            Submit</BaseButton>
        {{ form . errors['files'] }}

    </form>
</template>
