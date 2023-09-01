<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { trans } from "laravel-vue-i18n";
import SectionTitleShadow from "@/Components/SectionTitleShadow.vue";
import { Link } from "@inertiajs/vue3";
import Tabs from "@/Components/Tabs.vue";
import OurTeam from "@/Components/OurTeam.vue";
import ProgressBar from "@/Components/ProgressBar.vue";
import SericesAll from "@/Components/SericesAll.vue";

defineProps({
    services: Object,
});
</script>

<template>
    <AppLayout :title="trans('home.about')">
        <section class="mt-10 mb-20 md:mt-36">
            <div
                class="container flex flex-col justify-center p-2 mx-auto space-y-8 md:space-x-10 md:flex-row ltr:space-x-reverse max-w-7xl"
            >
                <div class="relative order-1 md:order-2">
                    <img
                        src="/storage/images/dots.png"
                        class="hidden xl:block md:w-full md:h-[500px] absolute top-0 -translate-y-14 right-0 -translate-x-14"
                        alt=""
                    />
                    <img
                        src="/storage/images/banner1-1.png"
                        class="md:w-full md:h-[600px] rounded-lg relative z-10"
                        alt=""
                    />
                </div>
                <div class="order-2 px-4 md:order-1">
                    <SectionTitleShadow>
                        <template #upper-title>
                            {{ $t("who.we.are-upper") }}
                        </template>
                        <template #title>
                            {{ $t("who.we.are") }}
                        </template>
                    </SectionTitleShadow>

                    <p
                        class="mt-10 text-base font-medium leading-relaxed text-gray-500 lg:text-lg"
                    >
                        مؤسسة ذات خبرة كبيرة فى مجال العزل الحراري والعزل المائي
                        بالمملكة العربية السعودية بما تمتلكة من
                    </p>
                    <p
                        class="mt-2 text-base font-medium leading-relaxed text-gray-500 lg:text-lg"
                    >
                        فريق فني مدرب وقوام اداري منظم ومعدات وماكينات حديثة .
                    </p>
                    <p
                        class="mt-2 text-base font-medium leading-relaxed text-gray-500 lg:text-lg"
                    >
                        النشاط العام : أعمال صيانة وتشغيل المباني – تركيب واصلاح
                        وصيانة أنظمة عازل الحرارة والماء والصوت – انشاء المباني
                        الخرسانية – أعمال صيانة وتشغيل المباني سابقة الصب .
                    </p>
                    <p
                        class="mt-2 text-base font-medium leading-relaxed text-gray-500 lg:text-lg"
                    >
                        التخصص : متخصصون فى توريد وتنفيذ واصلاح جميع أنظمة العزل
                        المائية والحرارية وإصلاح الخرسانة .
                    </p>
                    <p
                        class="mt-2 text-base font-medium leading-relaxed text-gray-500 lg:text-lg"
                    >
                        وقد استطاعت المؤسسة أن تنال ثقة عملائها بعد إتمام تتنفيذ
                        المشروعات التى اسندت إليها على أكمل وجه ، وتعمل على
                        زيادة مواردها وساتخدام التقنيات الحديثة من أجل إتمام
                        تنفيذ كافة المشاريع المطلوبة بنفس الجودة والدقة العالية
                        مع الإلتزام بمعايير الأمن والسلامة .
                    </p>
                    <p
                        class="mt-2 text-base font-medium leading-relaxed text-gray-500 lg:text-lg"
                    >
                        وتحظى المؤسسة بثقة كبيرة مع العملاء ودقة كبيرة فى
                        التنفيذ والتزام فى المواعيد ، وهي حريصة كل الحرص على
                        إرضاء عملائها والسعي وراء اكتساب ثقة المزيد من العملاء
                    </p>
                </div>
            </div>

            <SericesAll :services="services" class="mt-20" />

            <OurTeam class="mt-20" />

            <section class="container mx-auto mt-20 max-w-7xl">
                <div
                    class="flex flex-col justify-center p-2 space-y-8 md:space-x-10 md:flex-row rtl:space-x-reverse"
                >
                    <img
                        src="/storage/images/banner1.png"
                        class="md:w-[45%] md:h-[600px] rounded-lg"
                        loading="lazy"
                        alt=""
                    />
                    <div class="px-4">
                        <SectionTitleShadow>
                            <template #upper-title>
                                {{ $t("why.us-upper") }}
                            </template>
                            <template #title>
                                {{ $t("why.us") }}
                            </template>
                        </SectionTitleShadow>

                        <p class="mt-4 text-lg font-medium text-gray-500">
                            {{ $t("why.us-desc") }}
                        </p>
                        <p
                            class="mt-10 text-base font-medium leading-relaxed text-gray-500 lg:text-lg"
                        >
                            {{ $t("about.us-desc") }}
                        </p>
                        <div class="flex flex-col w-full mt-10 space-y-8">
                            <div class="flex flex-col space-y-4">
                                <p class="text-lg font-semibold">
                                    {{ $t("progress.bar.1") }}
                                </p>
                                <ProgressBar
                                    :targetNumber="40"
                                    :endDigit="40"
                                />
                            </div>
                            <div class="flex flex-col space-y-4">
                                <p class="text-lg font-semibold">
                                    {{ $t("progress.bar.2") }}
                                </p>
                                <ProgressBar
                                    :targetNumber="80"
                                    :endDigit="80"
                                />
                            </div>
                            <div class="flex flex-col space-y-4">
                                <p class="text-lg font-semibold">
                                    {{ $t("progress.bar.3") }}
                                </p>
                                <ProgressBar
                                    :targetNumber="64"
                                    :endDigit="64"
                                />
                            </div>
                            <div class="flex flex-col space-y-4">
                                <p class="text-lg font-semibold">
                                    {{ $t("progress.bar.4") }}
                                </p>
                                <ProgressBar
                                    :targetNumber="96"
                                    :endDigit="96"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Tabs class="mt-20" />
        </section>
    </AppLayout>
</template>
