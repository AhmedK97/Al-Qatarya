import { mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const ImageWithDetails_vue_vue_type_style_index_0_scoped_fbb2c4be_lang = "";
const _sfc_main = {
  __name: "ImageWithDetails",
  __ssrInlineRender: true,
  props: {
    project: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))} data-v-fbb2c4be><div class="relative" data-v-fbb2c4be><img${ssrRenderAttr("src", __props.project.main_image)}${ssrRenderAttr("alt", __props.project.title)} class="object-cover w-full h-auto duration-300 rounded-lg cursor-pointer hover:opacity-80" data-v-fbb2c4be></div><div class="absolute inset-0 flex items-center justify-center text-white bg-gray-900 rounded-lg opacity-0 hover:opacity-75" data-v-fbb2c4be><div class="flex flex-col items-center justify-center text-center" data-v-fbb2c4be><h3 class="px-2 text-lg font-semibold" data-v-fbb2c4be>${ssrInterpolate(__props.project.title)}</h3><p class="px-2 mt-2" data-v-fbb2c4be>${ssrInterpolate(__props.project.description)}</p><div class="flex justify-center px-5 py-4 mt-4 text-white rounded-full cursor-pointer bg-rose-900 hover:bg-rose-800" data-v-fbb2c4be>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("show.projects", __props.project.slug)
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
      _push(`</div></div></div><div class="absolute inset-0 flex items-center justify-center text-white rounded-lg down" data-v-fbb2c4be><div class="flex justify-center px-5 py-4 mt-4 text-white rounded-full cursor-pointer bg-rose-900 hover:bg-rose-800" data-v-fbb2c4be>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("show.projects", __props.project.slug)
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
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ImageWithDetails.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ImageWithDetails = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fbb2c4be"]]);
export {
  ImageWithDetails as I
};
