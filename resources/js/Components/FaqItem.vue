<script setup>
import { defineProps } from "vue";
import { ref } from "vue";

const props = defineProps({
    faq: Object,
});

const opened = ref(false);
const open = () => {
    opened.value = !opened.value;
};
</script>

<template>
    <div class="flex items-center justify-center mt-10">
        <div class="container max-w-4xl px-4 mx-auto md:px-0">
            <div
                @click.prevent="open"
                v-if="!opened"
                class="flex items-center h-16 px-8 space-x-2 border rounded-lg shadow-md cursor-pointer lg:h-16 rtl:space-x-reverse"
            >
                <img
                    class="w-4 h-4 mx-2"
                    loading="lazy"
                    src="/storage/images/down-arrow-faq.svg"
                    alt="arrow-down"
                />
                <p
                    class="text-base lg:text-lg md:text-base text-secondarydark-600"
                >
                    {{ faq.question }}
                </p>
            </div>

            <div v-if="opened" @click.prevent="open">
                <div
                    class="flex cursor-pointer items-center lg:h-16 h-[3.8rem] md:h-20 border-t border-rose-900 border-r border-l rounded-t-lg bg-rose-900 px-5 lg:px-8 space-x-3 rtl:space-x-reverse"
                >
                    <img
                        class="w-4 h-4 mx-2"
                        loading="lazy"
                        src="/storage/images/down-arrow-faq-white.svg"
                        alt="arrow-down"
                    />
                    <p class="text-base text-gray-50 lg:text-lg md:text-base">
                        {{ faq.question }}
                    </p>
                </div>
            </div>
            <div
                v-if="opened"
                class="px-5 border-b border-l border-r rounded-b-lg border-rose-900 py-7 md:px-8 md:py-8"
            >
                <p class="text-sm font-medium lg:text-base">
                    {{ faq.answer }}
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.faq-enter-active,
.faq-leave-active {
    transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
}

.faq-enter,
.faq-leave-to {
    max-height: 0;
    opacity: 0;
    overflow: hidden;
}
</style>
