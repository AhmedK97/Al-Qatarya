import { computed, withCtx, unref, createTextVNode, createVNode, openBlock, createBlock, createCommentVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { useForm, Head, Link } from "@inertiajs/vue3";
import { _ as _sfc_main$1, a as _sfc_main$2, b as _sfc_main$3, c as _sfc_main$4, f as _sfc_main$5, d as _sfc_main$6, e as _sfc_main$9 } from "./FormValidationErrors-fef65aaa.js";
import { _ as _sfc_main$7 } from "./colors-6c25eea7.js";
import { _ as _sfc_main$8 } from "./BaseLevel-c35b5037.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "pinia";
const _sfc_main = {
  __name: "VerifyEmail",
  __ssrInlineRender: true,
  props: {
    status: {
      type: String,
      default: null
    }
  },
  setup(__props) {
    const props = __props;
    const form = useForm();
    const verificationLinkSent = computed(
      () => props.status === "verification-link-sent"
    );
    const submit = () => {
      form.post(route("verification.send"));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Email Verification" }, null, _parent2, _scopeId));
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
                        if (verificationLinkSent.value) {
                          _push4(ssrRenderComponent(_sfc_main$5, { color: "info" }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` A new verification link has been sent to the email address you provided during registration. `);
                              } else {
                                return [
                                  createTextVNode(" A new verification link has been sent to the email address you provided during registration. ")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(ssrRenderComponent(_sfc_main$6, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="mb-4 text-sm text-gray-600"${_scopeId4}> Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn&#39;t receive the email, we will gladly send you another. </div>`);
                            } else {
                              return [
                                createVNode("div", { class: "mb-4 text-sm text-gray-600" }, " Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$7, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$8, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$9, {
                                type: "submit",
                                color: "info",
                                label: "Resend Verification Email",
                                class: { "opacity-25": unref(form).processing },
                                disabled: unref(form).processing
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(Link), {
                                href: _ctx.route("logout"),
                                method: "post",
                                as: "button"
                              }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Logout `);
                                  } else {
                                    return [
                                      createTextVNode(" Logout ")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$9, {
                                  type: "submit",
                                  color: "info",
                                  label: "Resend Verification Email",
                                  class: { "opacity-25": unref(form).processing },
                                  disabled: unref(form).processing
                                }, null, 8, ["class", "disabled"]),
                                createVNode(unref(Link), {
                                  href: _ctx.route("logout"),
                                  method: "post",
                                  as: "button"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Logout ")
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
                          verificationLinkSent.value ? (openBlock(), createBlock(_sfc_main$5, {
                            key: 0,
                            color: "info"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" A new verification link has been sent to the email address you provided during registration. ")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode(_sfc_main$6, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "mb-4 text-sm text-gray-600" }, " Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ")
                            ]),
                            _: 1
                          }),
                          createVNode(_sfc_main$7),
                          createVNode(_sfc_main$8, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$9, {
                                type: "submit",
                                color: "info",
                                label: "Resend Verification Email",
                                class: { "opacity-25": unref(form).processing },
                                disabled: unref(form).processing
                              }, null, 8, ["class", "disabled"]),
                              createVNode(unref(Link), {
                                href: _ctx.route("logout"),
                                method: "post",
                                as: "button"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Logout ")
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
                        verificationLinkSent.value ? (openBlock(), createBlock(_sfc_main$5, {
                          key: 0,
                          color: "info"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" A new verification link has been sent to the email address you provided during registration. ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_sfc_main$6, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "mb-4 text-sm text-gray-600" }, " Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ")
                          ]),
                          _: 1
                        }),
                        createVNode(_sfc_main$7),
                        createVNode(_sfc_main$8, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$9, {
                              type: "submit",
                              color: "info",
                              label: "Resend Verification Email",
                              class: { "opacity-25": unref(form).processing },
                              disabled: unref(form).processing
                            }, null, 8, ["class", "disabled"]),
                            createVNode(unref(Link), {
                              href: _ctx.route("logout"),
                              method: "post",
                              as: "button"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Logout ")
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
              createVNode(unref(Head), { title: "Email Verification" }),
              createVNode(_sfc_main$2, { bg: "purplePink" }, {
                default: withCtx(({ cardClass }) => [
                  createVNode(_sfc_main$3, {
                    class: cardClass,
                    "is-form": "",
                    onSubmit: withModifiers(submit, ["prevent"])
                  }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$4),
                      verificationLinkSent.value ? (openBlock(), createBlock(_sfc_main$5, {
                        key: 0,
                        color: "info"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" A new verification link has been sent to the email address you provided during registration. ")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode(_sfc_main$6, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "mb-4 text-sm text-gray-600" }, " Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ")
                        ]),
                        _: 1
                      }),
                      createVNode(_sfc_main$7),
                      createVNode(_sfc_main$8, null, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$9, {
                            type: "submit",
                            color: "info",
                            label: "Resend Verification Email",
                            class: { "opacity-25": unref(form).processing },
                            disabled: unref(form).processing
                          }, null, 8, ["class", "disabled"]),
                          createVNode(unref(Link), {
                            href: _ctx.route("logout"),
                            method: "post",
                            as: "button"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Logout ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/VerifyEmail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
