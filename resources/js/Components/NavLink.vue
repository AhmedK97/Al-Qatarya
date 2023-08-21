<script setup>
    import {
        computed
    } from 'vue';
    import {
        Link
    } from '@inertiajs/vue3';

    const props = defineProps({
        href: String,
        active: Boolean,
    });

    const classes = computed(() => {
        return props.active ?
            'inline-flex items-center px-1 pt-1 md:leading-8 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out' :
            'inline-flex items-center px-1 pt-1 md:leading-8 md:mx-4 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500  focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out';
    });
</script>

<template>
    <Link :href="href" :class="classes">
    <slot />
    </Link>
</template>
