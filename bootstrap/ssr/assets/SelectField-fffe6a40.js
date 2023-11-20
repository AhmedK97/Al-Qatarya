import { _ as _sfc_main$1 } from "./InputError-6aeb8d97.js";
import { ref, watch, resolveComponent, mergeProps, useSSRContext } from "vue";
import { trans } from "laravel-vue-i18n";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {
  inheritAttrs: false,
  components: {
    InputError: _sfc_main$1
  },
  props: {
    modelValue: [String, Number, Boolean, null],
    errorMessage: String,
    items: {
      type: Array
    },
    itemLabel: {
      type: String,
      default: "name"
    },
    itemValue: {
      type: String,
      default: "id"
    },
    translated: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit, slots }) {
    const selectedValue = ref(props.modelValue || null);
    const getItemLabel = (item) => {
      const label = item[props.itemLabel];
      if (props.translated && label) {
        return trans(label);
      }
      return label;
    };
    const getItemValue = (item) => {
      const value = item[props.itemValue];
      return value;
    };
    const selectItem = (value) => {
      selectedValue.value = value;
      emit("update:modelValue", selectedValue.value);
    };
    const hasLabelSlot = () => {
      return !!slots.label;
    };
    watch(props, (newProps) => {
      selectItem(newProps.modelValue);
    });
    watch(selectedValue, (newValue) => {
      emit("update:modelValue", newValue);
    });
    return {
      getItemLabel,
      getItemValue,
      selectItem,
      selectedValue,
      hasLabelSlot
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_InputError = resolveComponent("InputError");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col w-full" }, _attrs))}>`);
  if ($setup.hasLabelSlot) {
    _push(`<label class="lg:mb-3 rtl:text-right text-md">`);
    ssrRenderSlot(_ctx.$slots, "label", {}, null, _push, _parent);
    _push(`</label>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<select${ssrRenderAttrs(mergeProps({
    class: ["px-4 py-3 outline-none focus:border-transparent focus:outline-secondary-600 placeholder:text-black placeholder:text-opacity-40 rtl:text-right", { "border border-red-600": $props.errorMessage }]
  }, _ctx.$attrs))}><!--[-->`);
  ssrRenderList($props.items, (item) => {
    _push(`<option${ssrRenderAttr("value", $setup.getItemValue(item))}>${ssrInterpolate($setup.getItemLabel(item))}</option>`);
  });
  _push(`<!--]--></select>`);
  _push(ssrRenderComponent(_component_InputError, {
    class: "mt-2",
    style: $props.errorMessage ? null : { display: "none" },
    message: $props.errorMessage
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/SelectField.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SelectField = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  SelectField as S
};
