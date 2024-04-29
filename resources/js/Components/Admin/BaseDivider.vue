<script setup>
const props = defineProps({
    navBar: Boolean,
    bold: Boolean,
});
</script>

<template>
    <hr :class="[
        props.navBar ? 'hidden lg:block lg:my-0.5 dark:border-slate-700' : 'my-6 -mx-6 dark:border-slate-800',
        props.bold ? 'border-red-600' : ''
    ]" class="border-t border-gray-100" />
</template>
