import { unref, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
/* empty css                   */import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const Slider_vue_vue_type_style_index_0_scoped_9885f92e_lang = "";
const _sfc_main = {
  __name: "Slider",
  __ssrInlineRender: true,
  props: {
    services: Object
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
        itemsToShow: 4
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Carousel), mergeProps({
        id: "activeClasses",
        breakpoints,
        wrapAround: true,
        transition: 1e3,
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
            ssrRenderList(__props.services, (service) => {
              _push2(ssrRenderComponent(unref(Slide), {
                key: service.id
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(Link), {
                      rel: "stylesheet",
                      href: _ctx.route("service", service.slug)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div data-v-9885f92e${_scopeId3}><div class="mb-10 carousel__item" data-v-9885f92e${_scopeId3}><img class="w-full mt-4 rounded-lg max-h-[20rem] lg:mt-10" loading="lazy"${ssrRenderAttr("src", service.main_image)} alt="خدمات غسيل وعزل الخزانات" data-v-9885f92e${_scopeId3}></div><div data-v-9885f92e${_scopeId3}><h1 class="text-2xl font-bold text-center text-gray-800" data-v-9885f92e${_scopeId3}>${ssrInterpolate(service.name)}</h1></div></div>`);
                        } else {
                          return [
                            createVNode("div", null, [
                              createVNode("div", { class: "mb-10 carousel__item" }, [
                                createVNode("img", {
                                  class: "w-full mt-4 rounded-lg max-h-[20rem] lg:mt-10",
                                  loading: "lazy",
                                  src: service.main_image,
                                  alt: "خدمات غسيل وعزل الخزانات"
                                }, null, 8, ["src"])
                              ]),
                              createVNode("div", null, [
                                createVNode("h1", { class: "text-2xl font-bold text-center text-gray-800" }, toDisplayString(service.name), 1)
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(Link), {
                        rel: "stylesheet",
                        href: _ctx.route("service", service.slug)
                      }, {
                        default: withCtx(() => [
                          createVNode("div", null, [
                            createVNode("div", { class: "mb-10 carousel__item" }, [
                              createVNode("img", {
                                class: "w-full mt-4 rounded-lg max-h-[20rem] lg:mt-10",
                                loading: "lazy",
                                src: service.main_image,
                                alt: "خدمات غسيل وعزل الخزانات"
                              }, null, 8, ["src"])
                            ]),
                            createVNode("div", null, [
                              createVNode("h1", { class: "text-2xl font-bold text-center text-gray-800" }, toDisplayString(service.name), 1)
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1032, ["href"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(__props.services, (service) => {
                return openBlock(), createBlock(unref(Slide), {
                  key: service.id
                }, {
                  default: withCtx(() => [
                    createVNode(unref(Link), {
                      rel: "stylesheet",
                      href: _ctx.route("service", service.slug)
                    }, {
                      default: withCtx(() => [
                        createVNode("div", null, [
                          createVNode("div", { class: "mb-10 carousel__item" }, [
                            createVNode("img", {
                              class: "w-full mt-4 rounded-lg max-h-[20rem] lg:mt-10",
                              loading: "lazy",
                              src: service.main_image,
                              alt: "خدمات غسيل وعزل الخزانات"
                            }, null, 8, ["src"])
                          ]),
                          createVNode("div", null, [
                            createVNode("h1", { class: "text-2xl font-bold text-center text-gray-800" }, toDisplayString(service.name), 1)
                          ])
                        ])
                      ]),
                      _: 2
                    }, 1032, ["href"])
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Slider.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Slider = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9885f92e"]]);
export {
  Slider as default
};
