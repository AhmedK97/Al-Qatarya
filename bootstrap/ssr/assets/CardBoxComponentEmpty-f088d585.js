import { mergeProps, useSSRContext, computed, withCtx, createSlots, unref, openBlock, createBlock, withModifiers, createCommentVNode, createVNode, renderSlot, withDirectives, vShow } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderSlot, ssrRenderComponent } from "vue/server-renderer";
import { mdiClose } from "@mdi/js";
import { _ as _sfc_main$5 } from "./BaseButton-89eb7a62.js";
import { _ as _sfc_main$6 } from "./BaseButtons-ce2f1900.js";
import { _ as _sfc_main$4 } from "./BaseDivider-9c47c877.js";
import { a as _sfc_main$3 } from "./PillTag-89a59c6f.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main$2 = {
  __name: "CardBoxComponentTitle",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-between mb-3" }, _attrs))}><h1 class="text-2xl">${ssrInterpolate(__props.title)}</h1>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/CardBoxComponentTitle.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "CardBoxModal",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    },
    button: {
      type: String,
      default: "info"
    },
    buttonLabel: {
      type: String,
      default: "Done"
    },
    hasCancel: Boolean,
    hasCancelButton: Boolean,
    hasConfirm: Boolean,
    scrollable: Boolean,
    cardWidthClass: {
      type: String,
      default: "w-11/12 md:w-3/5 lg:w-2/5 xl:w-4/12"
    },
    modelValue: {
      type: [String, Number, Boolean],
      default: null
    },
    noExit: {
      type: Boolean,
      default: false
    },
    customClass: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue", "cancel", "confirm"],
  setup(__props, { emit }) {
    const props = __props;
    const value = computed({
      get: () => props.modelValue,
      set: (value2) => emit("update:modelValue", value2)
    });
    const confirmCancel = (mode) => {
      if (props.noExit) {
        return;
      }
      value.value = false;
      emit(mode);
    };
    const confirm = () => confirmCancel("confirm");
    const cancel = () => confirmCancel("cancel");
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && value.value) {
        cancel();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$3, mergeProps({
        style: value.value ? null : { display: "none" },
        onOverlayClick: cancel
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: [{
                "overflow-y-auto": __props.scrollable,
                [__props.cardWidthClass]: true
              }, "z-50 shadow-lg max-h-modal"],
              style: value.value ? null : { display: "none" },
              "is-modal": ""
            }, createSlots({
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$2, { title: __props.title }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (__props.hasCancel) {
                          _push4(ssrRenderComponent(_sfc_main$5, {
                            icon: unref(mdiClose),
                            color: "whiteDark",
                            small: "",
                            "rounded-full": "",
                            onClick: cancel
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          __props.hasCancel ? (openBlock(), createBlock(_sfc_main$5, {
                            key: 0,
                            icon: unref(mdiClose),
                            color: "whiteDark",
                            small: "",
                            "rounded-full": "",
                            onClick: withModifiers(cancel, ["prevent"])
                          }, null, 8, ["icon", "onClick"])) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="space-y-3 {{ customClass }}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode(_sfc_main$2, { title: __props.title }, {
                      default: withCtx(() => [
                        __props.hasCancel ? (openBlock(), createBlock(_sfc_main$5, {
                          key: 0,
                          icon: unref(mdiClose),
                          color: "whiteDark",
                          small: "",
                          "rounded-full": "",
                          onClick: withModifiers(cancel, ["prevent"])
                        }, null, 8, ["icon", "onClick"])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }, 8, ["title"]),
                    createVNode("div", { class: "space-y-3 {{ customClass }}" }, [
                      renderSlot(_ctx.$slots, "default")
                    ])
                  ];
                }
              }),
              _: 2
            }, [
              __props.hasConfirm && __props.hasCancelButton ? {
                name: "footer",
                fn: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$6, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (__props.hasConfirm) {
                            _push4(ssrRenderComponent(_sfc_main$5, {
                              label: __props.buttonLabel,
                              color: __props.button,
                              onClick: confirm
                            }, null, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          if (__props.hasCancelButton) {
                            _push4(ssrRenderComponent(_sfc_main$5, {
                              label: "Cancel",
                              color: __props.button,
                              outline: "",
                              onClick: cancel
                            }, null, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            __props.hasConfirm ? (openBlock(), createBlock(_sfc_main$5, {
                              key: 0,
                              label: __props.buttonLabel,
                              color: __props.button,
                              onClick: confirm
                            }, null, 8, ["label", "color"])) : createCommentVNode("", true),
                            __props.hasCancelButton ? (openBlock(), createBlock(_sfc_main$5, {
                              key: 1,
                              label: "Cancel",
                              color: __props.button,
                              outline: "",
                              onClick: cancel
                            }, null, 8, ["color"])) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$6, null, {
                        default: withCtx(() => [
                          __props.hasConfirm ? (openBlock(), createBlock(_sfc_main$5, {
                            key: 0,
                            label: __props.buttonLabel,
                            color: __props.button,
                            onClick: confirm
                          }, null, 8, ["label", "color"])) : createCommentVNode("", true),
                          __props.hasCancelButton ? (openBlock(), createBlock(_sfc_main$5, {
                            key: 1,
                            label: "Cancel",
                            color: __props.button,
                            outline: "",
                            onClick: cancel
                          }, null, 8, ["color"])) : createCommentVNode("", true)
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                key: "0"
              } : void 0
            ]), _parent2, _scopeId));
          } else {
            return [
              withDirectives(createVNode(_sfc_main$4, {
                class: [{
                  "overflow-y-auto": __props.scrollable,
                  [__props.cardWidthClass]: true
                }, "z-50 shadow-lg max-h-modal"],
                "is-modal": ""
              }, createSlots({
                default: withCtx(() => [
                  createVNode(_sfc_main$2, { title: __props.title }, {
                    default: withCtx(() => [
                      __props.hasCancel ? (openBlock(), createBlock(_sfc_main$5, {
                        key: 0,
                        icon: unref(mdiClose),
                        color: "whiteDark",
                        small: "",
                        "rounded-full": "",
                        onClick: withModifiers(cancel, ["prevent"])
                      }, null, 8, ["icon", "onClick"])) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }, 8, ["title"]),
                  createVNode("div", { class: "space-y-3 {{ customClass }}" }, [
                    renderSlot(_ctx.$slots, "default")
                  ])
                ]),
                _: 2
              }, [
                __props.hasConfirm && __props.hasCancelButton ? {
                  name: "footer",
                  fn: withCtx(() => [
                    createVNode(_sfc_main$6, null, {
                      default: withCtx(() => [
                        __props.hasConfirm ? (openBlock(), createBlock(_sfc_main$5, {
                          key: 0,
                          label: __props.buttonLabel,
                          color: __props.button,
                          onClick: confirm
                        }, null, 8, ["label", "color"])) : createCommentVNode("", true),
                        __props.hasCancelButton ? (openBlock(), createBlock(_sfc_main$5, {
                          key: 1,
                          label: "Cancel",
                          color: __props.button,
                          outline: "",
                          onClick: cancel
                        }, null, 8, ["color"])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    })
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["class"]), [
                [vShow, value.value]
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/CardBoxModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center py-24 text-gray-500 dark:text-slate-400" }, _attrs))}><p>Nothing&#39;s here…</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/CardBoxComponentEmpty.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CardBoxComponentEmpty = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  CardBoxComponentEmpty as C,
  _sfc_main$1 as _
};
