import { mergeProps, unref, useSSRContext, computed, useSlots } from "vue";
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { mdiCog } from "@mdi/js";
import { a as _sfc_main$2, c as colorsBgLight, b as colorsText, _ as _sfc_main$3 } from "./BaseButton-89eb7a62.js";
const _sfc_main$1 = {
  __name: "IconRounded",
  __ssrInlineRender: true,
  props: {
    icon: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: null
    },
    w: {
      type: String,
      default: "w-12"
    },
    h: {
      type: String,
      default: "h-12"
    },
    bg: Boolean
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$2, mergeProps({
        path: __props.icon,
        w: __props.w,
        h: __props.h,
        size: "24",
        class: [
          "rounded-full",
          __props.bg ? unref(colorsBgLight)[__props.color] : [unref(colorsText)[__props.color], "bg-gray-50 dark:bg-slate-800"]
        ]
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/IconRounded.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "SectionTitleLineWithButton",
  __ssrInlineRender: true,
  props: {
    icon: {
      type: String,
      default: null
    },
    title: {
      type: String,
      required: true
    },
    main: Boolean
  },
  setup(__props) {
    const hasSlot = computed(() => useSlots().default);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: [{ "pt-6": !__props.main }, "flex items-center justify-between mb-6"]
      }, _attrs))}><div class="flex items-center justify-start">`);
      if (__props.icon && __props.main) {
        _push(ssrRenderComponent(_sfc_main$1, {
          icon: __props.icon,
          color: "light",
          class: "mr-3",
          bg: ""
        }, null, _parent));
      } else if (__props.icon) {
        _push(ssrRenderComponent(_sfc_main$2, {
          path: __props.icon,
          class: "mr-2",
          size: "20"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<h1 class="${ssrRenderClass([__props.main ? "text-3xl" : "text-2xl", "leading-tight"])}">${ssrInterpolate(__props.title)}</h1></div>`);
      if (hasSlot.value) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      } else {
        _push(ssrRenderComponent(_sfc_main$3, {
          icon: unref(mdiCog),
          color: "whiteDark"
        }, null, _parent));
      }
      _push(`</section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/SectionTitleLineWithButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
