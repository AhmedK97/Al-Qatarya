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
                        الرؤية
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
                        الرسالة
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
                                نهدف إلي أن نكون رواد فى مجال العزل المائي
                                والحراري داخل المملكة العربية السعودية . مع
                                التوسع فى المجال ليشمل افتتاح عدة معارض لمواد
                                ومعدات العزل المائي والحراري ، وذلك بالتعاون مع
                                أكبر مصانع البتروكيماويات مثل شركات هينيكل
                                وباسيف وهانتسمان وشركات المعدات مثل جراكو
                                الأمريكية وجاما الأسبانية وذلك داخل مدن المملكة
                                .
                            </p>
                        </div>
                        <div
                            v-bind:class="{
                                hidden: openTab !== 2,
                                block: openTab === 2,
                            }"
                        >
                            <p class="font-normal md:text-xl">
                                نسعي دائما لتنفيذ مشروعاتنا طبقا لمعايير الجودة
                                العالمية فى الوقت المحدد على الوجه الأمثل وطبقا
                                لأصول الصناعة . نسعي إلي تحقيق نهضة هندسية شاملة
                                فى جميع مجالات عملنا لنحقق الريادة فى مجال العزل
                                الحراري والمائي . نسعي إلي نيل ثقة أكبر قدر ممكن
                                من العملاء ونلتزم بإرضائهم من خلال الإلتزام
                                بالدقة ومعايير الجودة والسلامة واستخدام التقنيات
                                وفرق العمل المحترفة لتنفيذ كافة المشروعات
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
