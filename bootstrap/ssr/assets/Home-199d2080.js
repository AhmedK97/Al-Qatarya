import { mergeProps, useSSRContext, resolveDirective, withCtx, createTextVNode, toDisplayString, unref, ref, onMounted, watch, reactive, resolveComponent, createVNode, openBlock, createBlock, Fragment, renderList, renderSlot } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrGetDirectiveProps, ssrRenderComponent, ssrRenderSlot, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$a } from "./AppLayout-b613aaf0.js";
/* empty css                   */import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { S as SectionTitleShadow } from "./SectionTitleShadow-06c932f1.js";
import { Link } from "@inertiajs/vue3";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import { I as ImageWithDetails } from "./ImageWithDetails-efb89353.js";
import "./Slider-76e9e936.js";
import "./NavBar-6eb81a73.js";
const BannerSlider_vue_vue_type_style_index_0_scoped_9319a1d8_lang = "";
const _sfc_main$9 = {
  data() {
    return {
      currentSlideIndex: 0,
      slides: [
        {
          image: "/storage/images/banner1.webp",
          text: "الشركه القطريه للمقاولات العامه للمباني",
          description: "توفر شركة القطريه مجموعة مدربة و متميزة من الفنيين لتوفير أعلي مستويات بتقنية عالية و بأقل وقت ممكن"
        },
        {
          image: "/storage/images/banner2.webp",
          text: "الشركه القطريه للمقاولات العامه للمباني",
          description: "توفر شركة القطريه مجموعة مدربة و متميزة من الفنيين لتوفير  أعلي مستويات بتقنية عالية و بأقل وقت ممكن"
        },
        {
          image: "/storage/images/banner3.webp",
          text: "الشركه القطريه للمقاولات العامه للمباني",
          description: "توفر شركة القطريه مجموعة مدربة و متميزة من الفنيين لتوفير أعلي مستويات بتقنية عالية و بأقل وقت ممكن"
        }
        // Add more slides here
      ],
      animateText: false
    };
  },
  created() {
    this.startSlideShow();
  },
  methods: {
    startSlideShow() {
      setInterval(this.nextSlide, 5e3);
    },
    nextSlide() {
      this.animateText = false;
      setTimeout(() => {
        this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
        this.animateText = false;
      }, 300);
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "slider" }, _attrs))} data-v-9319a1d8><div class="relative w-full h-[27rem] md:h-[37rem]" data-v-9319a1d8><img${ssrRenderAttr("src", $data.slides[$data.currentSlideIndex].image)} alt="Banner" data-v-9319a1d8><div class="${ssrRenderClass([{ animate: $data.animateText }, "container right-0 px-8 mx-auto text-gray-50 text max-w-7xl rtl:left-0"])}" data-v-9319a1d8><p class="text-2xl md:text-4xl" data-v-9319a1d8>${ssrInterpolate(_ctx.$t("banner.title"))}</p><div data-v-9319a1d8><p class="mt-8 text-md md:text-xl md:w-[27rem]" data-v-9319a1d8>${ssrInterpolate(_ctx.$t("banner.desc"))}</p></div></div></div></div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/BannerSlider.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const BannerSlider = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-9319a1d8"]]);
const _sfc_main$8 = {
  __name: "WhyUs",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_motion = resolveDirective("motion");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "container mx-auto max-w-7xl" }, _attrs))}><div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center justify-center p-2 space-y-8 lg:space-y-0 lg:space-x-10 lg:flex-row rtl:space-x-reverse" }, ssrGetDirectiveProps(_ctx, _directive_motion, {
        initial: {
          x: _ctx.$page.props.locale[0].currentLocaleCode === "ar" ? 50 : -50,
          opacity: 0
        },
        visibleOnce: {
          x: 0,
          opacity: 1,
          transition: { delay: 300 }
        }
      })))}><img src="/storage/images/banner1.png" class="w-[92%] md:w-[95%] lg:w-[40%] lg:h-[370px] rounded-lg shadow-2xl" loading="lazy" alt=""><div class="px-4">`);
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
      _push(`<p class="mt-8 text-lg font-medium text-gray-500">${ssrInterpolate(_ctx.$t("why.us-desc"))}</p><p class="mt-10 text-lg font-medium leading-relaxed text-gray-500 lg:text-lg">${ssrInterpolate(_ctx.$t("why.us-paragraph"))}</p><div class="flex flex-col items-center justify-center md:items-start md:justify-start"><div class="flex flex-col gap-8 mt-4 md:mt-10"><div class="flex flex-col space-y-5 md:space-y-0 md:flex-row md:gap-x-12 md:rtl:gap-x-[8.5rem]"><div class="flex items-center space-x-6 rtl:space-x-reverse"><img src="/storage/images/check.svg" class="w-6 shrink-0" loading="lazy" alt=""><p class="mt-1.5 text-base lg:text-xl font-semibold text-gray-800">${ssrInterpolate(_ctx.$t("why.us-feature-1"))}</p></div><div class="flex items-center space-x-6 rtl:space-x-reverse"><img src="/storage/images/check.svg" class="w-6 shrink-0" loading="lazy" alt=""><p class="mt-1.5 text-base lg:text-xl font-semibold text-gray-800">${ssrInterpolate(_ctx.$t("why.us-feature-2"))}</p></div></div><div class="flex flex-col space-y-5 md:space-y-0 md:flex-row md:gap-x-24 md:rtl:gap-x-[7rem]"><div class="flex items-center space-x-6 rtl:space-x-reverse"><img src="/storage/images/check.svg" class="w-6 shrink-0" loading="lazy" alt=""><p class="mt-1.5 text-base lg:text-xl font-semibold text-gray-800">${ssrInterpolate(_ctx.$t("why.us-feature-3"))}</p></div><div class="flex items-center space-x-6 rtl:space-x-reverse"><img src="/storage/images/check.svg" class="w-6 shrink-0" loading="lazy" alt=""><p class="mt-1.5 text-base lg:text-xl font-semibold text-gray-800">${ssrInterpolate(_ctx.$t("why.us-feature-4"))}</p></div></div></div><div class="flex items-center justify-center px-5 py-4 mt-16 text-white rounded-full cursor-pointer w-52 bg-rose-900 hover:bg-rose-800">`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/" + _ctx.$page.props.locale[0].currentLocaleCode + "/about"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("why.us-read.more"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("why.us-read.more")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/WhyUs.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const Counter_vue_vue_type_style_index_0_lang = "";
const _sfc_main$7 = {
  name: "Counter",
  props: {
    targetNumber: Number,
    intervalSpeed: {
      type: Number,
      default: 50
      // Default interval speed
    }
  },
  setup(props) {
    const currentCount = ref(0);
    const isVisible = ref(false);
    const sectionRef = ref(null);
    let interval;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
          startCounter();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    const startCounter = () => {
      interval = setInterval(() => {
        if (currentCount.value >= props.targetNumber) {
          clearInterval(interval);
        } else {
          currentCount.value++;
        }
      }, props.intervalSpeed);
    };
    onMounted(() => {
      observer.observe(sectionRef.value);
    });
    watch(props.intervalSpeed, () => {
      clearInterval(interval);
      startCounter();
    });
    return {
      currentCount,
      isVisible,
      sectionRef
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "flex flex-col items-center justify-center space-y-4",
    ref: "sectionRef"
  }, _attrs))}>`);
  if ($setup.isVisible) {
    _push(`<div class="text-6xl font-normal">${ssrInterpolate($setup.currentCount)}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="flex justify-center px-5 py-2 text-base text-white rounded-full bg-rose-900 whitespace-nowrap hover:bg-rose-700">`);
  ssrRenderSlot(_ctx.$slots, "title", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Counter.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const Counter = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$6 = {
  __name: "WhoWeAre",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_motion = resolveDirective("motion");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "container mx-auto max-w-7xl" }, _attrs))}><div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center justify-center p-2 space-y-8 lg:space-y-0 lg:space-x-10 lg:flex-row ltr:space-x-reverse" }, ssrGetDirectiveProps(_ctx, _directive_motion, {
        initial: {
          x: _ctx.$page.props.locale[0].currentLocaleCode === "ar" ? 50 : -50,
          opacity: 0
        },
        visibleOnce: {
          x: 0,
          opacity: 1,
          transition: { delay: 300 }
        }
      })))}><img src="/storage/images/banner1.png" class="w-[92%] md:w-[95%] lg:w-[40%] lg:h-[370px] rounded-lg shadow-2xl order-1 lg:order-2" alt=""><div class="order-2 px-4 lg:order-1">`);
      _push(ssrRenderComponent(SectionTitleShadow, null, {
        "upper-title": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("who.we.are-upper"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("who.we.are-upper")), 1)
            ];
          }
        }),
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("who.we.are"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("who.we.are")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="mt-8 text-lg font-medium text-gray-500">${ssrInterpolate(_ctx.$t("who.we.are-desc"))}</p><p class="mt-10 text-lg font-medium leading-relaxed text-gray-500 lg:text-lg">${ssrInterpolate(_ctx.$t("who.we.are-paragraph"))}</p><div class="mt-10">`);
      _push(ssrRenderComponent(Counter, {
        targetNumber: 100,
        intervalSpeed: 10
      }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("who.we.are-counter"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("who.we.are-counter")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/WhoWeAre.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  components: {
    Carousel,
    Navigation,
    Pagination,
    Slide,
    SectionTitleShadow
  },
  setup(props) {
    const slider = ref(null);
    const settings = reactive({
      itemsToShow: 2,
      snapAlign: "center",
      wrapAround: true,
      autoplay: false
    });
    const breakpoints = {
      100: {
        itemsToShow: 4,
        snapAlign: "center"
      },
      640: {
        itemsToShow: 4,
        snapAlign: "center"
      },
      700: {
        itemsToShow: 4,
        snapAlign: "start"
      },
      768: {
        itemsToShow: 5,
        snapAlign: "start"
      },
      1024: {
        itemsToShow: 6,
        snapAlign: "start"
      },
      1100: {
        itemsToShow: 6,
        snapAlign: "start"
      },
      1280: {
        itemsToShow: 8,
        snapAlign: "start"
      },
      1640: {
        itemsToShow: 9,
        snapAlign: "start"
      },
      1720: {
        itemsToShow: 10,
        snapAlign: "start"
      },
      1920: {
        itemsToShow: 11,
        snapAlign: "start"
      }
    };
    const autoplaySlider = (faster = false) => {
      if (settings.autoplay === false) {
        settings.autoplay = faster ? 2e3 : 3e3;
        slider.value.restartCarousel();
      }
    };
    const previous = () => {
      slider.value.prev();
      slider.value.updateSlideWidth();
    };
    const next = () => {
      slider.value.next();
      slider.value.updateSlideWidth();
    };
    return {
      settings,
      autoplaySlider,
      breakpoints,
      slider,
      previous,
      next
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SectionTitleShadow = resolveComponent("SectionTitleShadow");
  const _component_Carousel = resolveComponent("Carousel");
  const _component_Slide = resolveComponent("Slide");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container px-6 mx-auto bg-sidewhite max-w-7xl" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_SectionTitleShadow, null, {
    "upper-title": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("partners-upper"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("partners-upper")), 1)
        ];
      }
    }),
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("partners"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("partners")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p class="mt-8 text-lg font-medium text-gray-500">${ssrInterpolate(_ctx.$t("partners-desc"))}</p><div class="mb-40 mt-20 flex bg-sidewhite flex-col items-center overflow-hidden select-none rtl:xl:flex-row-reverse xl:items-center xl:h-[5rem] ltr:xl:flex-row-reverse xl:space-x-20 ltr:xl:space-x-reverse xl:px-4">`);
  _push(ssrRenderComponent(_component_Carousel, {
    ref: "slider",
    onClick: $setup.autoplaySlider,
    class: "w-full p-2",
    settings: $setup.settings,
    breakpoints: $setup.breakpoints
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($props.items, ({ image, title, classes }, index) => {
          _push2(ssrRenderComponent(_component_Slide, {
            key: index,
            class: "select-none"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<img loading="lazy"${ssrRenderAttr("src", image)}${ssrRenderAttr("alt", title)} class="${ssrRenderClass([classes, "xl:!h-16 xl:w-20 !h-[5rem] select-none aspect-square grayscale"])}"${_scopeId2}>`);
              } else {
                return [
                  createVNode("img", {
                    loading: "lazy",
                    class: ["xl:!h-16 xl:w-20 !h-[5rem] select-none aspect-square grayscale", classes],
                    src: image,
                    alt: title
                  }, null, 10, ["src", "alt"])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($props.items, ({ image, title, classes }, index) => {
            return openBlock(), createBlock(_component_Slide, {
              key: index,
              class: "select-none"
            }, {
              default: withCtx(() => [
                createVNode("img", {
                  loading: "lazy",
                  class: ["xl:!h-16 xl:w-20 !h-[5rem] select-none aspect-square grayscale", classes],
                  src: image,
                  alt: title
                }, null, 10, ["src", "alt"])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/PartnerSlider.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const PartnerSlider = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$4 = {
  __name: "HomeProjects",
  __ssrInlineRender: true,
  props: {
    project: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-20 bg-rose-900" }, _attrs))}><div class="container px-5 mx-auto bg-sidewhite max-w-7xl">`);
      _push(ssrRenderComponent(SectionTitleShadow, null, {
        "upper-title": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="!text-secondary-700"${_scopeId}>${ssrInterpolate(_ctx.$t("projects.upper"))}</span>`);
          } else {
            return [
              createVNode("span", { class: "!text-secondary-700" }, toDisplayString(_ctx.$t("projects.upper")), 1)
            ];
          }
        }),
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="!text-white !no-underline"${_scopeId}>${ssrInterpolate(_ctx.$t("projects"))}</span>`);
          } else {
            return [
              createVNode("span", { class: "!text-white !no-underline" }, toDisplayString(_ctx.$t("projects")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<hr class="w-32 h-1 mt-3 bg-white border-0 rounded rtl:w-40"><p class="mt-4 text-lg font-medium text-white">${ssrInterpolate(_ctx.$t("projects-desc"))}</p><div class="grid gap-6 mt-20 sm:grid-rows-3 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2"><!--[-->`);
      ssrRenderList(__props.project, (project, index) => {
        _push(ssrRenderComponent(ImageWithDetails, {
          key: index,
          project,
          index
        }, null, _parent));
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/HomeProjects.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "StartPlanning",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-rose-900" }, _attrs))}><div class="container flex flex-col items-center justify-between px-4 mx-auto lg:flex-row max-w-7xl"><div class="flex flex-col items-center px-4 py-8 md:space-x-6 md:flex-row lg:py-20 lg:px-0 lg:space-x-20 rtl:space-x-reverse"><img src="storage/images/building.svg" class="w-20 h-20" alt=""><div class="text-center ltr:text-left md:rtl:text-right">`);
      _push(ssrRenderComponent(SectionTitleShadow, null, {
        "upper-title": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="!text-gray-50 text-3xl lg:text-4xl"${_scopeId}>${ssrInterpolate(_ctx.$t("planning-upper"))}</span>`);
          } else {
            return [
              createVNode("span", { class: "!text-gray-50 text-3xl lg:text-4xl" }, toDisplayString(_ctx.$t("planning-upper")), 1)
            ];
          }
        }),
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="!text-gray-50 text-xl md:text-4xl"${_scopeId}>${ssrInterpolate(_ctx.$t("planning"))}</span>`);
          } else {
            return [
              createVNode("span", { class: "!text-gray-50 text-xl md:text-4xl" }, toDisplayString(_ctx.$t("planning")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<hr class="h-1 border-0 rounded bg-gray-50 md:w-48"><p class="mt-4 font-medium md:text-lg ltr:lg:pl-0 ltr:lg:pr-20 rtl:lg:pl-20 rtl:lg:pr-0 text-gray-50">${ssrInterpolate(_ctx.$t("planning-desc"))}</p></div></div>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/" + _ctx.$page.props.locale[0].currentLocaleCode + "/contact-us"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-center w-32 h-16 mb-8 text-xl text-gray-900 rounded-full lg:mb-0 bg-gray-50 hover:bg-gray-200"${_scopeId}>${ssrInterpolate(_ctx.$t("home.call_us"))}</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-center w-32 h-16 mb-8 text-xl text-gray-900 rounded-full lg:mb-0 bg-gray-50 hover:bg-gray-200" }, toDisplayString(_ctx.$t("home.call_us")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/StartPlanning.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "ServicesImages",
  __ssrInlineRender: true,
  props: {
    services: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "container mx-auto max-w-7xl" }, _attrs))}><div class="flex flex-col items-center justify-center p-2 space-y-8 lg:space-y-0 lg:space-x-10 lg:flex-row ltr:space-x-reverse"><img src="/storage/images/banner1.png" class="hidden md:block w-[92%] md:w-[95%] lg:w-[40%] lg:h-[370px] rounded-lg shadow-2xl order-1 lg:order-2"><div class="order-2 px-4 lg:order-1">`);
      _push(ssrRenderComponent(SectionTitleShadow, null, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<p class="mt-8 text-lg font-medium text-gray-500">${ssrInterpolate(_ctx.$t("services.top.desc"))}</p><div><div class="grid grid-cols-2 mt-4 md:grid-cols-3 lg:grid-cols-3 gap-y-10 md:mt-10"><!--[-->`);
      ssrRenderList(__props.services, (service) => {
        _push(`<div class="flex m-auto space-x-2 rtl:space-x-reverse"><div class="flex items-center justify-center w-6 h-6 rounded-full xl:w-8 xl:h-8 bg-rose-900 shrink-0"><img src="/storage/images/check-white.svg" class="w-3 xl:w-5" loading="lazy" alt=""></div>`);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("service", service.slug)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p class="mt-1.5 text-md xl:text-lg font-semibold text-gray-800 hover:text-gray-500"${_scopeId}>${ssrInterpolate(service.name)}</p>`);
            } else {
              return [
                createVNode("p", { class: "mt-1.5 text-md xl:text-lg font-semibold text-gray-800 hover:text-gray-500" }, toDisplayString(service.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ServicesImages.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "ServicesSection",
  __ssrInlineRender: true,
  props: {
    services_qatarya: Object,
    services_othman: Object
  },
  setup(__props) {
    const openTab = ref(1);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container px-4 mx-auto max-w-7xl" }, _attrs))}><ul class="flex flex-row flex-wrap pt-3 pb-4 m-auto mb-0 space-x-2 list-none rtl:space-x-reverse"><li class="flex-auto text-center"><a class="${ssrRenderClass([{
        "text-rose-900 bg-white border-2 border-rose-900": openTab.value !== 1,
        "text-white bg-rose-900 border-2 border-rose-900": openTab.value === 1
      }, "block p-5 font-bold leading-normal uppercase rounded shadow-lg text-md md:text-lg"])}">${ssrInterpolate(_ctx.$t("insulation"))}</a></li><li class="flex-auto text-center"><a class="${ssrRenderClass([{
        "text-rose-900 bg-white border-2 border-rose-900": openTab.value !== 2,
        "text-white bg-rose-900 border-2 border-rose-900": openTab.value === 2
      }, "block p-5 font-bold leading-normal uppercase rounded shadow-lg text-md md:text-lg"])}">${ssrInterpolate(_ctx.$t("buildings"))}</a></li></ul>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        class: "md:mt-16",
        services: openTab.value === 1 ? __props.services_qatarya : __props.services_othman
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(openTab.value === 1 ? _ctx.$t("services.insulation") : _ctx.$t("services.buildings"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(openTab.value === 1 ? _ctx.$t("services.insulation") : _ctx.$t("services.buildings")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ServicesSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Home",
  __ssrInlineRender: true,
  props: {
    services_qatarya: Object,
    services_othman: Object,
    blogs: Object,
    project: Object
  },
  setup(__props) {
    const sponsors = [
      {
        title: "alfanar",
        image: "storage/1/720.webp"
      },
      {
        title: "alhabib",
        image: "storage/1/720.webp"
      },
      {
        title: "Almarai",
        image: "storage/1/720.webp"
      },
      {
        title: "al-nahdi",
        image: "storage/1/720.webp"
      },
      {
        title: "Alshaya",
        image: "storage/1/720.webp"
      },
      {
        title: "elm",
        image: "storage/1/720.webp"
      },
      {
        title: "qiddiya",
        image: "storage/1/720.webp"
      },
      {
        title: "riyadh-airports",
        image: "storage/1/720.webp"
      },
      {
        title: "sary",
        image: "storage/1/720.webp"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$a, mergeProps({ title: "القطرىة" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(BannerSlider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, {
              services_qatarya: __props.services_qatarya,
              services_othman: __props.services_othman
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-10",
              project: __props.project
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$8, { class: "mt-10" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, { class: "mt-10" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(PartnerSlider, {
              items: sponsors,
              class: "mt-10"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, { class: "-mt-20" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(BannerSlider),
              createVNode(_sfc_main$1, {
                services_qatarya: __props.services_qatarya,
                services_othman: __props.services_othman
              }, null, 8, ["services_qatarya", "services_othman"]),
              createVNode(_sfc_main$4, {
                class: "mt-10",
                project: __props.project
              }, null, 8, ["project"]),
              createVNode(_sfc_main$8, { class: "mt-10" }),
              createVNode(_sfc_main$6, { class: "mt-10" }),
              createVNode(PartnerSlider, {
                items: sponsors,
                class: "mt-10"
              }),
              createVNode(_sfc_main$3, { class: "-mt-20" })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
