import { onMounted, reactive, watch, mergeProps, withCtx, createVNode, unref, openBlock, createBlock, Fragment, renderList, createCommentVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import cloneDeep from "lodash/cloneDeep.js";
import { useForm, router } from "@inertiajs/vue3";
import { _ as _sfc_main$5 } from "./FormControl-9ac7bf53.js";
import "./InputError-6aeb8d97.js";
import { _ as _sfc_main$4 } from "./FormField-9bc258f4.js";
import { _ as _sfc_main$1, a as _sfc_main$6 } from "./BaseDivider-9c47c877.js";
import "./SelectField-fffe6a40.js";
import { _ as _sfc_main$2 } from "./BaseButtons-ce2f1900.js";
import { _ as _sfc_main$3 } from "./BaseButton-89eb7a62.js";
import { mdiMinus, mdiPlus } from "@mdi/js";
import { e as eventBus } from "./eventBus-b891681f.js";
import Swal from "sweetalert2";
import "vue-select";
import "pinia";
import "axios";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "laravel-vue-i18n";
import "tiny-emitter/instance.js";
const _sfc_main = {
  __name: "AddMoreTransactionsForm",
  __ssrInlineRender: true,
  props: {
    transaction: {
      type: Object,
      default: () => {
      }
    },
    services: {
      type: Array,
      default: () => {
      }
    },
    project: {
      default: () => {
      }
    }
  },
  setup(__props) {
    var _a;
    const props = __props;
    onMounted(() => {
      eventBus.$on("openModal", (modalToOpen) => {
        if (modalToOpen === "transaction::AddMoreTransactionForm") {
          resetForm();
        }
      });
    });
    const services = reactive(props.services || {});
    const form = useForm({
      services: props.services,
      project_id: props.project,
      extra_services: (_a = props.transaction) == null ? void 0 : _a.extra_services
    });
    const resetForm = () => {
      form.reset();
      Object.keys(form.errors).forEach((key) => {
        delete form.errors[key];
      });
    };
    const removeExtraServices = (index) => {
      form.extra_services = form.extra_services.filter(
        (item, i) => i !== index
      );
    };
    const addFormItem = () => {
      form.extra_services.push({
        name: "",
        price: "",
        quantity: ""
      });
    };
    watch(
      () => cloneDeep(props),
      (newProps) => {
        var _a2;
        if (!newProps.services) {
          return;
        }
        resetForm();
        Object.assign(services, newProps.services);
        form.project_id = newProps.project;
        form.extra_services = (_a2 = newProps.transaction) == null ? void 0 : _a2.extra_services;
        form.services = newProps.services;
      }
    );
    const submit = () => {
      const sharedFormOptions = {
        preserveState: true,
        preserveScroll: true,
        onError: (errors) => {
          Object.keys(form.errors).forEach((key) => {
            delete form.errors[key];
          });
          Object.assign(form.errors, errors);
        }
      };
      router.post(
        route("store.service.transactions", form.project_id),
        form,
        Object.assign(sharedFormOptions, {
          onSuccess: () => {
            resetForm();
            eventBus.$emit("closeModal", "transaction::AddMoreTransactionForm");
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Payment Updated successfully",
              timer: 3e3,
              timerProgressBar: true
            });
          }
        })
      );
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        form: "",
        onSubmit: submit,
        customClass: "overflow-y-auto w-96"
      }, _attrs), {
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$3, {
                    onClick: submit,
                    type: "submit",
                    color: "info",
                    label: "Submit"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$3, {
                      onClick: submit,
                      type: "submit",
                      color: "info",
                      label: "Submit"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$2, null, {
                default: withCtx(() => [
                  createVNode(_sfc_main$3, {
                    onClick: submit,
                    type: "submit",
                    color: "info",
                    label: "Submit"
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<label class="block mb-2 font-bold"${_scopeId}> Services </label><!--[-->`);
            ssrRenderList(unref(form).services, (service, id) => {
              var _a2, _b;
              _push2(`<div class="mb-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$4, {
                label: `اسم الخدمة: ${service.name}`
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$5, {
                      modelValue: service.price,
                      "onUpdate:modelValue": ($event) => service.price = $event,
                      placeholder: "سعر المتر"
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_sfc_main$5, {
                      modelValue: service.quantity,
                      "onUpdate:modelValue": ($event) => service.quantity = $event,
                      placeholder: "عدد الامتار"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$5, {
                        modelValue: service.price,
                        "onUpdate:modelValue": ($event) => service.price = $event,
                        placeholder: "سعر المتر"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_sfc_main$5, {
                        modelValue: service.quantity,
                        "onUpdate:modelValue": ($event) => service.quantity = $event,
                        placeholder: "عدد الامتار"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$6, null, null, _parent2, _scopeId));
              if (unref(form) && unref(form).errors) {
                _push2(`<div${_scopeId}>`);
                if (((_a2 = unref(form)) == null ? void 0 : _a2.errors["services." + id + ".price"]) || ((_b = unref(form)) == null ? void 0 : _b.errors["services." + id + ".quantity"])) {
                  _push2(`<span class="block text-sm text-red-600"${_scopeId}> يجب التاكد من ملأ جميع البيانات بالشكل الصحيح </span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            });
            _push2(`<!--]--><!--[-->`);
            ssrRenderList(unref(form).extra_services, (formItem, index) => {
              var _a2, _b, _c;
              _push2(`<div${_scopeId}>${ssrInterpolate()} <div class="flex justify-end"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$3, {
                type: "button",
                class: "w-24 h-0 mb-4",
                icon: unref(mdiMinus),
                color: "danger",
                label: "Remove",
                onClick: ($event) => removeExtraServices(index)
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(_sfc_main$4, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$5, {
                      modelValue: formItem.name,
                      "onUpdate:modelValue": ($event) => formItem.name = $event,
                      placeholder: "الاســم"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$5, {
                        modelValue: formItem.name,
                        "onUpdate:modelValue": ($event) => formItem.name = $event,
                        placeholder: "الاســم"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$4, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$5, {
                      modelValue: formItem.price,
                      "onUpdate:modelValue": ($event) => formItem.price = $event,
                      placeholder: "السعر"
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_sfc_main$5, {
                      modelValue: formItem.quantity,
                      "onUpdate:modelValue": ($event) => formItem.quantity = $event,
                      placeholder: "الكمية"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$5, {
                        modelValue: formItem.price,
                        "onUpdate:modelValue": ($event) => formItem.price = $event,
                        placeholder: "السعر"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_sfc_main$5, {
                        modelValue: formItem.quantity,
                        "onUpdate:modelValue": ($event) => formItem.quantity = $event,
                        placeholder: "الكمية"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$6, null, null, _parent2, _scopeId));
              if (unref(form) && unref(form).errors) {
                _push2(`<div class="mb-5"${_scopeId}>`);
                if (((_a2 = unref(form)) == null ? void 0 : _a2.errors["extra_services." + index + ".name"]) || ((_b = unref(form)) == null ? void 0 : _b.errors["extra_services." + index + ".price"]) || ((_c = unref(form)) == null ? void 0 : _c.errors["extra_services." + index + ".quantity"])) {
                  _push2(`<span class="block text-sm text-red-600"${_scopeId}> يجب التاكد من ملأ جميع البيانات بالشكل الصحيح </span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            });
            _push2(`<!--]--><div class="flex justify-end"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              type: "button",
              icon: unref(mdiPlus),
              color: "info",
              label: "خدمات اضافية",
              onClick: addFormItem
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$6, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("label", { class: "block mb-2 font-bold" }, " Services "),
              (openBlock(true), createBlock(Fragment, null, renderList(unref(form).services, (service, id) => {
                var _a2, _b;
                return openBlock(), createBlock("div", {
                  key: id,
                  class: "mb-4"
                }, [
                  createVNode(_sfc_main$4, {
                    label: `اسم الخدمة: ${service.name}`
                  }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$5, {
                        modelValue: service.price,
                        "onUpdate:modelValue": ($event) => service.price = $event,
                        placeholder: "سعر المتر"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_sfc_main$5, {
                        modelValue: service.quantity,
                        "onUpdate:modelValue": ($event) => service.quantity = $event,
                        placeholder: "عدد الامتار"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1032, ["label"]),
                  createVNode(_sfc_main$6),
                  unref(form) && unref(form).errors ? (openBlock(), createBlock("div", { key: 0 }, [
                    ((_a2 = unref(form)) == null ? void 0 : _a2.errors["services." + id + ".price"]) || ((_b = unref(form)) == null ? void 0 : _b.errors["services." + id + ".quantity"]) ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "block text-sm text-red-600"
                    }, " يجب التاكد من ملأ جميع البيانات بالشكل الصحيح ")) : createCommentVNode("", true)
                  ])) : createCommentVNode("", true)
                ]);
              }), 128)),
              (openBlock(true), createBlock(Fragment, null, renderList(unref(form).extra_services, (formItem, index) => {
                var _a2, _b, _c;
                return openBlock(), createBlock("div", { key: index }, [
                  createTextVNode(toDisplayString() + " ", 1),
                  createVNode("div", { class: "flex justify-end" }, [
                    createVNode(_sfc_main$3, {
                      type: "button",
                      class: "w-24 h-0 mb-4",
                      icon: unref(mdiMinus),
                      color: "danger",
                      label: "Remove",
                      onClick: ($event) => removeExtraServices(index)
                    }, null, 8, ["icon", "onClick"])
                  ]),
                  createVNode(_sfc_main$4, null, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$5, {
                        modelValue: formItem.name,
                        "onUpdate:modelValue": ($event) => formItem.name = $event,
                        placeholder: "الاســم"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_sfc_main$4, null, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$5, {
                        modelValue: formItem.price,
                        "onUpdate:modelValue": ($event) => formItem.price = $event,
                        placeholder: "السعر"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_sfc_main$5, {
                        modelValue: formItem.quantity,
                        "onUpdate:modelValue": ($event) => formItem.quantity = $event,
                        placeholder: "الكمية"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_sfc_main$6),
                  unref(form) && unref(form).errors ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "mb-5"
                  }, [
                    ((_a2 = unref(form)) == null ? void 0 : _a2.errors["extra_services." + index + ".name"]) || ((_b = unref(form)) == null ? void 0 : _b.errors["extra_services." + index + ".price"]) || ((_c = unref(form)) == null ? void 0 : _c.errors["extra_services." + index + ".quantity"]) ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "block text-sm text-red-600"
                    }, " يجب التاكد من ملأ جميع البيانات بالشكل الصحيح ")) : createCommentVNode("", true)
                  ])) : createCommentVNode("", true)
                ]);
              }), 128)),
              createVNode("div", { class: "flex justify-end" }, [
                createVNode(_sfc_main$3, {
                  type: "button",
                  icon: unref(mdiPlus),
                  color: "info",
                  label: "خدمات اضافية",
                  onClick: addFormItem
                }, null, 8, ["icon"])
              ]),
              createVNode(_sfc_main$6)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Transactions/AddMoreTransactionsForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
