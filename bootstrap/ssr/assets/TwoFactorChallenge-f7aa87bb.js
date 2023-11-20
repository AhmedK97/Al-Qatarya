import { ref, withCtx, unref, createVNode, openBlock, createBlock, Fragment, createTextVNode, withModifiers, useSSRContext, nextTick } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { useForm, Head } from "@inertiajs/vue3";
import { _ as _sfc_main$1, a as _sfc_main$2, b as _sfc_main$4 } from "./FormValidationErrors-2a1d8077.js";
import { _ as _sfc_main$3, a as _sfc_main$7 } from "./BaseDivider-9c47c877.js";
import { _ as _sfc_main$6 } from "./FormControl-9ac7bf53.js";
import { _ as _sfc_main$5 } from "./FormField-9bc258f4.js";
import { _ as _sfc_main$9 } from "./BaseButton-89eb7a62.js";
import { _ as _sfc_main$8 } from "./BaseLevel-c35b5037.js";
import "./style-a68a90f0.js";
import "pinia";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "axios";
import "./InputError-6aeb8d97.js";
const _sfc_main = {
  __name: "TwoFactorChallenge",
  __ssrInlineRender: true,
  setup(__props) {
    const recovery = ref(false);
    const form = useForm({
      code: "",
      recovery_code: ""
    });
    const recoveryCodeInput = ref(null);
    const codeInput = ref(null);
    const toggleRecovery = async () => {
      var _a, _b;
      recovery.value ^= true;
      await nextTick();
      if (recovery.value) {
        (_a = recoveryCodeInput.value) == null ? void 0 : _a.focus();
        form.code = "";
      } else {
        (_b = codeInput.value) == null ? void 0 : _b.focus();
        form.recovery_code = "";
      }
    };
    const submit = () => {
      form.post(route("two-factor.login"));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Two-factor Confirmation" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, { bg: "purplePink" }, {
              default: withCtx(({ cardClass }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$3, {
                    class: cardClass,
                    "is-form": "",
                    onSubmit: submit
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$4, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$5, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="mb-4 text-sm text-gray-600"${_scopeId4}>`);
                              if (!recovery.value) {
                                _push5(`<!--[--> Please confirm access to your account by entering the authentication code provided by your authenticator application. <!--]-->`);
                              } else {
                                _push5(`<!--[--> Please confirm access to your account by entering one of your emergency recovery codes. <!--]-->`);
                              }
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "mb-4 text-sm text-gray-600" }, [
                                  !recovery.value ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                    createTextVNode(" Please confirm access to your account by entering the authentication code provided by your authenticator application. ")
                                  ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                    createTextVNode(" Please confirm access to your account by entering one of your emergency recovery codes. ")
                                  ], 64))
                                ])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        if (!recovery.value) {
                          _push4(ssrRenderComponent(_sfc_main$5, {
                            label: "Code",
                            "label-for": "code",
                            help: "Please enter one-time code"
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_sfc_main$6, {
                                  id: "code",
                                  onSetRef: ($event) => codeInput.value = $event,
                                  modelValue: unref(form).code,
                                  "onUpdate:modelValue": ($event) => unref(form).code = $event,
                                  type: "text",
                                  inputmode: "numeric",
                                  autofocus: "",
                                  autocomplete: "one-time-code"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_sfc_main$6, {
                                    id: "code",
                                    onSetRef: ($event) => codeInput.value = $event,
                                    modelValue: unref(form).code,
                                    "onUpdate:modelValue": ($event) => unref(form).code = $event,
                                    type: "text",
                                    inputmode: "numeric",
                                    autofocus: "",
                                    autocomplete: "one-time-code"
                                  }, null, 8, ["onSetRef", "modelValue", "onUpdate:modelValue"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(ssrRenderComponent(_sfc_main$5, {
                            label: "Recovery Code",
                            "label-for": "recovery_code",
                            help: "Please enter recovery code"
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_sfc_main$6, {
                                  id: "recovery_code",
                                  onSetRef: ($event) => recoveryCodeInput.value = $event,
                                  modelValue: unref(form).recovery_code,
                                  "onUpdate:modelValue": ($event) => unref(form).recovery_code = $event,
                                  type: "text",
                                  class: "block w-full mt-1",
                                  autocomplete: "one-time-code"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_sfc_main$6, {
                                    id: "recovery_code",
                                    onSetRef: ($event) => recoveryCodeInput.value = $event,
                                    modelValue: unref(form).recovery_code,
                                    "onUpdate:modelValue": ($event) => unref(form).recovery_code = $event,
                                    type: "text",
                                    class: "block w-full mt-1",
                                    autocomplete: "one-time-code"
                                  }, null, 8, ["onSetRef", "modelValue", "onUpdate:modelValue"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        }
                        _push4(ssrRenderComponent(_sfc_main$7, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$8, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$9, {
                                type: "submit",
                                color: "info",
                                label: "Log in",
                                class: { "opacity-25": unref(form).processing },
                                disabled: unref(form).processing
                              }, null, _parent5, _scopeId4));
                              _push5(`<button${_scopeId4}>`);
                              if (!recovery.value) {
                                _push5(`<!--[--> Use a recovery code <!--]-->`);
                              } else {
                                _push5(`<!--[--> Use an authentication code <!--]-->`);
                              }
                              _push5(`</button>`);
                            } else {
                              return [
                                createVNode(_sfc_main$9, {
                                  type: "submit",
                                  color: "info",
                                  label: "Log in",
                                  class: { "opacity-25": unref(form).processing },
                                  disabled: unref(form).processing
                                }, null, 8, ["class", "disabled"]),
                                createVNode("button", {
                                  onClick: withModifiers(toggleRecovery, ["prevent"])
                                }, [
                                  !recovery.value ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                    createTextVNode(" Use a recovery code ")
                                  ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                    createTextVNode(" Use an authentication code ")
                                  ], 64))
                                ], 8, ["onClick"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$4),
                          createVNode(_sfc_main$5, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "mb-4 text-sm text-gray-600" }, [
                                !recovery.value ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                  createTextVNode(" Please confirm access to your account by entering the authentication code provided by your authenticator application. ")
                                ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                  createTextVNode(" Please confirm access to your account by entering one of your emergency recovery codes. ")
                                ], 64))
                              ])
                            ]),
                            _: 1
                          }),
                          !recovery.value ? (openBlock(), createBlock(_sfc_main$5, {
                            key: 0,
                            label: "Code",
                            "label-for": "code",
                            help: "Please enter one-time code"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$6, {
                                id: "code",
                                onSetRef: ($event) => codeInput.value = $event,
                                modelValue: unref(form).code,
                                "onUpdate:modelValue": ($event) => unref(form).code = $event,
                                type: "text",
                                inputmode: "numeric",
                                autofocus: "",
                                autocomplete: "one-time-code"
                              }, null, 8, ["onSetRef", "modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })) : (openBlock(), createBlock(_sfc_main$5, {
                            key: 1,
                            label: "Recovery Code",
                            "label-for": "recovery_code",
                            help: "Please enter recovery code"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$6, {
                                id: "recovery_code",
                                onSetRef: ($event) => recoveryCodeInput.value = $event,
                                modelValue: unref(form).recovery_code,
                                "onUpdate:modelValue": ($event) => unref(form).recovery_code = $event,
                                type: "text",
                                class: "block w-full mt-1",
                                autocomplete: "one-time-code"
                              }, null, 8, ["onSetRef", "modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })),
                          createVNode(_sfc_main$7),
                          createVNode(_sfc_main$8, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$9, {
                                type: "submit",
                                color: "info",
                                label: "Log in",
                                class: { "opacity-25": unref(form).processing },
                                disabled: unref(form).processing
                              }, null, 8, ["class", "disabled"]),
                              createVNode("button", {
                                onClick: withModifiers(toggleRecovery, ["prevent"])
                              }, [
                                !recovery.value ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                  createTextVNode(" Use a recovery code ")
                                ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                  createTextVNode(" Use an authentication code ")
                                ], 64))
                              ], 8, ["onClick"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$3, {
                      class: cardClass,
                      "is-form": "",
                      onSubmit: withModifiers(submit, ["prevent"])
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$4),
                        createVNode(_sfc_main$5, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "mb-4 text-sm text-gray-600" }, [
                              !recovery.value ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                createTextVNode(" Please confirm access to your account by entering the authentication code provided by your authenticator application. ")
                              ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                createTextVNode(" Please confirm access to your account by entering one of your emergency recovery codes. ")
                              ], 64))
                            ])
                          ]),
                          _: 1
                        }),
                        !recovery.value ? (openBlock(), createBlock(_sfc_main$5, {
                          key: 0,
                          label: "Code",
                          "label-for": "code",
                          help: "Please enter one-time code"
                        }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$6, {
                              id: "code",
                              onSetRef: ($event) => codeInput.value = $event,
                              modelValue: unref(form).code,
                              "onUpdate:modelValue": ($event) => unref(form).code = $event,
                              type: "text",
                              inputmode: "numeric",
                              autofocus: "",
                              autocomplete: "one-time-code"
                            }, null, 8, ["onSetRef", "modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        })) : (openBlock(), createBlock(_sfc_main$5, {
                          key: 1,
                          label: "Recovery Code",
                          "label-for": "recovery_code",
                          help: "Please enter recovery code"
                        }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$6, {
                              id: "recovery_code",
                              onSetRef: ($event) => recoveryCodeInput.value = $event,
                              modelValue: unref(form).recovery_code,
                              "onUpdate:modelValue": ($event) => unref(form).recovery_code = $event,
                              type: "text",
                              class: "block w-full mt-1",
                              autocomplete: "one-time-code"
                            }, null, 8, ["onSetRef", "modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        })),
                        createVNode(_sfc_main$7),
                        createVNode(_sfc_main$8, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$9, {
                              type: "submit",
                              color: "info",
                              label: "Log in",
                              class: { "opacity-25": unref(form).processing },
                              disabled: unref(form).processing
                            }, null, 8, ["class", "disabled"]),
                            createVNode("button", {
                              onClick: withModifiers(toggleRecovery, ["prevent"])
                            }, [
                              !recovery.value ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                createTextVNode(" Use a recovery code ")
                              ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                createTextVNode(" Use an authentication code ")
                              ], 64))
                            ], 8, ["onClick"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 2
                    }, 1032, ["class", "onSubmit"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Head), { title: "Two-factor Confirmation" }),
              createVNode(_sfc_main$2, { bg: "purplePink" }, {
                default: withCtx(({ cardClass }) => [
                  createVNode(_sfc_main$3, {
                    class: cardClass,
                    "is-form": "",
                    onSubmit: withModifiers(submit, ["prevent"])
                  }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$4),
                      createVNode(_sfc_main$5, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "mb-4 text-sm text-gray-600" }, [
                            !recovery.value ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                              createTextVNode(" Please confirm access to your account by entering the authentication code provided by your authenticator application. ")
                            ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                              createTextVNode(" Please confirm access to your account by entering one of your emergency recovery codes. ")
                            ], 64))
                          ])
                        ]),
                        _: 1
                      }),
                      !recovery.value ? (openBlock(), createBlock(_sfc_main$5, {
                        key: 0,
                        label: "Code",
                        "label-for": "code",
                        help: "Please enter one-time code"
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$6, {
                            id: "code",
                            onSetRef: ($event) => codeInput.value = $event,
                            modelValue: unref(form).code,
                            "onUpdate:modelValue": ($event) => unref(form).code = $event,
                            type: "text",
                            inputmode: "numeric",
                            autofocus: "",
                            autocomplete: "one-time-code"
                          }, null, 8, ["onSetRef", "modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })) : (openBlock(), createBlock(_sfc_main$5, {
                        key: 1,
                        label: "Recovery Code",
                        "label-for": "recovery_code",
                        help: "Please enter recovery code"
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$6, {
                            id: "recovery_code",
                            onSetRef: ($event) => recoveryCodeInput.value = $event,
                            modelValue: unref(form).recovery_code,
                            "onUpdate:modelValue": ($event) => unref(form).recovery_code = $event,
                            type: "text",
                            class: "block w-full mt-1",
                            autocomplete: "one-time-code"
                          }, null, 8, ["onSetRef", "modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })),
                      createVNode(_sfc_main$7),
                      createVNode(_sfc_main$8, null, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$9, {
                            type: "submit",
                            color: "info",
                            label: "Log in",
                            class: { "opacity-25": unref(form).processing },
                            disabled: unref(form).processing
                          }, null, 8, ["class", "disabled"]),
                          createVNode("button", {
                            onClick: withModifiers(toggleRecovery, ["prevent"])
                          }, [
                            !recovery.value ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                              createTextVNode(" Use a recovery code ")
                            ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                              createTextVNode(" Use an authentication code ")
                            ], 64))
                          ], 8, ["onClick"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 2
                  }, 1032, ["class", "onSubmit"])
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/TwoFactorChallenge.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
