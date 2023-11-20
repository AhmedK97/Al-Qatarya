import { mergeProps, unref, useSSRContext, ref, computed, watch, onMounted, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, renderSlot, onBeforeUnmount, resolveDynamicComponent, withModifiers } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrInterpolate, ssrRenderComponent, ssrRenderVNode, ssrRenderClass, ssrRenderList } from "vue/server-renderer";
import { c as containerMaxW, u as useStyleStore } from "./style-a68a90f0.js";
import { mdiChevronUp, mdiChevronDown, mdiAlertCircleOutline, mdiCog, mdiMonitor, mdiAccountMultipleOutline, mdiAccountGroup, mdiSquareEditOutline, mdiCashMultiple, mdiViewList, mdiGithub, mdiReact, mdiMenu, mdiClockOutline, mdiCloud, mdiCrop, mdiAccount, mdiCogOutline, mdiEmail, mdiLogout, mdiThemeLightDark, mdiClose, mdiDotsVertical, mdiMinus, mdiPlus, mdiBackburger, mdiForwardburger } from "@mdi/js";
import { _ as _sfc_main$h, a as _sfc_main$l } from "./BaseDivider-9c47c877.js";
import { _ as _sfc_main$i } from "./BaseLevel-c35b5037.js";
import { _ as _sfc_main$j, a as _sfc_main$k, g as getButtonColor } from "./BaseButton-89eb7a62.js";
import numeral from "numeral";
import { _ as _sfc_main$g, a as _sfc_main$m } from "./PillTag-89a59c6f.js";
import { u as useMainStore } from "./FormControl-9ac7bf53.js";
import { Link, router } from "@inertiajs/vue3";
const _sfc_main$f = {
  __name: "SectionMain",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: ["p-6", unref(containerMaxW)]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</section>`);
    };
  }
};
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/SectionMain.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = {
  __name: "NumberDynamic",
  __ssrInlineRender: true,
  props: {
    prefix: {
      type: String,
      default: null
    },
    suffix: {
      type: String,
      default: null
    },
    value: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number,
      default: 500
    }
  },
  setup(__props) {
    const props = __props;
    const newValue = ref(0);
    const newValueFormatted = computed(
      () => newValue.value < 1e3 ? newValue.value : numeral(newValue.value).format("0,0")
    );
    const value = computed(() => props.value);
    const grow = (m) => {
      const v = Math.ceil(newValue.value + m);
      if (v > value.value) {
        newValue.value = value.value;
        return false;
      }
      newValue.value = v;
      setTimeout(() => {
        grow(m);
      }, 25);
    };
    const growInit = () => {
      newValue.value = 0;
      grow(props.value / (props.duration / 25));
    };
    watch(value, () => {
      growInit();
    });
    onMounted(() => {
      growInit();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>${ssrInterpolate(__props.prefix)}${ssrInterpolate(newValueFormatted.value)}${ssrInterpolate(__props.suffix)}</div>`);
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/NumberDynamic.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = {
  __name: "PillTagTrend",
  __ssrInlineRender: true,
  props: {
    trend: {
      type: String,
      required: true
    },
    trendType: {
      type: String,
      default: null
    },
    small: Boolean
  },
  setup(__props) {
    const props = __props;
    const trendStyle = computed(() => {
      if (props.trendType === "up") {
        return {
          icon: mdiChevronUp,
          style: "success"
        };
      }
      if (props.trendType === "down") {
        return {
          icon: mdiChevronDown,
          style: "danger"
        };
      }
      if (props.trendType === "alert") {
        return {
          icon: mdiAlertCircleOutline,
          style: "warning"
        };
      }
      return {
        style: "info"
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$g, mergeProps({
        label: __props.trend,
        color: trendStyle.value.style,
        icon: trendStyle.value.icon,
        small: __props.small
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/PillTagTrend.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = {
  __name: "CardBoxWidget",
  __ssrInlineRender: true,
  props: {
    number: {
      type: Number,
      default: 0
    },
    icon: {
      type: String,
      default: null
    },
    prefix: {
      type: String,
      default: null
    },
    suffix: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    color: {
      type: String,
      default: null
    },
    trend: {
      type: String,
      default: null
    },
    trendType: {
      type: String,
      default: null
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$h, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.trend) {
              _push2(ssrRenderComponent(_sfc_main$i, {
                class: "mb-3",
                mobile: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$d, {
                      trend: __props.trend,
                      "trend-type": __props.trendType,
                      small: ""
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_sfc_main$j, {
                      icon: unref(mdiCog),
                      "icon-w": "w-4",
                      "icon-h": "h-4",
                      color: "lightDark",
                      small: ""
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$d, {
                        trend: __props.trend,
                        "trend-type": __props.trendType,
                        small: ""
                      }, null, 8, ["trend", "trend-type"]),
                      createVNode(_sfc_main$j, {
                        icon: unref(mdiCog),
                        "icon-w": "w-4",
                        "icon-h": "h-4",
                        color: "lightDark",
                        small: ""
                      }, null, 8, ["icon"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_sfc_main$i, { mobile: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div${_scopeId2}><h3 class="text-lg leading-tight text-gray-500 dark:text-slate-400"${_scopeId2}>${ssrInterpolate(__props.label)}</h3><h1 class="text-3xl font-semibold leading-tight"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$e, {
                    value: __props.number,
                    prefix: __props.prefix,
                    suffix: __props.suffix
                  }, null, _parent3, _scopeId2));
                  _push3(`</h1></div>`);
                  if (__props.icon) {
                    _push3(ssrRenderComponent(_sfc_main$k, {
                      path: __props.icon,
                      size: "48",
                      w: "",
                      h: "h-16",
                      class: __props.color
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode("div", null, [
                      createVNode("h3", { class: "text-lg leading-tight text-gray-500 dark:text-slate-400" }, toDisplayString(__props.label), 1),
                      createVNode("h1", { class: "text-3xl font-semibold leading-tight" }, [
                        createVNode(_sfc_main$e, {
                          value: __props.number,
                          prefix: __props.prefix,
                          suffix: __props.suffix
                        }, null, 8, ["value", "prefix", "suffix"])
                      ])
                    ]),
                    __props.icon ? (openBlock(), createBlock(_sfc_main$k, {
                      key: 0,
                      path: __props.icon,
                      size: "48",
                      w: "",
                      h: "h-16",
                      class: __props.color
                    }, null, 8, ["path", "class"])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              __props.trend ? (openBlock(), createBlock(_sfc_main$i, {
                key: 0,
                class: "mb-3",
                mobile: ""
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$d, {
                    trend: __props.trend,
                    "trend-type": __props.trendType,
                    small: ""
                  }, null, 8, ["trend", "trend-type"]),
                  createVNode(_sfc_main$j, {
                    icon: unref(mdiCog),
                    "icon-w": "w-4",
                    "icon-h": "h-4",
                    color: "lightDark",
                    small: ""
                  }, null, 8, ["icon"])
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode(_sfc_main$i, { mobile: "" }, {
                default: withCtx(() => [
                  createVNode("div", null, [
                    createVNode("h3", { class: "text-lg leading-tight text-gray-500 dark:text-slate-400" }, toDisplayString(__props.label), 1),
                    createVNode("h1", { class: "text-3xl font-semibold leading-tight" }, [
                      createVNode(_sfc_main$e, {
                        value: __props.number,
                        prefix: __props.prefix,
                        suffix: __props.suffix
                      }, null, 8, ["value", "prefix", "suffix"])
                    ])
                  ]),
                  __props.icon ? (openBlock(), createBlock(_sfc_main$k, {
                    key: 0,
                    path: __props.icon,
                    size: "48",
                    w: "",
                    h: "h-16",
                    class: __props.color
                  }, null, 8, ["path", "class"])) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/CardBoxWidget.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const menuAside = [
  {
    route: "dashboard",
    icon: mdiMonitor,
    label: "Dashboard"
  },
  {
    route: "index.employees",
    label: "Employees",
    icon: mdiAccountMultipleOutline
  },
  {
    route: "index.customers",
    label: "Customers",
    icon: mdiAccountGroup
  },
  {
    route: "index.projects",
    label: "Projects",
    icon: mdiSquareEditOutline
  },
  {
    route: "index.services",
    label: "Services",
    icon: mdiSquareEditOutline
  },
  {
    route: "index.transactions",
    label: "Transactions",
    icon: mdiCashMultiple
  },
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
const _sfc_main$b = {
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
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/UserAvatar.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = {
  __name: "UserAvatarCurrentUser",
  __ssrInlineRender: true,
  setup(__props) {
    const mainStore = useMainStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$b, mergeProps({
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
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/UserAvatarCurrentUser.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {
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
        _push(ssrRenderComponent(_sfc_main$l, mergeProps({ "nav-bar": "" }, _attrs), null, _parent));
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
                _push2(ssrRenderComponent(_sfc_main$a, { class: "inline-flex w-6 h-6 mr-3" }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (__props.item.icon) {
                _push2(ssrRenderComponent(_sfc_main$k, {
                  path: __props.item.icon,
                  class: "transition-colors"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`<span class="${ssrRenderClass([{ "lg:hidden": __props.item.isDesktopNoLabel && __props.item.icon }, "px-2 transition-colors whitespace-nowrap"])}"${_scopeId}>${ssrInterpolate(itemLabel.value)}</span>`);
              if (__props.item.menu) {
                _push2(ssrRenderComponent(_sfc_main$k, {
                  path: isDropdownActive.value ? unref(mdiChevronUp) : unref(mdiChevronDown),
                  class: "hidden transition-colors lg:inline-flex"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
              if (__props.item.menu) {
                _push2(`<div class="${ssrRenderClass([{ "lg:hidden": !isDropdownActive.value }, "text-sm border-b border-gray-100 lg:border lg:bg-white lg:absolute lg:top-full lg:left-0 lg:min-w-full lg:z-20 lg:rounded-lg lg:shadow-lg lg:dark:bg-slate-800 dark:border-slate-700"])}"${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$8, {
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
                  __props.item.isCurrentUser ? (openBlock(), createBlock(_sfc_main$a, {
                    key: 0,
                    class: "inline-flex w-6 h-6 mr-3"
                  })) : createCommentVNode("", true),
                  __props.item.icon ? (openBlock(), createBlock(_sfc_main$k, {
                    key: 1,
                    path: __props.item.icon,
                    class: "transition-colors"
                  }, null, 8, ["path"])) : createCommentVNode("", true),
                  createVNode("span", {
                    class: ["px-2 transition-colors whitespace-nowrap", { "lg:hidden": __props.item.isDesktopNoLabel && __props.item.icon }]
                  }, toDisplayString(itemLabel.value), 3),
                  __props.item.menu ? (openBlock(), createBlock(_sfc_main$k, {
                    key: 2,
                    path: isDropdownActive.value ? unref(mdiChevronUp) : unref(mdiChevronDown),
                    class: "hidden transition-colors lg:inline-flex"
                  }, null, 8, ["path"])) : createCommentVNode("", true)
                ], 2),
                __props.item.menu ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: ["text-sm border-b border-gray-100 lg:border lg:bg-white lg:absolute lg:top-full lg:left-0 lg:min-w-full lg:z-20 lg:rounded-lg lg:shadow-lg lg:dark:bg-slate-800 dark:border-slate-700", { "lg:hidden": !isDropdownActive.value }]
                }, [
                  createVNode(_sfc_main$8, {
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
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/NavBarItem.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
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
        _push(ssrRenderComponent(_sfc_main$9, {
          key: index,
          item,
          onMenuClick: menuClick
        }, null, _parent));
      });
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/NavBarMenuList.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
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
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/NavBarItemPlain.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
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
      _push(ssrRenderComponent(_sfc_main$7, {
        onClick: ($event) => isMenuNavBarActive.value = !isMenuNavBarActive.value
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$k, {
              path: isMenuNavBarActive.value ? unref(mdiClose) : unref(mdiDotsVertical),
              size: "24"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$k, {
                path: isMenuNavBarActive.value ? unref(mdiClose) : unref(mdiDotsVertical),
                size: "24"
              }, null, 8, ["path"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="${ssrRenderClass([[isMenuNavBarActive.value ? "block" : "hidden"], "absolute left-0 w-screen overflow-y-auto shadow-lg max-h-screen-menu lg:overflow-visible top-14 bg-gray-50 lg:w-auto lg:flex lg:static lg:shadow-none dark:bg-slate-800"])}">`);
      _push(ssrRenderComponent(_sfc_main$8, {
        menu: __props.menu,
        onMenuClick: menuClick
      }, null, _parent));
      _push(`</div></div></nav>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/NavBar.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
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
              _push2(ssrRenderComponent(_sfc_main$k, {
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
              _push2(ssrRenderComponent(_sfc_main$k, {
                path: isDropdownActive.value ? unref(mdiMinus) : unref(mdiPlus),
                class: ["flex-none", activeInactiveStyle.value],
                w: "w-12"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              __props.item.icon ? (openBlock(), createBlock(_sfc_main$k, {
                key: 0,
                path: __props.item.icon,
                class: ["flex-none", activeInactiveStyle.value],
                w: "w-16",
                size: 18
              }, null, 8, ["path", "class"])) : createCommentVNode("", true),
              createVNode("span", {
                class: ["grow text-ellipsis line-clamp-1", [{ "pr-12": !hasDropdown.value }, activeInactiveStyle.value]]
              }, toDisplayString(__props.item.label), 3),
              hasDropdown.value ? (openBlock(), createBlock(_sfc_main$k, {
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
        _push(ssrRenderComponent(_sfc_main$4, {
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/AsideMenuItem.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
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
        _push(ssrRenderComponent(_sfc_main$5, {
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/AsideMenuList.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
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
      _push(ssrRenderComponent(_sfc_main$k, { path: unref(mdiClose) }, null, _parent));
      _push(`</button></div><div class="${ssrRenderClass([
        unref(styleStore).darkMode ? "aside-scrollbars-[slate]" : unref(styleStore).asideScrollbarsStyle,
        "flex-1 overflow-x-hidden overflow-y-auto"
      ])}">`);
      _push(ssrRenderComponent(_sfc_main$4, {
        menu: __props.menu,
        onMenuClick: menuClick
      }, null, _parent));
      _push(`</div><ul>`);
      _push(ssrRenderComponent(_sfc_main$5, {
        item: logoutItem.value,
        onMenuClick: menuClick
      }, null, _parent));
      _push(`</ul></div></aside>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/AsideMenuLayer.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
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
      _push(ssrRenderComponent(_sfc_main$3, {
        menu: __props.menu,
        class: [
          __props.isAsideMobileExpanded ? "left-0" : "-left-60 lg:left-0",
          { "lg:hidden xl:flex": !__props.isAsideLgActive }
        ],
        onMenuClick: menuClick,
        onAsideLgCloseClick: asideLgCloseClick
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$m, {
        style: __props.isAsideLgActive ? null : { display: "none" },
        "z-index": "z-30",
        onOverlayClick: asideLgCloseClick
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/AsideMenu.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/JustboilLogo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const layoutAsidePadding = "xl:pl-60";
const _sfc_main = {
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
      _push(ssrRenderComponent(_sfc_main$6, {
        menu: unref(menuNavBar),
        class: [
          layoutAsidePadding,
          { "ml-60 lg:ml-0": isAsideMobileExpanded.value }
        ],
        onMenuClick: menuClick
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$7, {
              display: "flex lg:hidden",
              onClick: ($event) => isAsideMobileExpanded.value = !isAsideMobileExpanded.value
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$k, {
                    path: isAsideMobileExpanded.value ? unref(mdiBackburger) : unref(mdiForwardburger),
                    size: "24"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$k, {
                      path: isAsideMobileExpanded.value ? unref(mdiBackburger) : unref(mdiForwardburger),
                      size: "24"
                    }, null, 8, ["path"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$7, {
              display: "hidden lg:flex xl:hidden",
              onClick: ($event) => isAsideLgActive.value = true
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$k, {
                    path: unref(mdiMenu),
                    size: "24"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$k, {
                      path: unref(mdiMenu),
                      size: "24"
                    }, null, 8, ["path"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$7, {
                display: "flex lg:hidden",
                onClick: withModifiers(($event) => isAsideMobileExpanded.value = !isAsideMobileExpanded.value, ["prevent"])
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$k, {
                    path: isAsideMobileExpanded.value ? unref(mdiBackburger) : unref(mdiForwardburger),
                    size: "24"
                  }, null, 8, ["path"])
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_sfc_main$7, {
                display: "hidden lg:flex xl:hidden",
                onClick: withModifiers(($event) => isAsideLgActive.value = true, ["prevent"])
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$k, {
                    path: unref(mdiMenu),
                    size: "24"
                  }, null, 8, ["path"])
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        "is-aside-mobile-expanded": isAsideMobileExpanded.value,
        "is-aside-lg-active": isAsideLgActive.value,
        menu: unref(menuAside),
        onMenuClick: menuClick,
        onAsideLgCloseClick: ($event) => isAsideLgActive.value = false
      }, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/Admin/LayoutAuthenticated.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _,
  _sfc_main$f as a,
  _sfc_main$c as b
};
