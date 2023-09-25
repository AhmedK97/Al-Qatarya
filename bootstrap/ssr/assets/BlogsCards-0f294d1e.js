import { defineComponent, useSSRContext, resolveComponent, withCtx, createTextVNode, toDisplayString, mergeProps, unref } from "vue";
import { Link } from "@inertiajs/vue3";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { S as SectionTitleShadow } from "./SectionTitleShadow-e49c0ecd.js";
const _sfc_main$1 = defineComponent({
  components: {
    Link
  },
  props: {
    links: Array
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  if (_ctx.links.length > 3) {
    _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex flex-wrap space-x-2 rtl:space-x-reverse"><!--[-->`);
    ssrRenderList(_ctx.links, (link, key) => {
      _push(`<!--[-->`);
      if (link.url === null) {
        _push(`<div class="px-4 py-3 mb-1 text-sm leading-4 bg-white border rounded select-none text-rose-900">${link.label}</div>`);
      } else {
        _push(ssrRenderComponent(_component_Link, {
          "preserve-scroll": "",
          class: ["px-4 py-3 mb-1 space-x-3 text-sm font-bold leading-4 border rounded text-secondary-700 bg-rose-900 hover:bg-white hover:text-secondary-600 hover:border-secondary-600", { "bg-gray-600": link.active }],
          href: link.url
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(link.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      }
      _push(`<!--]-->`);
    });
    _push(`<!--]--></div></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Pagination.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Pagination = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "BlogsCards",
  __ssrInlineRender: true,
  props: {
    blogs: Object
  },
  setup(__props) {
    const props = __props;
    console.log(props.blogs);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><div class="max-w-screen-xl px-4 py-8 mx-auto md:py-20 lg:py-16 lg:px-6"><div class="flex flex-col items-center justify-center">`);
      _push(ssrRenderComponent(SectionTitleShadow, null, {
        "upper-title": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("blog.upper"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("blog.upper")), 1)
            ];
          }
        }),
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("blog"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("blog")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3"><!--[-->`);
      ssrRenderList(__props.blogs.data, (blog, index) => {
        _push(`<article class="p-6 border border-gray-200 rounded-lg shadow-lg bg-gray-50"><div class="flex items-center justify-between mb-5 text-gray-500"><img class="object-fill w-full h-[15rem] rounded-md" loading="lazy"${ssrRenderAttr("src", blog.image)} alt="Alexandra avatar"></div><h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">`);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("show.blogs", blog.slug),
          class: "inline-flex items-center font-medium text-rose-900 hover:underline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(blog.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(blog.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</h2><p class="mb-5 font-normal text-gray-900">${ssrInterpolate(blog.description)}</p><div class="flex items-center space-x-2 rtl:space-x-reverse">`);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("show.blogs", blog.slug),
          class: "inline-flex items-center font-medium text-rose-900 hover:underline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` اقرأ المزيد `);
            } else {
              return [
                createTextVNode(" اقرأ المزيد ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<svg class="w-4 h-4 rtl:rotate-180 text-rose-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></div></article>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/BlogsCards.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  Pagination as P,
  _sfc_main as _
};
