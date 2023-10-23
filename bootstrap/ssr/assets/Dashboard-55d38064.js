import { useSSRContext, mergeProps, unref, withCtx, renderSlot, computed, ref, onMounted, onBeforeUnmount, createVNode, resolveDynamicComponent, openBlock, createBlock, createCommentVNode, toDisplayString, createTextVNode, withModifiers } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrRenderVNode, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderSlotInner } from "vue/server-renderer";
import { mdiMonitor, mdiViewList, mdiGithub, mdiReact, mdiMenu, mdiClockOutline, mdiCloud, mdiCrop, mdiAccount, mdiCogOutline, mdiEmail, mdiLogout, mdiThemeLightDark, mdiChevronUp, mdiChevronDown, mdiClose, mdiDotsVertical, mdiMinus, mdiPlus, mdiBackburger, mdiForwardburger } from "@mdi/js";
import { u as useStyleStore, _ as _sfc_main$f, a as _sfc_main$g, c as containerMaxW, g as getButtonColor } from "./colors-6c25eea7.js";
import { u as useMainStore, _ as _sfc_main$i } from "./FormControl-6dd1862c.js";
import { Link, router, Head } from "@inertiajs/vue3";
import { _ as _sfc_main$h } from "./BaseLevel-c35b5037.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "pinia";
import "axios";
const menuAside = [
  {
    route: "dashboard",
    icon: mdiMonitor,
    label: "Dashboard"
  },
//   {
//       route: "/tables",
//       label: "Tables",
//       icon: mdiTable,
//   },
  // {
  //     route: "/forms",
  //     label: "Forms",
  //     icon: mdiSquareEditOutline,
  // },
  // {
  //     route: "/ui",
  //     label: "UI",
  //     icon: mdiTelevisionGuide,
  // },
  // {
  //     route: "/responsive",
  //     label: "Responsive",
  //     icon: mdiResponsive,
  // },
  // {
  //     route: "/",
  //     label: "Styles",
  //     icon: mdiPalette,
  // },
  // {
  //     route: "/profile",
  //     label: "Profile",
  //     icon: mdiAccountCircle,
  // },
  // {
  //     route: "/login",
  //     label: "Login",
  //     icon: mdiLock,
  // },
  // {
  //     route: "/error",
  //     label: "Error",
  //     icon: mdiAlertCircle,
  // },
  {
    label: "Dropdown",
    icon: mdiViewList,
    menu: [
      {
        label: "Item One"
      },
      {
        label: "Item Two"
      }
    ]
  },
  {
    href: "https://github.com/justboil/admin-one-vue-tailwind",
    label: "GitHub",
    icon: mdiGithub,
    target: "_blank"
  },
  {
    href: "https://github.com/justboil/admin-one-react-tailwind",
    label: "React version",
    icon: mdiReact,
    target: "_blank"
  }
];
const menuNavBar = [
  {
    icon: mdiMenu,
    label: "Sample menu",
    menu: [
      {
        icon: mdiClockOutline,
        label: "Item One"
      },
      {
        icon: mdiCloud,
        label: "Item Two"
      },
      {
        isDivider: true
      },
      {
        icon: mdiCrop,
        label: "Item Last"
      }
    ]
  },
  {
    isCurrentUser: true,
    menu: [
      {
        icon: mdiAccount,
        label: "My Profile",
        to: "/profile"
      },
      {
        icon: mdiCogOutline,
        label: "Settings"
      },
      {
        icon: mdiEmail,
        label: "Messages"
      },
      {
        isDivider: true
      },
      {
        icon: mdiLogout,
        label: "Log Out",
        isLogout: true
      }
    ]
  },
  {
    icon: mdiThemeLightDark,
    label: "Light/Dark",
    isDesktopNoLabel: true,
    isToggleLightDark: true
  },
  {
    icon: mdiGithub,
    label: "GitHub",
    isDesktopNoLabel: true,
    href: "https://github.com/justboil/admin-one-vue-tailwind",
    target: "_blank"
  },
  {
    icon: mdiReact,
    label: "React version",
    isDesktopNoLabel: true,
    href: "https://github.com/justboil/admin-one-react-tailwind",
    target: "_blank"
  },
  {
    icon: mdiLogout,
    label: "Log out",
    isDesktopNoLabel: true,
    isLogout: true
  }
];
const _sfc_main$e = {
  __name: "UserAvatar",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><img src="/storage/1/720.webp" class="block w-full h-auto max-w-full bg-gray-100 rounded-full dark:bg-slate-800">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/UserAvatar.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = {
  __name: "UserAvatarCurrentUser",
  __ssrInlineRender: true,
  setup(__props) {
    const mainStore = useMainStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$e, mergeProps({
        username: unref(mainStore).userName,
        avatar: unref(mainStore).userAvatar
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/UserAvatarCurrentUser.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = {
  __name: "NavBarItem",
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  emits: ["menu-click"],
  setup(__props, { emit }) {
    const props = __props;
    const itemHref = computed(
      () => props.item.route ? route(props.item.route) : props.item.href
    );
    const is = computed(() => {
      if (props.item.href) {
        return "a";
      }
      if (props.item.route) {
        return Link;
      }
      return "div";
    });
    const styleStore = useStyleStore();
    const componentClass = computed(() => {
      const base = [
        isDropdownActive.value ? `${styleStore.navBarItemLabelActiveColorStyle} dark:text-slate-400` : `${styleStore.navBarItemLabelStyle} dark:text-white dark:hover:text-slate-400 ${styleStore.navBarItemLabelHoverStyle}`,
        props.item.menu ? "lg:py-2 lg:px-3" : "py-2 px-3"
      ];
      if (props.item.isDesktopNoLabel) {
        base.push("lg:w-16", "lg:justify-center");
      }
      return base;
    });
    const itemLabel = computed(
      () => props.item.isCurrentUser ? useMainStore().userName : props.item.label
    );
    const isDropdownActive = ref(false);
    const menuClick = (event) => {
      emit("menu-click", event, props.item);
      if (props.item.menu) {
        isDropdownActive.value = !isDropdownActive.value;
      }
    };
    const menuClickDropdown = (event, item) => {
      emit("menu-click", event, item);
    };
    const root = ref(null);
    const forceClose = (event) => {
      if (root.value && !root.value.contains(event.target)) {
        isDropdownActive.value = false;
      }
    };
    onMounted(() => {
      if (props.item.menu) {
        window.addEventListener("click", forceClose);
      }
    });
    onBeforeUnmount(() => {
      if (props.item.menu) {
        window.removeEventListener("click", forceClose);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.item.isDivider) {
        _push(ssrRenderComponent(_sfc_main$f, mergeProps({ "nav-bar": "" }, _attrs), null, _parent));
      } else {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(is.value), mergeProps({
          ref_key: "root",
          ref: root,
          class: ["relative items-center block cursor-pointer lg:flex", componentClass.value],
          href: itemHref.value,
          target: __props.item.target ?? null,
          onClick: menuClick
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="${ssrRenderClass([{
                "bg-gray-100 dark:bg-slate-800 lg:bg-transparent lg:dark:bg-transparent p-3 lg:p-0": __props.item.menu
              }, "flex items-center"])}"${_scopeId}>`);
              if (__props.item.isCurrentUser) {
                _push2(ssrRenderComponent(_sfc_main$d, { class: "inline-flex w-6 h-6 mr-3" }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (__props.item.icon) {
                _push2(ssrRenderComponent(_sfc_main$g, {
                  path: __props.item.icon,
                  class: "transition-colors"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`<span class="${ssrRenderClass([{ "lg:hidden": __props.item.isDesktopNoLabel && __props.item.icon }, "px-2 transition-colors whitespace-nowrap"])}"${_scopeId}>${ssrInterpolate(itemLabel.value)}</span>`);
              if (__props.item.menu) {
                _push2(ssrRenderComponent(_sfc_main$g, {
                  path: isDropdownActive.value ? unref(mdiChevronUp) : unref(mdiChevronDown),
                  class: "hidden transition-colors lg:inline-flex"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
              if (__props.item.menu) {
                _push2(`<div class="${ssrRenderClass([{ "lg:hidden": !isDropdownActive.value }, "text-sm border-b border-gray-100 lg:border lg:bg-white lg:absolute lg:top-full lg:left-0 lg:min-w-full lg:z-20 lg:rounded-lg lg:shadow-lg lg:dark:bg-slate-800 dark:border-slate-700"])}"${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$b, {
                  menu: __props.item.menu,
                  onMenuClick: menuClickDropdown
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                createVNode("div", {
                  class: ["flex items-center", {
                    "bg-gray-100 dark:bg-slate-800 lg:bg-transparent lg:dark:bg-transparent p-3 lg:p-0": __props.item.menu
                  }]
                }, [
                  __props.item.isCurrentUser ? (openBlock(), createBlock(_sfc_main$d, {
                    key: 0,
                    class: "inline-flex w-6 h-6 mr-3"
                  })) : createCommentVNode("", true),
                  __props.item.icon ? (openBlock(), createBlock(_sfc_main$g, {
                    key: 1,
                    path: __props.item.icon,
                    class: "transition-colors"
                  }, null, 8, ["path"])) : createCommentVNode("", true),
                  createVNode("span", {
                    class: ["px-2 transition-colors whitespace-nowrap", { "lg:hidden": __props.item.isDesktopNoLabel && __props.item.icon }]
                  }, toDisplayString(itemLabel.value), 3),
                  __props.item.menu ? (openBlock(), createBlock(_sfc_main$g, {
                    key: 2,
                    path: isDropdownActive.value ? unref(mdiChevronUp) : unref(mdiChevronDown),
                    class: "hidden transition-colors lg:inline-flex"
                  }, null, 8, ["path"])) : createCommentVNode("", true)
                ], 2),
                __props.item.menu ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: ["text-sm border-b border-gray-100 lg:border lg:bg-white lg:absolute lg:top-full lg:left-0 lg:min-w-full lg:z-20 lg:rounded-lg lg:shadow-lg lg:dark:bg-slate-800 dark:border-slate-700", { "lg:hidden": !isDropdownActive.value }]
                }, [
                  createVNode(_sfc_main$b, {
                    menu: __props.item.menu,
                    onMenuClick: menuClickDropdown
                  }, null, 8, ["menu"])
                ], 2)) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }), _parent);
      }
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/NavBarItem.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = {
  __name: "NavBarMenuList",
  __ssrInlineRender: true,
  props: {
    menu: {
      type: Array,
      default: () => []
    }
  },
  emits: ["menu-click"],
  setup(__props, { emit }) {
    const menuClick = (event, item) => {
      emit("menu-click", event, item);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      ssrRenderList(__props.menu, (item, index) => {
        _push(ssrRenderComponent(_sfc_main$c, {
          key: index,
          item,
          onMenuClick: menuClick
        }, null, _parent));
      });
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/NavBarMenuList.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = {
  __name: "NavBarItemPlain",
  __ssrInlineRender: true,
  props: {
    display: {
      type: String,
      default: "flex"
    },
    useMargin: Boolean
  },
  setup(__props) {
    const styleStore = useStyleStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [[
          __props.display,
          unref(styleStore).navBarItemLabelStyle,
          unref(styleStore).navBarItemLabelHoverStyle,
          __props.useMargin ? "my-2 mx-3" : "py-2 px-3"
        ], "items-center cursor-pointer dark:text-white dark:hover:text-slate-400"]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/NavBarItemPlain.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {
  __name: "NavBar",
  __ssrInlineRender: true,
  props: {
    menu: {
      type: Array,
      required: true
    }
  },
  emits: ["menu-click"],
  setup(__props, { emit }) {
    const menuClick = (event, item) => {
      emit("menu-click", event, item);
    };
    const isMenuNavBarActive = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "fixed inset-x-0 top-0 z-30 w-screen bg-gray-50 h-14 transition-position lg:w-auto dark:bg-slate-800" }, _attrs))}><div class="${ssrRenderClass([unref(containerMaxW), "flex lg:items-stretch"])}"><div class="flex items-stretch flex-1 h-14">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div><div class="flex items-stretch flex-none h-14 lg:hidden">`);
      _push(ssrRenderComponent(_sfc_main$a, {
        onClick: ($event) => isMenuNavBarActive.value = !isMenuNavBarActive.value
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$g, {
              path: isMenuNavBarActive.value ? unref(mdiClose) : unref(mdiDotsVertical),
              size: "24"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$g, {
                path: isMenuNavBarActive.value ? unref(mdiClose) : unref(mdiDotsVertical),
                size: "24"
              }, null, 8, ["path"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="${ssrRenderClass([[isMenuNavBarActive.value ? "block" : "hidden"], "absolute left-0 w-screen overflow-y-auto shadow-lg max-h-screen-menu lg:overflow-visible top-14 bg-gray-50 lg:w-auto lg:flex lg:static lg:shadow-none dark:bg-slate-800"])}">`);
      _push(ssrRenderComponent(_sfc_main$b, {
        menu: __props.menu,
        onMenuClick: menuClick
      }, null, _parent));
      _push(`</div></div></nav>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/NavBar.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
  __name: "AsideMenuItem",
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    },
    isDropdownList: Boolean
  },
  emits: ["menu-click"],
  setup(__props, { emit }) {
    const props = __props;
    const itemHref = computed(
      () => props.item.route ? route(props.item.route) : props.item.href
    );
    const activeInactiveStyle = computed(
      () => props.item.route && route().current(props.item.route) ? styleStore.asideMenuItemActiveStyle : ""
    );
    const styleStore = useStyleStore();
    const hasColor = computed(() => props.item && props.item.color);
    computed(
      () => hasColor.value ? "" : styleStore.asideMenuItemActiveStyle
    );
    const isDropdownActive = ref(false);
    const componentClass = computed(() => [
      props.isDropdownList ? "py-3 px-6 text-sm" : "py-3",
      hasColor.value ? getButtonColor(props.item.color, false, true) : `${styleStore.asideMenuItemStyle} dark:text-slate-300 dark:hover:text-white`
    ]);
    const hasDropdown = computed(() => !!props.item.menu);
    const menuClick = (event) => {
      emit("menu-click", event, props.item);
      if (hasDropdown.value) {
        isDropdownActive.value = !isDropdownActive.value;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<li${ssrRenderAttrs(_attrs)}>`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.item.route ? unref(Link) : "a"), {
        href: itemHref.value,
        target: __props.item.target ?? null,
        class: ["flex cursor-pointer", componentClass.value],
        onClick: menuClick
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.item.icon) {
              _push2(ssrRenderComponent(_sfc_main$g, {
                path: __props.item.icon,
                class: ["flex-none", activeInactiveStyle.value],
                w: "w-16",
                size: 18
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<span class="${ssrRenderClass([[{ "pr-12": !hasDropdown.value }, activeInactiveStyle.value], "grow text-ellipsis line-clamp-1"])}"${_scopeId}>${ssrInterpolate(__props.item.label)}</span>`);
            if (hasDropdown.value) {
              _push2(ssrRenderComponent(_sfc_main$g, {
                path: isDropdownActive.value ? unref(mdiMinus) : unref(mdiPlus),
                class: ["flex-none", activeInactiveStyle.value],
                w: "w-12"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              __props.item.icon ? (openBlock(), createBlock(_sfc_main$g, {
                key: 0,
                path: __props.item.icon,
                class: ["flex-none", activeInactiveStyle.value],
                w: "w-16",
                size: 18
              }, null, 8, ["path", "class"])) : createCommentVNode("", true),
              createVNode("span", {
                class: ["grow text-ellipsis line-clamp-1", [{ "pr-12": !hasDropdown.value }, activeInactiveStyle.value]]
              }, toDisplayString(__props.item.label), 3),
              hasDropdown.value ? (openBlock(), createBlock(_sfc_main$g, {
                key: 1,
                path: isDropdownActive.value ? unref(mdiMinus) : unref(mdiPlus),
                class: ["flex-none", activeInactiveStyle.value],
                w: "w-12"
              }, null, 8, ["path", "class"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }), _parent);
      if (hasDropdown.value) {
        _push(ssrRenderComponent(_sfc_main$7, {
          menu: __props.item.menu,
          class: [
            unref(styleStore).asideMenuDropdownStyle,
            isDropdownActive.value ? "block dark:bg-slate-800/50" : "hidden"
          ],
          "is-dropdown-list": ""
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</li>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/AsideMenuItem.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __name: "AsideMenuList",
  __ssrInlineRender: true,
  props: {
    isDropdownList: Boolean,
    menu: {
      type: Array,
      required: true
    }
  },
  emits: ["menu-click"],
  setup(__props, { emit }) {
    const menuClick = (event, item) => {
      emit("menu-click", event, item);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<ul${ssrRenderAttrs(_attrs)}><!--[-->`);
      ssrRenderList(__props.menu, (item, index) => {
        _push(ssrRenderComponent(_sfc_main$8, {
          key: index,
          item,
          "is-dropdown-list": __props.isDropdownList,
          onMenuClick: menuClick
        }, null, _parent));
      });
      _push(`<!--]--></ul>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/AsideMenuList.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "AsideMenuLayer",
  __ssrInlineRender: true,
  props: {
    menu: {
      type: Array,
      required: true
    }
  },
  emits: ["menu-click", "aside-lg-close-click"],
  setup(__props, { emit }) {
    const styleStore = useStyleStore();
    const logoutItem = computed(() => ({
      label: "Logout",
      icon: mdiLogout,
      color: "info",
      isLogout: true
    }));
    const menuClick = (event, item) => {
      emit("menu-click", event, item);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<aside${ssrRenderAttrs(mergeProps({
        id: "aside",
        class: "fixed top-0 z-40 flex h-screen overflow-hidden lg:py-2 lg:pl-2 w-60 transition-position"
      }, _attrs))}><div class="${ssrRenderClass([unref(styleStore).asideStyle, "flex flex-col flex-1 overflow-hidden lg:rounded-2xl dark:bg-slate-900"])}"><div class="${ssrRenderClass([unref(styleStore).asideBrandStyle, "flex flex-row items-center justify-between h-14 dark:bg-slate-900"])}"><div class="flex-1 text-center lg:text-left lg:pl-6 xl:text-center xl:pl-0"><b class="font-black">One</b></div><button class="hidden p-3 lg:inline-block xl:hidden">`);
      _push(ssrRenderComponent(_sfc_main$g, { path: unref(mdiClose) }, null, _parent));
      _push(`</button></div><div class="${ssrRenderClass([
        unref(styleStore).darkMode ? "aside-scrollbars-[slate]" : unref(styleStore).asideScrollbarsStyle,
        "flex-1 overflow-x-hidden overflow-y-auto"
      ])}">`);
      _push(ssrRenderComponent(_sfc_main$7, {
        menu: __props.menu,
        onMenuClick: menuClick
      }, null, _parent));
      _push(`</div><ul>`);
      _push(ssrRenderComponent(_sfc_main$8, {
        item: logoutItem.value,
        onMenuClick: menuClick
      }, null, _parent));
      _push(`</ul></div></aside>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/AsideMenuLayer.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "OverlayLayer",
  __ssrInlineRender: true,
  props: {
    zIndex: {
      type: String,
      default: "z-50"
    },
    type: {
      type: String,
      default: "flex"
    }
  },
  emits: ["overlay-click"],
  setup(__props, { emit }) {
    const styleStore = useStyleStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [[__props.type, __props.zIndex], "fixed inset-0 flex-col items-center justify-center overflow-hidden"]
      }, _attrs))}><div class="${ssrRenderClass([unref(styleStore).overlayStyle, "absolute inset-0 bg-gradient-to-tr opacity-90 dark:from-gray-700 dark:via-gray-900 dark:to-gray-700"])}"></div>`);
      ssrRenderSlotInner(_ctx.$slots, "default", {}, null, _push, _parent, null, true);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/OverlayLayer.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "AsideMenu",
  __ssrInlineRender: true,
  props: {
    menu: {
      type: Array,
      required: true
    },
    isAsideMobileExpanded: Boolean,
    isAsideLgActive: Boolean
  },
  emits: ["menu-click", "aside-lg-close-click"],
  setup(__props, { emit }) {
    const menuClick = (event, item) => {
      emit("menu-click", event, item);
    };
    const asideLgCloseClick = (event) => {
      emit("aside-lg-close-click", event);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$6, {
        menu: __props.menu,
        class: [
          __props.isAsideMobileExpanded ? "left-0" : "-left-60 lg:left-0",
          { "lg:hidden xl:flex": !__props.isAsideLgActive }
        ],
        onMenuClick: menuClick,
        onAsideLgCloseClick: asideLgCloseClick
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, {
        style: __props.isAsideLgActive ? null : { display: "none" },
        "z-index": "z-30",
        onOverlayClick: asideLgCloseClick
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/AsideMenu.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "250",
    height: "100",
    viewBox: "0 0 250 100"
  }, _attrs))}><path fill="currentColor" d="M1.157,85.323a16.088,16.088,0,0,0-.865,4.431,7.265,7.265,0,0,0,.432,2.594,10.327,10.327,0,0,0,3.242,5.62,15.634,15.634,0,0,0,2.7,1.189,9.272,9.272,0,0,0,2.378.216,12.225,12.225,0,0,0,7.241-2.486,20.191,20.191,0,0,0,5.188-4.431A34.34,34.34,0,0,0,26.014,85c1.081-2.053,1.837-4,2.81-5.728,0.756-2.162,1.729-4.107,2.378-6.052q1.135-2.918,1.945-5.512a5.088,5.088,0,0,1,.324-0.973,36.294,36.294,0,0,0,1.837-5.079L36.714,56.9c0.216-1.081.864-2.269,1.081-3.458,0.432-1.945.216-1.621,2.486-3.026a4.822,4.822,0,0,0,.865-0.54,23.217,23.217,0,0,0,2.81-1.513,76.926,76.926,0,0,1,13.077-5.62,21.183,21.183,0,0,1,5.836-.865,11.968,11.968,0,0,1,4.755.865,0.65,0.65,0,0,1,.432.108,1.372,1.372,0,0,0,.648.108,0.988,0.988,0,0,0,.757-0.324V42.418a1.742,1.742,0,0,0-.432-0.756,4.576,4.576,0,0,1-.757-0.54,8.575,8.575,0,0,1-1.729-.865,21.494,21.494,0,0,0-5.187-.757c-0.432,0-.973.108-1.405,0.108a28.926,28.926,0,0,0-6.593,1.081A74.714,74.714,0,0,0,43.63,44.8l-2.053.865-1.189.648H40.172a0.271,0.271,0,0,1-.324-0.216V45.984a1.839,1.839,0,0,1,.108-0.756c0.324-.865.432-1.945,0.756-3.026,0.432-1.4.757-3.026,1.081-4.539a14.662,14.662,0,0,1,.648-3.134c0.757-3.783,1.405-7.241,2.378-10.807a0.817,0.817,0,0,0-.108-0.432c0.108-2.486,1.081-4.755,1.189-7.241L46.981,10V9.563a0.65,0.65,0,0,1,.108-0.432c0.216-.648.108-1.3,0.324-1.945a0.837,0.837,0,0,1,.865-0.757h0.54a0.817,0.817,0,0,0,.432-0.108c2.594-.54,5.079-0.973,7.673-1.4a39.862,39.862,0,0,1,4-.54,1.371,1.371,0,0,1,.648-0.108,1.388,1.388,0,0,1,1.081.432H63.3a1.1,1.1,0,0,0,.973-0.648V3.619A2.055,2.055,0,0,0,63.192,1.89,5.67,5.67,0,0,0,62,1.133,3.05,3.05,0,0,0,60.382.7c-0.216,0-.432.108-0.756,0.108-1.837.324-3.458,0.54-5.4,0.757-1.4.216-2.81,0.54-4.647,0.757-0.216,0-.324.108-0.54,0.108a1.743,1.743,0,0,1-.973-0.324,4.314,4.314,0,0,0-1.405-.757H46.332a0.594,0.594,0,0,0-.54.324,2.05,2.05,0,0,0-.756.865,6.3,6.3,0,0,1-1.621,1.189L37.9,4.808c-3.458.648-6.7,1.621-10.375,2.27a93.654,93.654,0,0,0-14.049,4.971,5.662,5.662,0,0,1-2.81,1.081H10.56c-0.108,0-.108.108-0.216,0.324l0.324,0.865a1.891,1.891,0,0,0,1.513.756,2.109,2.109,0,0,0,.757-0.108c0.432,0,.649-0.108,1.081-0.108a7.346,7.346,0,0,0,1.837-.865c2.594-1.081,5.3-1.729,7.673-2.486,6.16-1.729,12.428-2.7,18.48-4.107,0,0.108.108,0.108,0.216,0.108A0.817,0.817,0,0,0,42.658,7.4a0.582,0.582,0,0,1,.432.432,0.974,0.974,0,0,1,.108.54c-0.757,1.945-.865,4.215-1.621,6.16a13.36,13.36,0,0,0-.216,1.945,4.644,4.644,0,0,0-.216,1.3L37.9,30.746c-0.648,3.891-1.837,7.781-2.594,11.672a54.359,54.359,0,0,0-2.053,6.809,5.5,5.5,0,0,1-2.27,2.81,84.863,84.863,0,0,0-7.133,5.079,28.533,28.533,0,0,0-3.134,2.27l-7.781,6.7a34.571,34.571,0,0,0-6.484,7.889A32.361,32.361,0,0,0,3.1,80.243,17.466,17.466,0,0,0,1.157,85.323ZM30.121,59.277a28.267,28.267,0,0,1-2.27,6.052,0.914,0.914,0,0,0-.216.648,53.766,53.766,0,0,1-2.161,5.836c-0.54,1.405-.973,2.81-1.513,4.107a2.055,2.055,0,0,1-.756,1.189,32.565,32.565,0,0,1-2.27,5.3,51.775,51.775,0,0,1-3.566,6.268,16.461,16.461,0,0,1-3.242,4,16.635,16.635,0,0,1-5.187,3.134,12.189,12.189,0,0,1-1.945.324c-0.216,0-.432.108-0.648,0.108a1.733,1.733,0,0,1-1.729-.865,7.489,7.489,0,0,1-.324-2.162V92.78A22.312,22.312,0,0,1,5.156,86.3a36.044,36.044,0,0,1,5.512-10.7,52.582,52.582,0,0,1,11.024-12,67.218,67.218,0,0,1,7.457-5.62,1.466,1.466,0,0,1,1.189-.648h0.216a3.884,3.884,0,0,0-.216,1.189C30.337,58.737,30.121,59.061,30.121,59.277ZM16.612,92.455l0.432-.648a1.37,1.37,0,0,1-.108.648,11.506,11.506,0,0,1,1.189-.973,0.582,0.582,0,0,1,.54-0.432,0.682,0.682,0,0,1-.54.54v0.432a11.246,11.246,0,0,1-3.35,2.918,1.942,1.942,0,0,0,.432-0.973,1.521,1.521,0,0,0,.756-0.648H15.639a2.956,2.956,0,0,0,.432-0.54ZM10.344,71.6A4.4,4.4,0,0,1,12.4,69.22a7.442,7.442,0,0,1-2.053,2.486,0.738,0.738,0,0,1-.324.54,25.146,25.146,0,0,0-1.837,2.81l-0.757.54A9.592,9.592,0,0,1,10.344,71.6ZM6.237,77.866A3.849,3.849,0,0,1,7.426,75.6,3.849,3.849,0,0,1,6.237,77.866ZM17.044,94.617a1.674,1.674,0,0,1,1.3-1.081A2.1,2.1,0,0,1,17.044,94.617Zm-1.3,1.189c0-.54.756-0.865,1.3-1.189A4.326,4.326,0,0,1,15.747,95.806ZM5.7,78.946a0.892,0.892,0,0,1,.54-1.081A2.545,2.545,0,0,1,5.7,78.946Zm-0.757.973a1.011,1.011,0,0,1,.54-0.756l-0.216.865H5.048ZM8.723,75.7a1.293,1.293,0,0,1,.757-0.756A1.048,1.048,0,0,1,8.723,75.7Zm4.107-5.3c0-.324.108-0.432,0.648-0.648A1.261,1.261,0,0,1,12.829,70.409ZM9.587,74.731a0.691,0.691,0,0,1,.54-0.756A1.378,1.378,0,0,1,9.587,74.731Zm1.621-2.378a0.8,0.8,0,0,1,.54-0.649A0.8,0.8,0,0,1,11.208,72.354Zm0.54-.649a0.971,0.971,0,0,1,.54-0.648A0.8,0.8,0,0,1,11.749,71.705ZM10.56,73.326a1.342,1.342,0,0,1,.649-0.865A3.543,3.543,0,0,1,10.56,73.326Zm2.27-2.918a0.8,0.8,0,0,1-.54.648A1.051,1.051,0,0,1,12.829,70.409Zm-2.7,3.566a0.889,0.889,0,0,1,.432-0.648A1.378,1.378,0,0,1,10.128,73.975Zm4.107-5.3a0.5,0.5,0,0,1-.324.54Zm-1.837.54a1.251,1.251,0,0,1,.54-0.757A2.5,2.5,0,0,0,12.4,69.22Zm1.4,0.108a0.378,0.378,0,0,1-.324.432A0.734,0.734,0,0,0,13.8,69.328Zm4.863,21.723a0.82,0.82,0,0,0,.216-0.432,0.106,0.106,0,0,0,.108.108ZM8.615,75.812c0-.108.108,0,0.108-0.108a1.089,1.089,0,0,0-.108.324V75.812Zm8.97,15.13a0.106,0.106,0,0,1,.108-0.108v0.108H17.585Zm74.9-43.121a0.993,0.993,0,0,1-.973,1.081l0.108-.108a0.65,0.65,0,0,1,.108-0.432l-2.486,2.162-4,5.079c-1.621,2.378-4.107,3.891-5.836,6.917a19.106,19.106,0,0,1-1.837,2.594,0.573,0.573,0,0,1-.324.216H77.134A0.579,0.579,0,0,1,76.81,64.9a1.37,1.37,0,0,1-.108-0.648c0-1.3,0-2.486.108-3.783a26.766,26.766,0,0,1,.324-2.918c0.216-1.729.648-3.566,0.973-5.3a8.931,8.931,0,0,1,.865-2.378,55.3,55.3,0,0,1,1.621-6.052c0.432-1.189.973-.648,1.189-1.837,0-.756-0.216-3.35-0.973-3.783a0.408,0.408,0,0,1-.216-0.216,1.116,1.116,0,0,0-.865-0.432H79.3c-0.108,0-.324-0.216-0.432-0.216a0.409,0.409,0,0,0-.216.216L78,37.23a0.4,0.4,0,0,0-.324-0.108,0.594,0.594,0,0,0-.54.324,0.981,0.981,0,0,0-.324.756,10.262,10.262,0,0,0-.973,2.27A14.922,14.922,0,0,1,74,43.606a64.6,64.6,0,0,1-4.215,5.728L66,55.278l-3.35,4.215c-0.54.757-1.189,1.3-1.621,1.945a0.365,0.365,0,0,1-.324.216,0.4,0.4,0,0,1-.324-0.108c0-.108-0.108-0.216-0.108-0.324V60.358c0.108-.756.324-1.621,0.54-2.486A46.539,46.539,0,0,1,62.544,51.5c0.54-1.837,1.3-3.675,1.945-5.4a12.714,12.714,0,0,0,.757-2.161,5.428,5.428,0,0,0,.216-1.3V42.526a0.465,0.465,0,0,0-.432-0.432,0.888,0.888,0,0,1-.648-0.432,0.573,0.573,0,0,0-.324-0.216,0.377,0.377,0,0,0-.216.108,0.4,0.4,0,0,1-.324.108,0.453,0.453,0,0,1-.432-0.324A5.829,5.829,0,0,0,62,41.013a1.225,1.225,0,0,0-.973.756,2.267,2.267,0,0,1-.648.865c-0.649,1.189-1.405,2.378-2.053,3.675a48.59,48.59,0,0,0-2.7,7.565,11.244,11.244,0,0,1-.648,2.378,15.617,15.617,0,0,0-.432,3.134c0,1.189.216,2.486,0.324,3.675A2.271,2.271,0,0,0,56.06,64.9a10.34,10.34,0,0,0,3.674,2.053,1.081,1.081,0,0,0,1.3,0,4.973,4.973,0,0,0,2.162-1.729,29.415,29.415,0,0,0,3.134-4.107c0.648-1.3,1.513-2.594,2.27-4a53.181,53.181,0,0,1,2.81-4.647,7.089,7.089,0,0,1,1.837-2.7c-0.108-.108.108-0.108,0.216-0.108,0,0,.216.216,0.108,0.216a9.151,9.151,0,0,1-.432,1.837,32.831,32.831,0,0,0-.648,7.241,38.578,38.578,0,0,0,.432,4.971,8.11,8.11,0,0,0,.973,2.7,2.551,2.551,0,0,0,.648.973,6.808,6.808,0,0,1,1.945.648,3.207,3.207,0,0,0,1.189.432,2.522,2.522,0,0,0,1.513-.757l0.756-.973c1.081-1.4,2.27-2.81,3.35-4,1.621-2.161,3.242-4.107,4.647-6.268,2.053-2.7,3.891-5.4,5.836-8l0.54-.648a7.434,7.434,0,0,0,.648-2.27c0-.324-0.108-0.54-0.324-0.54-0.54,0-1.621,1.189-2.053,2.269v0.216C92.589,47.821,92.589,47.821,92.481,47.821ZM57.573,57.764a8.528,8.528,0,0,0-.324,1.4l-0.108.108a0.216,0.216,0,0,1-.108-0.216V58.953a42.724,42.724,0,0,1,.757-4.971,40.971,40.971,0,0,1,2.486-6.592c0.756-1.513,1.4-3.134,2.27-4.755l0.324-.216s0.108-.108.108,0a0.377,0.377,0,0,1,.108.216,2.748,2.748,0,0,1-.216.756A67.442,67.442,0,0,0,57.573,57.764Zm17.508-4.647a2.107,2.107,0,0,1,.108-0.865,29.934,29.934,0,0,1,1.189-5.187c0.432-1.189.648-2.378,0.973-3.566a1.654,1.654,0,0,1,.54-0.756,3.777,3.777,0,0,1-.324,1.3c-0.756,2.594-1.513,5.3-2.053,7.889A1.625,1.625,0,0,1,75.081,53.117ZM63.733,43.39a0.408,0.408,0,0,0,.216-0.216h0.324v0.108l-0.432.864c-0.54,1.405-1.189,2.81-1.729,4.323-0.432.865-.54,1.729-0.865,2.486a2.864,2.864,0,0,1-.54.648l0.216-.757C61.68,48.362,62.761,45.768,63.733,43.39ZM56.492,57.332V56.467a31.437,31.437,0,0,1,2.27-7.241,0.916,0.916,0,0,1,.324-0.324,2.685,2.685,0,0,0-.108.865,48.5,48.5,0,0,0-2.27,7.025Zm4.323-5.3a1.1,1.1,0,0,1-.54.865,1.39,1.39,0,0,1,.432-1.3A0.817,0.817,0,0,1,60.815,52.036Zm28.1,0.865a1.415,1.415,0,0,1-.865.648A0.7,0.7,0,0,1,88.914,52.9Zm0.973-1.621a0.789,0.789,0,0,1,.648-0.756A0.789,0.789,0,0,1,89.887,51.28ZM72.811,46.632c0,0.108.108,0.324,0.108,0.432a0.453,0.453,0,0,1-.324.432c0-.108-0.108-0.324-0.108-0.432A0.453,0.453,0,0,1,72.811,46.632Zm-1.081,2.053a0.789,0.789,0,0,1-.648.757A0.927,0.927,0,0,1,71.731,48.686Zm-3.783,5.728a1.018,1.018,0,0,1-.432.973A0.873,0.873,0,0,1,67.948,54.414Zm7.025-.216a0.562,0.562,0,0,1-.216-0.432,0.988,0.988,0,0,1,.324-0.54v0.54A0.522,0.522,0,0,1,74.973,54.2Zm8.322,6.052a0.463,0.463,0,0,1-.54.54l-0.108-.108A0.992,0.992,0,0,1,83.295,60.25ZM73.244,46.416a0.962,0.962,0,0,1,.54-0.865A0.963,0.963,0,0,1,73.244,46.416ZM69.677,51.6v0.324a0.652,0.652,0,0,1-.432.54V52.252A0.888,0.888,0,0,1,69.677,51.6Zm20.75,0.54a0.59,0.59,0,0,1-.54.648A0.589,0.589,0,0,1,90.427,52.144ZM87.4,54.738a0.605,0.605,0,0,1-.54.648A0.654,0.654,0,0,1,87.4,54.738ZM70.974,49.767a0.724,0.724,0,0,1-.432.757A0.723,0.723,0,0,1,70.974,49.767Zm-1.729,2.7a0.813,0.813,0,0,1-.54.757A0.813,0.813,0,0,1,69.245,52.468Zm-1.081,3.566a0.724,0.724,0,0,1,.432-0.757A0.724,0.724,0,0,1,68.164,56.035Zm18.373-.108a0.816,0.816,0,0,1-.432.757V56.467A0.582,0.582,0,0,1,86.537,55.927ZM90.968,50.2a0.4,0.4,0,0,1-.108-0.324,0.583,0.583,0,0,1,.432-0.432A1.612,1.612,0,0,1,90.968,50.2Zm-1.4,1.405a0.4,0.4,0,0,1,.108.324,0.453,0.453,0,0,1-.324.432A0.912,0.912,0,0,1,89.563,51.6ZM69.677,53.549a0.65,0.65,0,0,1,.432-0.757A0.816,0.816,0,0,1,69.677,53.549Zm-1.945,3.458a0.817,0.817,0,0,1,.324-0.865v0.216A0.934,0.934,0,0,1,67.732,57.007Zm2.486-4.323a0.659,0.659,0,0,1,.324-0.756v0.216A0.594,0.594,0,0,1,70.218,52.684ZM56.492,57.332c0,0.216.108,0.324,0.108,0.54a0.825,0.825,0,0,1-.216.54v-0.54A0.974,0.974,0,0,1,56.492,57.332Zm18.7-8.214a0.817,0.817,0,0,1,.108.432,0.4,0.4,0,0,1-.108.324,1.825,1.825,0,0,1-.216-0.54C74.973,49.226,74.973,49.226,75.189,49.118Zm-0.108.865a0.8,0.8,0,0,1-.324.757A0.659,0.659,0,0,1,75.081,49.983Zm10.051,7.889c0,0.216-.108.324-0.54,0.54A0.579,0.579,0,0,1,85.132,57.872ZM59.626,47.713a0.653,0.653,0,0,1-.324.648A0.77,0.77,0,0,1,59.626,47.713Zm0.432,6.052a1.164,1.164,0,0,1,.216-0.865A1.164,1.164,0,0,1,60.059,53.765ZM76.27,45.011a1.029,1.029,0,0,1-.216.756A0.809,0.809,0,0,1,76.27,45.011ZM89.347,52.36a0.718,0.718,0,0,1-.432.54A0.652,0.652,0,0,1,89.347,52.36Zm-30.044-4a0.514,0.514,0,0,1-.216.54A0.514,0.514,0,0,1,59.3,48.362Zm15.887,0.324,0.108-.108c0.108,0,.108.108,0.108,0.216l-0.216.324V48.686Zm-15.563-1.3a0.216,0.216,0,0,1,.108-0.216c0,0.108.108,0.108,0.108,0.216a0.573,0.573,0,0,1-.216.324V47.389Zm15.995-.432V46.849l0.324,0.216-0.216.324A0.522,0.522,0,0,0,75.621,46.957Zm8.862,11.456v0.216c0,0.108,0,.108-0.216.216A0.432,0.432,0,0,1,84.483,58.412Zm-12.212-10.7a0.913,0.913,0,0,1-.216.648A0.914,0.914,0,0,1,72.271,47.713ZM59.735,55.6a0.106,0.106,0,0,0-.108.108c-0.108,0-.108-0.108-0.108-0.216a0.409,0.409,0,0,1,.216-0.216V55.6Zm26.8,0.216a0.65,0.65,0,0,1,.108-0.432c0,0.108.108,0.216,0.108,0.324S86.645,55.819,86.537,55.819ZM70.218,50.847a0.826,0.826,0,0,1-.216.54A0.514,0.514,0,0,1,70.218,50.847Zm4.539-.108v0.324c0,0.108-.108.108-0.108,0.216a0.106,0.106,0,0,1-.108-0.108Zm12.969,3.566a0.422,0.422,0,0,1-.216.432A0.432,0.432,0,0,1,87.726,54.306ZM59.735,46.957a0.573,0.573,0,0,1,.216-0.324,0.825,0.825,0,0,1-.216.54V46.957Zm8.97,8.322V54.954a0.4,0.4,0,0,1,.108-0.324v0.216A0.522,0.522,0,0,1,68.7,55.278Zm6.052-.973v0.648a0.377,0.377,0,0,1-.108-0.216V54.63A1.089,1.089,0,0,1,74.757,54.306Zm18.481-5.944a0.671,0.671,0,0,1-.324.432A0.453,0.453,0,0,1,93.237,48.362Zm-4.215,5.62a0.365,0.365,0,0,0,.216-0.324V53.549a0.377,0.377,0,0,1,.108.216A0.271,0.271,0,0,1,89.022,53.981Zm2.269-4.539a0.635,0.635,0,0,1,.216-0.54A0.825,0.825,0,0,1,91.292,49.442ZM68.38,53.549a0.81,0.81,0,0,1-.108.54V53.873A0.4,0.4,0,0,1,68.38,53.549Zm24.1-5.728a0.106,0.106,0,0,0-.108-0.108l-0.324.324Zm-32.422,6.16a0.106,0.106,0,0,0-.108.108c0-.108-0.108-0.108-0.108-0.216,0.108,0,.108-0.108.216-0.108v0.216Zm-3.675,4.971a0.106,0.106,0,0,1-.108-0.108V58.737a0.377,0.377,0,0,1,.108-0.216v0.432Zm31.666-5.4v0.216a0.4,0.4,0,0,1-.108.324A1.447,1.447,0,0,1,88.05,53.549ZM86.1,56.683a0.917,0.917,0,0,0-.324.324A0.278,0.278,0,0,1,86.1,56.683ZM75.729,47.389v0.216l-0.108.108V47.5A0.106,0.106,0,0,1,75.729,47.389Zm16.319,0.648a0.462,0.462,0,0,0-.324.324ZM89.887,51.28a0.573,0.573,0,0,1-.216.324A0.3,0.3,0,0,1,89.887,51.28ZM85.24,57.764c0-.108-0.108-0.108-0.108-0.216s0.108-.108.108-0.216v0.432Zm7.241-8.646a0.365,0.365,0,0,1-.216.324A0.573,0.573,0,0,1,92.481,49.118ZM69.137,54.306a0.65,0.65,0,0,1,.108-0.432A0.65,0.65,0,0,1,69.137,54.306Zm21.4-3.782a0.271,0.271,0,0,1,.324-0.216Zm-6.7,8.97V59.385a0.216,0.216,0,0,1,.108-0.216A0.4,0.4,0,0,1,83.835,59.493Zm-2.053,1.621a1.555,1.555,0,0,0-.216.324A0.3,0.3,0,0,1,81.782,61.114ZM91.832,50.2a0.365,0.365,0,0,1-.324.216A1.558,1.558,0,0,0,91.832,50.2Zm-5.187,6.917a1.555,1.555,0,0,0-.216.324A0.3,0.3,0,0,1,86.645,57.115ZM59.735,55.17V54.954a0.106,0.106,0,0,1,.108.108Zm16.319-9.4a0.4,0.4,0,0,0-.108.324,0.106,0.106,0,0,0-.108-0.108Zm1.837-3.242L78,42.634l-0.108.108C77.891,42.634,77.783,42.526,77.891,42.526ZM87.726,55.6a0.573,0.573,0,0,1,.216-0.324A0.573,0.573,0,0,1,87.726,55.6Zm3.026-4.323a0.3,0.3,0,0,1-.216.324A0.573,0.573,0,0,0,90.752,51.28Zm-24.1,5.188a1.089,1.089,0,0,1-.108.324A0.4,0.4,0,0,1,66.651,56.467Zm26.8-8.646a1.089,1.089,0,0,1-.108.324A0.4,0.4,0,0,1,93.453,47.821Zm-4.431,6.268c0,0.108-.108.216-0.108,0.324A0.4,0.4,0,0,1,89.022,54.089Zm-14.806-.756,0.108-.108v0.108H74.216ZM92.589,48.9c0,0.108,0,.108-0.108.108Zm-19.345-.865a0.533,0.533,0,0,1,.108-0.324Zm15.022,6.7c0,0.108-.108.216-0.108,0.324A0.4,0.4,0,0,1,88.266,54.738ZM92.589,47.5a0.335,0.335,0,0,1-.216.108ZM99.83,43.39c2.162-3.026,4.54-4.323,6.377-4.323a2.407,2.407,0,0,1,2.594,2.053,0.255,0.255,0,0,0,.324.216h0.108v0.108c-0.649,1.621-1.189,1.837-1.3,3.026a0.4,0.4,0,0,0-.108.324c0,0.108,0,.216.108,0.216a0.216,0.216,0,0,1,.108.216,2.773,2.773,0,0,1-.216.54c0,0.108.108,0.216,0.432,0.216a3.414,3.414,0,0,0,2.918-1.3,14.53,14.53,0,0,0,1.513-4.647V39.716c0-2.7-4.107-4.215-6.268-4.539h-2.486c-2.918.324-5.3,1.837-7.889,4A21.573,21.573,0,0,0,91.4,45.552c-0.324.757-.432,1.4-0.757,2.161l-0.324,1.081a1.839,1.839,0,0,0,.108.757v0.865a6.294,6.294,0,0,0,.324,2.053,8.479,8.479,0,0,0,1.189,1.945,14.445,14.445,0,0,0,2.81,3.35c2.27,2.27,2.918,4.323,2.918,7.565v1.729c-0.216.865-1.3,1.081-1.837,1.837-0.973.973-3.891,1.945-4.863,2.918a15.6,15.6,0,0,0-2.053,4A2.89,2.89,0,0,0,92.048,78.3a7.345,7.345,0,0,0,2.053-.324c0.216,0,.432.108,0.648,0.108a1.054,1.054,0,0,0,.973-0.432,11.365,11.365,0,0,0,4.431-4.323,11.49,11.49,0,0,0,1.945-3.783l0.108-.865a1.975,1.975,0,0,1,.216-0.973c0.216-.756,1.189-0.756,1.837-1.3a0.462,0.462,0,0,0,.325-0.324V65.977c0-.108-0.108,0,0-0.108,2.269-1.837,4.215-2.378,6.484-4.215a22.97,22.97,0,0,1,5.836-4.107c0.432-.108.432-0.432,0.865-0.54a0.671,0.671,0,0,0,.324-0.432,4.683,4.683,0,0,1-.108-0.54,2.023,2.023,0,0,0-1.513-.54,2.381,2.381,0,0,0-.865.108,16,16,0,0,0-5.3,3.134c-2.162,1.513-4.323,2.27-6.161,4.107a4.723,4.723,0,0,0-.864.757c-0.108,0-.216.108-0.324,0.108-0.217,0-.217-0.108-0.325-0.432,0-.108-0.108-0.324-0.108-0.432a23.553,23.553,0,0,0-3.134-5.62,9.522,9.522,0,0,1-2.378-2.7c-0.432-.432-0.432-0.973-0.865-1.513a3.327,3.327,0,0,1-.324-1.4V51.171c0-.324.216-0.648,0.216-0.973A16.29,16.29,0,0,1,99.83,43.39Zm-3.566-.324c-0.432,1.405-1.513,2.378-2.486,3.891l0.108-.973c0.54-.865,1.4-1.513,1.837-2.378A2.545,2.545,0,0,1,96.263,43.066Zm0.865,30.585c-0.108,0-.216.324-0.324,0.324a0.335,0.335,0,0,1-.216.108H96.479l0.216-.108a1.292,1.292,0,0,1,.432-0.865,0.378,0.378,0,0,1,.108-0.216,0.807,0.807,0,0,1,.324.324C97.128,73.543,97.128,73.543,97.128,73.651Zm-0.865-28.1a4.259,4.259,0,0,1,.973-1.189,4.539,4.539,0,0,1-.756,1.3A0.334,0.334,0,0,1,96.263,45.552ZM91.724,73.11V73H92.8a5.74,5.74,0,0,0,1.513-.108,4.238,4.238,0,0,1-1.837.216H91.724Zm5.62-29.18c0,0.108.108,0.216,0.108,0.324a0.106,0.106,0,0,1-.108.108H97.236C97.236,44.039,97.236,43.931,97.344,43.931Zm-4.215,1.837a0.106,0.106,0,0,1,.108-0.108Zm53.712-23.992a1.051,1.051,0,0,1-.648-0.54,93.777,93.777,0,0,0-14.806,2.378,6.651,6.651,0,0,1-1.405.108h-0.216a0.287,0.287,0,0,1-.325-0.324V23.072c0.541-1.3.649-1.945,1.081-3.242l2.378-7.349a12.439,12.439,0,0,0,.648-1.837V10.32a0.176,0.176,0,0,0-.216-0.216,1.439,1.439,0,0,1-.324-0.54,0.271,0.271,0,0,0-.216-0.324,0.572,0.572,0,0,0-.324.216,1.284,1.284,0,0,1-.541.54,1.439,1.439,0,0,1-.54.324,7.571,7.571,0,0,1,.864-1.081,0.377,0.377,0,0,1,.108-0.216l-0.108-.108c-0.108,0-.108.108-0.216,0.108h-0.216V9.131a0.572,0.572,0,0,0-.324.216,0.917,0.917,0,0,1,.324-0.324,1.166,1.166,0,0,0-.756-0.324h-0.217a1.438,1.438,0,0,0-.972.648,8.951,8.951,0,0,0-1.189,1.621,25.118,25.118,0,0,0-2.053,4.215c-1.405,3.026-1.946,5.62-3.135,8.538-0.648,1.945-5.619,2.486-7.565,3.026a18.5,18.5,0,0,0-2.918.973,1.133,1.133,0,0,0-.324.432,0.562,0.562,0,0,0-.216.432V28.8a1.827,1.827,0,0,1,.324.648,1.636,1.636,0,0,0,1.513.757h0.432l6.809-1.189h0.108c0.216,0,.324.108,0.324,0.432v0.216a44.291,44.291,0,0,1-1.08,5.188c0,0.54-.433,1.729-0.433,2.27a2.66,2.66,0,0,1-.432,1.189,3.52,3.52,0,0,1-.432,1.513v0.324a10.159,10.159,0,0,1-.865,3.458v0.108a0.378,0.378,0,0,1-.108.216,0.409,0.409,0,0,1,.216.216L118.2,49.01v0.108l-0.541,2.81c-0.216,2.161-1.3,7.781-1.837,10.159,0,0.324-.108.757-0.108,1.189l-0.756,5.3a4.057,4.057,0,0,0-.108,1.081v1.3a26.545,26.545,0,0,0-.325,2.918v0.216c0,1.081-.324,4.647-0.324,6.917a3.277,3.277,0,0,0,.216,1.837,1.374,1.374,0,0,1,.757.432,1.132,1.132,0,0,0,.432.324,4.517,4.517,0,0,1,1.081.432c0.108,0.324,1.3-6.809,1.513-7.025a1.227,1.227,0,0,0,.324-0.865V75.92c0-1.189.649-2.378,0.865-3.566a23.153,23.153,0,0,0,.432-3.458V68.679a1.537,1.537,0,0,1,.216-0.648,6.65,6.65,0,0,0,.108-1.513c0-.324.216-0.648,0.216-0.973,0.433-2.81,1.729-8.862,2.162-11.564,0.324-1.621.54-3.134,0.972-4.755,0.541-1.945.757-3.891,1.3-5.836a1.84,1.84,0,0,1,.108-0.756l1.3-5.3c0.433-1.513,1.405-6.917,1.729-8.43a2.766,2.766,0,0,0,.541-1.3,1.047,1.047,0,0,1,.864-0.756,3.892,3.892,0,0,1,1.189-.216l7.673-1.945c0.865-.216,8-1.729,8.538-2.27a0.579,0.579,0,0,0,.324-0.432A0.232,0.232,0,0,0,146.841,21.776Zm-11.564,28.1c-0.216,1.189-.865,2.486-0.973,3.458a15.642,15.642,0,0,1-.54,3.242,28.989,28.989,0,0,0-.757,2.918,8.74,8.74,0,0,1-.432,2.7,17.011,17.011,0,0,1-.757,2.161c0,0.216.108,0.432,0.108,0.648a7.774,7.774,0,0,1-.432,2.053,6.166,6.166,0,0,1-.108,1.4,6.652,6.652,0,0,0-.108,1.405v0.54a52.5,52.5,0,0,0-1.189,5.3,0.818,0.818,0,0,0-.108.432l-0.864,5.079a8.663,8.663,0,0,0-.109,1.729,1.069,1.069,0,0,0,1.081.865h0.216a0.771,0.771,0,0,1,.649.324c0,0.324.108,0.54,0.324,0.54,0.108,0,.216-0.108.324-0.108s0.216,0,.216.108a1.651,1.651,0,0,0,.649.432h0.108a1.079,1.079,0,0,0,.432-0.54,5.19,5.19,0,0,0,.541-1.189,3.437,3.437,0,0,0,.216-1.405c0.432-1.945.648-3.783,1.188-5.728V76.028a16.728,16.728,0,0,1,.649-3.35c0-.432.324-0.973,0.324-1.405V71.057a18.892,18.892,0,0,1,1.081-4.755l0.648-2.7a9.464,9.464,0,0,0,.216-1.729c0.973-2.918,1.622-5.944,2.486-9.186a3.648,3.648,0,0,0,.432-1.3,9.649,9.649,0,0,1,.325-2.378l2.161-8c0.216-.865.649-1.945,0.865-2.918,0.108-.973.324-1.945,0.54-3.026,0.108-1.081.865-1.837,1.3-2.81a60.218,60.218,0,0,1,5.3-6.484,11.7,11.7,0,0,1,2.269-2.378,31.3,31.3,0,0,1,5.4-5.3c0.972-.973,2.161-1.729,3.35-2.7a28.726,28.726,0,0,1,6.484-3.458,14.224,14.224,0,0,1,2.486-.54h0.216a0.755,0.755,0,0,1,.865.649l-0.216,2.378a17.965,17.965,0,0,1-1.729,4,42.279,42.279,0,0,1-5.4,8.322c-2.918,3.35-5.62,6.7-8.862,9.835a22,22,0,0,0-2.7,2.81c-1.837,1.729-3.458,3.566-5.3,5.3l-1.405,1.729a1.19,1.19,0,0,0-.324.648,1.143,1.143,0,0,0,.433.648,1.334,1.334,0,0,1,.864,1.189,0.843,0.843,0,0,1,.432.432,0.773,0.773,0,0,0,.649.324,3.336,3.336,0,0,0,.864-0.216c0.541-.108.865-0.54,1.622-0.757a24.679,24.679,0,0,1,7.889-3.566,12.214,12.214,0,0,1,4.863-.973,11.1,11.1,0,0,1,1.837.108c2.054,0.432,2.378.973,3.027,3.026a25.658,25.658,0,0,1,.324,5.079,10.308,10.308,0,0,1-.973,3.891,0.817,0.817,0,0,0-.108.432,22.28,22.28,0,0,1-3.026,6.484,26.208,26.208,0,0,1-2.7,3.35A43.759,43.759,0,0,1,156.243,73c-1.189.973-2.594,1.837-3.891,2.918a21.589,21.589,0,0,1-4.863,2.162h-0.432a1.259,1.259,0,0,1-.757-0.216,4.244,4.244,0,0,1-1.081-1.729,12.083,12.083,0,0,1-.972-4.755,18.557,18.557,0,0,1,1.3-6.268,10.626,10.626,0,0,1,.54-1.729,37.143,37.143,0,0,1,3.134-4.431,20.678,20.678,0,0,1,3.459-2.918,0.682,0.682,0,0,0,.54-0.54,0.216,0.216,0,0,0-.108-0.216,0.335,0.335,0,0,0,.108-0.216,1.33,1.33,0,0,0-.54-0.216,0.571,0.571,0,0,1-.325-0.216c0-.216,0-0.324-0.432-0.432a4.674,4.674,0,0,1-.54-0.108,3.352,3.352,0,0,0-.865-0.216,1.44,1.44,0,0,0-.865.324,21.843,21.843,0,0,0-4.971,4.107,24.5,24.5,0,0,0-3.891,7.673c-0.216,1.189-.648,2.7-0.864,4.215a31.014,31.014,0,0,0,.432,4.215,12.38,12.38,0,0,0,6.16,6.7A6.7,6.7,0,0,0,149,81.54a19.428,19.428,0,0,0,2.378-.216l4.755-1.945a29.8,29.8,0,0,0,6.16-4.863,43.052,43.052,0,0,0,6.268-6.917,31.593,31.593,0,0,0,3.567-6.16,25.49,25.49,0,0,0,1.513-7.673c0-.432.108-0.865,0.108-1.3a15.789,15.789,0,0,0-.757-4.215,8.71,8.71,0,0,0-4.106-5.62,13.815,13.815,0,0,0-6.377-1.945h-2.918a5.416,5.416,0,0,1-1.3.216h-0.108c-0.108,0-.108-0.108-0.108-0.216a2.337,2.337,0,0,1,.865-0.973,29.876,29.876,0,0,1,2.594-2.7,110.27,110.27,0,0,0,8.537-10.267,31.253,31.253,0,0,0,5.512-11.456c0-.432.108-0.865,0.108-1.3a6.316,6.316,0,0,0-1.405-4.107,5.982,5.982,0,0,0-4.323-1.945,5.266,5.266,0,0,0-1.3.108,16.691,16.691,0,0,0-2.485.648c-1.081.54-1.838,1.081-2.81,1.513a38.68,38.68,0,0,0-4.864,2.918,62.415,62.415,0,0,0-6.16,5.728c-1.189,1.189-2.269,2.053-3.35,3.35l-0.865.973a0.255,0.255,0,0,1-.324.216,1.09,1.09,0,0,1-.108-0.324V22.316c0.973-3.242,1.513-6.268,2.378-9.294a2.139,2.139,0,0,1,.216-1.081V11.292a2.112,2.112,0,0,1,.108-0.757c-0.216-.756-0.432-1.729-1.621-1.945a0.431,0.431,0,0,1-.432-0.216,1.475,1.475,0,0,0-1.189.432c-0.865,2.378-1.513,4.431-2.378,6.592a13.081,13.081,0,0,1-1.189,3.458v0.324a0.794,0.794,0,0,1-.216.648c-0.432,1.081-.54,2.27-1.081,3.566a50.254,50.254,0,0,0-1.513,5.188l-1.621,5.62c-0.432,1.837-.864,3.783-1.513,5.728a50.632,50.632,0,0,1-1.3,5.512V45.66C136.249,47.281,135.493,48.686,135.277,49.875ZM159.7,34.96a3.672,3.672,0,0,0,.649-0.648,6.623,6.623,0,0,1,.432-0.648,1.132,1.132,0,0,0,.324-0.432,3.156,3.156,0,0,0,.865-0.432,0.365,0.365,0,0,0,.216-0.324,2.7,2.7,0,0,1,1.189-1.081,1.229,1.229,0,0,1-1.081,1.081l-0.216.648a27.052,27.052,0,0,1-3.458,3.566,5.357,5.357,0,0,1-1.946,1.837,4.913,4.913,0,0,1-1.729,1.945,15.365,15.365,0,0,1-2.269,2.378H152.46c-0.108,0-.108,0-0.108-0.108V42.418a1.135,1.135,0,0,1,.433-0.324,3.149,3.149,0,0,0,1.405-1.513,1.157,1.157,0,0,1,.648-0.216l0.648-1.189H155.27l0.216-.432v0.432l0.541-.432h0.108l0.54-.324a11.4,11.4,0,0,1,.757-1.189h-0.324a0.958,0.958,0,0,0,.432-0.54,0.975,0.975,0,0,1-.108.54l0.54-.432c0.108-.108.432-0.108,0.54-0.216,0.109-.432.649-0.756,0.757-1.189a0.533,0.533,0,0,1-.324-0.108,0.958,0.958,0,0,0,.54-0.432,1.537,1.537,0,0,0-.216.648ZM149.434,23.829a0.76,0.76,0,0,1,.541-0.432,0.573,0.573,0,0,0-.216-0.324l0.324-.432a0.993,0.993,0,0,1-.108.648,0.924,0.924,0,0,0,.324-0.648,1.154,1.154,0,0,1,.54-0.324h0.108a0.106,0.106,0,0,1,.108-0.108l0.649-.973a1.225,1.225,0,0,0,.648-0.648L153,20.371a0.811,0.811,0,0,1,.108-0.54h-0.216a0.4,0.4,0,0,1,.324-0.108c0.108,0,0,0,0,.108a1.654,1.654,0,0,0,.54-0.757,1.816,1.816,0,0,0,.865-0.756H154.19c0.108,0,.216-0.108.324-0.108a0.106,0.106,0,0,1,.108.108,0.913,0.913,0,0,0,.648-0.216,1.372,1.372,0,0,0,.108-0.648l0.757-.216a1.44,1.44,0,0,0,.324-0.54,1.306,1.306,0,0,0,.973-0.757,3.064,3.064,0,0,1,.972-0.648,0.819,0.819,0,0,0,.433-0.108,3.82,3.82,0,0,1,1.729-1.4v0.108a2.835,2.835,0,0,1-1.729,1.4,1.118,1.118,0,0,1-.433.108,5.243,5.243,0,0,1-2.161,1.945,1.03,1.03,0,0,1-.865.864,6.2,6.2,0,0,1-2.269,2.162,1.44,1.44,0,0,0-.324.54L149.11,24.8l-0.324.54A2.037,2.037,0,0,1,149,24.477,0.992,0.992,0,0,1,149.434,23.829Zm13.4,46.147c-0.432.324-.648,0.324-0.864,0.54a3.238,3.238,0,0,1,.432-0.865,39.919,39.919,0,0,0,5.4-7.133,1.706,1.706,0,0,0,.54-0.648h0.324l-0.108.108a4.508,4.508,0,0,1-.216.648,33.471,33.471,0,0,1-3.891,5.728A7.7,7.7,0,0,0,162.835,69.976Zm0.649,1.3a0.592,0.592,0,0,1-.541.432,4.563,4.563,0,0,1,.649-0.865,34.5,34.5,0,0,0,4.215-5.4,0.106,0.106,0,0,0,.108-0.108,0.377,0.377,0,0,0,.216-0.108,0.106,0.106,0,0,0,.108.108v0.108a0.357,0.357,0,0,1-.324.432A23.161,23.161,0,0,1,163.484,71.273ZM145.76,59.493a3.422,3.422,0,0,1,.648-0.54l-0.432.865a34.468,34.468,0,0,0-2.053,3.35,0.338,0.338,0,0,1-.217.108H143.6V62.951a0.915,0.915,0,0,1,.325-0.54C144.463,61.438,145.111,60.466,145.76,59.493ZM160.782,13.67a4.456,4.456,0,0,1,2.594-1.621,5.82,5.82,0,0,1-2.486,1.621,0.216,0.216,0,0,1-.216.108A0.106,0.106,0,0,0,160.782,13.67ZM147.273,26.315a2.216,2.216,0,0,0,.973-0.54,2.7,2.7,0,0,1-1.189,1.513A1.778,1.778,0,0,0,147.273,26.315Zm11.023-9.4a2.061,2.061,0,0,1,1.405-.973A1.665,1.665,0,0,1,158.3,16.912Zm2.27-1.4a1.185,1.185,0,0,1,1.189-.973A2.1,2.1,0,0,1,160.566,15.507ZM146.841,60.25a2.5,2.5,0,0,1,.864-1.189A2.031,2.031,0,0,1,146.841,60.25Zm11.131-21.182a1.572,1.572,0,0,1-.973.648,0.929,0.929,0,0,1,.757-0.648h0.216Zm7.349,26.37a1.254,1.254,0,0,1,.649-0.865A1.077,1.077,0,0,1,165.321,65.437Zm-19.237-4.215a1.365,1.365,0,0,1,.648-0.865A1.342,1.342,0,0,1,146.084,61.222Zm19.237-32.1a0.579,0.579,0,0,1-.54.54A0.579,0.579,0,0,1,165.321,29.125Zm-27.559,21.4a0.106,0.106,0,0,1-.108-0.108,1.607,1.607,0,0,1-.108-0.648,0.232,0.232,0,0,0,.216-0.216v0.973ZM166.4,63.708a0.877,0.877,0,0,1-.432.865A2.128,2.128,0,0,1,166.4,63.708Zm-2.486-32.962a0.494,0.494,0,0,1,.432-0.54A0.484,0.484,0,0,1,163.916,30.746ZM157,39.716a0.593,0.593,0,0,1-.432.648A0.782,0.782,0,0,1,157,39.716Zm-8.753-13.941a0.494,0.494,0,0,1,.54-0.432A0.582,0.582,0,0,1,148.246,25.774Zm17.075,3.35a0.8,0.8,0,0,1,.54-0.649A1.107,1.107,0,0,1,165.321,29.125Zm1.621-2.053c-0.324.324-.324,0.648-0.648,0.973A1.242,1.242,0,0,1,166.942,27.071ZM166.4,63.708c0-.108.216-0.324,0.216-0.432a1.087,1.087,0,0,0,.324-0.108v0.216ZM160.89,36.041a1.274,1.274,0,0,1-.54.54A0.579,0.579,0,0,1,160.89,36.041Zm-10.267-14.05c0.108-.108.432-0.108,0.54-0.216a0.82,0.82,0,0,1-.216.432Zm12.753,9.4a0.685,0.685,0,0,1,.54-0.648A2.867,2.867,0,0,1,163.376,31.394Zm2.918-3.35c0,0.216-.108.216-0.433,0.432A0.4,0.4,0,0,1,166.294,28.044Zm-6.377,6.16a1.537,1.537,0,0,1-.216.648h-0.216ZM149.434,23.829a0.573,0.573,0,0,1-.216-0.324,0.808,0.808,0,0,1,.324-0.324A1.372,1.372,0,0,0,149.434,23.829Zm9.511,14.158a0.718,0.718,0,0,1-.541.432A1.172,1.172,0,0,1,158.945,37.987Zm5.4-7.781a1.081,1.081,0,0,1,.433-0.54A0.717,0.717,0,0,1,164.348,30.205ZM145.76,61.546a0.916,0.916,0,0,0,.324-0.324c0,0.108-.108.324-0.108,0.432l-0.108.108C145.76,61.763,145.76,61.655,145.76,61.546Zm1.3-3.458a2.871,2.871,0,0,1-.541.648A1.444,1.444,0,0,1,147.057,58.088ZM160.35,36.582a2.554,2.554,0,0,0-.541.54A0.562,0.562,0,0,1,160.35,36.582ZM162.4,72.246a2.206,2.206,0,0,0,.54-0.54C162.943,72.03,162.835,72.03,162.4,72.246ZM156.243,40.8c0-.216,0-0.432.324-0.432ZM157,18.209a0.76,0.76,0,0,1-.54.432Zm5.188,16.211a1.079,1.079,0,0,1-.432.54Zm-2.81,2.918a0.453,0.453,0,0,1-.324.432Zm-1.837-.648a0.377,0.377,0,0,0,.216-0.108,0.408,0.408,0,0,1,.216.216A0.816,0.816,0,0,0,157.54,36.69Zm-0.432-20.75c0-.108,0-0.108.108-0.108a0.334,0.334,0,0,1,.216.108h-0.324Zm0.324,1.945a0.579,0.579,0,0,1,.324-0.432ZM159.917,34.2a0.65,0.65,0,0,1,.433.108A0.653,0.653,0,0,1,159.917,34.2Zm-12.86-6.917V27.5l-0.108.108V27.4ZM156.135,16.7a0.106,0.106,0,0,1,.108-0.108,0.377,0.377,0,0,0,.216.108h-0.324Zm-1.081.756c0.108,0,.108-0.108.216-0.108l0.108,0.108h-0.324Zm-4.647,4.755a1.09,1.09,0,0,1-.108.324h-0.108A0.573,0.573,0,0,0,150.407,22.208Zm5.4,16.319a0.216,0.216,0,0,1,.216.108A0.377,0.377,0,0,1,155.811,38.527ZM161,35.717c0,0.108-.108.216-0.108,0.324A0.4,0.4,0,0,1,161,35.717Zm4.107,30.044v0.108C165.105,65.761,165,65.761,165.105,65.761Zm24.209,4a5.771,5.771,0,0,0,4.107-1.729c0.324-.648.864-1.189,1.189-1.729a25.105,25.105,0,0,0,1.945-3.783,24.534,24.534,0,0,0,1.189-4,16.257,16.257,0,0,0,.972-3.783c0-.54.108-0.54,0.649-0.648a7.138,7.138,0,0,0,1.513-.108,18.113,18.113,0,0,0,4-.648,12.3,12.3,0,0,0,3.242-1.405,9.832,9.832,0,0,0,2.593-1.729,0.849,0.849,0,0,1,.433-0.432,0.3,0.3,0,0,1,.216-0.324c0-.108.108-0.108,0.108-0.216a0.232,0.232,0,0,0-.216-0.216,0.4,0.4,0,0,0-.324.108l-0.108.108c-0.217,0-.217-0.108-0.217-0.108V48.9a0.365,0.365,0,0,0-.216-0.324h-0.216c-0.108,0-.108.216-0.216,0.216,0,0-.108,0-0.108-0.216h-0.216c-0.108,0-.108,0-0.108-0.108H209.2a0.653,0.653,0,0,0-.648.324l-0.865.648a18.438,18.438,0,0,1-2.053.973,9.226,9.226,0,0,1-2.594.973c-1.3.216-2.485,0.432-3.782,0.757-0.325,0-.433,0-0.433-0.324V51.6a0.65,0.65,0,0,1,.108-0.432,4.578,4.578,0,0,1-.432-1.3,1.887,1.887,0,0,0-1.081-1.4,2.577,2.577,0,0,0-.972-0.216,2.356,2.356,0,0,0-.649-0.108,3.438,3.438,0,0,0-1.513.216c-1.405.54-2.485,1.3-2.7,2.486v0.324a0.65,0.65,0,0,0-.108.432,0.964,0.964,0,0,0,.541.865l0.54,0.432a12.327,12.327,0,0,0,2.054,1.081c0.432,0.108.54,0.216,0.54,0.432v0.54c-0.108.648-.324,1.081-0.432,1.621a10.707,10.707,0,0,1-.865,2.81l-1.189,2.594a18.071,18.071,0,0,1-2.7,4.323,6.56,6.56,0,0,1-1.08.757,0.9,0.9,0,0,1-.757.324,2.125,2.125,0,0,1-.864-0.432l-0.433-.324a3.873,3.873,0,0,1-.432-1.189,2.925,2.925,0,0,1-.324-1.621V63.06a1.406,1.406,0,0,1,0-1.081L186.4,58.3c0.324-1.081.324-2.053,0.648-3.026,0-.756.108-1.3,0.108-1.837a23.4,23.4,0,0,0,1.3-3.891c0.325-.648.433-1.621,0.757-2.27,0.54-1.189,1.405-2.594,1.945-4a9.571,9.571,0,0,1,1.3-1.837V41.229a0.81,0.81,0,0,0-.108-0.54,1.337,1.337,0,0,1-.324-0.216,2.056,2.056,0,0,0-.973-0.324H190.5a2.039,2.039,0,0,0-.865-0.216,1.725,1.725,0,0,0-1.3.432l-0.864.648c-0.541.756-1.189,1.729-1.838,2.486-0.648,1.081-1.3,2.378-2.053,3.566a0.335,0.335,0,0,0-.108.216,1.615,1.615,0,0,1-.324.757,20.184,20.184,0,0,1-.757,2.378,26,26,0,0,0-1.189,3.458c0,0.324-.108.757-0.108,1.3a4.6,4.6,0,0,0-.216,1.189l-0.324,2.27a0.3,0.3,0,0,1-.216.324c0,0.324-.108.757-0.108,0.973,0,0.108-.108.216-0.108,0.324a1.827,1.827,0,0,0,.216.54,4.057,4.057,0,0,0-.108,1.081v1.081a0.216,0.216,0,0,0,.108.216c0,0.432.216,0.865,0.216,1.621a4,4,0,0,0,1.729,2.594,7.324,7.324,0,0,0,2.594,1.3L186.072,69a10.587,10.587,0,0,0,2.918.757h0.324Zm0.324-28.639a0.106,0.106,0,0,0,.108.108,0.82,0.82,0,0,1-.216.432c-0.973,1.4-1.513,2.81-2.486,4.323a21.588,21.588,0,0,0-1.945,4.971,29.7,29.7,0,0,0-1.405,5.079,12.365,12.365,0,0,1-.54,2.594,5.493,5.493,0,0,1-.324,1.837v0.108l-0.109-.108V60.033a17.167,17.167,0,0,0,.325-2.486c0.216-.865.216-1.837,0.54-3.026a11.772,11.772,0,0,0,.757-2.594,32.886,32.886,0,0,1,3.674-8.538,8.669,8.669,0,0,1,1.405-2.053Zm-2.377,2.486c0-.108.108-0.108,0.108-0.216V43.5c0,0.216-.108.432-0.108,0.648a13.033,13.033,0,0,0-2.162,4.215,23.884,23.884,0,0,0-1.513,4.431c-0.324,1.081-.54,2.27-0.865,3.242V56.9a13.064,13.064,0,0,1-.324,1.513v0.973l-0.216.432V58.412a4.013,4.013,0,0,1,.216-0.973,18.175,18.175,0,0,1,.433-2.378,5.691,5.691,0,0,1,.432-1.945,25.76,25.76,0,0,1,3.566-8.646A1.634,1.634,0,0,1,187.261,43.606Zm6.052,20.318a28.358,28.358,0,0,0,2.269-4.863,8.2,8.2,0,0,1,.649-2.162l0.216-.108V56.9a0.975,0.975,0,0,1-.108.54,24.592,24.592,0,0,1-2.81,6.484,1.437,1.437,0,0,1-.649.973Zm-2.27-22.263c0,0.108,0,.108-0.216.216a32.659,32.659,0,0,0-2.7,4.647v0.108c-0.108,0-.108,0-0.108-0.108V46.416a15.884,15.884,0,0,1,2.27-4.215,2.261,2.261,0,0,0,.432-0.648Zm3.026,23.452c0.541-1.3,1.081-2.378,1.405-3.35l0.649-1.405h0.108v0.324a23.55,23.55,0,0,1-1.621,3.782,3.412,3.412,0,0,1-.433.648C194.177,65.221,194.177,65.113,194.069,65.113Zm-0.432-14.05h-0.216a0.106,0.106,0,0,1-.108-0.108l0.432-.865h0.324Zm0.756,9.727a1.1,1.1,0,0,1-.54,1.081A2.016,2.016,0,0,1,194.393,60.79Zm-6.268-18.264a1.921,1.921,0,0,1-.756.865A1.167,1.167,0,0,1,188.125,42.526Zm6.809,17.184a0.647,0.647,0,0,1-.324.648,0.216,0.216,0,0,1,.108-0.216A0.432,0.432,0,0,1,194.934,59.709Zm0.216-.216a0.408,0.408,0,0,0-.216.216V59.385a0.572,0.572,0,0,1,.216-0.324v0.432Zm-0.432-8.646a0.409,0.409,0,0,1,.216-0.216h0.108a0.365,0.365,0,0,1-.216.324Zm0.756,7.025a1.141,1.141,0,0,1-.216.54c0-.216.108-0.324,0.108-0.648h0.108v0.108Zm-0.216.973c0,0.108-.108.108-0.108,0.216V58.737a0.4,0.4,0,0,1,.108-0.324v0.432Zm-0.648,1.513a0.431,0.431,0,0,1-.217.432A0.815,0.815,0,0,1,194.61,60.358ZM193.745,62.3c0-.108,0-0.324.108-0.324A0.305,0.305,0,0,1,193.745,62.3ZM192.88,50.739c0.217,0,.217,0,0.217.108H192.88V50.739Zm20.427-6.809a0.216,0.216,0,0,0,.108-0.216V43.5H213.2a0.817,0.817,0,0,0-.108-0.432c0-.108.108-0.216,0.108-0.324a1.331,1.331,0,0,1-.216-0.54,0.8,0.8,0,0,0-.757.324,27.185,27.185,0,0,0-2.161,3.134l-2.054,4.107a15.467,15.467,0,0,0-1.3,4.863,23.441,23.441,0,0,0-.972,7.241,9.468,9.468,0,0,0,.756,3.458,7.7,7.7,0,0,0,1.189,1.837,6.607,6.607,0,0,0,1.513.756,3.652,3.652,0,0,0,1.189.757,4.43,4.43,0,0,0,1.189.108,3.454,3.454,0,0,0,1.513-.324l1.621-1.513a22.865,22.865,0,0,0,1.513-1.837,34.152,34.152,0,0,0,2.161-2.918c1.729-1.945,3.567-4.215,5.62-6.376a27.85,27.85,0,0,1,3.35-3.891l0.108-.108a1.813,1.813,0,0,1,.973-0.757,7.456,7.456,0,0,0,1.729-3.458c0-.216.108-0.54,0.108-0.756V46.632a4.119,4.119,0,0,0-.324-1.081l-0.54.757a67.953,67.953,0,0,1-4.647,5.3,49.231,49.231,0,0,0-3.783,4.323,48.769,48.769,0,0,0-4.647,4.755,49.7,49.7,0,0,1-4.215,4.107,1.752,1.752,0,0,1-.973.54c-0.108,0-.216-0.108-0.324-0.108V63.6a25.3,25.3,0,0,1,.865-5.836c0.648-2.7,1.621-5.3,2.377-8a37.932,37.932,0,0,0,1.621-4.539,2.26,2.26,0,0,0,.433-1.189,0.5,0.5,0,0,0-.541-0.216,0.106,0.106,0,0,1-.108.108,0.377,0.377,0,0,0-.216.108V43.822a0.8,0.8,0,0,0-.756-0.757c-0.108,0-.108.108-0.217,0.432a1.243,1.243,0,0,1-.648.757,21.807,21.807,0,0,1-1.945,3.891,63.728,63.728,0,0,0-2.27,6.376,9.958,9.958,0,0,0-.54.865,14.227,14.227,0,0,1,.54-2.486,35.8,35.8,0,0,1,3.134-7.241,0.65,0.65,0,0,1-.108-0.432,0.817,0.817,0,0,1,.108-0.432,0.843,0.843,0,0,0-.432.324,0.966,0.966,0,0,1,.432-0.865V44.8A0.823,0.823,0,0,0,213.307,43.931Zm6.808-10.051a5.124,5.124,0,0,0-1.08-1.081,4,4,0,0,0-1.189-.54,0.521,0.521,0,0,0-.432-0.108,0.7,0.7,0,0,0-.649.216,3.8,3.8,0,0,0-1.4,2.918,0.457,0.457,0,0,0,.324.54c0.325,0.324.757,0.216,0.757,0.648a1.673,1.673,0,0,0,.864.865v0.324a0.913,0.913,0,0,1,.325.324,2.2,2.2,0,0,1,.54-0.108A3.237,3.237,0,0,1,218.6,36.8a1.159,1.159,0,0,1,.217-1.3,1.461,1.461,0,0,1,.972-0.973A1.826,1.826,0,0,1,220.115,33.88Zm-9.834,14.806a3.6,3.6,0,0,1,1.189-2.378A3.376,3.376,0,0,1,210.281,48.686Zm-1.3,3.35a4.294,4.294,0,0,1,.973-2.378A4.3,4.3,0,0,1,208.984,52.036Zm8.321-18.156a0.4,0.4,0,0,0-.108-0.324,0.431,0.431,0,0,1,.217-0.432h-0.325a0.5,0.5,0,0,1,.541-0.216v0.216h0.324l0.108-.108v0.108C218.062,33.556,217.954,33.772,217.305,33.88Zm-4,10.051c-0.108.108-.433,0.108-0.757,0.324A0.647,0.647,0,0,1,213.2,43.5,0.817,0.817,0,0,1,213.307,43.931Zm3.35,19.453c0,0.216-.108.324-0.648,0.648a0.849,0.849,0,0,1,.648-0.865v0.216Zm9.619-12.212a2.33,2.33,0,0,1,1.08-.865A1.435,1.435,0,0,1,226.276,51.171Zm3.242-3.675V47.065a0.761,0.761,0,0,1,.54-0.432A0.963,0.963,0,0,1,229.518,47.5Zm-5.728,6.484,0.108-.324c0-.324.216-0.432,0.648-0.54A2,2,0,0,1,223.79,53.981Zm4.863-5.3a1.571,1.571,0,0,1,.649-0.973A1.324,1.324,0,0,1,228.653,48.686Zm-0.972,1.081a0.216,0.216,0,0,1,.108-0.216,0.8,0.8,0,0,1,.54-0.648A0.965,0.965,0,0,1,227.681,49.767Zm-8.106,10.159a1.073,1.073,0,0,1,.648-0.864A1.121,1.121,0,0,1,219.575,59.925Zm5.728-6.7a1.666,1.666,0,0,1,.756-0.757A0.812,0.812,0,0,1,225.3,53.225Zm-4.755,4.323a1.923,1.923,0,0,1-.865.757A1.166,1.166,0,0,1,220.548,57.548Zm7.781-7.349a0.7,0.7,0,0,1-.648.54,0.974,0.974,0,0,1,.648-0.648V50.2ZM217.414,60.9c0,0.108.108,0.108,0.108,0.216a0.762,0.762,0,0,1-.541.432A0.729,0.729,0,0,1,217.414,60.9Zm-2.594,4.431a3.176,3.176,0,0,1,.864-0.865A1.373,1.373,0,0,1,214.82,65.329Zm3.674-4.647a1.522,1.522,0,0,1,.757-0.648A0.927,0.927,0,0,1,218.494,60.682Zm-9.942-6.376a0.233,0.233,0,0,1-.217.216,0.4,0.4,0,0,1-.108-0.324,0.817,0.817,0,0,1,.108-0.432A1.836,1.836,0,0,1,208.552,54.306Zm3.35-8.538c0-.108-0.108-0.324-0.108-0.432s0.108-.108.324-0.216A0.7,0.7,0,0,1,211.9,45.768Zm4.971,17.076a0.8,0.8,0,0,1,.649-0.648A0.975,0.975,0,0,1,216.873,62.843Zm8.646-10.7c0,0.108,0,.108-0.216.216V52.036l0.324-.324A2.455,2.455,0,0,1,225.519,52.144ZM211.47,46.308a0.494,0.494,0,0,1,.432-0.54A0.761,0.761,0,0,1,211.47,46.308Zm2.593-3.566V42.634l-0.108.108c0,0.108-.216.216-0.216,0.324a0.918,0.918,0,0,0-.324.324,0.635,0.635,0,0,1,.54-0.216,0.335,0.335,0,0,1-.108-0.216A0.409,0.409,0,0,1,214.063,42.742Zm5.08,15.995a0.806,0.806,0,0,0,.324-0.324c0.108,0,.108-0.108.216-0.108a0.82,0.82,0,0,0-.216.432,0.533,0.533,0,0,0-.324.108V58.737Zm-10.051-6.484a0.573,0.573,0,0,1-.216.324V52.252a0.216,0.216,0,0,1,.108-0.216C208.984,52.144,209.092,52.144,209.092,52.252Zm-0.432,1.081a1.012,1.012,0,0,1,.108-0.757A1.6,1.6,0,0,1,208.66,53.333Zm0.216,2.486a0.4,0.4,0,0,1-.108.324V55.711a0.4,0.4,0,0,1,.108-0.324v0.432Zm8.97,6.052,0.432-.865A1.628,1.628,0,0,1,217.846,61.871Zm-7.889-12.212c0-.216,0-0.432.216-0.432A0.82,0.82,0,0,1,209.957,49.658Zm10.7,9.078a0.232,0.232,0,0,0-.216.216c-0.217,0-.108.108-0.217,0.108a0.233,0.233,0,0,1,.217-0.216,1.183,1.183,0,0,0,.216-0.432v0.324Zm-3.675-25.4c0-.108,0-0.216.108-0.216a0.534,0.534,0,0,0,.108.324h-0.216V33.339Zm-2.269,32.206a0.831,0.831,0,0,1-.216.324,1.089,1.089,0,0,1,.108-0.324,0.409,0.409,0,0,0,.216-0.216C214.82,65.437,214.712,65.437,214.712,65.545Zm9.4-10.807a0.377,0.377,0,0,1-.216.108c0.108,0,.108-0.108.216-0.324,0.108,0,.108-0.108.216-0.108Zm-15.779-.973c0-.324,0-0.324.108-0.432A0.522,0.522,0,0,1,208.335,53.765Zm11.024,6.268h-0.108a0.408,0.408,0,0,1,.216-0.216l0.108,0.108A0.334,0.334,0,0,1,219.359,60.033Zm-1.513.432h0.108a0.408,0.408,0,0,0-.216.216,0.4,0.4,0,0,0-.324.108ZM210.281,49.01a0.106,0.106,0,0,1-.108.108V48.686C210.173,48.794,210.281,48.9,210.281,49.01Zm6.376,12.861a0.106,0.106,0,0,0,.108-0.108v0.108a1.553,1.553,0,0,0-.216.324A1.089,1.089,0,0,1,216.657,61.871Zm5.62-5.188a0.216,0.216,0,0,0-.216.108,0.305,0.305,0,0,0,.108-0.324h0.108v0.216Zm7.349-8.106a1.087,1.087,0,0,0-.324.108,1.335,1.335,0,0,1,.324-0.216v0.108Zm-6.593,6.052,0.325-.324v0.108a0.489,0.489,0,0,0-.325.324V54.63ZM218.6,59.493l0.108-.108v0.108a0.408,0.408,0,0,0-.216.216C218.494,59.6,218.6,59.6,218.6,59.493Zm0.541-.648v0.216A0.108,0.108,0,0,1,219.143,58.845Zm-2.378,4.323h-0.108a0.572,0.572,0,0,0,.216-0.324A0.4,0.4,0,0,1,216.765,63.168Zm7.565-8.97a0.365,0.365,0,0,1,.324-0.216Zm-5.944,6.592V60.682h0.108A0.106,0.106,0,0,1,218.386,60.79Zm-10.267-6.052s0-.108.216-0.108c-0.216.108-.216,0.108-0.216,0.216V54.738Zm20.858-5.512a0.306,0.306,0,0,1,.217-0.216Zm-8.1,8.754a0.408,0.408,0,0,0,.216-0.216A0.408,0.408,0,0,1,220.872,57.98Zm4.431-4.755c-0.216.108-.324,0.108-0.324,0.216C224.979,53.333,225.087,53.333,225.3,53.225Zm-0.324-.54,0.108-.108A0.106,0.106,0,0,1,224.979,52.684ZM243.458,10.1a0.843,0.843,0,0,0-.432.324,1.071,1.071,0,0,0-1.189-.865c-0.432,0-.864.108-1.08,0.108h-0.108c-5.4,0-11.24,21.4-12.429,26.694-1.729,8.97-3.242,16.427-3.35,25.181a15.98,15.98,0,0,0,.973,6.593c1.3,2.81,1.945,3.35,3.458,3.891l0.54,0.216a0.216,0.216,0,0,0,.216.108l0.108,0.108c2.27-.108,6.809-3.134,8-4.647,4.647-5.62,7.457-7.889,10.807-16.1a1.635,1.635,0,0,0,.216-0.865,0.647,0.647,0,0,0-.756-0.648,0.334,0.334,0,0,0-.216-0.108l-3.783,5.62a59,59,0,0,1-6.917,9.078c-2.269,2.81-4.647,4.323-6.484,4.539a1.168,1.168,0,0,1-.648-0.108c0-.108-0.108-0.432-0.108-0.54a19.423,19.423,0,0,1-.433-4.539c0-.973.108-2.053,0.216-3.242a71.581,71.581,0,0,1,1.622-8.106,4.683,4.683,0,0,0,.108-0.54l0.756-1.621s3.783-11.564,3.783-11.78,2.593-8,2.7-8.105,2.054-6.593,2.054-6.593l1.945-5.728a29.344,29.344,0,0,0,.649-6.268V11.292A2.19,2.19,0,0,0,243.458,10.1ZM230.922,49.226l1.837-6.484a1.194,1.194,0,0,1-.108-0.757c0.108-4.863,7.133-28.315,8.97-27.991a1.008,1.008,0,0,1,.757.432,5.433,5.433,0,0,1-.433,1.4S231.03,49.226,230.922,49.226Zm1.405-21.29a2.521,2.521,0,0,1,1.081-1.3v0.54c0,0.54-.541.54-0.649,0.973-1.189,5.188-1.621,7.457-2.594,11.348-0.648,4-1.08,5.188-1.621,9.4-0.108.757-1.188,9.186-1.405,9.835,0,0.108-.108.108-0.108,0.216,0-.108-0.216-0.216-0.216-0.324a13.524,13.524,0,0,0,.324-2.053c0.649-5.512,1.189-11.672,2.594-16.967Zm1.3-2.594a27.522,27.522,0,0,1,1.837-5.512,34.621,34.621,0,0,1-1.837,5.944V25.342Z"></path></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/JustboilLogo.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const JustboilLogo = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = {
  __name: "FooterBar",
  __ssrInlineRender: true,
  setup(__props) {
    const year = (/* @__PURE__ */ new Date()).getFullYear();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({
        class: ["px-6 py-2", unref(containerMaxW)]
      }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$h, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center md:text-left"${_scopeId}><b${_scopeId}>©${ssrInterpolate(unref(year))}, <a href="https://justboil.me/" target="_blank"${_scopeId}>JustBoil.me</a>.</b>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div><div class="md:py-2"${_scopeId}><a href="https://justboil.me"${_scopeId}>`);
            _push2(ssrRenderComponent(JustboilLogo, { class: "w-auto h-8 md:h-6" }, null, _parent2, _scopeId));
            _push2(`</a></div>`);
          } else {
            return [
              createVNode("div", { class: "text-center md:text-left" }, [
                createVNode("b", null, [
                  createTextVNode("©" + toDisplayString(unref(year)) + ", ", 1),
                  createVNode("a", {
                    href: "https://justboil.me/",
                    target: "_blank"
                  }, "JustBoil.me"),
                  createTextVNode(".")
                ]),
                renderSlot(_ctx.$slots, "default")
              ]),
              createVNode("div", { class: "md:py-2" }, [
                createVNode("a", { href: "https://justboil.me" }, [
                  createVNode(JustboilLogo, { class: "w-auto h-8 md:h-6" })
                ])
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</footer>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/FooterBar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const layoutAsidePadding = "xl:pl-60";
const _sfc_main$1 = {
  __name: "LayoutAuthenticated",
  __ssrInlineRender: true,
  setup(__props) {
    const styleStore = useStyleStore();
    const isAsideMobileExpanded = ref(false);
    const isAsideLgActive = ref(false);
    router.on("navigate", () => {
      isAsideMobileExpanded.value = false;
      isAsideLgActive.value = false;
    });
    const menuClick = (event, item) => {
      if (item.isToggleLightDark) {
        styleStore.setDarkMode();
      }
      if (item.isLogout) {
        router.post(route("logout"));
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: {
          dark: unref(styleStore).darkMode,
          "overflow-hidden lg:overflow-visible": isAsideMobileExpanded.value
        }
      }, _attrs))}><div class="${ssrRenderClass([[
        layoutAsidePadding,
        { "ml-60 lg:ml-0": isAsideMobileExpanded.value }
      ], "w-screen min-h-screen pt-14 transition-position lg:w-auto bg-gray-50 dark:bg-slate-800 dark:text-slate-100"])}">`);
      _push(ssrRenderComponent(_sfc_main$9, {
        menu: unref(menuNavBar),
        class: [
          layoutAsidePadding,
          { "ml-60 lg:ml-0": isAsideMobileExpanded.value }
        ],
        onMenuClick: menuClick
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$a, {
              display: "flex lg:hidden",
              onClick: ($event) => isAsideMobileExpanded.value = !isAsideMobileExpanded.value
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$g, {
                    path: isAsideMobileExpanded.value ? unref(mdiBackburger) : unref(mdiForwardburger),
                    size: "24"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$g, {
                      path: isAsideMobileExpanded.value ? unref(mdiBackburger) : unref(mdiForwardburger),
                      size: "24"
                    }, null, 8, ["path"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$a, {
              display: "hidden lg:flex xl:hidden",
              onClick: ($event) => isAsideLgActive.value = true
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$g, {
                    path: unref(mdiMenu),
                    size: "24"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$g, {
                      path: unref(mdiMenu),
                      size: "24"
                    }, null, 8, ["path"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$a, { "use-margin": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$i, {
                    placeholder: "Search (ctrl+k)",
                    "ctrl-k-focus": "",
                    transparent: "",
                    borderless: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$i, {
                      placeholder: "Search (ctrl+k)",
                      "ctrl-k-focus": "",
                      transparent: "",
                      borderless: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$a, {
                display: "flex lg:hidden",
                onClick: withModifiers(($event) => isAsideMobileExpanded.value = !isAsideMobileExpanded.value, ["prevent"])
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$g, {
                    path: isAsideMobileExpanded.value ? unref(mdiBackburger) : unref(mdiForwardburger),
                    size: "24"
                  }, null, 8, ["path"])
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_sfc_main$a, {
                display: "hidden lg:flex xl:hidden",
                onClick: withModifiers(($event) => isAsideLgActive.value = true, ["prevent"])
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$g, {
                    path: unref(mdiMenu),
                    size: "24"
                  }, null, 8, ["path"])
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_sfc_main$a, { "use-margin": "" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$i, {
                    placeholder: "Search (ctrl+k)",
                    "ctrl-k-focus": "",
                    transparent: "",
                    borderless: ""
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        "is-aside-mobile-expanded": isAsideMobileExpanded.value,
        "is-aside-lg-active": isAsideLgActive.value,
        menu: unref(menuAside),
        onMenuClick: menuClick,
        onAsideLgCloseClick: ($event) => isAsideLgActive.value = false
      }, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(_sfc_main$2, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Get more with <a href="https://tailwind-vue.justboil.me/" target="_blank" class="text-blue-600"${_scopeId}>Premium version</a>`);
          } else {
            return [
              createTextVNode(" Get more with "),
              createVNode("a", {
                href: "https://tailwind-vue.justboil.me/",
                target: "_blank",
                class: "text-blue-600"
              }, "Premium version")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/Admin/LayoutAuthenticated.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Dashboard" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Head), { title: "Dashboard" })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
