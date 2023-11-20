import { ref, mergeProps, useSSRContext, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./AppLayout-52b4eff8.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { S as SectionTitleShadow } from "./SectionTitleShadow-51b96593.js";
import "@inertiajs/vue3";
import "./NavBar-d6f446bb.js";
const FaqItem_vue_vue_type_style_index_0_scoped_6447501b_lang = "";
const _sfc_main$1 = {
  __name: "FaqItem",
  __ssrInlineRender: true,
  props: {
    faq: Object
  },
  setup(__props) {
    const opened = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center mt-10" }, _attrs))} data-v-6447501b><div class="container max-w-4xl px-4 mx-auto md:px-0" data-v-6447501b>`);
      if (!opened.value) {
        _push(`<div class="flex items-center h-16 px-8 space-x-2 border rounded-lg shadow-md cursor-pointer lg:h-16 rtl:space-x-reverse" data-v-6447501b><img class="w-4 h-4 mx-2" loading="lazy" src="/storage/images/down-arrow-faq.svg" alt="arrow-down" data-v-6447501b><p class="text-base lg:text-lg md:text-base text-secondarydark-600" data-v-6447501b>${ssrInterpolate(__props.faq.question)}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (opened.value) {
        _push(`<div data-v-6447501b><div class="flex cursor-pointer items-center lg:h-16 h-[3.8rem] md:h-20 border-t border-rose-900 border-r border-l rounded-t-lg bg-rose-900 px-5 lg:px-8 space-x-3 rtl:space-x-reverse" data-v-6447501b><img class="w-4 h-4 mx-2" loading="lazy" src="/storage/images/down-arrow-faq-invert.svg" alt="arrow-down" data-v-6447501b><p class="text-base text-gray-50 lg:text-lg md:text-base" data-v-6447501b>${ssrInterpolate(__props.faq.question)}</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (opened.value) {
        _push(`<div class="px-5 border-b border-l border-r rounded-b-lg border-rose-900 py-7 md:px-8 md:py-8" data-v-6447501b><p class="text-sm font-medium lg:text-base" data-v-6447501b>${ssrInterpolate(__props.faq.answer)}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/FaqItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const FaqItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-6447501b"]]);
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    faqs: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$2, mergeProps({ title: "faq" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="container mx-auto max-w-7xl"${_scopeId}><div class="flex flex-col items-center justify-center mt-10 md:mt-20"${_scopeId}>`);
            _push2(ssrRenderComponent(SectionTitleShadow, null, {
              "upper-title": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-3xl md:text-4xl"${_scopeId2}>${ssrInterpolate(_ctx.$t("faq.upper"))}</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-3xl md:text-4xl" }, toDisplayString(_ctx.$t("faq.upper")), 1)
                  ];
                }
              }),
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-2xl md:text-3xl"${_scopeId2}>${ssrInterpolate(_ctx.$t("faq.title"))}</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-2xl md:text-3xl" }, toDisplayString(_ctx.$t("faq.title")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="pt-6 space-y-8 lg:pt-10 mb-36 sm:px-6"${_scopeId}><!--[-->`);
            ssrRenderList(__props.faqs, (faq, index) => {
              _push2(ssrRenderComponent(FaqItem, {
                key: index,
                faq
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></section>`);
          } else {
            return [
              createVNode("section", { class: "container mx-auto max-w-7xl" }, [
                createVNode("div", { class: "flex flex-col items-center justify-center mt-10 md:mt-20" }, [
                  createVNode(SectionTitleShadow, null, {
                    "upper-title": withCtx(() => [
                      createVNode("span", { class: "text-3xl md:text-4xl" }, toDisplayString(_ctx.$t("faq.upper")), 1)
                    ]),
                    title: withCtx(() => [
                      createVNode("span", { class: "text-2xl md:text-3xl" }, toDisplayString(_ctx.$t("faq.title")), 1)
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "pt-6 space-y-8 lg:pt-10 mb-36 sm:px-6" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.faqs, (faq, index) => {
                    return openBlock(), createBlock(FaqItem, {
                      key: index,
                      faq
                    }, null, 8, ["faq"]);
                  }), 128))
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Faq/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
