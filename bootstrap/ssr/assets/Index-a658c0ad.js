import { mergeProps, useSSRContext, withCtx, createVNode, toDisplayString, createTextVNode, unref } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderStyle, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$5 } from "./AppLayout-52b4eff8.js";
import { trans } from "laravel-vue-i18n";
import { S as SectionTitleShadow } from "./SectionTitleShadow-51b96593.js";
import { Link } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./NavBar-d6f446bb.js";
const _sfc_main$4 = {
  name: "pink-tabs",
  data() {
    return {
      openTab: 1
    };
  },
  methods: {
    toggleTabs: function(tabNumber) {
      this.openTab = tabNumber;
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-wrap" }, _attrs))}><div class="container w-full px-4 mx-auto max-w-7xl"><ul class="flex flex-row flex-wrap pt-3 pb-4 mb-0 space-x-2 list-none rtl:space-x-reverse"><li class="flex-auto text-center"><a class="${ssrRenderClass([{
    "text-rose-900 bg-white border-2 border-rose-900": $data.openTab !== 1,
    "text-white bg-rose-900 border-2 border-rose-900": $data.openTab === 1
  }, "block p-5 text-xs font-bold leading-normal uppercase rounded shadow-lg md:text-lg"])}">${ssrInterpolate(_ctx.$t("vision"))}</a></li><li class="flex-auto text-center"><a class="${ssrRenderClass([{
    "text-rose-900 bg-white border-2 border-rose-900": $data.openTab !== 2,
    "text-white bg-rose-900 border-2 border-rose-900": $data.openTab === 2
  }, "block p-5 text-xs font-bold leading-normal uppercase rounded shadow-lg md:text-lg"])}">${ssrInterpolate(_ctx.$t("mission"))}</a></li></ul><div class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg"><div class="flex-auto px-4 py-5"><div class="tab-content tab-space"><div class="${ssrRenderClass({
    hidden: $data.openTab !== 1,
    block: $data.openTab === 1
  })}"><p class="font-normal md:text-xl">${ssrInterpolate(_ctx.$t("vision-desc"))}</p></div><div class="${ssrRenderClass({
    hidden: $data.openTab !== 2,
    block: $data.openTab === 2
  })}"><p class="font-normal md:text-xl">${ssrInterpolate(_ctx.$t("mission-desc"))}</p></div></div></div></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Tabs.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Tabs = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$3 = {
  __name: "OurTeam",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "px-4 bg-rose-900" }, _attrs))}><div class="container flex flex-col justify-between p-2 px-4 py-20 mx-auto lg:flex-row max-w-7xl lg:px-0"><div class="">`);
      _push(ssrRenderComponent(SectionTitleShadow, null, {
        "upper-title": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-secondary-900"${_scopeId}>${ssrInterpolate(_ctx.$t("our.team.upper"))}</span>`);
          } else {
            return [
              createVNode("span", { class: "text-secondary-900" }, toDisplayString(_ctx.$t("our.team.upper")), 1)
            ];
          }
        }),
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-secondary-900"${_scopeId}>${ssrInterpolate(_ctx.$t("our.team"))}</span>`);
          } else {
            return [
              createVNode("span", { class: "text-secondary-900" }, toDisplayString(_ctx.$t("our.team")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="mt-4 text-lg font-medium text-gray-50">${ssrInterpolate(_ctx.$t("who.we.are-desc"))}</p><p class="mt-10 text-base font-medium leading-relaxed text-gray-50 lg:text-lg lg:w-96">${ssrInterpolate(_ctx.$t("our.team-paragraph"))}</p></div><div class="flex flex-col items-center mt-10 space-y-8 lg:items-start lg:mt-0 lg:space-x-8 lg:flex-row rtl:space-x-reverse lg:space-y-0"><div class=""><img src="/storage/images/banner1.webp" class="rounded-lg w-96 h-[25rem]" alt=""><p class="mt-4 text-xl font-semibold text-secondary-700">${ssrInterpolate(_ctx.$t("general.manager"))}</p><p class="text-xl font-semibold text-gray-50"> المهندس سيد مصطفى </p></div><div class=""><img src="/storage/images/banner1.webp" class="rounded-lg w-96 h-80" alt=""><p class="mt-4 text-xl font-semibold text-secondary-700">${ssrInterpolate(_ctx.$t("general.manager"))}</p><p class="text-xl font-semibold text-gray-50"> المهندس سيد مصطفى </p></div></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/OurTeam.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ProgressBar_vue_vue_type_style_index_0_scoped_7306734a_lang = "";
const _sfc_main$2 = {
  props: {
    targetNumber: {
      type: Number,
      required: true
    },
    endDigit: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      progressBarCounter: 0,
      progressBarWidth: 0
    };
  },
  mounted() {
    this.observeSection();
  },
  methods: {
    observeSection() {
      const options = {
        rootMargin: "0px",
        threshold: 0.5
        // Adjust this threshold as needed
      };
      const observer = new IntersectionObserver(
        this.handleIntersect,
        options
      );
      observer.observe(this.$refs.progressBarContainer);
    },
    handleIntersect(entries) {
      if (entries[0].isIntersecting) {
        this.startProgressBar();
      }
    },
    startProgressBar() {
      const interval = 50;
      const targetNumber = this.targetNumber;
      const progressBarInterval = setInterval(() => {
        if (this.progressBarCounter >= targetNumber) {
          clearInterval(progressBarInterval);
        } else {
          this.progressBarCounter++;
          this.progressBarWidth = this.progressBarCounter / targetNumber * this.endDigit;
        }
      }, interval);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "relative h-3 mt-12 bg-gray-200 rounded-full",
    ref: "progressBarContainer"
  }, _attrs))} data-v-7306734a><div class="h-full rounded-full bg-rose-900" style="${ssrRenderStyle({ width: $data.progressBarWidth + "%" })}" data-v-7306734a><div class="absolute bottom-[-6px] transform -translate-x-1/2 rtl:translate-x-1/2 w-6 h-6 bg-rose-900 text-white text-xs rounded-full flex items-center justify-center" style="${ssrRenderStyle({
    [_ctx.$page.props.locale[0].currentLocaleCode === "ar" ? "right" : "left"]: $data.progressBarWidth + "%"
  })}" data-v-7306734a><span class="mt-1" data-v-7306734a>${ssrInterpolate($data.progressBarCounter)}</span></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ProgressBar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ProgressBar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-7306734a"]]);
