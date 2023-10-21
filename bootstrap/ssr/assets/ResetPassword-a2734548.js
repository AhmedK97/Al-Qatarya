import { withCtx, unref, createVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { useForm, Head } from "@inertiajs/vue3";
import { mdiEmail, mdiFormTextboxPassword } from "@mdi/js";
import { _ as _sfc_main$1, a as _sfc_main$2, b as _sfc_main$3, c as _sfc_main$4, d as _sfc_main$5, e as _sfc_main$8 } from "./FormValidationErrors-fef65aaa.js";
import { _ as _sfc_main$6 } from "./FormControl-6dd1862c.js";
import { _ as _sfc_main$7 } from "./colors-6c25eea7.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "pinia";
import "axios";
const _sfc_main = {
  __name: "ResetPassword",
  __ssrInlineRender: true,
  props: {
    email: {
      type: String,
      default: null
    },
    token: {
      type: String,
      default: null
    }
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      token: props.token,
      email: props.email,
      password: "",
      password_confirmation: ""
    });
    const submit = () => {
      form.post(route("password.update"), {
        onFinish: () => form.reset("password", "password_confirmation")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Reset Password" }, null, _parent2, _scopeId));
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
                        _push4(ssrRenderComponent(_sfc_main$5, {
                          label: "Email",
                          "label-for": "email",
                          help: "Please enter your email"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$6, {
                                modelValue: unref(form).email,
                                "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                icon: unref(mdiEmail),
                                autocomplete: "email",
                                type: "email",
                                id: "email",
                                required: ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$6, {
                                  modelValue: unref(form).email,
                                  "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                  icon: unref(mdiEmail),
                                  autocomplete: "email",
                                  type: "email",
                                  id: "email",
                                  required: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$5, {
                          label: "Password",
                          "label-for": "password",
                          help: "Please enter new password"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$6, {
                                modelValue: unref(form).password,
                                "onUpdate:modelValue": ($event) => unref(form).password = $event,
                                icon: unref(mdiFormTextboxPassword),
                                type: "password",
                                autocomplete: "new-password",
                                id: "password",
                                required: ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$6, {
                                  modelValue: unref(form).password,
                                  "onUpdate:modelValue": ($event) => unref(form).password = $event,
                                  icon: unref(mdiFormTextboxPassword),
                                  type: "password",
                                  autocomplete: "new-password",
                                  id: "password",
                                  required: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$5, {
                          label: "Confirm Password",
                          "label-for": "password_confirmation",
                          help: "Please confirm new password"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$6, {
                                modelValue: unref(form).password_confirmation,
                                "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                                icon: unref(mdiFormTextboxPassword),
                                type: "password",
                                autocomplete: "new-password",
                                id: "password_confirmation",
                                required: ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$6, {
                                  modelValue: unref(form).password_confirmation,
                                  "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                                  icon: unref(mdiFormTextboxPassword),
                                  type: "password",
                                  autocomplete: "new-password",
                                  id: "password_confirmation",
                                  required: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$7, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$8, {
                          type: "submit",
                          color: "info",
                          label: "Reset password",
                          class: { "opacity-25": unref(form).processing },
                          disabled: unref(form).processing
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$4),
                          createVNode(_sfc_main$5, {
                            label: "Email",
                            "label-for": "email",
                            help: "Please enter your email"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$6, {
                                modelValue: unref(form).email,
                                "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                icon: unref(mdiEmail),
                                autocomplete: "email",
                                type: "email",
                                id: "email",
                                required: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                            ]),
                            _: 1
                          }),
                          createVNode(_sfc_main$5, {
                            label: "Password",
                            "label-for": "password",
                            help: "Please enter new password"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$6, {
                                modelValue: unref(form).password,
                                "onUpdate:modelValue": ($event) => unref(form).password = $event,
                                icon: unref(mdiFormTextboxPassword),
                                type: "password",
                                autocomplete: "new-password",
                                id: "password",
                                required: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                            ]),
                            _: 1
                          }),
                          createVNode(_sfc_main$5, {
                            label: "Confirm Password",
                            "label-for": "password_confirmation",
                            help: "Please confirm new password"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$6, {
                                modelValue: unref(form).password_confirmation,
                                "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                                icon: unref(mdiFormTextboxPassword),
                                type: "password",
                                autocomplete: "new-password",
                                id: "password_confirmation",
                                required: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                            ]),
                            _: 1
                          }),
                          createVNode(_sfc_main$7),
                          createVNode(_sfc_main$8, {
                            type: "submit",
                            color: "info",
                            label: "Reset password",
                            class: { "opacity-25": unref(form).processing },
                            disabled: unref(form).processing
                          }, null, 8, ["class", "disabled"])
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
                        createVNode(_sfc_main$5, {
                          label: "Email",
                          "label-for": "email",
                          help: "Please enter your email"
                        }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$6, {
                              modelValue: unref(form).email,
                              "onUpdate:modelValue": ($event) => unref(form).email = $event,
                              icon: unref(mdiEmail),
                              autocomplete: "email",
                              type: "email",
                              id: "email",
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                          ]),
                          _: 1
                        }),
                        createVNode(_sfc_main$5, {
                          label: "Password",
                          "label-for": "password",
                          help: "Please enter new password"
                        }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$6, {
                              modelValue: unref(form).password,
                              "onUpdate:modelValue": ($event) => unref(form).password = $event,
                              icon: unref(mdiFormTextboxPassword),
                              type: "password",
                              autocomplete: "new-password",
                              id: "password",
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                          ]),
                          _: 1
                        }),
                        createVNode(_sfc_main$5, {
                          label: "Confirm Password",
                          "label-for": "password_confirmation",
                          help: "Please confirm new password"
                        }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$6, {
                              modelValue: unref(form).password_confirmation,
                              "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                              icon: unref(mdiFormTextboxPassword),
                              type: "password",
                              autocomplete: "new-password",
                              id: "password_confirmation",
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                          ]),
                          _: 1
                        }),
                        createVNode(_sfc_main$7),
                        createVNode(_sfc_main$8, {
                          type: "submit",
                          color: "info",
                          label: "Reset password",
                          class: { "opacity-25": unref(form).processing },
                          disabled: unref(form).processing
                        }, null, 8, ["class", "disabled"])
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
              createVNode(unref(Head), { title: "Reset Password" }),
              createVNode(_sfc_main$2, { bg: "purplePink" }, {
                default: withCtx(({ cardClass }) => [
                  createVNode(_sfc_main$3, {
                    class: cardClass,
                    "is-form": "",
                    onSubmit: withModifiers(submit, ["prevent"])
                  }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$4),
                      createVNode(_sfc_main$5, {
                        label: "Email",
                        "label-for": "email",
                        help: "Please enter your email"
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$6, {
                            modelValue: unref(form).email,
                            "onUpdate:modelValue": ($event) => unref(form).email = $event,
                            icon: unref(mdiEmail),
                            autocomplete: "email",
                            type: "email",
                            id: "email",
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                        ]),
                        _: 1
                      }),
                      createVNode(_sfc_main$5, {
                        label: "Password",
                        "label-for": "password",
                        help: "Please enter new password"
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$6, {
                            modelValue: unref(form).password,
                            "onUpdate:modelValue": ($event) => unref(form).password = $event,
                            icon: unref(mdiFormTextboxPassword),
                            type: "password",
                            autocomplete: "new-password",
                            id: "password",
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                        ]),
                        _: 1
                      }),
                      createVNode(_sfc_main$5, {
                        label: "Confirm Password",
                        "label-for": "password_confirmation",
                        help: "Please confirm new password"
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$6, {
                            modelValue: unref(form).password_confirmation,
                            "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                            icon: unref(mdiFormTextboxPassword),
                            type: "password",
                            autocomplete: "new-password",
                            id: "password_confirmation",
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                        ]),
                        _: 1
                      }),
                      createVNode(_sfc_main$7),
                      createVNode(_sfc_main$8, {
                        type: "submit",
                        color: "info",
                        label: "Reset password",
                        class: { "opacity-25": unref(form).processing },
                        disabled: unref(form).processing
                      }, null, 8, ["class", "disabled"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ResetPassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
