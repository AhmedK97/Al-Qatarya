<template>
    <NavBar />
    <section class="bg-gray-50">
        <div
            class="container flex flex-col items-center mx-auto mt-20 space-y-8 md:space-y-0 md:items-start md:space-x-16 md:flex-row max-w-7xl rtl:space-x-reverse"
        >
            <div class="flex flex-col space-y-8">
                <img
                    src="/storage/images/1-3.png"
                    class="object-cover object-center rounded-md w-96 h-60"
                    alt=""
                />
                <div
                    class="flex items-center justify-center p-5 border rounded-md w-96 h-80 border-rose-900"
                >
                    <div class="flex flex-col space-y-14">
                        <div
                            class="flex items-start space-x-4 rtl:space-x-reverse"
                        >
                            <img
                                src="/storage/images/location.svg"
                                class="w-10 mt-1"
                                alt=""
                            />
                            <p
                                class="text-xl font-medium leading-relaxed text-rose-900"
                            >
                                {{ $t("footer.address-text") }}
                            </p>
                        </div>
                        <div class="flex space-x-4 rtl:space-x-reverse">
                            <img
                                src="/storage/images/phone-footer.svg"
                                class="w-8"
                                alt=""
                            />
                            <p
                                class="text-xl font-medium leading-relaxed text-rose-900"
                            >
                                {{ $t("footer.address-text1") }}
                            </p>
                        </div>
                        <div class="flex space-x-4 rtl:space-x-reverse">
                            <img
                                src="/storage/images/mail-footer.svg"
                                class="w-8"
                                alt=""
                            />
                            <p
                                class="text-xl font-medium leading-relaxed text-rose-900"
                            >
                                {{ $t("footer.address-text2") }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col w-full space-y-24">
                <div class="px-4">
                    <SectionTitleShadow>
                        <template #upper-title>
                            {{ $t("contact-us-upper") }}
                        </template>
                        <template #title>
                            {{ $t("contact.us") }}
                        </template>
                    </SectionTitleShadow>
                    <p class="mt-4 text-lg font-medium text-gray-500">
                        {{ $t("contact.us-desc") }}
                    </p>
                    <p
                        class="mt-4 text-base font-medium leading-relaxed text-gray-500 lg:text-lg"
                    >
                        {{ $t("contact.us-paragraph") }}
                    </p>
                </div>
                <div class="px-4">
                    <form action="">
                        <div class="flex w-full space-x-8 rtl:space-x-reverse">
                            <div class="w-full mb-6">
                                <label
                                    for="name"
                                    class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                                >
                                    {{ $t("contact.name") }}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                            <div class="w-full mb-6">
                                <label
                                    for="email"
                                    class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                                >
                                    {{ $t("contact.email") }}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    required
                                />
                            </div>
                        </div>
                        <div class="w-full mb-6">
                            <label
                                for="subject"
                                class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                            >
                                {{ $t("contact.subject") }}
                            </label>
                            <input
                                type="text"
                                id="subject"
                                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                required
                            />
                        </div>
                        <div class="w-full mb-6">
                            <label
                                for="fields"
                                class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                            >
                                {{ $t("contact.fields") }}
                            </label>
                            <select
                                id="fields"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option selected>
                                    {{ $t("contact.choose-fields") }}
                                </option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </div>
                        <div class="w-full mb-6">
                            <label
                                for="message"
                                class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                            >
                                {{ $t("contact.message") }}
                            </label>
                            <textarea
                                id="message"
                                rows="4"
                                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            ></textarea>
                        </div>
                        <div class="w-full mb-6">
                            <label
                                class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                                for="file_input"
                            >
                                {{ $t("contact.file") }}
                            </label>
                            <input
                                class="block w-full px-4 text-sm text-center text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                aria-describedby="file_input_help"
                                id="file_input"
                                type="file"
                            />
                        </div>
                        <button
                            type="submit"
                            class="text-white bg-rose-900 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm w-full sm:w-auto px-11 py-2.5 text-center dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800"
                        >
                            {{ $t("contact.send") }}
                        </button>
                    </form>
                </div>
            </div>
        </div>
        <div
            id="map-container"
            class="container mx-auto my-10 border h-72 max-w-7xl"
        >
            <iframe
                class="w-full h-full"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                :src="mapSrc"
            ></iframe>
        </div>
    </section>
    <Footer />
</template>

<script setup>
import NavBar from "@/Components/NavBar.vue";
import Footer from "@/Components/Footer.vue";
import SectionTitleShadow from "@/Components/SectionTitleShadow.vue";
import { computed } from "@vue/reactivity";

const mapSrc = computed(() => {
    return `https://maps.google.com/maps?q=1600%20Amphitheatre%20Parkway,%20Mountain%20View,%20CA%2094043,%20USA&output=embed`;
});
</script>

<style></style>
