import { ref, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { usePage, Head } from "@inertiajs/vue3";
import { _ as _sfc_main$1, N as NavBar, F as Footer } from "./NavBar-6eb81a73.js";
const _sfc_main = {
  __name: "AppLayout",
  __ssrInlineRender: true,
  props: {
    title: String
  },
  setup(__props) {
    ref(false);
    ref(false);
    ref(false);
    const fireSwalOnNotification = (pageInstance) => {
      if (Object.keys(pageInstance.props.flash.swalNotification ?? {}).length > 0) {
        const swalConfig = pageInstance.props.flash.swalNotification;
        console.log(swalConfig);
        Swal.fire(
          Object.assign(swalConfig, {
            timer: swalConfig.timer ?? 3e3,
            timerProgressBar: true
          })
        );
      }
    };
    fireSwalOnNotification(usePage());
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(Head), { title: __props.title }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`<div class="min-h-screen bg-gray-50">`);
      _push(ssrRenderComponent(NavBar, null, null, _parent));
      if (_ctx.$slots.header) {
        _push(`<header class="bg-white shadow"><div class="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">`);
        ssrRenderSlot(_ctx.$slots, "header", {}, null, _push, _parent);
        _push(`</div></header>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<main>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AppLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
