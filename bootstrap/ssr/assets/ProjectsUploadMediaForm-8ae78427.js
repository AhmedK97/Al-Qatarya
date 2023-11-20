import { ref, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderComponent } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { mdiPlus } from "@mdi/js";
import { _ as _sfc_main$1 } from "./BaseButton-89eb7a62.js";
import "sweetalert2";
import "tiny-emitter/instance.js";
const _sfc_main = {
  __name: "ProjectsUploadMediaForm",
  __ssrInlineRender: true,
  props: {
    project: {
      type: Object,
      default: () => {
      }
    }
  },
  emits: ["uploading"],
  setup(__props, { emit }) {
    const props = __props;
    const form = useForm({
      files: null,
      project: props.project
    });
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      if (unref(form).progress) {
        _push(`<progress class="w-full"${ssrRenderAttr("value", unref(form).progress.percentage)} max="100"> Progress : ${ssrInterpolate(unref(form).progress.percentage)}% </progress>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form><input type="file" multiple${ssrIncludeBooleanAttr(unref(form).progress) ? " disabled" : ""}>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        disabled: unref(form).progress,
        color: "info",
        icon: unref(mdiPlus),
        label: "Add",
        small: "",
        type: "submit"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Submit`);
          } else {
            return [
              createTextVNode(" Submit")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Projects/ProjectsUploadMediaForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
