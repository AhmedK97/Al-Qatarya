<template>
    <div class="flex flex-wrap">
        <div class="container w-full px-4 mx-auto max-w-7xl">
            <ul
                class="flex flex-row flex-wrap pt-3 pb-4 mb-0 space-x-2 list-none rtl:space-x-reverse"
            >
                <li class="flex-auto text-center">
                    <a
                        class="block p-5 text-xs font-bold leading-normal uppercase rounded shadow-lg md:text-lg"
                        v-on:click="toggleTabs(1)"
                        v-bind:class="{
                            'text-rose-900 bg-white': openTab !== 1,
                            'text-secondary-700 bg-rose-900': openTab === 1,
                        }"
                    >
                        {{ $t("vision") }}
                    </a>
                </li>
                <li class="flex-auto text-center">
                    <a
                        class="block p-5 text-xs font-bold leading-normal uppercase rounded shadow-lg md:text-lg"
                        v-on:click="toggleTabs(2)"
                        v-bind:class="{
                            'text-rose-900 bg-white': openTab !== 2,
                            'text-secondary-700 bg-rose-900': openTab === 2,
                        }"
                    >
                        {{ $t("mission") }}
                    </a>
                </li>
            </ul>
            <div
                class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg"
            >
                <div class="flex-auto px-4 py-5">
                    <div class="tab-content tab-space">
                        <div
                            v-bind:class="{
                                hidden: openTab !== 1,
                                block: openTab === 1,
                            }"
                        >
                            <p class="font-normal md:text-xl">
                                {{ $t("vision-desc") }}
                            </p>
                        </div>
                        <div
                            v-bind:class="{
                                hidden: openTab !== 2,
                                block: openTab === 2,
                            }"
                        >
                            <p class="font-normal md:text-xl">
                                {{ $t("mission-desc") }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "pink-tabs",
    data() {
        return {
            openTab: 1,
        };
    },
    methods: {
        toggleTabs: function (tabNumber) {
            this.openTab = tabNumber;
        },
    },
};
</script>
