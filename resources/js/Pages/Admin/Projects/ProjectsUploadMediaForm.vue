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

    //

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
                    title: 'Success!',
                    text: 'File uploaded successfully!',
                    icon: 'success',
                    confirmButtonText: 'OK',
                }).then(() => {
                    emit('uploading', false);
                    file.value.value = null;

                    // close modal
                    // eventBus.$emit('closeModal', 'project::uploadMedia');
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
</script>

<template>
    <progress class="w-full" v-if="form.progress" :value="form.progress.percentage" max="100">
        Progress : {{ form . progress . percentage }}%
    </progress>
    <form @submit.prevent="submit">
        <input ref="file" type="file" multiple @input="form.files = $event.target.files"
            :disabled="form.progress" />
        <BaseButton :disabled="form.progress" color="info" :icon="mdiPlus" label="Add" small type="submit">
            Submit</BaseButton>
            {{ form.errors['files']}}

        <!--
        <div v-if="form.project">
            <img v-for="file in form.project.media_files" :src="file.path">
        </div> -->

    </form>
</template>
