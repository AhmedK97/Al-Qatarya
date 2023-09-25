import { mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout-5766592f.js";
import { _ as _sfc_main$2, P as Pagination } from "./BlogsCards-0f294d1e.js";
import "@inertiajs/vue3";
import "./NavBar-2a13b177.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "./SectionTitleShadow-e49c0ecd.js";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    blog: Object,
    blogs: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "Dashboard" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, { blogs: __props.blogs }, null, _parent2, _scopeId));
            _push2(`<div class="container z-20 flex flex-col items-center max-w-6xl mx-auto mb-16 md:px-10"${_scopeId}>`);
            _push2(ssrRenderComponent(Pagination, {
              links: __props.blogs.links
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_sfc_main$2, { blogs: __props.blogs }, null, 8, ["blogs"]),
              createVNode("div", { class: "container z-20 flex flex-col items-center max-w-6xl mx-auto mb-16 md:px-10" }, [
                createVNode(Pagination, {
                  links: __props.blogs.links
                }, null, 8, ["links"])
              ])
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
