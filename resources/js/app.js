import "../css/app.css";
import "../css/admin/main.css";
import "vue-select/dist/vue-select.css";

import { createApp, h } from "vue";
import { createPinia } from "pinia";
import { useStyleStore } from "@/Admin/Stores/style";
import { darkModeKey, styleKey } from "@/Admin/config";
import { createInertiaApp } from "@inertiajs/vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ZiggyVue } from "../../vendor/tightenco/ziggy/dist/vue.m";
import { i18nVue } from "laravel-vue-i18n";
import { MotionPlugin } from "@vueuse/motion";
import vSelect from "vue-select";
import CKEditor from "@ckeditor/ckeditor5-vue";
import "@ebcom/dotlottie-player";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
const appName = "الشركه القطريه للمقاولات العامه للمباني";

const pinia = createPinia();

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob("./Pages/**/*.vue")
        ),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(i18nVue, {
                resolve: async(lang) => {
                    const langs =
                        import.meta.glob("../../lang/*.json");
                    return await langs[`../../lang/${lang}.json`]();
                },
            })
            .use(ZiggyVue, Ziggy)
            .use(pinia)
            .use(MotionPlugin)
            .use(CKEditor)
            .component("v-select", vSelect)
            .component("VueDatePicker", VueDatePicker)
            .mount(el);
    },
    progress: {
        color: "#4B5563",
    },
});

const styleStore = useStyleStore(pinia);

/* App style */
styleStore.setStyle(localStorage[styleKey]);

/* Dark mode */
if (
    (!localStorage[darkModeKey] &&
        window.matchMedia("(prefers-color-scheme: dark)").matches) ||
    localStorage[darkModeKey] === "1"
) {
    styleStore.setDarkMode(true);
}
