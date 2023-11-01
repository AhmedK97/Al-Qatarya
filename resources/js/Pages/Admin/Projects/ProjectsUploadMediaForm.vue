<script setup>
    import {
        useForm
    } from '@inertiajs/vue3'

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

    function submit() {
          (route('uploadMedia.projects', props.project?.id))
    }
</script>

<template>
    <progress v-if="form.progress" :value="form.progress.percentage" max="100">
        Progress : {{ form . progress . percentage }}%
    </progress>
    <form @submit.prevent="submit">
        <input type="file" @input="form.files = $event.target.files[0]" />

        <button type="submit">Submit</button>
    </form>
</template>
