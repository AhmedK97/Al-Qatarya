<script setup>
    import {
        useForm,
    } from '@inertiajs/vue3'
    import {
        defineProps,nextTick,ref
    } from 'vue'
    import {
        mdiPlus,
    } from '@mdi/js'
    import BaseButton from "@/Components/Admin/BaseButton.vue";
    import Swal from 'sweetalert2'


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

    // const resetForm = () => {
    //     form.reset();

    //     nextTick(() => {
    //         form.files.value = null;
    //     form.reset();

    //     // reset file input value
    //

    //     });

    //     Object.keys(form.errors).forEach((key) => {
    //         delete form.errors[key];
    //     });
    // };

    const emit = defineEmits(['uploading'])

    function submit() {
        emit('uploading', true);
        form.post(route('uploadMedia.projects', props.project?.id), {
            preserveScroll: true,
            onSuccess: () => {
                Swal.fire({
                    title: 'Success!',
                    text: 'File uploaded successfully!',
                    icon: 'success',
                    confirmButtonText: 'OK',
                }).then(() => {
                    console.log(form.files = null);
                    emit('uploading', false);
                    file.value.value = null;
                    // resetForm();
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
        <input ref="file" type="file" @input="form.files = $event.target.files[0]" :disabled="form.progress"
             />
        <BaseButton :disabled="form.progress" color="info" :icon="mdiPlus" label="Add" small type="submit">
            Submit</BaseButton>
    </form>
</template>
