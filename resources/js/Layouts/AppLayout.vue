<script setup>
import { ref } from "vue";
import { Head, Link, router } from "@inertiajs/vue3";
import ApplicationMark from "@/Components/ApplicationMark.vue";
import Banner from "@/Components/Banner.vue";
import Dropdown from "@/Components/Dropdown.vue";
import DropdownLink from "@/Components/DropdownLink.vue";
import NavLink from "@/Components/NavLink.vue";
import NavBar from "@/Components/NavBar.vue";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink.vue";
import Footer from "@/Components/Footer.vue";
import MobileControllers from "@/Components/MobileControllers.vue";

const props = defineProps({
    title: String,
});

const showDropDown = ref(false);

const dropDownService = () => {
    showDropDown.value = !showDropDown.value;
    console.log(showDropDown.value);
};

const showingNavigationDropdown = ref(false);
const serviceDropdown = ref(false);

const showServices = () => {
    serviceDropdown.value = !serviceDropdown.value;
};

const logout = () => {
    router.post(route("logout"));
};
</script>

<template>
    <div>
        <Head :title="title" />

        <Banner />

        <div class="min-h-screen bg-gray-50">
            <!-- nav bar -->
            <NavBar />
            <!-- Page Heading -->
            <header v-if="$slots.header" class="bg-white shadow">
                <div class="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <slot name="header" />
                </div>
            </header>

            <!-- Page Content -->
            <main>
                <slot />
            </main>

            <!-- footer -->
            <Footer></Footer>
        </div>

        <!-- <MobileControllers /> -->
    </div>
</template>
