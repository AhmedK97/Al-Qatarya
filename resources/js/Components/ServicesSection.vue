<script setup>
    import {
        ref
    } from "vue";

    import ServicesImages from "@/Components/ServicesImages.vue";
    import Service from "@/Components/Services.vue";

    const props = defineProps({
        services_qatarya: Object,
        services_othman: Object,
    });

    const openTab = ref(1);

    const toggleTabs = (tabNumber) => {
        openTab.value = tabNumber;
    };
</script>

<template>
    <div class="container px-4 mx-auto max-w-7xl">
        <ul class="flex flex-row flex-wrap pt-3 pb-4 mb-0 space-x-2 list-none rtl:space-x-reverse">
            <li class="flex-auto text-center">
                <a class="block p-5 text-xs font-bold leading-normal uppercase rounded shadow-lg md:text-lg"
                    v-on:click="toggleTabs(1)"
                    v-bind:class="{
                                'text-rose-900 bg-white': openTab !== 1,
                                'text-secondary-700 bg-rose-900': openTab === 1,
                            }">
                    {{ $t('insulation') }}
                </a>
            </li>
            <li class="flex-auto text-center">
                <a class="block p-5 text-xs font-bold leading-normal uppercase rounded shadow-lg md:text-lg"
                    v-on:click="toggleTabs(2)"
                    v-bind:class="{
                                'text-rose-900 bg-white': openTab !== 2,
                                'text-secondary-700 bg-rose-900': openTab === 2,
                            }">
                    {{ $t('buildings') }}
                </a>
            </li>
        </ul>

        <ServicesImages class="md:mt-16" :services="openTab === 1 ? services_qatarya : services_othman">
            {{ $t('services.insulation') }}
        </ServicesImages>

        <!--   -->
        <Service class="mt-20 md:mt-40" :services="openTab === 1 ? services_qatarya : services_othman" />

    </div>
</template>
