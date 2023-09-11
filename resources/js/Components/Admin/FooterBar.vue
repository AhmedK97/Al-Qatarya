<script setup>
import { containerMaxW } from "@/Admin/config";
import BaseLevel from "@/Components/Admin/BaseLevel.vue";
import JustboilLogo from "@/Components/Admin/JustboilLogo.vue";

const year = new Date().getFullYear();
</script>

<template>
    <footer class="px-6 py-2" :class="containerMaxW">
        <BaseLevel>
            <div class="text-center md:text-left">
                <b
                    >&copy;{{ year }},
                    <a href="https://justboil.me/" target="_blank"
                        >JustBoil.me</a
                    >.</b
                >
                <slot />
            </div>
            <div class="md:py-2">
                <a href="https://justboil.me">
                    <JustboilLogo class="w-auto h-8 md:h-6" />
                </a>
            </div>
        </BaseLevel>
    </footer>
</template>
