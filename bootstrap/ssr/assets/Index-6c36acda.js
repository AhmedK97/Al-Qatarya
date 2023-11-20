import { mergeProps, withCtx, createVNode, toDisplayString, unref, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import "./ImageWithDetails-efb89353.js";
import { S as SectionTitleShadow } from "./SectionTitleShadow-51b96593.js";
import { _ as _sfc_main$1 } from "./AppLayout-52b4eff8.js";
import { Link } from "@inertiajs/vue3";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "./NavBar-d6f446bb.js";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    service: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "Dashboard" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="text-gray-600 body-font"${_scopeId}><div class="container flex flex-col items-center justify-center mx-auto max-w-7xl"${_scopeId}><div class="flex flex-col items-center justify-center mt-10 md:mt-20"${_scopeId}>`);
            _push2(ssrRenderComponent(SectionTitleShadow, null, {
              "upper-title": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-3xl md:text-4xl"${_scopeId2}>${ssrInterpolate(_ctx.$t("services-upper"))}</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-3xl md:text-4xl" }, toDisplayString(_ctx.$t("services-upper")), 1)
                  ];
                }
              }),
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-2xl md:text-3xl"${_scopeId2}>${ssrInterpolate(_ctx.$t("services"))}</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-2xl md:text-3xl" }, toDisplayString(_ctx.$t("services")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p class="mt-8 text-lg font-medium text-gray-500"${_scopeId}>${ssrInterpolate(_ctx.$t("why.us-desc"))}</p></div><div class="container grid grid-cols-1 px-4 mx-auto mt-10 md:grid-cols-2 lg:grid-cols-3 gap-x-10 max-w-7xl gap-y-60 mb-60"${_scopeId}><!--[-->`);
            ssrRenderList(__props.service, (imageUrl, index) => {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("service", imageUrl.slug)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="relative"${_scopeId2}><div class=""${_scopeId2}><img class="w-full rounded-lg h-96" loading="lazy"${ssrRenderAttr("src", imageUrl.image)}${_scopeId2}></div><div class="absolute top-[15rem] right-0 z-40 p-5 m-5 transition duration-300 ease-in-out bg-gray-100 rounded-lg shadow-lg hover:translate-y-2/3 shadow-blue-100 hover:shadow-rose-50 translate-y-3/4"${_scopeId2}><p class="text-xl font-bold text-rose-900"${_scopeId2}>${ssrInterpolate(imageUrl.name)}</p><p class="mt-4 text-lg"${_scopeId2}>${ssrInterpolate(imageUrl.body)}</p></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "relative" }, [
                        createVNode("div", { class: "" }, [
                          createVNode("img", {
                            class: "w-full rounded-lg h-96",
                            loading: "lazy",
                            src: imageUrl.image
                          }, null, 8, ["src"])
                        ]),
                        createVNode("div", { class: "absolute top-[15rem] right-0 z-40 p-5 m-5 transition duration-300 ease-in-out bg-gray-100 rounded-lg shadow-lg hover:translate-y-2/3 shadow-blue-100 hover:shadow-rose-50 translate-y-3/4" }, [
                          createVNode("p", { class: "text-xl font-bold text-rose-900" }, toDisplayString(imageUrl.name), 1),
                          createVNode("p", { class: "mt-4 text-lg" }, toDisplayString(imageUrl.body), 1)
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--></div></div></section>`);
          } else {
            return [
              createVNode("section", { class: "text-gray-600 body-font" }, [
                createVNode("div", { class: "container flex flex-col items-center justify-center mx-auto max-w-7xl" }, [
                  createVNode("div", { class: "flex flex-col items-center justify-center mt-10 md:mt-20" }, [
                    createVNode(SectionTitleShadow, null, {
                      "upper-title": withCtx(() => [
                        createVNode("span", { class: "text-3xl md:text-4xl" }, toDisplayString(_ctx.$t("services-upper")), 1)
                      ]),
                      title: withCtx(() => [
                        createVNode("span", { class: "text-2xl md:text-3xl" }, toDisplayString(_ctx.$t("services")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode("p", { class: "mt-8 text-lg font-medium text-gray-500" }, toDisplayString(_ctx.$t("why.us-desc")), 1)
                  ]),
                  createVNode("div", { class: "container grid grid-cols-1 px-4 mx-auto mt-10 md:grid-cols-2 lg:grid-cols-3 gap-x-10 max-w-7xl gap-y-60 mb-60" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.service, (imageUrl, index) => {
                      return openBlock(), createBlock("div", { key: index }, [
                        createVNode(unref(Link), {
                          href: _ctx.route("service", imageUrl.slug)
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "relative" }, [
                              createVNode("div", { class: "" }, [
                                createVNode("img", {
                                  class: "w-full rounded-lg h-96",
                                  loading: "lazy",
                                  src: imageUrl.image
                                }, null, 8, ["src"])
                              ]),
                              createVNode("div", { class: "absolute top-[15rem] right-0 z-40 p-5 m-5 transition duration-300 ease-in-out bg-gray-100 rounded-lg shadow-lg hover:translate-y-2/3 shadow-blue-100 hover:shadow-rose-50 translate-y-3/4" }, [
                                createVNode("p", { class: "text-xl font-bold text-rose-900" }, toDisplayString(imageUrl.name), 1),
                                createVNode("p", { class: "mt-4 text-lg" }, toDisplayString(imageUrl.body), 1)
                              ])
                            ])
                          ]),
                          _: 2
                        }, 1032, ["href"])
                      ]);
                    }), 128))
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Service/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
