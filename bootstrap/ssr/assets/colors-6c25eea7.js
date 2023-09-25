import { defineStore } from "pinia";
import { computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderSlot } from "vue/server-renderer";
const basic = {
  aside: "bg-gray-800",
  asideScrollbars: "aside-scrollbars-gray",
  asideBrand: "bg-gray-900 text-white",
  asideMenuItem: "text-gray-300 hover:text-white",
  asideMenuItemActive: "font-bold text-white",
  asideMenuDropdown: "bg-gray-700/50",
  navBarItemLabel: "text-black",
  navBarItemLabelHover: "hover:text-blue-500",
  navBarItemLabelActiveColor: "text-blue-600",
  overlay: "from-gray-700 via-gray-900 to-gray-700"
};
const white = {
  aside: "bg-white",
  asideScrollbars: "aside-scrollbars-light",
  asideBrand: "",
  asideMenuItem: "text-blue-600 hover:text-black dark:text-white",
  asideMenuItemActive: "font-bold text-black dark:text-white",
  asideMenuDropdown: "bg-gray-100/75",
  navBarItemLabel: "text-blue-600",
  navBarItemLabelHover: "hover:text-black",
  navBarItemLabelActiveColor: "text-black",
  overlay: "from-white via-gray-100 to-white"
};
const styles = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  basic,
  white
}, Symbol.toStringTag, { value: "Module" }));
const darkModeKey = "darkMode";
const styleKey = "style";
const containerMaxW = "xl:max-w-6xl xl:mx-auto";
const useStyleStore = defineStore("style", {
  state: () => ({
    /* Styles */
    asideStyle: "",
    asideScrollbarsStyle: "",
    asideBrandStyle: "",
    asideMenuItemStyle: "",
    asideMenuItemActiveStyle: "",
    asideMenuDropdownStyle: "",
    navBarItemLabelStyle: "",
    navBarItemLabelHoverStyle: "",
    navBarItemLabelActiveColorStyle: "",
    overlayStyle: "",
    /* Dark mode */
    darkMode: false
  }),
  actions: {
    setStyle(payload) {
      if (!styles[payload]) {
        return;
      }
      if (typeof localStorage !== "undefined") {
        localStorage.setItem(styleKey, payload);
      }
      const style = styles[payload];
      for (const key in style) {
        this[`${key}Style`] = style[key];
      }
    },
    setDarkMode(payload = null) {
      this.darkMode = payload !== null ? payload : !this.darkMode;
      if (typeof localStorage !== "undefined") {
        localStorage.setItem(darkModeKey, this.darkMode ? "1" : "0");
      }
      if (typeof document !== "undefined") {
        document.body.classList[this.darkMode ? "add" : "remove"](
          "dark-scrollbars"
        );
        document.documentElement.classList[this.darkMode ? "add" : "remove"]("dark-scrollbars-compat");
      }
    }
  }
});
const _sfc_main$1 = {
  __name: "BaseIcon",
  __ssrInlineRender: true,
  props: {
    path: {
      type: String,
      required: true
    },
    w: {
      type: String,
      default: "w-6"
    },
    h: {
      type: String,
      default: "h-6"
    },
    size: {
      type: [String, Number],
      default: null
    }
  },
  setup(__props) {
    const props = __props;
    const spanClass = computed(
      () => `inline-flex justify-center items-center ${props.w} ${props.h}`
    );
    const iconSize = computed(() => props.size ?? 16);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({ class: spanClass.value }, _attrs))}><svg viewBox="0 0 24 24"${ssrRenderAttr("width", iconSize.value)}${ssrRenderAttr("height", iconSize.value)} class="inline-block"><path fill="currentColor"${ssrRenderAttr("d", __props.path)}></path></svg>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</span>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/BaseIcon.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "BaseDivider",
  __ssrInlineRender: true,
  props: {
    navBar: Boolean
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<hr${ssrRenderAttrs(mergeProps({
        class: [
          props.navBar ? "hidden lg:block lg:my-0.5 dark:border-slate-700" : "my-6 -mx-6 dark:border-slate-800",
          "border-t border-gray-100"
        ]
      }, _attrs))}>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/BaseDivider.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gradientBgBase = "bg-gradient-to-tr";
const gradientBgPurplePink = `${gradientBgBase} from-purple-400 via-pink-500 to-red-500`;
const gradientBgDark = `${gradientBgBase} from-slate-700 via-slate-900 to-slate-800`;
const gradientBgPinkRed = `${gradientBgBase} from-pink-400 via-red-500 to-yellow-500`;
const colorsBgLight = {
  white: "bg-white text-black",
  light: "bg-white text-black dark:bg-slate-900/70 dark:text-white",
  contrast: "bg-gray-800 text-white dark:bg-white dark:text-black",
  success: "bg-emerald-500 border-emerald-500 text-white",
  danger: "bg-red-500 border-red-500 text-white",
  warning: "bg-yellow-500 border-yellow-500 text-white",
  info: "bg-blue-500 border-blue-500 text-white"
};
const getButtonColor = (color, isOutlined, hasHover, isActive = false) => {
  const colors = {
    ring: {
      white: "ring-gray-200 dark:ring-gray-500",
      whiteDark: "ring-gray-200 dark:ring-gray-500",
      lightDark: "ring-gray-200 dark:ring-gray-500",
      contrast: "ring-gray-300 dark:ring-gray-400",
      success: "ring-emerald-300 dark:ring-emerald-700",
      danger: "ring-red-300 dark:ring-red-700",
      warning: "ring-yellow-300 dark:ring-yellow-700",
      info: "ring-blue-300 dark:ring-blue-700"
    },
    active: {
      white: "bg-gray-100",
      whiteDark: "bg-gray-100 dark:bg-slate-800",
      lightDark: "bg-gray-200 dark:bg-slate-700",
      contrast: "bg-gray-700 dark:bg-slate-100",
      success: "bg-emerald-700 dark:bg-emerald-600",
      danger: "bg-red-700 dark:bg-red-600",
      warning: "bg-yellow-700 dark:bg-yellow-600",
      info: "bg-blue-700 dark:bg-blue-600"
    },
    bg: {
      white: "bg-white text-black",
      whiteDark: "bg-white text-black dark:bg-slate-900 dark:text-white",
      lightDark: "bg-gray-100 text-black dark:bg-slate-800 dark:text-white",
      contrast: "bg-gray-800 text-white dark:bg-white dark:text-black",
      success: "bg-emerald-600 dark:bg-emerald-500 text-white",
      danger: "bg-red-600 dark:bg-red-500 text-white",
      warning: "bg-yellow-600 dark:bg-yellow-500 text-white",
      info: "bg-blue-600 dark:bg-blue-500 text-white"
    },
    bgHover: {
      white: "hover:bg-gray-100",
      whiteDark: "hover:bg-gray-100 hover:dark:bg-slate-800",
      lightDark: "hover:bg-gray-200 hover:dark:bg-slate-700",
      contrast: "hover:bg-gray-700 hover:dark:bg-slate-100",
      success: "hover:bg-emerald-700 hover:border-emerald-700 hover:dark:bg-emerald-600 hover:dark:border-emerald-600",
      danger: "hover:bg-red-700 hover:border-red-700 hover:dark:bg-red-600 hover:dark:border-red-600",
      warning: "hover:bg-yellow-700 hover:border-yellow-700 hover:dark:bg-yellow-600 hover:dark:border-yellow-600",
      info: "hover:bg-blue-700 hover:border-blue-700 hover:dark:bg-blue-600 hover:dark:border-blue-600"
    },
    borders: {
      white: "border-white",
      whiteDark: "border-white dark:border-slate-900",
      lightDark: "border-gray-100 dark:border-slate-800",
      contrast: "border-gray-800 dark:border-white",
      success: "border-emerald-600 dark:border-emerald-500",
      danger: "border-red-600 dark:border-red-500",
      warning: "border-yellow-600 dark:border-yellow-500",
      info: "border-blue-600 dark:border-blue-500"
    },
    text: {
      contrast: "dark:text-slate-100",
      success: "text-emerald-600 dark:text-emerald-500",
      danger: "text-red-600 dark:text-red-500",
      warning: "text-yellow-600 dark:text-yellow-500",
      info: "text-blue-600 dark:text-blue-500"
    },
    outlineHover: {
      contrast: "hover:bg-gray-800 hover:text-gray-100 hover:dark:bg-slate-100 hover:dark:text-black",
      success: "hover:bg-emerald-600 hover:text-white hover:text-white hover:dark:text-white hover:dark:border-emerald-600",
      danger: "hover:bg-red-600 hover:text-white hover:text-white hover:dark:text-white hover:dark:border-red-600",
      warning: "hover:bg-yellow-600 hover:text-white hover:text-white hover:dark:text-white hover:dark:border-yellow-600",
      info: "hover:bg-blue-600 hover:text-white hover:dark:text-white hover:dark:border-blue-600"
    }
  };
  if (!colors.bg[color]) {
    return color;
  }
  const isOutlinedProcessed = isOutlined && ["white", "whiteDark", "lightDark"].indexOf(color) < 0;
  const base = [colors.borders[color], colors.ring[color]];
  if (isActive) {
    base.push(colors.active[color]);
  } else {
    base.push(isOutlinedProcessed ? colors.text[color] : colors.bg[color]);
  }
  if (hasHover) {
    base.push(
      isOutlinedProcessed ? colors.outlineHover[color] : colors.bgHover[color]
    );
  }
  return base;
};
export {
  _sfc_main as _,
  _sfc_main$1 as a,
  gradientBgDark as b,
  containerMaxW as c,
  gradientBgPinkRed as d,
  gradientBgPurplePink as e,
  colorsBgLight as f,
  getButtonColor as g,
  useStyleStore as u
};