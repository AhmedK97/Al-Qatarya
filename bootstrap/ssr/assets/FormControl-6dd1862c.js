import { mergeProps, useSSRContext, computed, ref, onMounted, onBeforeUnmount } from "vue";
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderDynamicModel } from "vue/server-renderer";
import { defineStore } from "pinia";
import axios from "axios";
import { a as _sfc_main$2 } from "./colors-6c25eea7.js";
const useMainStore = defineStore("main", {
  state: () => ({
    /* User */
    userName: null,
    userEmail: null,
    userAvatar: null,
    /* Field focus with ctrl+k (to register only once) */
    isFieldFocusRegistered: false,
    /* Sample data (commonly used) */
    clients: [],
    history: []
  }),
  actions: {
    setUser(payload) {
      if (payload.name) {
        this.userName = payload.name;
      }
      if (payload.email) {
        this.userEmail = payload.email;
      }
      if (payload.avatar) {
        this.userAvatar = payload.avatar;
      }
    },
    fetch(sampleDataKey) {
      axios.get(`data-sources/${sampleDataKey}.json`).then((r) => {
        if (r.data && r.data.data) {
          this[sampleDataKey] = r.data.data;
        }
      }).catch((error) => {
        alert(error.message);
      });
    }
  }
});
const _sfc_main$1 = {
  __name: "FormControlIcon",
  __ssrInlineRender: true,
  props: {
    icon: {
      type: String,
      default: null
    },
    h: {
      type: String,
      default: null
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$2, mergeProps({
        path: __props.icon,
        w: "w-10",
        h: __props.h,
        class: "absolute top-0 left-0 z-10 text-gray-500 pointer-events-none dark:text-slate-400"
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/FormControlIcon.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "FormControl",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      default: null
    },
    id: {
      type: String,
      default: null
    },
    autocomplete: {
      type: String,
      default: null
    },
    maxlength: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    inputmode: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    options: {
      type: Array,
      default: null
    },
    type: {
      type: String,
      default: "text"
    },
    modelValue: {
      type: [String, Number, Boolean, Array, Object],
      default: ""
    },
    required: Boolean,
    borderless: Boolean,
    transparent: Boolean,
    ctrlKFocus: Boolean
  },
  emits: ["update:modelValue", "setRef"],
  setup(__props, { emit }) {
    const props = __props;
    const computedValue = computed({
      get: () => props.modelValue,
      set: (value) => {
        emit("update:modelValue", value);
      }
    });
    const inputElClass = computed(() => {
      const base = [
        "px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full",
        "dark:placeholder-gray-400",
        computedType.value === "textarea" ? "h-24" : "h-12",
        props.borderless ? "border-0" : "border",
        props.transparent ? "bg-transparent" : "bg-white dark:bg-slate-800"
      ];
      if (props.icon) {
        base.push("pl-10");
      }
      return base;
    });
    const computedType = computed(() => props.options ? "select" : props.type);
    const controlIconH = computed(
      () => props.type === "textarea" ? "h-full" : "h-12"
    );
    const mainStore = useMainStore();
    const selectEl = ref(null);
    const textareaEl = ref(null);
    const inputEl = ref(null);
    onMounted(() => {
      if (selectEl.value) {
        emit("setRef", selectEl.value);
      } else if (textareaEl.value) {
        emit("setRef", textareaEl.value);
      } else {
        emit("setRef", inputEl.value);
      }
    });
    if (props.ctrlKFocus) {
      const fieldFocusHook = (e) => {
        if (e.ctrlKey && e.key === "k") {
          e.preventDefault();
          inputEl.value.focus();
        } else if (e.key === "Escape") {
          inputEl.value.blur();
        }
      };
      onMounted(() => {
        if (!mainStore.isFieldFocusRegistered) {
          window.addEventListener("keydown", fieldFocusHook);
          mainStore.isFieldFocusRegistered = true;
        }
      });
      onBeforeUnmount(() => {
        window.removeEventListener("keydown", fieldFocusHook);
        mainStore.isFieldFocusRegistered = false;
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}>`);
      if (computedType.value === "select") {
        _push(`<select${ssrRenderAttr("id", __props.id)}${ssrRenderAttr("name", __props.name)} class="${ssrRenderClass(inputElClass.value)}"><!--[-->`);
        ssrRenderList(__props.options, (option) => {
          _push(`<option${ssrRenderAttr("value", option)}>${ssrInterpolate(option.label ?? option)}</option>`);
        });
        _push(`<!--]--></select>`);
      } else if (computedType.value === "textarea") {
        _push(`<textarea${ssrRenderAttr("id", __props.id)} class="${ssrRenderClass(inputElClass.value)}"${ssrRenderAttr("name", __props.name)}${ssrRenderAttr("maxlength", __props.maxlength)}${ssrRenderAttr("placeholder", __props.placeholder)}${ssrIncludeBooleanAttr(__props.required) ? " required" : ""}>${ssrInterpolate(computedValue.value)}</textarea>`);
      } else {
        _push(`<input${ssrRenderAttr("id", __props.id)}${ssrRenderDynamicModel(computedType.value, computedValue.value, null)}${ssrRenderAttr("name", __props.name)}${ssrRenderAttr("maxlength", __props.maxlength)}${ssrRenderAttr("inputmode", __props.inputmode)}${ssrRenderAttr("autocomplete", __props.autocomplete)}${ssrIncludeBooleanAttr(__props.required) ? " required" : ""}${ssrRenderAttr("placeholder", __props.placeholder)}${ssrRenderAttr("type", computedType.value)} class="${ssrRenderClass(inputElClass.value)}">`);
      }
      if (__props.icon) {
        _push(ssrRenderComponent(_sfc_main$1, {
          icon: __props.icon,
          h: controlIconH.value
        }, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/FormControl.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _,
  useMainStore as u
};
