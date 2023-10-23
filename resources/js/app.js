import "../css/app.css";
import "../css/admin/main.css";

import { createApp, h } from "vue";
import { createPinia } from "pinia";
import { useStyleStore } from "@/Admin/Stores/style";
import { darkModeKey, styleKey } from "@/Admin/config";
import { createInertiaApp } from "@inertiajs/vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ZiggyVue } from "../../vendor/tightenco/ziggy/dist/vue.m";
import { i18nVue } from "laravel-vue-i18n";
import { MotionPlugin } from "@vueuse/motion";

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText ||
    "القطريه للعوازل";

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
                resolve: async (lang) => {
                    const langs = import.meta.glob("../../lang/*.json");
                    return await langs[`../../lang/${lang}.json`]();
                },
            })
            .use(ZiggyVue, Ziggy)
            .use(pinia)
            .use(MotionPlugin)
            .mount(el);
    },
    progress: {
        color: "#4B5563",
    },
});

const styleStore = useStyleStore(pinia);

/* App style */
styleStore.setStyle(localStorage[styleKey] ?? "basic");

/* Dark mode */
if (
    (!localStorage[darkModeKey] &&
        window.matchMedia("(prefers-color-scheme: dark)").matches) ||
    localStorage[darkModeKey] === "1"
) {
    styleStore.setDarkMode(true);
}
