import { useSSRContext, mergeProps, ref, computed, watch, onMounted, onUnmounted, unref, withCtx, createVNode, isRef, renderSlot, resolveComponent, toDisplayString, createTextVNode, openBlock, createBlock, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderSlot, ssrRenderStyle, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { usePage, Link } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main$6 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<img${ssrRenderAttrs(mergeProps({
    src: "/storage/images/logo.webp",
    loading: "lazy",
    alt: "logo",
    class: "rounded-full w-25 h-25"
  }, _attrs))}>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ApplicationMark.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const ApplicationMark = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$5 = {
  __name: "Banner",
  __ssrInlineRender: true,
  setup(__props) {
    const show = ref(true);
    const style = computed(
      () => {
        var _a;
        return ((_a = usePage().props.jetstream.flash) == null ? void 0 : _a.bannerStyle) || "success";
      }
    );
    const message = computed(() => {
      var _a;
      return ((_a = usePage().props.jetstream.flash) == null ? void 0 : _a.banner) || "";
    });
    watch(message, async () => {
      show.value = true;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (show.value && message.value) {
        _push(`<div class="${ssrRenderClass({
          "bg-indigo-500": style.value == "success",
          "bg-red-700": style.value == "danger"
        })}"><div class="max-w-screen-xl px-3 py-2 mx-auto sm:px-6 lg:px-8"><div class="flex flex-wrap items-center justify-between"><div class="flex items-center flex-1 w-0 min-w-0"><span class="${ssrRenderClass([{
          "bg-indigo-600": style.value == "success",
          "bg-red-600": style.value == "danger"
        }, "flex p-2 rounded-lg"])}">`);
        if (style.value == "success") {
          _push(`<svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`);
        } else {
          _push(`<!---->`);
        }
        if (style.value == "danger") {
          _push(`<svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"></path></svg>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</span><p class="ml-3 text-sm font-medium text-white truncate">${ssrInterpolate(message.value)}</p></div><div class="shrink-0 sm:ml-3"><button type="button" class="${ssrRenderClass([{
          "hover:bg-indigo-600 focus:bg-indigo-600": style.value == "success",
          "hover:bg-red-600 focus:bg-red-600": style.value == "danger"
        }, "flex p-2 -mr-1 transition rounded-md focus:outline-none sm:-mr-2"])}" aria-label="Dismiss"><svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Banner.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "Dropdown",
  __ssrInlineRender: true,
  props: {
    align: {
      type: String,
      default: "right"
    },
    width: {
      type: String,
      default: "48"
    },
    contentClasses: {
      type: Array,
      default: () => ["py-1", "bg-white"]
    }
  },
  setup(__props) {
    const props = __props;
    const closeOnEscape = (e) => {
      if (open.value && e.key === "Escape") {
        open.value = false;
      }
    };
    onMounted(() => document.addEventListener("keydown", closeOnEscape));
    onUnmounted(() => document.removeEventListener("keydown", closeOnEscape));
    computed(() => {
      return {
        48: "w-48"
      }[props.width.toString()];
    });
    const alignmentClasses = computed(() => {
      if (props.align === "left") {
        return "origin-top-left left-0";
      }
      if (props.align === "right") {
        return "origin-top-right right-0";
      }
      return "origin-top";
    });
    let open = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("services")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "trigger", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                onMouseover: ($event) => isRef(open) ? open.value = true : open = true
              }, [
                renderSlot(_ctx.$slots, "trigger")
              ], 40, ["onMouseover"])
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<div style="${ssrRenderStyle([
        unref(open) ? null : { display: "none" },
        { "display": "none" }
      ])}" class="${ssrRenderClass([[alignmentClasses.value], "absolute z-50 mt-2 rounded-md shadow-lg md:w-[20rem] w-48"])}"><div class="${ssrRenderClass([__props.contentClasses, "rounded-md ring-1 ring-black ring-opacity-5"])}">`);
      ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Dropdown.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "NavLink",
  __ssrInlineRender: true,
  props: {
    href: String,
    active: Boolean
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => {
      return props.active ? "inline-flex items-center px-1 pt-1 md:leading-8 border-b-2 border-rose-900 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-rose-900 transition duration-150 ease-in-out" : "inline-flex items-center px-1 pt-1 md:leading-8 md:mx-4 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500  focus:outline-none focus:text-gray-700 focus:border-rose-900 transition duration-150 ease-in-out";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Link), mergeProps({
        href: __props.href,
        class: classes.value
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
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
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/NavLink.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "MobileControllers",
  __ssrInlineRender: true,
  setup(__props) {
    const showingNavigationDropdown = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_dotlottie_player = resolveComponent("dotlottie-player");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center sm:hidden" }, _attrs))}><div class="fixed z-50 flex items-center justify-between px-4 py-1 border rounded-full bottom-4 bg-rose-900 border-gray-50">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("home")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col items-center justify-center px-3 py-2 space-y-2 hover:bg-rose-800"${_scopeId}><img src="/storage/images/mobile-controllers-house.svg" alt="WhatsApp" class="w-6 h-6"${_scopeId}><p class="text-gray-50 whitespace-nowrap"${_scopeId}>${ssrInterpolate(_ctx.$t("mobile-controllers.home"))}</p></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col items-center justify-center px-3 py-2 space-y-2 hover:bg-rose-800" }, [
                createVNode("img", {
                  src: "/storage/images/mobile-controllers-house.svg",
                  alt: "WhatsApp",
                  class: "w-6 h-6"
                }),
                createVNode("p", { class: "text-gray-50 whitespace-nowrap" }, toDisplayString(_ctx.$t("mobile-controllers.home")), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a href="https://wa.me/123456789" target="_blank"><div class="flex flex-col items-center justify-center px-3 py-2 space-y-1 hover:bg-rose-800">`);
      _push(ssrRenderComponent(_component_dotlottie_player, {
        src: "/storage/images/lottiefiles/whatsapp.lottie",
        style: { "width": "2rem" },
        autoplay: "",
        loop: ""
      }, null, _parent));
      _push(`<p class="text-gray-50 whitespace-nowrap">${ssrInterpolate(_ctx.$t("mobile-controllers.whatsapp"))}</p></div></a><div class="relative flex flex-col items-center justify-center px-3 py-2 space-y-1 hover:bg-rose-800">`);
      _push(ssrRenderComponent(_component_dotlottie_player, {
        src: "/storage/images/lottiefiles/phone.lottie",
        style: { "width": "2rem" },
        autoplay: "",
        loop: ""
      }, null, _parent));
      _push(`<p class="text-gray-50 whitespace-nowrap">${ssrInterpolate(_ctx.$t("mobile-controllers.contact"))}</p></div><div class="absolute left-28 bottom-24" style="${ssrRenderStyle(showingNavigationDropdown.value ? null : { display: "none" })}"><div class="p-4 space-y-4 border-2 rounded-lg border-rose-900 bg-gray-50"><div class="flex items-center space-x-2 rtl:space-x-reverse"><a href="tel:+123456789" class=""><div class="flex"><img src="/storage/images/phone-white.svg" alt="Call Us" class="w-10 h-10 p-2 bg-blue-500 rounded-full hover:bg-blue-600 animate-bounce"><p class="m-auto mx-2 font-bold">${ssrInterpolate(_ctx.$t("call.now"))}</p></div></a></div><div class="flex items-center space-x-2 rtl:space-x-reverse"><a href="https://wa.me/123456789" target="_blank"><div class="flex"><img src="/storage/images/whatsapp-white.svg" alt="WhatsApp" class="w-[2.5rem] p-2 bg-green-500 rounded-full hover:bg-green-600 animate-bounce"><p class="m-auto mx-2 font-bold">${ssrInterpolate(_ctx.$t("send-whatsapp-message"))}</p></div></a></div></div></div>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("services")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col items-center justify-center px-3 py-2 space-y-2 hover:bg-rose-800"${_scopeId}><img src="/storage/images/mobile-controllers-services.svg" alt="WhatsApp" class="w-6 h-6"${_scopeId}><p class="text-gray-50 whitespace-nowrap"${_scopeId}>${ssrInterpolate(_ctx.$t("mobile-controllers.services"))}</p></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col items-center justify-center px-3 py-2 space-y-2 hover:bg-rose-800" }, [
                createVNode("img", {
                  src: "/storage/images/mobile-controllers-services.svg",
                  alt: "WhatsApp",
                  class: "w-6 h-6"
                }),
                createVNode("p", { class: "text-gray-50 whitespace-nowrap" }, toDisplayString(_ctx.$t("mobile-controllers.services")), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/MobileControllers.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_dotlottie_player = resolveComponent("dotlottie-player");
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-secondary-900" }, _attrs))}><div class="container flex flex-col justify-between max-w-6xl px-6 pb-32 mx-auto lg:space-x-12 lg:flex-row pt-14 md:pb-14 rtl:space-x-reverse"><div class="flex flex-col space-y-4"><p class="text-2xl font-bold text-rose-900">${ssrInterpolate(_ctx.$t("footer.about"))}</p><div class="relative"><hr class="h-0.5 border-0 rounded-full bg-gray-900 opacity-10"><hr class="absolute top-0 w-10 h-1 border-0 rounded-full -translate-y-1/3 bg-rose-900"></div><p class="font-medium leading-relaxed text-gray-100 text-md sm:w-80">${ssrInterpolate(_ctx.$t("footer.about-text"))}</p>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/" + _ctx.$page.props.locale[0].currentLocaleCode + "/about"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-center px-2 py-4 text-white rounded-full w-44 bg-rose-900 hover:bg-rose-800"${_scopeId}>${ssrInterpolate(_ctx.$t("why.us-read.more"))}</div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-center px-2 py-4 text-white rounded-full w-44 bg-rose-900 hover:bg-rose-800" }, toDisplayString(_ctx.$t("why.us-read.more")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex p-5 space-x-6 rtl:space-x-reverse"><img src="/storage/images/facebook-ham.svg" class="w-5 h-5" alt=""><img src="/storage/images/instagram-ham.svg" class="w-5 h-5" alt=""><img src="/storage/images/twitter-ham.svg" class="w-5 h-5" alt=""></div></div><div class="flex flex-col space-y-4"><p class="text-2xl font-bold text-rose-900">${ssrInterpolate(_ctx.$t("footer.links"))}</p><div class="relative"><hr class="h-0.5 border-0 rounded-full bg-gray-900 opacity-10"><hr class="absolute top-0 w-10 h-1 border-0 rounded-full -translate-y-1/3 bg-rose-900"></div><div class="w-40 space-y-4 text-gray-50"><div class="flex items-center"><div><div class="">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("blogs"),
        class: "text-right"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("home.blogs"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("home.blogs")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="flex items-center"><div><div class="">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("show.faq")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("home.faq"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("home.faq")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="flex items-center"><div><div class="">`);
      _push(ssrRenderComponent(unref(Link), {
        href: "#contact-us",
        active: _ctx.route().current("profile.show")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("home.contact"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("home.contact")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div><div class="flex flex-col space-y-4"><p class="text-2xl font-bold text-rose-900">${ssrInterpolate(_ctx.$t("footer.address"))}</p><div class="relative"><hr class="h-0.5 border-0 rounded-full bg-gray-900 opacity-10"><hr class="absolute top-0 w-10 h-1 border-0 rounded-full -translate-y-1/3 bg-rose-900"></div><div class="flex flex-col space-y-4"><div class="flex space-x-4 rtl:space-x-reverse"><img src="storage/images/location.svg" alt=""><p class="font-medium leading-relaxed text-gray-100 text-md">${ssrInterpolate(_ctx.$t("footer.address-text"))}</p></div><div class="flex space-x-4 rtl:space-x-reverse"><img src="storage/images/phone-footer.svg" alt=""><p class="font-medium leading-relaxed text-gray-100 text-md">${ssrInterpolate(_ctx.$t("footer.address-text1"))}</p></div><div class="flex space-x-4 rtl:space-x-reverse"><img src="storage/images/mail-footer.svg" alt=""><p class="font-medium leading-relaxed text-gray-100 text-md">${ssrInterpolate(_ctx.$t("footer.address-text2"))}</p></div></div></div><div class="flex flex-col mt-4"><div class="space-y-4"><p class="text-2xl font-bold text-rose-900">${ssrInterpolate(_ctx.$t("footer.support"))}</p><div class="relative"><hr class="h-0.5 border-0 rounded-full bg-gray-900 opacity-10"><hr class="absolute top-0 w-10 h-1 border-0 rounded-full -translate-y-1/3 bg-rose-900"></div><p class="font-medium leading-relaxed text-gray-100 text-md">${ssrInterpolate(_ctx.$t("footer.support-text"))}</p></div></div></div><div class="fixed z-50 hidden sm:block rtl:space-y-4 bottom-4 left-6 rtl:right-6 rtl:left-auto"><div class="w-16 h-16 bg-white rounded-full shadow-lg"><a href="tel:01000000000" class="flex items-center justify-center w-full h-full">`);
      _push(ssrRenderComponent(_component_dotlottie_player, {
        src: "/storage/images/lottiefiles/phone.lottie",
        style: { "width": "50px" },
        autoplay: "",
        loop: ""
      }, null, _parent));
      _push(`</a></div><div class="w-16 h-16 mt-4 bg-white rounded-full shadow-lg"><a href="https://wa.me/01000000000" class="flex items-center justify-center w-full h-full">`);
      _push(ssrRenderComponent(_component_dotlottie_player, {
        src: "/storage/images/lottiefiles/whatsapp.lottie",
        style: { "width": "50px" },
        autoplay: "",
        loop: ""
      }, null, _parent));
      _push(`</a></div></div>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</footer>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const NavBar_vue_vue_type_style_index_0_scoped_e9860540_lang = "";
const _sfc_main = {
  __name: "NavBar",
  __ssrInlineRender: true,
  props: {
    title: String
  },
  setup(__props) {
    ref(false);
    const showingNavigationDropdown = ref(false);
    const serviceDropdown = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "inset-0 z-50" }, _attrs))} data-v-e9860540><div class="bg-secondary-900" data-v-e9860540><div class="container flex justify-between max-w-6xl px-5 py-3 mx-auto" data-v-e9860540><div class="flex items-center space-x-2 rtl:space-x-reverse" data-v-e9860540><img src="/storage/images/house.svg" class="w-5 h-7" alt="" data-v-e9860540><p class="pr-4 mt-1 text-xs font-normal rtl:pr-0 rtl:pl-4 ltr:mt-2 sm:text-base text-gray-50" data-v-e9860540>${ssrInterpolate(_ctx.$t("home.top.nav"))}</p></div><div class="flex items-center space-x-16 rtl:space-x-reverse" data-v-e9860540><div class="flex items-center space-x-2 rtl:flex-row rtl:space-x-reverse" data-v-e9860540><img src="/storage/images/globe.svg" alt="" data-v-e9860540><ul class="mt-1" data-v-e9860540><!--[-->`);
      ssrRenderList(_ctx.$page.props.locale, (local) => {
        _push(`<li data-v-e9860540>`);
        if (local.currentLocaleCode !== local.code) {
          _push(`<a rel="alternate" class="text-sm font-medium text-gray-50"${ssrRenderAttr("hreflang", local.code)}${ssrRenderAttr("href", local.url)} data-v-e9860540>${ssrInterpolate(local.name)}</a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div><div class="hidden space-x-6 sm:flex rtl:space-x-reverse" data-v-e9860540><a href="#" data-v-e9860540><img src="/storage/images/facebook-upper.svg" class="w-4 h-4" alt="" data-v-e9860540></a><a href="#" data-v-e9860540><img src="/storage/images/instagram-upper.svg" class="w-4 h-4" alt="" data-v-e9860540></a><a href="#" data-v-e9860540><img src="/storage/images/twitter-upper.svg" class="w-4 h-4" alt="" data-v-e9860540></a></div></div></div></div><nav class="relative py-3 md:h-40 bg-rose-900" data-v-e9860540><div class="max-w-6xl px-4 mx-auto md:px-6 lg:px-8 md:mt-8" data-v-e9860540><div class="flex justify-between" data-v-e9860540><div class="flex" data-v-e9860540><div class="flex items-center shrink-0" data-v-e9860540>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("home")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ApplicationMark, { class: "block w-auto h-16" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(ApplicationMark, { class: "block w-auto h-16" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$3, {
        href: _ctx.route("home"),
        class: "px-2 !text-lg text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("home.company_name"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("home.company_name")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex" data-v-e9860540><div class="flex items-center md:hidden" data-v-e9860540><button aria-label="Menu" class="inline-flex items-center justify-center p-2 text-white transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500" data-v-e9860540><svg class="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24" data-v-e9860540><path class="${ssrRenderClass({
        hidden: showingNavigationDropdown.value,
        "inline-flex": !showingNavigationDropdown.value
      })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-v-e9860540></path><path class="${ssrRenderClass({
        hidden: !showingNavigationDropdown.value,
        "inline-flex": showingNavigationDropdown.value
      })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-e9860540></path></svg></button></div></div><div class="hidden md:space-x-12 lg:space-x-20 md:flex rtl:space-x-reverse" data-v-e9860540><div class="flex items-center space-x-4 rtl:space-x-reverse" data-v-e9860540><img src="/storage/images/phone-circle.svg" class="w-12" alt="" data-v-e9860540><div class="space-y-1" data-v-e9860540><p class="text-sm font-medium text-gray-300" data-v-e9860540>${ssrInterpolate(_ctx.$t("home.phone_number"))}</p><p class="font-medium text-md text-gray-50" data-v-e9860540> 0123456789 </p></div></div><div class="flex items-center space-x-4 rtl:space-x-reverse" data-v-e9860540><img src="/storage/images/email-circle.svg" class="w-12" alt="" data-v-e9860540><div class="space-y-1" data-v-e9860540><p class="text-sm font-medium text-gray-300" data-v-e9860540>${ssrInterpolate(_ctx.$t("home.email"))}</p><p class="font-medium text-md text-gray-50" data-v-e9860540> info@alqatarya.com </p></div></div></div></div><div class="flex items-center justify-center mt-4 space-x-20 sm:hidden rtl:space-x-reverse" data-v-e9860540><a href="#" data-v-e9860540><img src="/storage/images/facebook-upper.svg" class="w-5 h-5 icon rotate" alt="" data-v-e9860540></a><a href="#" data-v-e9860540><img src="/storage/images/instagram-upper.svg" class="w-5 h-5 icon rotate" alt="" data-v-e9860540></a><a href="#" data-v-e9860540><img src="/storage/images/twitter-upper.svg" class="w-5 h-5 icon rotate" alt="" data-v-e9860540></a></div><div class="flex justify-center" data-v-e9860540><div class="absolute bottom-0 hidden px-2 py-1.5 translate-y-1/2 rounded-full space-x-20 lg:space-x-80 md:flex md:items-center md:justify-between z-50 bg-secondary-900 rtl:space-x-reverse" data-v-e9860540><div data-v-e9860540><div class="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-gray-900 transition duration-150 ease-in-out" data-v-e9860540>`);
      _push(ssrRenderComponent(_sfc_main$4, {
        align: _ctx.$page.props.locale[0].currentLocaleCode === "ar" ? "right" : "left",
        width: "48"
      }, {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="" data-v-e9860540${_scopeId}><button type="button" class="inline-flex px-3 text-sm font-medium text-white transition duration-150 ease-in-out rounded-md focus:outline-none" data-v-e9860540${_scopeId}>${ssrInterpolate(_ctx.$t("home.services"))} <img class="w-4 h-4 mx-2 mt-[1.5px]" loading="lazy" src="/storage/images/down-arrow.svg" alt="arrow-down" data-v-e9860540${_scopeId}></button></span>`);
          } else {
            return [
              createVNode("span", { class: "" }, [
                createVNode("button", {
                  type: "button",
                  class: "inline-flex px-3 text-sm font-medium text-white transition duration-150 ease-in-out rounded-md focus:outline-none"
                }, [
                  createTextVNode(toDisplayString(_ctx.$t("home.services")) + " ", 1),
                  createVNode("img", {
                    class: "w-4 h-4 mx-2 mt-[1.5px]",
                    loading: "lazy",
                    src: "/storage/images/down-arrow.svg",
                    alt: "arrow-down"
                  })
                ])
              ])
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-e9860540${_scopeId}><!--[-->`);
            ssrRenderList(_ctx.$page.props.services, (service) => {
              _push2(`<div class="py-4 ltr:pl-6 rtl:pr-6 hover:bg-secondary-700" data-v-e9860540${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route(
                  "service",
                  service.slug
                ),
                class: "text-base font-medium text-gray-800"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<p class="w-full" data-v-e9860540${_scopeId2}>${ssrInterpolate(service.name)}</p>`);
                  } else {
                    return [
                      createVNode("p", { class: "w-full" }, toDisplayString(service.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", null, [
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.$page.props.services, (service) => {
                  return openBlock(), createBlock("div", {
                    key: service.slug,
                    class: "py-4 ltr:pl-6 rtl:pr-6 hover:bg-secondary-700"
                  }, [
                    createVNode(unref(Link), {
                      href: _ctx.route(
                        "service",
                        service.slug
                      ),
                      class: "text-base font-medium text-gray-800"
                    }, {
                      default: withCtx(() => [
                        createVNode("p", { class: "w-full" }, toDisplayString(service.name), 1)
                      ]),
                      _: 2
                    }, 1032, ["href"])
                  ]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$3, {
        href: _ctx.route("about"),
        class: "px-2 text-2xl text-white",
        active: _ctx.route().current("about")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("home.about"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("home.about")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        href: _ctx.route("blogs"),
        class: "px-2 text-2xl text-white",
        active: _ctx.route().current("blogs")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("home.blogs"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("home.blogs")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        href: _ctx.route("projects"),
        class: "px-2 text-2xl text-white",
        active: _ctx.route().current("projects")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("home.projects"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("home.projects")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        href: _ctx.route("show.faq"),
        class: "px-2 text-2xl text-white",
        active: _ctx.route().current("show.faq")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("home.faq"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("home.faq")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/" + _ctx.$page.props.locale[0].currentLocaleCode + "/contact-us"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-5 py-2 text-white rounded-full bg-rose-900 hover:bg-rose-800" data-v-e9860540${_scopeId}>${ssrInterpolate(_ctx.$t("home.call_us"))}</div>`);
          } else {
            return [
              createVNode("div", { class: "px-5 py-2 text-white rounded-full bg-rose-900 hover:bg-rose-800" }, toDisplayString(_ctx.$t("home.call_us")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="${ssrRenderClass([{
        block: showingNavigationDropdown.value,
        hidden: !showingNavigationDropdown.value,
        "h-[50rem]": serviceDropdown.value == true
      }, "w-full sm:w-[22rem] h-[35rem] absolute top-[6.5rem] bg-secondary-900 left-0 rtl:right-0 z-50 rounded-tr-2xl rounded-br-2xl rtl:rounded-tr-none rtl:rounded-br-none rtl:rounded-tl-2xl rtl:rounded-bl-2xl"])}" data-v-e9860540><div class="px-4 pt-4 overflow-hidden font-semibold text-md text-gray-50" data-v-e9860540><div class="flex items-center p-5" data-v-e9860540><div data-v-e9860540><div class="" data-v-e9860540>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("about"),
        class: "text-right",
        active: _ctx.route().current("about")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("home.about"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("home.about")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div data-v-e9860540><div class="flex items-center p-5 space-x-4 transition duration-150 ease-in-out rtl:space-x-reverse" data-v-e9860540><div class="" data-v-e9860540>${ssrInterpolate(_ctx.$t("home.services"))}</div><img src="/storage/images/down-arrow-faq-white.svg" alt="" data-v-e9860540></div><div style="${ssrRenderStyle(serviceDropdown.value ? null : { display: "none" })}" class="transition duration-150 ease-in-out ltr:ml-10 rtl:mr-10" data-v-e9860540><!--[-->`);
      ssrRenderList(_ctx.$page.props.services, (service) => {
        _push(`<div class="my-4 transition duration-150 ease-in-out select-none" data-v-e9860540>`);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("service", service.slug),
          active: _ctx.route().current("service", service.slug),
          class: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(service.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(service.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div><div class="flex items-center p-5" data-v-e9860540><div data-v-e9860540><div class="" data-v-e9860540>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("blogs"),
        class: "text-right"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("home.blogs"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("home.blogs")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="flex items-center p-5" data-v-e9860540><div data-v-e9860540><div class="" data-v-e9860540>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("projects"),
        class: "text-right"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("home.projects"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("home.projects")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="flex items-center p-5" data-v-e9860540><div data-v-e9860540><div class="" data-v-e9860540>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("show.faq")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("home.faq"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("home.faq")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="flex items-center p-5" data-v-e9860540><div data-v-e9860540><div class="" data-v-e9860540>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/contact-us",
        active: _ctx.route().current("show.contact")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("home.contact"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("home.contact")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="flex p-5 space-x-6 rtl:space-x-reverse" data-v-e9860540><img src="/storage/images/facebook-ham.svg" class="w-5 h-5" alt="" data-v-e9860540><img src="/storage/images/instagram-ham.svg" class="w-5 h-5" alt="" data-v-e9860540><img src="/storage/images/twitter-ham.svg" class="w-5 h-5" alt="" data-v-e9860540></div></div></div></nav></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/NavBar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const NavBar = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e9860540"]]);
export {
  NavBar as N,
  _sfc_main$1 as _,
  _sfc_main$5 as a
};
