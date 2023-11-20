import { onMounted, computed, reactive, watch, mergeProps, withCtx, createVNode, unref, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import cloneDeep from "lodash/cloneDeep.js";
import { useForm, router } from "@inertiajs/vue3";
import { _ as _sfc_main$5 } from "./FormControl-9ac7bf53.js";
import "./InputError-6aeb8d97.js";
import { _ as _sfc_main$4 } from "./FormField-9bc258f4.js";
import { _ as _sfc_main$1, a as _sfc_main$6 } from "./BaseDivider-9c47c877.js";
import { S as SelectField } from "./SelectField-fffe6a40.js";
import { _ as _sfc_main$2 } from "./BaseButtons-ce2f1900.js";
import { _ as _sfc_main$3 } from "./BaseButton-89eb7a62.js";
import { e as eventBus } from "./eventBus-b891681f.js";
import Swal from "sweetalert2";
import "pinia";
import "axios";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "laravel-vue-i18n";
import "tiny-emitter/instance.js";
const _sfc_main = {
  __name: "EmployeesForm",
  __ssrInlineRender: true,
  props: {
    employee: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    const props = __props;
    onMounted(() => {
      eventBus.$on("openModal", (modalToOpen) => {
        if (modalToOpen === "employee::create") {
          resetForm();
        }
      });
    });
    const isUpdate = computed(() => {
      if (!props.employee) {
        return false;
      }
      return !!props.employee.id;
    });
    const employee = reactive(props.employee || {});
    const form = useForm({
      name: employee.name,
      phone: employee.phone,
      address: employee.address,
      status: employee.status,
      about: employee.about,
      password: ""
    });
    const resetForm = () => {
      form.reset();
      Object.keys(form.errors).forEach((key) => {
        delete form.errors[key];
      });
    };
    const statues = [
      {
        id: "Active",
        name: "Active"
      },
      {
        id: "Inactive",
        name: "Inactive"
      }
    ];
    watch(
      () => cloneDeep(props),
      (newProps) => {
        if (!newProps.employee) {
          return;
        }
        resetForm();
        Object.assign(employee, newProps.employee);
        form.name = newProps.employee.name;
        form.phone = newProps.employee.phone;
        form.address = newProps.employee.address;
        form.status = newProps.employee.status;
        form.about = newProps.employee.about;
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
      if (isUpdate.value) {
        router.put(
          route("update.employees", employee.id),
          form,
          Object.assign(sharedFormOptions, {
            onSuccess: () => {
              eventBus.$emit("closeModal", "employee::update");
              Swal.fire({
                icon: "success",
                title: "Success",
                text: "Employees updated successfully",
                timer: 3e3,
                timerProgressBar: true
              });
            }
          })
        );
        return;
      }
      router.post(
        route("store.employees"),
        form,
        Object.assign(sharedFormOptions, {
          onSuccess: () => {
            resetForm();
            eventBus.$emit("closeModal", "employee::create");
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Employees created successfully",
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
        onSubmit: submit
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
            _push2(ssrRenderComponent(_sfc_main$4, { label: "Name" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$5, {
                    errorMessage: unref(form).errors.name,
                    modelValue: unref(form).name,
                    "onUpdate:modelValue": ($event) => unref(form).name = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$5, {
                      errorMessage: unref(form).errors.name,
                      modelValue: unref(form).name,
                      "onUpdate:modelValue": ($event) => unref(form).name = $event
                    }, null, 8, ["errorMessage", "modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, { label: "Phone" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$5, {
                    errorMessage: unref(form).errors.phone,
                    modelValue: unref(form).phone,
                    "onUpdate:modelValue": ($event) => unref(form).phone = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$5, {
                      errorMessage: unref(form).errors.phone,
                      modelValue: unref(form).phone,
                      "onUpdate:modelValue": ($event) => unref(form).phone = $event
                    }, null, 8, ["errorMessage", "modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, { label: "Status" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(SelectField, {
                    errorMessage: unref(form).errors.status,
                    class: "flex w-full py-2 border rounded-md border-fieldgray rtl:text-right placeholder:text-black",
                    modelValue: unref(form).status,
                    "onUpdate:modelValue": ($event) => unref(form).status = $event,
                    items: statues
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(SelectField, {
                      errorMessage: unref(form).errors.status,
                      class: "flex w-full py-2 border rounded-md border-fieldgray rtl:text-right placeholder:text-black",
                      modelValue: unref(form).status,
                      "onUpdate:modelValue": ($event) => unref(form).status = $event,
                      items: statues
                    }, null, 8, ["errorMessage", "modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, { label: "address" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$5, {
                    errorMessage: unref(form).errors.address,
                    modelValue: unref(form).address,
                    "onUpdate:modelValue": ($event) => unref(form).address = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$5, {
                      errorMessage: unref(form).errors.address,
                      modelValue: unref(form).address,
                      "onUpdate:modelValue": ($event) => unref(form).address = $event
                    }, null, 8, ["errorMessage", "modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, { label: "About" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$5, {
                    errorMessage: unref(form).errors.about,
                    modelValue: unref(form).about,
                    "onUpdate:modelValue": ($event) => unref(form).about = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$5, {
                      errorMessage: unref(form).errors.about,
                      modelValue: unref(form).about,
                      "onUpdate:modelValue": ($event) => unref(form).about = $event
                    }, null, 8, ["errorMessage", "modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (!isUpdate.value) {
              _push2(ssrRenderComponent(_sfc_main$6, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (!isUpdate.value) {
              _push2(ssrRenderComponent(_sfc_main$4, { label: "Password" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$5, {
                      type: "password",
                      errorMessage: unref(form).errors.password,
                      modelValue: unref(form).password,
                      "onUpdate:modelValue": ($event) => unref(form).password = $event
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$5, {
                        type: "password",
                        errorMessage: unref(form).errors.password,
                        modelValue: unref(form).password,
                        "onUpdate:modelValue": ($event) => unref(form).password = $event
                      }, null, 8, ["errorMessage", "modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_sfc_main$4, { label: "Name" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$5, {
                    errorMessage: unref(form).errors.name,
                    modelValue: unref(form).name,
                    "onUpdate:modelValue": ($event) => unref(form).name = $event
                  }, null, 8, ["errorMessage", "modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_sfc_main$6),
              createVNode(_sfc_main$4, { label: "Phone" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$5, {
                    errorMessage: unref(form).errors.phone,
                    modelValue: unref(form).phone,
                    "onUpdate:modelValue": ($event) => unref(form).phone = $event
                  }, null, 8, ["errorMessage", "modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_sfc_main$6),
              createVNode(_sfc_main$4, { label: "Status" }, {
                default: withCtx(() => [
                  createVNode(SelectField, {
                    errorMessage: unref(form).errors.status,
                    class: "flex w-full py-2 border rounded-md border-fieldgray rtl:text-right placeholder:text-black",
                    modelValue: unref(form).status,
                    "onUpdate:modelValue": ($event) => unref(form).status = $event,
                    items: statues
                  }, null, 8, ["errorMessage", "modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_sfc_main$6),
              createVNode(_sfc_main$4, { label: "address" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$5, {
                    errorMessage: unref(form).errors.address,
                    modelValue: unref(form).address,
                    "onUpdate:modelValue": ($event) => unref(form).address = $event
                  }, null, 8, ["errorMessage", "modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_sfc_main$6),
              createVNode(_sfc_main$4, { label: "About" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$5, {
                    errorMessage: unref(form).errors.about,
                    modelValue: unref(form).about,
                    "onUpdate:modelValue": ($event) => unref(form).about = $event
                  }, null, 8, ["errorMessage", "modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              !isUpdate.value ? (openBlock(), createBlock(_sfc_main$6, { key: 0 })) : createCommentVNode("", true),
              !isUpdate.value ? (openBlock(), createBlock(_sfc_main$4, {
                key: 1,
                label: "Password"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$5, {
                    type: "password",
                    errorMessage: unref(form).errors.password,
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event
                  }, null, 8, ["errorMessage", "modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              })) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Employee/EmployeesForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
