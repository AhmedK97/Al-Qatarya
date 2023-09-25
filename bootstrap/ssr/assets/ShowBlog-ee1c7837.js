import { mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout-5766592f.js";
import { _ as _sfc_main$2, P as Pagination } from "./BlogsCards-0f294d1e.js";
import "./SectionTitleShadow-e49c0ecd.js";
import "@inertiajs/vue3";
import "./NavBar-2a13b177.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {
  __name: "ShowBlog",
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
            _push2(`<main class="pt-8 pb-16 bg-white lg:pt-16 lg:pb-24 dark:bg-gray-900"${_scopeId}><div class="flex justify-between max-w-screen-xl px-4 mx-auto"${_scopeId}><article class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"${_scopeId}><header class="mb-4 lg:mb-6 not-format"${_scopeId}><div class="flex flex-col items-center justify-center my-10 text-center"${_scopeId}><h1 class="text-4xl font-black underline text-rose-900"${_scopeId}>${ssrInterpolate(__props.blog.title)}</h1></div><div class="container max-w-5xl mx-auto"${_scopeId}><img class="object-cover w-full object-center m-auto max-h-[25rem] rounded" alt="hero"${ssrRenderAttr("src", __props.blog.image)}${_scopeId}></div></header><div class="container max-w-5xl mx-auto leading-9"${_scopeId}>${__props.blog.description}</div></article></div></main>`);
            _push2(ssrRenderComponent(_sfc_main$2, { blogs: __props.blogs }, null, _parent2, _scopeId));
            _push2(`<div class="container z-20 flex flex-col items-center max-w-6xl mx-auto mb-16 md:px-10"${_scopeId}>`);
            _push2(ssrRenderComponent(Pagination, {
              links: __props.blogs.links
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("main", { class: "pt-8 pb-16 bg-white lg:pt-16 lg:pb-24 dark:bg-gray-900" }, [
                createVNode("div", { class: "flex justify-between max-w-screen-xl px-4 mx-auto" }, [
                  createVNode("article", { class: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8" }, [
                    createVNode("header", { class: "mb-4 lg:mb-6 not-format" }, [
                      createVNode("div", { class: "flex flex-col items-center justify-center my-10 text-center" }, [
                        createVNode("h1", { class: "text-4xl font-black underline text-rose-900" }, toDisplayString(__props.blog.title), 1)
                      ]),
                      createVNode("div", { class: "container max-w-5xl mx-auto" }, [
                        createVNode("img", {
                          class: "object-cover w-full object-center m-auto max-h-[25rem] rounded",
                          alt: "hero",
                          src: __props.blog.image
                        }, null, 8, ["src"])
                      ])
                    ]),
                    createVNode("div", {
                      class: "container max-w-5xl mx-auto leading-9",
                      innerHTML: __props.blog.description
                    }, null, 8, ["innerHTML"])
                  ])
                ])
              ]),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Blog/ShowBlog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
