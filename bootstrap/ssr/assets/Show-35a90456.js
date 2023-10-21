import { unref, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext, createTextVNode, toDisplayString } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$3 } from "./AppLayout-5766592f.js";
import "@inertiajs/vue3";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
/* empty css                   */import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { S as SectionTitleShadow } from "./SectionTitleShadow-e49c0ecd.js";
import "./NavBar-2a13b177.js";
const ImageCarousel_vue_vue_type_style_index_0_scoped_97c4bf4b_lang = "";
const _sfc_main$2 = {
  __name: "ImageCarousel",
  __ssrInlineRender: true,
  props: {
    Gallery: Object
  },
  setup(__props) {
    const breakpoints = {
      100: {
        itemsToShow: 1.5
      },
      600: {
        itemsToShow: 2
      },
      700: {
        itemsToShow: 2
      },
      768: {
        itemsToShow: 3
      },
      1024: {
        itemsToShow: 2
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Carousel), mergeProps({
        id: "activeClasses",
        breakpoints,
        wrapAround: true,
        autoplay: 1500
      }, _attrs), {
        addons: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Navigation), null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Pagination), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Navigation)),
              createVNode(unref(Pagination))
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(__props.Gallery, (gal) => {
              _push2(ssrRenderComponent(unref(Slide), { key: gal }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div data-v-97c4bf4b${_scopeId2}><div class="mb-10 carousel__item" data-v-97c4bf4b${_scopeId2}><img class="w-full mt-4 rounded-lg max-h-[20rem] lg:mt-10" loading="lazy"${ssrRenderAttr("src", gal)} data-v-97c4bf4b${_scopeId2}></div></div>`);
                  } else {
                    return [
                      createVNode("div", null, [
                        createVNode("div", { class: "mb-10 carousel__item" }, [
                          createVNode("img", {
                            class: "w-full mt-4 rounded-lg max-h-[20rem] lg:mt-10",
                            loading: "lazy",
                            src: gal
                          }, null, 8, ["src"])
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(__props.Gallery, (gal) => {
                return openBlock(), createBlock(unref(Slide), { key: gal }, {
                  default: withCtx(() => [
                    createVNode("div", null, [
                      createVNode("div", { class: "mb-10 carousel__item" }, [
                        createVNode("img", {
                          class: "w-full mt-4 rounded-lg max-h-[20rem] lg:mt-10",
                          loading: "lazy",
                          src: gal
                        }, null, 8, ["src"])
                      ])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ImageCarousel.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ImageCarousel = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-97c4bf4b"]]);
const _sfc_main$1 = {
  __name: "ProjectDescription",
  __ssrInlineRender: true,
  props: {
    project: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "container mx-auto max-w-7xl" }, _attrs))}><div class="flex flex-col p-2 space-y-8 md:space-x-10 md:flex-row rtl:space-x-reverse"><div class="px-4">`);
      _push(ssrRenderComponent(SectionTitleShadow, null, {
        "upper-title": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("project.desc.upper"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("project.desc.upper")), 1)
            ];
          }
        }),
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("project.desc"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("project.desc")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="mt-8 text-lg font-medium text-gray-500">${ssrInterpolate(__props.project.description)}</p></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ProjectDescription.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    project: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$3, mergeProps({ title: "Dashboard" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<main class="pt-8 pb-16 bg-white lg:pt-16 lg:pb-24 dark:bg-gray-900"${_scopeId}><div class="flex justify-between max-w-screen-xl px-4 mx-auto"${_scopeId}><article class="px-4 mx-auto w-100"${_scopeId}><div class="flex flex-col justify-between lg:flex-row lg:space-x-20 rtl:space-x-reverse"${_scopeId}><div class="w-full space-y-10 lg:w-1/2"${_scopeId}><header class="mb-4 lg:mb-6 not-format"${_scopeId}><div class="flex flex-col"${_scopeId}>`);
            _push2(ssrRenderComponent(SectionTitleShadow, null, {
              "upper-title": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-3xl md:text-4xl"${_scopeId2}>${ssrInterpolate(__props.project.title)}</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-3xl md:text-4xl" }, toDisplayString(__props.project.title), 1)
                  ];
                }
              }),
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-2xl md:text-3xl"${_scopeId2}>${ssrInterpolate(__props.project.title)}</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-2xl md:text-3xl" }, toDisplayString(__props.project.title), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></header><div class="flex flex-col space-y-8 font-medium whitespace-nowrap"${_scopeId}><div class="flex items-center space-x-2 rtl:space-x-reverse"${_scopeId}><p${_scopeId}>${ssrInterpolate(_ctx.$t("agent"))}</p><hr class="w-full h-px border-0 rounded lg:w-80 bg-rose-900"${_scopeId}><p class="font-semibold"${_scopeId}>${ssrInterpolate(__props.project.agent)}</p></div><div class="flex items-center space-x-2 rtl:space-x-reverse"${_scopeId}><p${_scopeId}>${ssrInterpolate(_ctx.$t("location"))}</p><hr class="w-full h-px border-0 rounded lg:w-80 bg-rose-900"${_scopeId}><p class="font-semibold"${_scopeId}>${ssrInterpolate(__props.project.address)}</p></div><div class="flex items-center space-x-2 rtl:space-x-reverse"${_scopeId}><p${_scopeId}>${ssrInterpolate(_ctx.$t("project-date"))}</p><hr class="w-full h-px border-0 rounded lg:w-80 bg-rose-900"${_scopeId}><p class="font-semibold"${_scopeId}>${ssrInterpolate(__props.project.date)}</p></div><div class="flex items-center space-x-2 rtl:space-x-reverse"${_scopeId}><p${_scopeId}>${ssrInterpolate(_ctx.$t("space-area"))}</p><hr class="w-full h-px border-0 rounded lg:w-80 bg-rose-900"${_scopeId}><p class="font-semibold"${_scopeId}>${ssrInterpolate(__props.project.space_area)} ㎡ </p></div></div></div><div class="m-auto lg:w-1/2"${_scopeId}>`);
            _push2(ssrRenderComponent(ImageCarousel, {
              Gallery: __props.project.images
            }, null, _parent2, _scopeId));
            _push2(`</div></div></article></div>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              class: "mt-4",
              project: __props.project
            }, null, _parent2, _scopeId));
            _push2(`</main>`);
          } else {
            return [
              createVNode("main", { class: "pt-8 pb-16 bg-white lg:pt-16 lg:pb-24 dark:bg-gray-900" }, [
                createVNode("div", { class: "flex justify-between max-w-screen-xl px-4 mx-auto" }, [
                  createVNode("article", { class: "px-4 mx-auto w-100" }, [
                    createVNode("div", { class: "flex flex-col justify-between lg:flex-row lg:space-x-20 rtl:space-x-reverse" }, [
                      createVNode("div", { class: "w-full space-y-10 lg:w-1/2" }, [
                        createVNode("header", { class: "mb-4 lg:mb-6 not-format" }, [
                          createVNode("div", { class: "flex flex-col" }, [
                            createVNode(SectionTitleShadow, null, {
                              "upper-title": withCtx(() => [
                                createVNode("span", { class: "text-3xl md:text-4xl" }, toDisplayString(__props.project.title), 1)
                              ]),
                              title: withCtx(() => [
                                createVNode("span", { class: "text-2xl md:text-3xl" }, toDisplayString(__props.project.title), 1)
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        createVNode("div", { class: "flex flex-col space-y-8 font-medium whitespace-nowrap" }, [
                          createVNode("div", { class: "flex items-center space-x-2 rtl:space-x-reverse" }, [
                            createVNode("p", null, toDisplayString(_ctx.$t("agent")), 1),
                            createVNode("hr", { class: "w-full h-px border-0 rounded lg:w-80 bg-rose-900" }),
                            createVNode("p", { class: "font-semibold" }, toDisplayString(__props.project.agent), 1)
                          ]),
                          createVNode("div", { class: "flex items-center space-x-2 rtl:space-x-reverse" }, [
                            createVNode("p", null, toDisplayString(_ctx.$t("location")), 1),
                            createVNode("hr", { class: "w-full h-px border-0 rounded lg:w-80 bg-rose-900" }),
                            createVNode("p", { class: "font-semibold" }, toDisplayString(__props.project.address), 1)
                          ]),
                          createVNode("div", { class: "flex items-center space-x-2 rtl:space-x-reverse" }, [
                            createVNode("p", null, toDisplayString(_ctx.$t("project-date")), 1),
                            createVNode("hr", { class: "w-full h-px border-0 rounded lg:w-80 bg-rose-900" }),
                            createVNode("p", { class: "font-semibold" }, toDisplayString(__props.project.date), 1)
                          ]),
                          createVNode("div", { class: "flex items-center space-x-2 rtl:space-x-reverse" }, [
                            createVNode("p", null, toDisplayString(_ctx.$t("space-area")), 1),
                            createVNode("hr", { class: "w-full h-px border-0 rounded lg:w-80 bg-rose-900" }),
                            createVNode("p", { class: "font-semibold" }, toDisplayString(__props.project.space_area) + " ㎡ ", 1)
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "m-auto lg:w-1/2" }, [
                        createVNode(ImageCarousel, {
                          Gallery: __props.project.images
                        }, null, 8, ["Gallery"])
                      ])
                    ])
                  ])
                ]),
                createVNode(_sfc_main$1, {
                  class: "mt-4",
                  project: __props.project
                }, null, 8, ["project"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Project/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
