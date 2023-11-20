import { mergeProps, unref, useSSRContext, computed, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { u as useStyleStore } from "./style-a68a90f0.js";
import { e as gradientBgDark, f as gradientBgPinkRed, h as gradientBgPurplePink, c as colorsBgLight } from "./BaseButton-89eb7a62.js";
import { usePage } from "@inertiajs/vue3";
const _sfc_main$3 = {
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/Admin/LayoutGuest.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/SectionFullScreen.vue");
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
  _sfc_main$3 as _,
  _sfc_main$2 as a,
  _sfc_main as b,
  _sfc_main$1 as c
};
