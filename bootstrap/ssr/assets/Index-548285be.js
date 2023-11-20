import { resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout-52b4eff8.js";
import "@inertiajs/vue3";
import "./NavBar-d6f446bb.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_blogs_cards = resolveComponent("blogs-cards");
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "Blogs" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_blogs_cards, null, null, _parent2, _scopeId));
            _push2(`<div class="container z-20 flex flex-col items-center max-w-6xl mx-auto mb-16 md:px-10"${_scopeId}></div>`);
          } else {
            return [
              createVNode(_component_blogs_cards),
              createVNode("div", { class: "container z-20 flex flex-col items-center max-w-6xl mx-auto mb-16 md:px-10" })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Blog/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
