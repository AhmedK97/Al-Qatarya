<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import "vue3-carousel/dist/carousel.css";
import Slider from "@/Pages/Slider.vue";
import BannerSlider from "@/Components/BannerSlider.vue";
import Pagination from "@/Components/Pagination.vue";
import BlogsCards from "@/Components/BlogsCards.vue";
import Services from "@/Components/Services.vue";
// import "@lottiefiles/lottie-player";
import "@ebcom/dotlottie-player";

import { Link } from "@inertiajs/vue3";
import { onMounted } from "vue";

const props = defineProps({
    services: Object,
    blogs: Object,
});

// mounted() {
//     // Find the element by its ID
//     const lottiePlayButton = document.getElementById('lottie-play-button');

//     // Trigger a click event on the element
//     if (lottiePlayButton) {
//         lottiePlayButton.click();
//     }
// },

const lottiePlayButton = onMounted(() => {
    // Find the element by its ID
    const lottiePlayButton = document.getElementById("lottie-play-button");

    // Trigger a click event on the element
    if (lottiePlayButton) {
        lottiePlayButton.click();
    }
});
</script>

<template>
    <AppLayout title="القطرىة">
        <!-- hero section -->
        <BannerSlider />

        <!-- <div
            class="px-4 mx-auto mt-5 text-3xl md:py-28 max-w-7xl sm:px-6 lg:px-8s"
        >
            <section class="flex flex-col md:flex-row">
                <div class="flex flex-col items-center justify-center">
                    <div class="space-y-6 text-center">
                        <div class="space-y-6">
                            <h1 class="font-bold text-amber-800">
                                شركة القطريه للعوازل
                            </h1>
                            <p class="text-2xl leading-relaxed">
                                توفر شركة القطريه مجموعة مدربة و متميزة من
                                الفنيين لتوفير أعلي مستويات بتقنية عالية و بأقل
                                وقت ممكن
                            </p>
                        </div>
                        <div>
                            <a
                                href="#contact-us"
                                class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 shadow-lg shadow-green-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                            >
                                تواصل معنا</a
                            >

                            <Link
                                :href="route('about')"
                                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                            >
                                اقرا المزيد</Link
                            >
                        </div>
                    </div>
                </div>

                <div>
                    <img
                        src="/storage/images/hero-img.webp"
                        alt="image description"
                        width="800"
                        height="600"
                    />
                </div>
            </section>
        </div> -->

        <!-- services  -->
        <Services :services="services" />

        <!-- why  -->
        <section class="mt-40">
            <div class="px-4 mx-auto mt-5 text-3xl max-w-7xl sm:px-6 lg:px-8s">
                <div class="max-w-screen-xl px-4 py-8 mx-auto sm:py-16 lg:px-6">
                    <p
                        class="mb-10 text-4xl font-black text-center text-gray-900"
                    >
                        <span
                            class="text-transparent underline bg-clip-text bg-gradient-to-r to-amber-600 from-black underline-offset-4 decoration-5 decoration-red-700"
                            >لماذا القطريه هي الافضل
                        </span>
                    </p>
                    <div
                        class="grid grid-cols-1 gap-8 mt-8 text-center justify-items-center md:grid-cols-3"
                    >
                        <div>
                            <img
                                class="w-1/4 m-auto rounded-lg"
                                loading="lazy"
                                src="/storage/images/award.png"
                                alt="office content 1"
                            />
                            <string class="text-2xl font-bold"
                                >أمهر الفنيين</string
                            >
                            <p class="mt-5 text-xl font-semibold leading-10">
                                فريق العمل لدى شركة أبيار مدرب علي اعلي مستوي
                                ويتمتع بالخبرة في أداء الأعمال.
                            </p>
                        </div>
                        <div>
                            <img
                                class="w-1/4 m-auto rounded-lg"
                                loading="lazy"
                                src="/storage/images/tools.png"
                                alt="office content 2"
                            />
                            <string class="text-2xl font-bold"
                                >أفضل المعدات</string
                            >
                            <p class="mt-5 text-xl font-semibold leading-10">
                                تستخدم شركة أبيار أفضل المعدات الحديثة على أعلى
                                مستوى في الكويت
                            </p>
                        </div>
                        <div>
                            <img
                                class="w-1/4 m-auto rounded-lg"
                                loading="lazy"
                                src="/storage/images/money.png"
                                alt="office content 1"
                            />
                            <string class="text-2xl font-bold"
                                >أسعار منافسة</string
                            >
                            <p class="mt-5 text-xl font-semibold leading-10">
                                نحن نلتزم دائما بتقديم أفضل خدمة بأرخص سعر وأعلى
                                كفاءة في الكويت
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- contact us -->
        <section class="mt-40" id="contact-us">
            <div class="px-4 mx-auto mt-5 text-3xl max-w-7xl sm:px-6 lg:px-8s">
                <div class="px-4 py-8 mx-auto lg:py-16">
                    <p
                        class="mb-10 text-4xl font-black text-center text-gray-900"
                    >
                        <span
                            class="text-transparent underline bg-clip-text bg-gradient-to-r to-amber-600 from-black underline-offset-4 decoration-5 decoration-red-700"
                        >
                            لا تتردد في التواصل معنا
                        </span>
                    </p>

                    <div class="flex flex-col md:flex-row mt-[-3rem]">
                        <div class="lg:w-1/3 md:w-1/2">
                            <!-- <img class="rounded-lg" src="/storage/images/contact.jpg" alt=""> -->
                            <dotlottie-player
                                src="/storage/images/lottiefiles/contact.lottie"
                                :class="'max-w-[20rem] m-auto'"
                                autoplay="true"
                                loop
                            >
                            </dotlottie-player>
                        </div>
                        <div
                            class="flex flex-col justify-center mb-10 space-y-4 text-center md:mt-0 md:text-start"
                        >
                            <p class="text-lg font-semibold md:mx-10">
                                تواصل مع مهندسي
                            </p>

                            <p class="text-2xl font-bold md:mx-10">
                                شركة القطريه للعوازل
                            </p>

                            <p class="text-lg font-semibold md:mx-10">
                                لاية استفسارات او للاطلاع على خدماتنا او لطلب
                                عرض السعر . ونحن نتطلع دائما لخدمتكم
                            </p>
                        </div>
                    </div>

                    <div
                        class="flex flex-col-reverse space-y-8 md:flex-row mt-[-2rem]"
                    >
                        <div
                            class="py-4 mt-20 text-2xl leading-10 border-8 md:w-1/2 md:mt-20 md:border-0 md:py-0"
                        >
                            <!-- <img src="storage/images/contact.svg" alt="contact us" width="800" height="600"> -->
                            <div>
                                <div class="space-y-4 text-center">
                                    <p
                                        class="flex items-center justify-center font-semibold"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="green"
                                            class="mx-2 w-7"
                                        >
                                            <path
                                                d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                                            ></path>
                                        </svg>
                                        <span class="font-semibold"
                                            >الهاتف</span
                                        >
                                    </p>
                                    <span>123456789</span>

                                    <p
                                        class="flex items-center justify-center font-semibold"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="blue"
                                            class="mx-2 w-7"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                        <span class="font-semibold"
                                            >العنوان</span
                                        >
                                    </p>
                                    <span>Fake address, 9999 City</span>
                                    <!-- <iframe class="m-auto" defer
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus"
                                        style="border:0;" allowfullscreen="" loading="lazy"
                                        referrerpolicy="no-referrer-when-downgrade"></iframe> -->
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:m-10">
                            <form action="#" class="space-y-8">
                                <div>
                                    <label
                                        for="name"
                                        class="block mb-2 text-lg font-medium text-gray-900"
                                        >الاسم</label
                                    >
                                    <input
                                        type="text"
                                        id="name"
                                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                                        placeholder="name@flowbite.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        for="phone"
                                        class="block mb-2 text-lg font-medium text-gray-900"
                                        >رقم الهتاف</label
                                    >
                                    <input
                                        type="phone"
                                        id="phone"
                                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                                        placeholder="name@flowbite.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        for="subject"
                                        class="block mb-2 text-lg font-medium text-gray-900"
                                        >Subject</label
                                    >
                                    <input
                                        type="text"
                                        id="subject"
                                        class="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500"
                                        placeholder="Let us know how we can help you"
                                        required
                                    />
                                </div>
                                <div class="sm:col-span-2">
                                    <label
                                        for="message"
                                        class="block mb-2 text-lg font-medium text-gray-900"
                                        >ملاحظات</label
                                    >
                                    <textarea
                                        id="message"
                                        rows="6"
                                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                                        placeholder="Leave a comment..."
                                    ></textarea>
                                </div>
                                <div class="text-center">
                                    <button
                                        type="button"
                                        class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                    >
                                        ارسال
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- blogs -->

        <blogs-cards :blogs="blogs"></blogs-cards>
        <div
            class="container z-20 flex flex-col items-center max-w-6xl mx-auto mb-16 md:px-10"
        >
            <Pagination :links="blogs.links" />
        </div>
    </AppLayout>
</template>