const _sfc_main$1 = {
  __name: "AllServices",
  __ssrInlineRender: true,
  props: {
    services: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "container mx-auto max-w-7xl" }, _attrs))}><div class="flex flex-col justify-center p-2"><div class="px-4">`);
      _push(ssrRenderComponent(SectionTitleShadow, null, {
        "upper-title": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("why.us-upper"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("why.us-upper")), 1)
            ];
          }
        }),
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("why.us"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("why.us")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="mt-8 text-lg font-medium text-gray-500">${ssrInterpolate(_ctx.$t("why.us-desc"))}</p><div class="grid grid-cols-2 mt-4 md:grid-cols-3 lg:grid-cols-4 gap-y-10 md:mt-10"><!--[-->`);
      ssrRenderList(__props.services, (service) => {
        _push(`<div class="flex space-x-4 rtl:space-x-reverse"><div class="flex items-center justify-center w-6 h-6 rounded-full xl:w-8 xl:h-8 bg-rose-900 shrink-0"><img src="/storage/images/check-white.svg" class="w-3 xl:w-5" loading="lazy" alt=""></div>`);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("service", service.slug)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p class="mt-1.5 text-sm xl:text-lg font-semibold text-gray-800"${_scopeId}>${ssrInterpolate(service.name)}</p>`);
            } else {
              return [
                createVNode("p", { class: "mt-1.5 text-sm xl:text-lg font-semibold text-gray-800" }, toDisplayString(service.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/AllServices.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    services: Object
  },
  setup(__props) {
    const props = __props;
    console.log(props.services);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$5, mergeProps({
        title: unref(trans)("home.about")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="mt-10 mb-20 lg:mt-36"${_scopeId}><div class="container flex flex-col justify-center w-full p-2 mx-auto space-y-8 lg:space-y-0 lg:space-x-10 lg:flex-row ltr:space-x-reverse max-w-7xl"${_scopeId}><div class="relative order-1 lg:order-2"${_scopeId}><img src="/storage/images/dots.png" class="hidden xl:block md:w-full lg:h-[500px] absolute top-0 -translate-y-14 -translate-x-14 ltr:translate-x-14" alt=""${_scopeId}><img src="/storage/images/banner1-1.webp" class="md:w-full lg:h-[600px] rounded-lg relative z-10" alt=""${_scopeId}></div><div class="order-2 w-full px-4 md:order-1"${_scopeId}>`);
            _push2(ssrRenderComponent(SectionTitleShadow, null, {
              "upper-title": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("who.we.are-upper"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("who.we.are-upper")), 1)
                  ];
                }
              }),
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("who.we.are"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("who.we.are")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p class="mt-10 text-lg font-medium leading-relaxed text-gray-500 lg:text-lg"${_scopeId}>${ssrInterpolate(_ctx.$t("who.we.are-paragraph1"))}</p><p class="mt-2 text-base font-medium leading-relaxed text-gray-500 lg:text-lg"${_scopeId}>${ssrInterpolate(_ctx.$t("who.we.are-paragraph2"))}</p><p class="mt-2 text-base font-medium leading-relaxed text-gray-500 lg:text-lg"${_scopeId}>${ssrInterpolate(_ctx.$t("who.we.are-paragraph3"))}</p><p class="mt-2 text-base font-medium leading-relaxed text-gray-500 lg:text-lg"${_scopeId}>${ssrInterpolate(_ctx.$t("who.we.are-paragraph4"))}</p><p class="mt-2 text-base font-medium leading-relaxed text-gray-500 lg:text-lg"${_scopeId}>${ssrInterpolate(_ctx.$t("who.we.are-paragraph5"))}</p><p class="mt-2 text-base font-medium leading-relaxed text-gray-500 lg:text-lg"${_scopeId}>${ssrInterpolate(_ctx.$t("who.we.are-paragraph6"))}</p></div></div>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              services: __props.services,
              class: "mt-20"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, { class: "mt-20" }, null, _parent2, _scopeId));
            _push2(`<section class="container mx-auto mt-20 max-w-7xl"${_scopeId}><div class="flex flex-col justify-center p-2 space-y-8 lg:space-y-0 lg:space-x-10 lg:flex-row rtl:space-x-reverse"${_scopeId}><img src="/storage/images/banner1.webp" class="w-full lg:w-[45%] lg:h-[600px] rounded-lg" loading="lazy" alt=""${_scopeId}><div class="px-4"${_scopeId}>`);
            _push2(ssrRenderComponent(SectionTitleShadow, null, {
              "upper-title": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("why.us-upper"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("why.us-upper")), 1)
                  ];
                }
              }),
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("why.us"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("why.us")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p class="mt-8 text-lg font-medium text-gray-500"${_scopeId}>${ssrInterpolate(_ctx.$t("why.us-desc"))}</p><p class="mt-4 text-base font-medium leading-relaxed text-gray-500 lg:text-lg"${_scopeId}>${ssrInterpolate(_ctx.$t("about.us-desc"))}</p><div class="flex flex-col w-full mt-4 space-y-8"${_scopeId}><div class="flex flex-col space-y-4"${_scopeId}><p class="text-lg font-semibold"${_scopeId}>${ssrInterpolate(_ctx.$t("progress.bar.1"))}</p>`);
            _push2(ssrRenderComponent(ProgressBar, {
              targetNumber: 40,
              endDigit: 40
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-col space-y-4"${_scopeId}><p class="text-lg font-semibold"${_scopeId}>${ssrInterpolate(_ctx.$t("progress.bar.2"))}</p>`);
            _push2(ssrRenderComponent(ProgressBar, {
              targetNumber: 80,
              endDigit: 80
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-col space-y-4"${_scopeId}><p class="text-lg font-semibold"${_scopeId}>${ssrInterpolate(_ctx.$t("progress.bar.3"))}</p>`);
            _push2(ssrRenderComponent(ProgressBar, {
              targetNumber: 64,
              endDigit: 64
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-col space-y-4"${_scopeId}><p class="text-lg font-semibold"${_scopeId}>${ssrInterpolate(_ctx.$t("progress.bar.4"))}</p>`);
            _push2(ssrRenderComponent(ProgressBar, {
              targetNumber: 96,
              endDigit: 96
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div></div></section>`);
            _push2(ssrRenderComponent(Tabs, { class: "mt-20" }, null, _parent2, _scopeId));
            _push2(`</section>`);
          } else {
            return [
              createVNode("section", { class: "mt-10 mb-20 lg:mt-36" }, [
                createVNode("div", { class: "container flex flex-col justify-center w-full p-2 mx-auto space-y-8 lg:space-y-0 lg:space-x-10 lg:flex-row ltr:space-x-reverse max-w-7xl" }, [
                  createVNode("div", { class: "relative order-1 lg:order-2" }, [
                    createVNode("img", {
                      src: "/storage/images/dots.png",
                      class: "hidden xl:block md:w-full lg:h-[500px] absolute top-0 -translate-y-14 -translate-x-14 ltr:translate-x-14",
                      alt: ""
                    }),
                    createVNode("img", {
                      src: "/storage/images/banner1-1.webp",
                      class: "md:w-full lg:h-[600px] rounded-lg relative z-10",
                      alt: ""
                    })
                  ]),
                  createVNode("div", { class: "order-2 w-full px-4 md:order-1" }, [
                    createVNode(SectionTitleShadow, null, {
                      "upper-title": withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("who.we.are-upper")), 1)
                      ]),
                      title: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("who.we.are")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode("p", { class: "mt-10 text-lg font-medium leading-relaxed text-gray-500 lg:text-lg" }, toDisplayString(_ctx.$t("who.we.are-paragraph1")), 1),
                    createVNode("p", { class: "mt-2 text-base font-medium leading-relaxed text-gray-500 lg:text-lg" }, toDisplayString(_ctx.$t("who.we.are-paragraph2")), 1),
                    createVNode("p", { class: "mt-2 text-base font-medium leading-relaxed text-gray-500 lg:text-lg" }, toDisplayString(_ctx.$t("who.we.are-paragraph3")), 1),
                    createVNode("p", { class: "mt-2 text-base font-medium leading-relaxed text-gray-500 lg:text-lg" }, toDisplayString(_ctx.$t("who.we.are-paragraph4")), 1),
                    createVNode("p", { class: "mt-2 text-base font-medium leading-relaxed text-gray-500 lg:text-lg" }, toDisplayString(_ctx.$t("who.we.are-paragraph5")), 1),
                    createVNode("p", { class: "mt-2 text-base font-medium leading-relaxed text-gray-500 lg:text-lg" }, toDisplayString(_ctx.$t("who.we.are-paragraph6")), 1)
                  ])
                ]),
                createVNode(_sfc_main$1, {
                  services: __props.services,
                  class: "mt-20"
                }, null, 8, ["services"]),
                createVNode(_sfc_main$3, { class: "mt-20" }),
                createVNode("section", { class: "container mx-auto mt-20 max-w-7xl" }, [
                  createVNode("div", { class: "flex flex-col justify-center p-2 space-y-8 lg:space-y-0 lg:space-x-10 lg:flex-row rtl:space-x-reverse" }, [
                    createVNode("img", {
                      src: "/storage/images/banner1.webp",
                      class: "w-full lg:w-[45%] lg:h-[600px] rounded-lg",
                      loading: "lazy",
                      alt: ""
                    }),
                    createVNode("div", { class: "px-4" }, [
                      createVNode(SectionTitleShadow, null, {
                        "upper-title": withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("why.us-upper")), 1)
                        ]),
                        title: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("why.us")), 1)
                        ]),
                        _: 1
                      }),
                      createVNode("p", { class: "mt-8 text-lg font-medium text-gray-500" }, toDisplayString(_ctx.$t("why.us-desc")), 1),
                      createVNode("p", { class: "mt-4 text-base font-medium leading-relaxed text-gray-500 lg:text-lg" }, toDisplayString(_ctx.$t("about.us-desc")), 1),
                      createVNode("div", { class: "flex flex-col w-full mt-4 space-y-8" }, [
                        createVNode("div", { class: "flex flex-col space-y-4" }, [
                          createVNode("p", { class: "text-lg font-semibold" }, toDisplayString(_ctx.$t("progress.bar.1")), 1),
                          createVNode(ProgressBar, {
                            targetNumber: 40,
                            endDigit: 40
                          })
                        ]),
                        createVNode("div", { class: "flex flex-col space-y-4" }, [
                          createVNode("p", { class: "text-lg font-semibold" }, toDisplayString(_ctx.$t("progress.bar.2")), 1),
                          createVNode(ProgressBar, {
                            targetNumber: 80,
                            endDigit: 80
                          })
                        ]),
                        createVNode("div", { class: "flex flex-col space-y-4" }, [
                          createVNode("p", { class: "text-lg font-semibold" }, toDisplayString(_ctx.$t("progress.bar.3")), 1),
                          createVNode(ProgressBar, {
                            targetNumber: 64,
                            endDigit: 64
                          })
                        ]),
                        createVNode("div", { class: "flex flex-col space-y-4" }, [
                          createVNode("p", { class: "text-lg font-semibold" }, toDisplayString(_ctx.$t("progress.bar.4")), 1),
                          createVNode(ProgressBar, {
                            targetNumber: 96,
                            endDigit: 96
                          })
                        ])
                      ])
                    ])
                  ])
                ]),
                createVNode(Tabs, { class: "mt-20" })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/About/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
