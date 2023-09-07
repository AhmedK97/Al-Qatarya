<template>
    <div class="flex items-center justify-center sm:hidden">
        <div
            class="fixed z-50 flex items-center justify-between px-4 border rounded-full bottom-4 bg-rose-900 border-gray-50"
        >
            <Link :href="route('home')">
                <div
                    class="flex flex-col items-center justify-center px-3 py-2 space-y-1 hover:bg-rose-800"
                >
                    <img
                        src="/storage/images/mobile-controllers-house.svg"
                        alt="WhatsApp"
                        class="w-6 h-6"
                    />
                    <p class="text-gray-50">
                        {{ $t("mobile-controllers.home") }}
                    </p>
                </div>
            </Link>
            <a href="https://wa.me/123456789" target="_blank">
                <div
                    class="flex flex-col items-center justify-center px-3 py-2 space-y-1 hover:bg-rose-800"
                >
                    <img
                        src="/storage/images/mobile-controllers-whatsapp.svg"
                        alt="WhatsApp"
                        class="w-6 h-6"
                    />
                    <p class="text-gray-50">
                        {{ $t("mobile-controllers.whatsapp") }}
                    </p>
                </div>
            </a>
            <div
                class="relative flex flex-col items-center justify-center px-3 py-2 space-y-1 hover:bg-rose-800"
                @click="showingNavigationDropdown = !showingNavigationDropdown"
            >
                <img
                    src="/storage/images/mobile-controllers-phone.svg"
                    alt="WhatsApp"
                    class="w-6 h-6"
                />
                <p class="text-gray-50">
                    {{ $t("mobile-controllers.contact") }}
                </p>
            </div>
            <div
                class="absolute left-28 bottom-20"
                v-show="showingNavigationDropdown"
            >
                <div
                    class="p-4 space-y-4 border-2 rounded-lg border-rose-900 bg-gray-50"
                >
                    <div
                        class="flex items-center space-x-2 rtl:space-x-reverse"
                    >
                        <a href="tel:+123456789" class="">
                            <img
                                src="/storage/images/phone-white.svg"
                                alt="Call Us"
                                class="w-12 h-12 p-2 bg-blue-500 rounded-full hover:bg-blue-600"
                            />
                        </a>
                        <p>{{ $t("call.now") }}</p>
                    </div>
                    <div
                        class="flex items-center space-x-2 rtl:space-x-reverse"
                    >
                        <a href="https://wa.me/123456789" target="_blank">
                            <img
                                src="/storage/images/whatsapp-white.svg"
                                alt="WhatsApp"
                                class="w-12 h-12 p-2 bg-green-500 rounded-full hover:bg-green-600"
                            />
                        </a>
                        <p>{{ $t("send-whatsapp-message") }}</p>
                    </div>
                </div>
            </div>
            <Link :href="route('services')">
                <div
                    class="flex flex-col items-center justify-center px-3 py-2 space-y-1 hover:bg-rose-800"
                >
                    <img
                        src="/storage/images/mobile-controllers-services.svg"
                        alt="WhatsApp"
                        class="w-6 h-6"
                    />
                    <p class="text-gray-50">
                        {{ $t("mobile-controllers.services") }}
                    </p>
                </div>
            </Link>
        </div>
    </div>
</template>

<script setup>
import { Link } from "@inertiajs/vue3";
import { ref } from "vue";

const showingNavigationDropdown = ref(false);
</script>

<style></style>
