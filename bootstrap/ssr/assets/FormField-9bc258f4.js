import { useSlots, computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderSlot } from "vue/server-renderer";
const _sfc_main = {
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/FormField.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
