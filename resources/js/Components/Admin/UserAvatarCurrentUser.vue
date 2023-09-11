<script setup>
import { useMainStore } from "@/Admin/Stores/main";
import UserAvatar from "@/Components/Admin/UserAvatar.vue";

const mainStore = useMainStore();
</script>

<template>
    <UserAvatar :username="mainStore.userName" :avatar="mainStore.userAvatar">
        <slot />
    </UserAvatar>
</template>
