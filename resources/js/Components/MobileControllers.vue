<template>
    <div class="flex items-center justify-center sm:hidden">
        <div
            class="fixed z-50 flex items-center justify-between px-4 border rounded-full w-[23rem] bottom-4 bg-rose-900 border-gray-50"
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
            <Link :href="route('show.contact')">
                <div
                    class="flex flex-col items-center justify-center px-3 py-2 space-y-1 hover:bg-rose-800"
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
            </Link>
            <div
                class="flex flex-col items-center justify-center px-3 py-2 space-y-1 hover:bg-rose-800"
            >
                <img
                    src="/storage/images/mobile-controllers-mail.svg"
                    alt="WhatsApp"
                    class="w-6 h-6"
                />
                <p class="text-gray-50">
                    {{ $t("mobile-controllers.mail") }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Link } from "@inertiajs/vue3";
</script>

<style></style>
