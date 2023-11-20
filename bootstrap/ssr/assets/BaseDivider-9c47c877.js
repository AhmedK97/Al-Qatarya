import { mergeProps, useSSRContext, useSlots, computed, createVNode, resolveDynamicComponent, withCtx, renderSlot, openBlock, createBlock, Fragment, createCommentVNode } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderVNode, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main$3 = {
  __name: "CardBoxComponentBody",
  __ssrInlineRender: true,
  props: {
    noPadding: Boolean
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["flex-1", { "p-6": !__props.noPadding }]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/CardBoxComponentBody.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "p-6" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</footer>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/CardBoxComponentFooter.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const CardBoxComponentFooter = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "CardBox",
  __ssrInlineRender: true,
  props: {
    rounded: {
      type: String,
      default: "rounded-2xl"
    },
    flex: {
      type: String,
      default: "flex-col"
    },
    hasComponentLayout: Boolean,
    hasTable: Boolean,
    isForm: Boolean,
    isHoverable: Boolean,
    isModal: Boolean
  },
  emits: ["submit"],
  setup(__props, { emit }) {
    const props = __props;
    const slots = useSlots();
    const hasFooterSlot = computed(() => slots.footer && !!slots.footer());
    const componentClass = computed(() => {
      const base = [
        props.rounded,
        props.flex,
        props.isModal ? "dark:bg-slate-900" : "dark:bg-slate-900/70"
      ];
      if (props.isHoverable) {
        base.push("hover:shadow-lg transition-shadow duration-500");
      }
      return base;
    });
    const submit = (event) => {
      emit("submit", event);
    };
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.isForm ? "form" : "div"), mergeProps({
        class: [componentClass.value, "flex bg-white"],
        onSubmit: submit
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.hasComponentLayout) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            } else {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(_sfc_main$3, { "no-padding": __props.hasTable }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "default")
                    ];
                  }
                }),
                _: 3
              }, _parent2, _scopeId));
              if (hasFooterSlot.value) {
                _push2(ssrRenderComponent(CardBoxComponentFooter, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push3, _parent3, _scopeId2);
                    } else {
                      return [
                        renderSlot(_ctx.$slots, "footer")
                      ];
                    }
                  }),
                  _: 3
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            }
          } else {
            return [
              __props.hasComponentLayout ? renderSlot(_ctx.$slots, "default", { key: 0 }) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                createVNode(_sfc_main$3, { "no-padding": __props.hasTable }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "default")
                  ]),
                  _: 3
                }, 8, ["no-padding"]),
                hasFooterSlot.value ? (openBlock(), createBlock(CardBoxComponentFooter, { key: 0 }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "footer")
                  ]),
                  _: 3
                })) : createCommentVNode("", true)
              ], 64))
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/CardBox.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "BaseDivider",
  __ssrInlineRender: true,
  props: {
    navBar: Boolean
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<hr${ssrRenderAttrs(mergeProps({
        class: [
          props.navBar ? "hidden lg:block lg:my-0.5 dark:border-slate-700" : "my-6 -mx-6 dark:border-slate-800",
          "border-t border-gray-100"
        ]
      }, _attrs))}>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/BaseDivider.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main$1 as _,
  _sfc_main as a
};
