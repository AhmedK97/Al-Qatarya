import { withCtx, unref, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { useForm, Head, Link } from "@inertiajs/vue3";
import { mdiAccount, mdiAsterisk } from "@mdi/js";
import { _ as _sfc_main$1, a as _sfc_main$2, b as _sfc_main$3, c as _sfc_main$4, f as _sfc_main$5, d as _sfc_main$6, e as _sfc_main$c } from "./FormValidationErrors-fef65aaa.js";
import { _ as _sfc_main$8, a as _sfc_main$b } from "./BaseButtons-e58d0bd0.js";
import { _ as _sfc_main$7 } from "./FormControl-6dd1862c.js";
import { _ as _sfc_main$9 } from "./colors-6c25eea7.js";
import { _ as _sfc_main$a } from "./BaseLevel-c35b5037.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "pinia";
import "axios";
const _sfc_main = {
  __name: "Login",
  __ssrInlineRender: true,
  props: {
    canResetPassword: Boolean,
    status: {
      type: String,
      default: null
    }
  },
  setup(__props) {
    const form = useForm({
      email: "",
      password: "",
      remember: []
    });
    const submit = () => {
      form.transform((data) => ({
        ...data,
        remember: form.remember && form.remember.length ? "on" : ""
      })).post(route("login"), {
        onFinish: () => form.reset("password")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Login" }, null, _parent2, _scopeId));
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
                        if (__props.status) {
                          _push4(ssrRenderComponent(_sfc_main$5, { color: "info" }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(__props.status)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(__props.status), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(ssrRenderComponent(_sfc_main$6, {
                          label: "Email",
                          "label-for": "email",
                          help: "Please enter your email"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$7, {
                                modelValue: unref(form).email,
                                "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                icon: unref(mdiAccount),
                                id: "email",
                                autocomplete: "email",
                                type: "email",
                                required: ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$7, {
                                  modelValue: unref(form).email,
                                  "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                  icon: unref(mdiAccount),
                                  id: "email",
                                  autocomplete: "email",
                                  type: "email",
                                  required: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$6, {
                          label: "Password",
                          "label-for": "password",
                          help: "Please enter your password"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$7, {
                                modelValue: unref(form).password,
                                "onUpdate:modelValue": ($event) => unref(form).password = $event,
                                icon: unref(mdiAsterisk),
                                type: "password",
                                id: "password",
                                autocomplete: "current-password",
                                required: ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$7, {
                                  modelValue: unref(form).password,
                                  "onUpdate:modelValue": ($event) => unref(form).password = $event,
                                  icon: unref(mdiAsterisk),
                                  type: "password",
                                  id: "password",
                                  autocomplete: "current-password",
                                  required: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$8, {
                          modelValue: unref(form).remember,
                          "onUpdate:modelValue": ($event) => unref(form).remember = $event,
                          name: "remember",
                          options: { remember: "Remember" }
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$9, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$a, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$b, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$c, {
                                      type: "submit",
                                      color: "info",
                                      label: "Login",
                                      class: { "opacity-25": unref(form).processing },
                                      disabled: unref(form).processing
                                    }, null, _parent6, _scopeId5));
                                    if (__props.canResetPassword) {
                                      _push6(ssrRenderComponent(_sfc_main$c, {
                                        "route-name": "password.request",
                                        color: "info",
                                        outline: "",
                                        label: "Remind"
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                  } else {
                                    return [
                                      createVNode(_sfc_main$c, {
                                        type: "submit",
                                        color: "info",
                                        label: "Login",
                                        class: { "opacity-25": unref(form).processing },
                                        disabled: unref(form).processing
                                      }, null, 8, ["class", "disabled"]),
                                      __props.canResetPassword ? (openBlock(), createBlock(_sfc_main$c, {
                                        key: 0,
                                        "route-name": "password.request",
                                        color: "info",
                                        outline: "",
                                        label: "Remind"
                                      })) : createCommentVNode("", true)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(Link), {
                                href: _ctx.route("register")
                              }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Register `);
                                  } else {
                                    return [
                                      createTextVNode(" Register ")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$b, null, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$c, {
                                      type: "submit",
                                      color: "info",
                                      label: "Login",
                                      class: { "opacity-25": unref(form).processing },
                                      disabled: unref(form).processing
                                    }, null, 8, ["class", "disabled"]),
                                    __props.canResetPassword ? (openBlock(), createBlock(_sfc_main$c, {
                                      key: 0,
                                      "route-name": "password.request",
                                      color: "info",
                                      outline: "",
                                      label: "Remind"
                                    })) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(Link), {
                                  href: _ctx.route("register")
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Register ")
                                  ]),
                                  _: 1
                                }, 8, ["href"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$4),
                          __props.status ? (openBlock(), createBlock(_sfc_main$5, {
                            key: 0,
                            color: "info"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(__props.status), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode(_sfc_main$6, {
                            label: "Email",
                            "label-for": "email",
                            help: "Please enter your email"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$7, {
                                modelValue: unref(form).email,
                                "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                icon: unref(mdiAccount),
                                id: "email",
                                autocomplete: "email",
                                type: "email",
                                required: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                            ]),
                            _: 1
                          }),
                          createVNode(_sfc_main$6, {
                            label: "Password",
                            "label-for": "password",
                            help: "Please enter your password"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$7, {
                                modelValue: unref(form).password,
                                "onUpdate:modelValue": ($event) => unref(form).password = $event,
                                icon: unref(mdiAsterisk),
                                type: "password",
                                id: "password",
                                autocomplete: "current-password",
                                required: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                            ]),
                            _: 1
                          }),
                          createVNode(_sfc_main$8, {
                            modelValue: unref(form).remember,
                            "onUpdate:modelValue": ($event) => unref(form).remember = $event,
                            name: "remember",
                            options: { remember: "Remember" }
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_sfc_main$9),
                          createVNode(_sfc_main$a, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$b, null, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$c, {
                                    type: "submit",
                                    color: "info",
                                    label: "Login",
                                    class: { "opacity-25": unref(form).processing },
                                    disabled: unref(form).processing
                                  }, null, 8, ["class", "disabled"]),
                                  __props.canResetPassword ? (openBlock(), createBlock(_sfc_main$c, {
                                    key: 0,
                                    "route-name": "password.request",
                                    color: "info",
                                    outline: "",
                                    label: "Remind"
                                  })) : createCommentVNode("", true)
                                ]),
                                _: 1
                              }),
                              createVNode(unref(Link), {
                                href: _ctx.route("register")
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Register ")
                                ]),
                                _: 1
                              }, 8, ["href"])
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
                        __props.status ? (openBlock(), createBlock(_sfc_main$5, {
                          key: 0,
                          color: "info"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(__props.status), 1)
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_sfc_main$6, {
                          label: "Email",
                          "label-for": "email",
                          help: "Please enter your email"
                        }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$7, {
                              modelValue: unref(form).email,
                              "onUpdate:modelValue": ($event) => unref(form).email = $event,
                              icon: unref(mdiAccount),
                              id: "email",
                              autocomplete: "email",
                              type: "email",
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                          ]),
                          _: 1
                        }),
                        createVNode(_sfc_main$6, {
                          label: "Password",
                          "label-for": "password",
                          help: "Please enter your password"
                        }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$7, {
                              modelValue: unref(form).password,
                              "onUpdate:modelValue": ($event) => unref(form).password = $event,
                              icon: unref(mdiAsterisk),
                              type: "password",
                              id: "password",
                              autocomplete: "current-password",
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                          ]),
                          _: 1
                        }),
                        createVNode(_sfc_main$8, {
                          modelValue: unref(form).remember,
                          "onUpdate:modelValue": ($event) => unref(form).remember = $event,
                          name: "remember",
                          options: { remember: "Remember" }
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_sfc_main$9),
                        createVNode(_sfc_main$a, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$b, null, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$c, {
                                  type: "submit",
                                  color: "info",
                                  label: "Login",
                                  class: { "opacity-25": unref(form).processing },
                                  disabled: unref(form).processing
                                }, null, 8, ["class", "disabled"]),
                                __props.canResetPassword ? (openBlock(), createBlock(_sfc_main$c, {
                                  key: 0,
                                  "route-name": "password.request",
                                  color: "info",
                                  outline: "",
                                  label: "Remind"
                                })) : createCommentVNode("", true)
                              ]),
                              _: 1
                            }),
                            createVNode(unref(Link), {
                              href: _ctx.route("register")
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Register ")
                              ]),
                              _: 1
                            }, 8, ["href"])
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
              createVNode(unref(Head), { title: "Login" }),
              createVNode(_sfc_main$2, { bg: "purplePink" }, {
                default: withCtx(({ cardClass }) => [
                  createVNode(_sfc_main$3, {
                    class: cardClass,
                    "is-form": "",
                    onSubmit: withModifiers(submit, ["prevent"])
                  }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$4),
                      __props.status ? (openBlock(), createBlock(_sfc_main$5, {
                        key: 0,
                        color: "info"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(__props.status), 1)
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode(_sfc_main$6, {
                        label: "Email",
                        "label-for": "email",
                        help: "Please enter your email"
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$7, {
                            modelValue: unref(form).email,
                            "onUpdate:modelValue": ($event) => unref(form).email = $event,
                            icon: unref(mdiAccount),
                            id: "email",
                            autocomplete: "email",
                            type: "email",
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                        ]),
                        _: 1
                      }),
                      createVNode(_sfc_main$6, {
                        label: "Password",
                        "label-for": "password",
                        help: "Please enter your password"
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$7, {
                            modelValue: unref(form).password,
                            "onUpdate:modelValue": ($event) => unref(form).password = $event,
                            icon: unref(mdiAsterisk),
                            type: "password",
                            id: "password",
                            autocomplete: "current-password",
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                        ]),
                        _: 1
                      }),
                      createVNode(_sfc_main$8, {
                        modelValue: unref(form).remember,
                        "onUpdate:modelValue": ($event) => unref(form).remember = $event,
                        name: "remember",
                        options: { remember: "Remember" }
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_sfc_main$9),
                      createVNode(_sfc_main$a, null, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$b, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$c, {
                                type: "submit",
                                color: "info",
                                label: "Login",
                                class: { "opacity-25": unref(form).processing },
                                disabled: unref(form).processing
                              }, null, 8, ["class", "disabled"]),
                              __props.canResetPassword ? (openBlock(), createBlock(_sfc_main$c, {
                                key: 0,
                                "route-name": "password.request",
                                color: "info",
                                outline: "",
                                label: "Remind"
                              })) : createCommentVNode("", true)
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Link), {
                            href: _ctx.route("register")
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Register ")
                            ]),
                            _: 1
                          }, 8, ["href"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
