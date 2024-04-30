<script setup>
// import { computed } from "vue";

// const props = defineProps({
//     username: {
//         type: String,
//         required: true,
//     },
//     avatar: {
//         type: String,
//         default: null,
//     },
//     api: {
//         type: String,
//         default: "avataaars",
//     },
// });

// const avatar = computed(
//     () =>
//         props.avatar ??
//         `https://avatars.dicebear.com/api/${props.api}/${props.username.replace(
//             /[^a-z0-9]+/i,
//             "-"
//         )}.svg`
// );

// const username = computed(() => props.username);
</script>

<template>
    <div>
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg"
            class="block w-full h-auto max-w-full bg-gray-100 rounded-full dark:bg-slate-800"
        />
        <slot />
    </div>
</template>
