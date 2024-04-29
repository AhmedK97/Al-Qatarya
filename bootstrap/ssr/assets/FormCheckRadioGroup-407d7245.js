import { computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderDynamicModel, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
const _sfc_main$1 = {
  __name: "FormCheckRadio",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: "checkbox",
      validator: (value) => ["checkbox", "radio", "switch"].includes(value)
    },
    label: {
      type: String,
      default: null
    },
    modelValue: {
      type: [Array, String, Number, Boolean],
      default: null
    },
    inputValue: {
      type: [String, Number, Boolean],
      required: true
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const computedValue = computed({
      get: () => props.modelValue,
      set: (value) => {
        emit("update:modelValue", value);
      }
    });
    const inputType = computed(
      () => props.type === "radio" ? "radio" : "checkbox"
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<label${ssrRenderAttrs(mergeProps({ class: __props.type }, _attrs))}><input${ssrRenderDynamicModel(inputType.value, computedValue.value, __props.inputValue)}${ssrRenderAttr("type", inputType.value)}${ssrRenderAttr("name", __props.name)}${ssrRenderAttr("value", __props.inputValue)}><span class="check"></span><span class="pl-2">${ssrInterpolate(__props.label)}</span></label>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/FormCheckRadio.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "FormCheckRadioGroup",
  __ssrInlineRender: true,
  props: {
    options: {
      type: Object,
      default: () => {
      }
    },
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: "checkbox",
      validator: (value) => ["checkbox", "radio", "switch"].includes(value)
    },
    componentClass: {
      type: String,
      default: null
    },
    isColumn: Boolean,
    modelValue: {
      type: [Array, String, Number, Boolean],
      default: null
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const computedValue = computed({
      get: () => props.modelValue,
      set: (value) => {
        emit("update:modelValue", value);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["flex flex-wrap justify-start -mb-3", { "flex-col": __props.isColumn }]
      }, _attrs))}><!--[-->`);
      ssrRenderList(__props.options, (value, key) => {
        _push(ssrRenderComponent(_sfc_main$1, {
          key,
          modelValue: computedValue.value,
          "onUpdate:modelValue": ($event) => computedValue.value = $event,
          type: __props.type,
          name: __props.name,
          "input-value": key,
          label: value,
          class: [__props.componentClass, "mb-3 mr-6 last:mr-0"]
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/FormCheckRadioGroup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
