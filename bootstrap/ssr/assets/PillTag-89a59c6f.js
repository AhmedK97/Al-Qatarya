import { mergeProps, unref, useSSRContext, computed } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderSlotInner, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { u as useStyleStore } from "./style-a68a90f0.js";
import { a as _sfc_main$3, d as colorsOutline, c as colorsBgLight } from "./BaseButton-89eb7a62.js";
const _sfc_main$2 = {
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/OverlayLayer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "PillTagPlain",
  __ssrInlineRender: true,
  props: {
    label: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: null
    },
    small: Boolean
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["inline-flex items-center leading-none capitalize", [__props.small ? "text-xs" : "text-sm"]]
      }, _attrs))}>`);
      if (__props.icon) {
        _push(ssrRenderComponent(_sfc_main$3, {
          path: __props.icon,
          h: "h-4",
          w: "w-4",
          class: __props.small ? "mr-1" : "mr-2",
          size: __props.small ? 14 : null
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<span>${ssrInterpolate(__props.label)}</span></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/PillTagPlain.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "PillTag",
  __ssrInlineRender: true,
  props: {
    label: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: null
    },
    small: Boolean,
    outline: Boolean
  },
  setup(__props) {
    const props = __props;
    const componentClass = computed(() => [
      props.small ? "py-1 px-3" : "py-1.5 px-4",
      props.outline ? colorsOutline[props.color] : colorsBgLight[props.color]
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        class: ["border rounded-full", componentClass.value],
        icon: __props.icon,
        label: __props.label,
        small: __props.small
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/PillTag.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _,
  _sfc_main$2 as a
};
