<script setup>
import { mdiLogout, mdiClose } from "@mdi/js";
import { computed } from "vue";
import { useStyleStore } from "@/Admin/Stores/style";
import AsideMenuList from "@/Components/Admin/AsideMenuList.vue";
import AsideMenuItem from "@/Components/Admin/AsideMenuItem.vue";
import BaseIcon from "@/Components/Admin/BaseIcon.vue";

defineProps({
    menu: {
        type: Array,
        required: true,
    },
});

const emit = defineEmits(["menu-click", "aside-lg-close-click"]);

const styleStore = useStyleStore();

const logoutItem = computed(() => ({
    label: "Logout",
    icon: mdiLogout,
    color: "info",
    isLogout: true,
}));

const menuClick = (event, item) => {
    emit("menu-click", event, item);
};

const asideLgCloseClick = (event) => {
    emit("aside-lg-close-click", event);
};
</script>

<template>
    <aside
        style="direction: ltr;"
        id="aside"
        class="fixed top-0 z-40 flex h-screen overflow-hidden lg:py-2 lg:pl-2 w-60 transition-position"
    >
        <div
            :class="styleStore.asideStyle"
            class="flex flex-col flex-1 overflow-hidden lg:rounded-2xl dark:bg-slate-900"
        >
            <div
                :class="styleStore.asideBrandStyle"
                class="flex flex-row items-center justify-between h-14 dark:bg-slate-900"
            >
                <div
                    class="flex-1 text-center lg:text-left lg:pl-6 xl:text-center xl:pl-0"
                >
                    <b class="font-black">الشركه القطريه للمقاولات العامه للمباني</b>
                </div>
                <button
                    class="hidden p-3 lg:inline-block xl:hidden"
                    @click.prevent="asideLgCloseClick"
                >
                    <BaseIcon :path="mdiClose" />
                </button>
            </div>
            <div
                :class="
                    styleStore.darkMode
                        ? 'aside-scrollbars-[slate]'
                        : styleStore.asideScrollbarsStyle
                "
                class="flex-1 overflow-x-hidden overflow-y-auto"
            >
                <AsideMenuList :menu="menu" @menu-click="menuClick" />
            </div>

            <ul>
                <AsideMenuItem :item="logoutItem" @menu-click="menuClick" />
            </ul>
        </div>
    </aside>
</template>
