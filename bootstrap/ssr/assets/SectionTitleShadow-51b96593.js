import { ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="text-2xl text-center capitalize md:text-4xl font-black text-gray-900 underline underline-offset-[20px]">`);
  ssrRenderSlot(_ctx.$slots, "title", {}, null, _push, _parent);
  _push(`</h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/SectionTitleShadow.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SectionTitleShadow = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  SectionTitleShadow as S
};
