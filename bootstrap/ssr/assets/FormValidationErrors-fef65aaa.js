import { mergeProps, unref, useSSRContext, computed, useSlots, createVNode, resolveDynamicComponent, withCtx, renderSlot, openBlock, createBlock, Fragment, createCommentVNode, toDisplayString, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderVNode, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderList } from "vue/server-renderer";
import { u as useStyleStore, b as gradientBgDark, d as gradientBgPinkRed, e as gradientBgPurplePink, g as getButtonColor, a as _sfc_main$9, f as colorsBgLight } from "./colors-6c25eea7.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { Link, usePage } from "@inertiajs/vue3";
const _sfc_main$8 = {
  __name: "LayoutGuest",
  __ssrInlineRender: true,
  setup(__props) {
    const styleStore = useStyleStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: { dark: unref(styleStore).darkMode }
      }, _attrs))}><div class="bg-gray-50 dark:bg-slate-800 dark:text-slate-100">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/Admin/LayoutGuest.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __name: "SectionFullScreen",
  __ssrInlineRender: true,
  props: {
    bg: {
      type: String,
      required: true,
      validator: (value) => ["purplePink", "pinkRed"].includes(value)
    }
  },
  setup(__props) {
    const props = __props;
    const colorClass = computed(() => {
      if (useStyleStore().darkMode) {
        return gradientBgDark;
      }
      switch (props.bg) {
        case "purplePink":
          return gradientBgPurplePink;
        case "pinkRed":
          return gradientBgPinkRed;
      }
      return "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["flex items-center justify-center min-h-screen", colorClass.value]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", { cardClass: "w-11/12 shadow-2xl md:w-7/12 lg:w-6/12 xl:w-4/12" }, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/SectionFullScreen.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "CardBoxComponentBody",
  __ssrInlineRender: true,
  props: {
    noPadding: Boolean
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["flex-1", { "p-6": !__props.noPadding }]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/CardBoxComponentBody.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "p-6" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</footer>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/CardBoxComponentFooter.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const CardBoxComponentFooter = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$4 = {
  __name: "CardBox",
  __ssrInlineRender: true,
  props: {
    rounded: {
      type: String,
      default: "rounded-2xl"
    },
    flex: {
      type: String,
      default: "flex-col"
    },
    hasComponentLayout: Boolean,
    hasTable: Boolean,
    isForm: Boolean,
    isHoverable: Boolean,
    isModal: Boolean
  },
  emits: ["submit"],
  setup(__props, { emit }) {
    const props = __props;
    const slots = useSlots();
    const hasFooterSlot = computed(() => slots.footer && !!slots.footer());
    const componentClass = computed(() => {
      const base = [
        props.rounded,
        props.flex,
        props.isModal ? "dark:bg-slate-900" : "dark:bg-slate-900/70"
      ];
      if (props.isHoverable) {
        base.push("hover:shadow-lg transition-shadow duration-500");
      }
      return base;
    });
    const submit = (event) => {
      emit("submit", event);
    };
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.isForm ? "form" : "div"), mergeProps({
        class: [componentClass.value, "flex bg-white"],
        onSubmit: submit
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.hasComponentLayout) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            } else {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(_sfc_main$6, { "no-padding": __props.hasTable }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "default")
                    ];
                  }
                }),
                _: 3
              }, _parent2, _scopeId));
              if (hasFooterSlot.value) {
                _push2(ssrRenderComponent(CardBoxComponentFooter, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push3, _parent3, _scopeId2);
                    } else {
                      return [
                        renderSlot(_ctx.$slots, "footer")
                      ];
                    }
                  }),
                  _: 3
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            }
          } else {
            return [
              __props.hasComponentLayout ? renderSlot(_ctx.$slots, "default", { key: 0 }) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                createVNode(_sfc_main$6, { "no-padding": __props.hasTable }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "default")
                  ]),
                  _: 3
                }, 8, ["no-padding"]),
                hasFooterSlot.value ? (openBlock(), createBlock(CardBoxComponentFooter, { key: 0 }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "footer")
                  ]),
                  _: 3
                })) : createCommentVNode("", true)
              ], 64))
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/CardBox.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "FormField",
  __ssrInlineRender: true,
  props: {
    label: {
      type: String,
      default: null
    },
    labelFor: {
      type: String,
      default: null
    },
    help: {
      type: String,
      default: null
    }
  },
  setup(__props) {
    const slots = useSlots();
    const wrapperClass = computed(() => {
      const base = [];
      const slotsLength = slots.default().length;
      if (slotsLength > 1) {
        base.push("grid grid-cols-1 gap-3");
      }
      if (slotsLength === 2) {
        base.push("md:grid-cols-2");
      }
      return base;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-6 last:mb-0" }, _attrs))}>`);
      if (__props.label) {
        _push(`<label${ssrRenderAttr("for", __props.labelFor)} class="block font-bold mb-2">${ssrInterpolate(__props.label)}</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass(wrapperClass.value)}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      if (__props.help) {
        _push(`<div class="text-xs text-gray-500 dark:text-slate-400 mt-1">${ssrInterpolate(__props.help)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/FormField.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "BaseButton",
  __ssrInlineRender: true,
  props: {
    label: {
      type: [String, Number],
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    iconSize: {
      type: [String, Number],
      default: null
    },
    href: {
      type: String,
      default: null
    },
    target: {
      type: String,
      default: null
    },
    routeName: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: null
    },
    color: {
      type: String,
      default: "white"
    },
    as: {
      type: String,
      default: null
    },
    small: Boolean,
    outline: Boolean,
    active: Boolean,
    disabled: Boolean,
    roundedFull: Boolean
  },
  setup(__props) {
    const props = __props;
    const is = computed(() => {
      if (props.as) {
        return props.as;
      }
      if (props.routeName) {
        return Link;
      }
      if (props.href) {
        return "a";
      }
      return "button";
    });
    const computedType = computed(() => {
      if (is.value === "button") {
        return props.type ?? "button";
      }
      return null;
    });
    const labelClass = computed(
      () => props.small && props.icon ? "px-1" : "px-2"
    );
    const componentClass = computed(() => {
      const base = [
        "inline-flex",
        "justify-center",
        "items-center",
        "whitespace-nowrap",
        "focus:outline-none",
        "transition-colors",
        "focus:ring",
        "duration-150",
        "border",
        props.disabled ? "cursor-not-allowed" : "cursor-pointer",
        props.roundedFull ? "rounded-full" : "rounded",
        getButtonColor(
          props.color,
          props.outline,
          !props.disabled,
          props.active
        )
      ];
      if (!props.label && props.icon) {
        base.push("p-1");
      } else if (props.small) {
        base.push("text-sm", props.roundedFull ? "px-3 py-1" : "p-1");
      } else {
        base.push("py-2", props.roundedFull ? "px-6" : "px-3");
      }
      if (props.disabled) {
        base.push(props.outline ? "opacity-50" : "opacity-70");
      }
      return base;
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(is.value), mergeProps({
        class: componentClass.value,
        href: __props.routeName ? _ctx.route(__props.routeName) : __props.href,
        type: computedType.value,
        target: __props.target,
        disabled: __props.disabled
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.icon) {
              _push2(ssrRenderComponent(_sfc_main$9, {
                path: __props.icon,
                size: __props.iconSize
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (__props.label) {
              _push2(`<span class="${ssrRenderClass(labelClass.value)}"${_scopeId}>${ssrInterpolate(__props.label)}</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              __props.icon ? (openBlock(), createBlock(_sfc_main$9, {
                key: 0,
                path: __props.icon,
                size: __props.iconSize
              }, null, 8, ["path", "size"])) : createCommentVNode("", true),
              __props.label ? (openBlock(), createBlock("span", {
                key: 1,
                class: labelClass.value
              }, toDisplayString(__props.label), 3)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }), _parent);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/BaseButton.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "NotificationBarInCard",
  __ssrInlineRender: true,
  props: {
    color: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col mb-6 -mt-6 -ml-6 -mr-6 animate-fade-in" }, _attrs))}><div class="${ssrRenderClass([[unref(colorsBgLight)[__props.color]], "flex flex-col p-6 transition-colors rounded-t-2xl"])}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/NotificationBarInCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "FormValidationErrors",
  __ssrInlineRender: true,
  setup(__props) {
    const errors = computed(() => usePage().props.errors);
    const hasErrors = computed(() => Object.keys(errors.value).length > 0);
    return (_ctx, _push, _parent, _attrs) => {
      if (hasErrors.value) {
        _push(ssrRenderComponent(_sfc_main$1, mergeProps({ color: "danger" }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<b${_scopeId}>Whoops! Something went wrong.</b><!--[-->`);
              ssrRenderList(errors.value, (error, key) => {
                _push2(`<span${_scopeId}>${ssrInterpolate(error)}</span>`);
              });
              _push2(`<!--]-->`);
            } else {
              return [
                createVNode("b", null, "Whoops! Something went wrong."),
                (openBlock(true), createBlock(Fragment, null, renderList(errors.value, (error, key) => {
                  return openBlock(), createBlock("span", { key }, toDisplayString(error), 1);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/FormValidationErrors.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main$8 as _,
  _sfc_main$7 as a,
  _sfc_main$4 as b,
  _sfc_main as c,
  _sfc_main$3 as d,
  _sfc_main$2 as e,
  _sfc_main$1 as f
};
