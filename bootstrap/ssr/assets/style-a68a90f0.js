import { defineStore } from "pinia";
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
const containerMaxW = "xl:mx-auto w-full";
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
export {
  containerMaxW as c,
  useStyleStore as u
};
