import { mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./AppLayout-52b4eff8.js";
import { S as SectionTitleShadow } from "./SectionTitleShadow-51b96593.js";
import "@inertiajs/vue3";
import "./NavBar-d6f446bb.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
const ServiceShow_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = {
  __name: "ServiceShow",
  __ssrInlineRender: true,
  props: {
    service: Object
  },
  setup(__props) {
    const props = __props;
    console.log(props.service);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "container mx-auto mt-16 max-w-7xl" }, _attrs))}><img class="m-auto image-width"${ssrRenderAttr("src", __props.service.main_image)} alt=""><div class="flex flex-col-reverse mx-3 my-10 md:mt-20 md:flex-row"><div class="flex-grow">`);
      _push(ssrRenderComponent(SectionTitleShadow, null, {
        "upper-title": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.service.name)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.service.name), 1)
            ];
          }
        }),
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.service.name)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.service.name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="mt-8 text-lg font-medium text-gray-500">${ssrInterpolate(__props.service.body)}</p><div class="flex flex-col gap-8 px-4 mt-10"><div class="grid grid-cols-1 gap-8 md:grid-cols-2"><!--[-->`);
      ssrRenderList(__props.service.additional_info, (service, index) => {
        _push(`<div class="m-auto"><div class="flex flex-col"><div class="flex items-center space-x-6 rtl:space-x-reverse"><img src="/storage/images/check.svg" class="w-6" loading="lazy" alt=""><p class="mt-1.5 text-base lg:text-xl font-semibold text-gray-800">${ssrInterpolate(service.title)}</p></div><p class="mt-6 text-base font-medium leading-relaxed text-gray-500 lg:text-lg" style="${ssrRenderStyle({ "max-width": "400px" })}">${ssrInterpolate(service.description)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ServiceShow.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    service: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$2, mergeProps({ title: "Dashboard" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1, { service: __props.service }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1, { service: __props.service }, null, 8, ["service"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Service/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
