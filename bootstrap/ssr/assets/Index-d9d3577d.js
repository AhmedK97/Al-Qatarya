import { useSSRContext, withCtx, createVNode, toDisplayString } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { N as NavBar, _ as _sfc_main$2 } from "./NavBar-d6f446bb.js";
import { S as SectionTitleShadow } from "./SectionTitleShadow-51b96593.js";
import { I as ImageWithDetails } from "./ImageWithDetails-efb89353.js";
import "@inertiajs/vue3";
import "./_plugin-vue_export-helper-cc2b3d55.js";
const Gallery_vue_vue_type_style_index_0_scoped_3f3c7e6e_lang = "";
const _sfc_main$1 = {
  data() {
    return {
      images: [
        {
          src: "/storage/1/720.webp",
          alt: "Image 1",
          title: "Image Title 1",
          description: "Description for Image 1"
        },
        {
          src: "/storage/1/720.webp",
          alt: "Image 1",
          title: "Image Title 1",
          description: "Description for Image 1"
        },
        {
          src: "/storage/1/720.webp",
          alt: "Image 1",
          title: "Image Title 1",
          description: "Description for Image 1"
        },
        {
          src: "/storage/1/720.webp",
          alt: "Image 1",
          title: "Image Title 1",
          description: "Description for Image 1"
        },
        {
          src: "/storage/1/720.webp",
          alt: "Image 1",
          title: "Image Title 1",
          description: "Description for Image 1"
        },
        {
          src: "/storage/1/720.webp",
          alt: "Image 1",
          title: "Image Title 1",
          description: "Description for Image 1"
        }
        // Add more images with details
      ],
      hoveredProject: null
    };
  },
  methods: {
    showDetails(project) {
      this.hoveredProject = project;
    },
    hideDetails() {
      this.hoveredProject = null;
    }
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Gallery.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    project: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(NavBar, null, null, _parent));
      _push(`<section class="bg-gray-50"><div class="container mx-auto my-20 max-w-7xl"><div class="flex flex-col items-center justify-center">`);
      _push(ssrRenderComponent(SectionTitleShadow, null, {
        "upper-title": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-3xl md:text-4xl"${_scopeId}>${ssrInterpolate(_ctx.$t("projects.upper"))}</span>`);
          } else {
            return [
              createVNode("span", { class: "text-3xl md:text-4xl" }, toDisplayString(_ctx.$t("projects.upper")), 1)
            ];
          }
        }),
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-2xl md:text-3xl"${_scopeId}>${ssrInterpolate(_ctx.$t("projects"))}</span>`);
          } else {
            return [
              createVNode("span", { class: "text-2xl md:text-3xl" }, toDisplayString(_ctx.$t("projects")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grid gap-6 px-6 mt-20 sm:grid-rows-3 sm:grid-cols-2 lg:grid-cols-4"><!--[-->`);
      ssrRenderList(__props.project, (project, index) => {
        _push(ssrRenderComponent(ImageWithDetails, {
          key: index,
          project,
          index
        }, null, _parent));
      });
      _push(`<!--]--></div></div></section>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Project/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
