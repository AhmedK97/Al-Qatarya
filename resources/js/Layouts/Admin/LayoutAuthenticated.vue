<script setup>
import { mdiForwardburger, mdiBackburger, mdiMenu } from "@mdi/js";
import { ref } from "vue";
import menuAside from "@/Admin/menuAside";
import menuNavBar from "@/Admin/menuNavBar";
import { useStyleStore } from "@/Admin/Stores/style";
import BaseIcon from "@/Components/Admin/BaseIcon.vue";
import FormControl from "@/Components/Admin/FormControl.vue";
import NavBar from "@/Components/Admin/NavBar.vue";
import NavBarItemPlain from "@/Components/Admin/NavBarItemPlain.vue";
import AsideMenu from "@/Components/Admin/AsideMenu.vue";
import FooterBar from "@/Components/Admin/FooterBar.vue";
import { router } from "@inertiajs/vue3";

const layoutAsidePadding = "xl:pl-60";

const styleStore = useStyleStore();

const isAsideMobileExpanded = ref(false);
const isAsideLgActive = ref(false);

router.on("navigate", () => {
    isAsideMobileExpanded.value = false;
    isAsideLgActive.value = false;
});

const menuClick = (event, item) => {
    if (item.isToggleLightDark) {
        styleStore.setDarkMode();
    }

    if (item.isLogout) {
        router.post(route("logout"));
    }
};
</script>

<template class="p-8">
    <div
        style="direction: rtl;"
        :class="{
            dark: styleStore.darkMode,
            'overflow-hidden lg:overflow-visible': isAsideMobileExpanded,
        }"
    >
        <div
            :class="[
                layoutAsidePadding,
                { 'ml-60 lg:ml-0': isAsideMobileExpanded },
            ]"
            class="w-screen min-h-screen pt-14 transition-position lg:w-auto bg-gray-50 dark:bg-slate-800 dark:text-slate-100"
        >
            <NavBar
                :menu="menuNavBar"
                :class="[
                    layoutAsidePadding,
                    { 'ml-60 lg:ml-0': isAsideMobileExpanded },
                ]"
                @menu-click="menuClick"
            >
                <NavBarItemPlain
                    display="flex lg:hidden"
                    @click.prevent="
                        isAsideMobileExpanded = !isAsideMobileExpanded
                    "
                >
                    <BaseIcon
                        :path="
                            isAsideMobileExpanded
                                ? mdiBackburger
                                : mdiForwardburger
                        "
                        size="24"
                    />
                </NavBarItemPlain>
                <NavBarItemPlain
                    display="hidden lg:flex xl:hidden"
                    @click.prevent="isAsideLgActive = true"
                >
                    <BaseIcon :path="mdiMenu" size="24" />
                </NavBarItemPlain>

            </NavBar>
            <AsideMenu
                :is-aside-mobile-expanded="isAsideMobileExpanded"
                :is-aside-lg-active="isAsideLgActive"
                :menu="menuAside"
                @menu-click="menuClick"
                @aside-lg-close-click="isAsideLgActive = false"
            />
            <slot />

        </div>
    </div>
</template>
