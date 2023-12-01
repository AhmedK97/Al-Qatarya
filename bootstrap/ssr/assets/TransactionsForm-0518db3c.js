import { onMounted, computed, reactive, watch, mergeProps, withCtx, createVNode, unref, openBlock, createBlock, toDisplayString, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import cloneDeep from "lodash/cloneDeep.js";
import { useForm, router } from "@inertiajs/vue3";
import { _ as _sfc_main$5 } from "./FormControl-9ac7bf53.js";
import "./InputError-6aeb8d97.js";
import { _ as _sfc_main$6 } from "./FormField-9bc258f4.js";
import { _ as _sfc_main$1, a as _sfc_main$4 } from "./BaseDivider-9c47c877.js";
import { S as SelectField } from "./SelectField-fffe6a40.js";
import { _ as _sfc_main$2 } from "./BaseButtons-ce2f1900.js";
import { _ as _sfc_main$3 } from "./BaseButton-89eb7a62.js";
import { e as eventBus } from "./eventBus-b891681f.js";
import Swal from "sweetalert2";
import vSelect from "vue-select";
import "pinia";
import "axios";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "laravel-vue-i18n";
import "tiny-emitter/instance.js";
const _sfc_main = {
  __name: "TransactionsForm",
  __ssrInlineRender: true,
  props: {
    transaction: {
      type: Object,
      default: () => {
      }
    },
    customers: {
      type: Array,
      default: () => {
      }
    },
    employees: {
      type: Array,
      default: () => {
      }
    },
    services: {
      type: Array,
      default: () => {
      }
    },
    projects: {
      type: Array,
      default: () => {
      }
    }
  },
  setup(__props) {
    const props = __props;
    onMounted(() => {
      eventBus.$on("openModal", (modalToOpen) => {
        if (modalToOpen === "transaction::create") {
          resetForm();
        }
      });
    });
    const isUpdate = computed(() => {
      if (!props.transaction) {
        return false;
      }
      return !!props.transaction.id;
    });
    const transaction = reactive(props.transaction || {});
    const form = useForm({
      customer_id: transaction.customer_id,
      employee_id: transaction.employee_id,
      status: transaction.status,
      address: transaction.address,
      times_to_pay: transaction.times_to_pay,
      service_id: transaction.service_id,
      project_id: transaction.project,
      services_id: transaction.services
    });
    const resetForm = () => {
      form.reset();
      Object.keys(form.errors).forEach((key) => {
        delete form.errors[key];
      });
    };
    const statues = [
      {
        id: "Pending",
        name: "Pending"
      },
      {
        id: "Paid",
        name: "Paid"
      }
    ];
    watch(
      () => cloneDeep(props),
      (newProps) => {
        if (!newProps.transaction) {
          return;
        }
        resetForm();
        Object.assign(transaction, newProps.transaction);
        form.customer_id = transaction.customer.id;
        form.employee_id = transaction.employee.id;
        form.status = transaction.status;
        form.address = transaction.address.address;
        form.times_to_pay = transaction.times_to_pay;
        form.service_id = transaction.service_id;
        form.project_id = transaction.project;
        form.services_id = transaction.services;
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
          route("update.transactions", transaction.id),
          form,
          Object.assign(sharedFormOptions, {
            onSuccess: () => {
              eventBus.$emit("closeModal", "transaction::update");
              Swal.fire({
                icon: "success",
                title: "Success",
                text: "Transition updated successfully",
                timer: 3e3,
                timerProgressBar: true
              });
            }
          })
        );
        return;
      }
      router.post(
        route("store.transactions"),
        form,
        Object.assign(sharedFormOptions, {
          onSuccess: () => {
            console.log(sharedFormOptions);
            resetForm();
            eventBus.$emit("closeModal", "transaction::create");
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Transaction created successfully",
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
            _push2(`<label class="block mb-2 font-bold"${_scopeId}> Project </label>`);
            _push2(ssrRenderComponent(unref(vSelect), {
              options: __props.projects,
              label: "title",
              modelValue: unref(form).project_id,
              "onUpdate:modelValue": ($event) => unref(form).project_id = $event,
              reduce: (option) => option.id
            }, null, _parent2, _scopeId));
            if (unref(form).errors.project_id) {
              _push2(`<span class="text-sm text-red-600"${_scopeId}>${ssrInterpolate(unref(form).errors.project_id)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_sfc_main$4, null, null, _parent2, _scopeId));
            if (isUpdate.value) {
              _push2(`<div${_scopeId}><label class="block mb-2 font-bold"${_scopeId}> Customer </label>`);
              _push2(ssrRenderComponent(unref(vSelect), {
                options: __props.customers,
                label: "name",
                modelValue: unref(form).customer_id,
                "onUpdate:modelValue": ($event) => unref(form).customer_id = $event,
                reduce: (option) => option.id
              }, null, _parent2, _scopeId));
              if (unref(form).errors.customer_id) {
                _push2(`<span class="text-sm text-red-600"${_scopeId}>${ssrInterpolate(unref(form).errors.customer_id)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(_sfc_main$4, null, null, _parent2, _scopeId));
              _push2(`<label class="block mb-2 font-bold"${_scopeId}> Employee </label>`);
              _push2(ssrRenderComponent(unref(vSelect), {
                options: __props.employees,
                label: "name",
                modelValue: unref(form).employee_id,
                "onUpdate:modelValue": ($event) => unref(form).employee_id = $event,
                reduce: (option) => option.id
              }, null, _parent2, _scopeId));
              if (unref(form).errors.employee_id) {
                _push2(`<span class="text-sm text-red-600"${_scopeId}>${ssrInterpolate(unref(form).errors.employee_id)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(_sfc_main$4, null, null, _parent2, _scopeId));
              _push2(`<label class="block mb-2 font-bold"${_scopeId}> Services </label>`);
              _push2(ssrRenderComponent(unref(vSelect), {
                options: __props.services,
                label: "name",
                modelValue: unref(form).services_id,
                "onUpdate:modelValue": ($event) => unref(form).services_id = $event,
                reduce: (option) => option,
                multiple: ""
              }, null, _parent2, _scopeId));
              if (unref(form).errors.services_id) {
                _push2(`<span class="text-sm text-red-600"${_scopeId}>${ssrInterpolate(unref(form).errors.services_id)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(_sfc_main$4, null, null, _parent2, _scopeId));
              _push2(`<label class="block mb-2 font-bold"${_scopeId}> Times to pay </label>`);
              _push2(ssrRenderComponent(_sfc_main$5, {
                errorMessage: unref(form).errors.times_to_pay,
                modelValue: unref(form).times_to_pay,
                "onUpdate:modelValue": ($event) => unref(form).times_to_pay = $event
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$4, null, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$6, { label: "Status" }, {
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
              _push2(ssrRenderComponent(_sfc_main$4, null, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$6, { label: "address" }, {
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
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("label", { class: "block mb-2 font-bold" }, " Project "),
              createVNode(unref(vSelect), {
                options: __props.projects,
                label: "title",
                modelValue: unref(form).project_id,
                "onUpdate:modelValue": ($event) => unref(form).project_id = $event,
                reduce: (option) => option.id
              }, null, 8, ["options", "modelValue", "onUpdate:modelValue", "reduce"]),
              unref(form).errors.project_id ? (openBlock(), createBlock("span", {
                key: 0,
                class: "text-sm text-red-600"
              }, toDisplayString(unref(form).errors.project_id), 1)) : createCommentVNode("", true),
              createVNode(_sfc_main$4),
              isUpdate.value ? (openBlock(), createBlock("div", { key: 1 }, [
                createVNode("label", { class: "block mb-2 font-bold" }, " Customer "),
                createVNode(unref(vSelect), {
                  options: __props.customers,
                  label: "name",
                  modelValue: unref(form).customer_id,
                  "onUpdate:modelValue": ($event) => unref(form).customer_id = $event,
                  reduce: (option) => option.id
                }, null, 8, ["options", "modelValue", "onUpdate:modelValue", "reduce"]),
                unref(form).errors.customer_id ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: "text-sm text-red-600"
                }, toDisplayString(unref(form).errors.customer_id), 1)) : createCommentVNode("", true),
                createVNode(_sfc_main$4),
                createVNode("label", { class: "block mb-2 font-bold" }, " Employee "),
                createVNode(unref(vSelect), {
                  options: __props.employees,
                  label: "name",
                  modelValue: unref(form).employee_id,
                  "onUpdate:modelValue": ($event) => unref(form).employee_id = $event,
                  reduce: (option) => option.id
                }, null, 8, ["options", "modelValue", "onUpdate:modelValue", "reduce"]),
                unref(form).errors.employee_id ? (openBlock(), createBlock("span", {
                  key: 1,
                  class: "text-sm text-red-600"
                }, toDisplayString(unref(form).errors.employee_id), 1)) : createCommentVNode("", true),
                createVNode(_sfc_main$4),
                createVNode("label", { class: "block mb-2 font-bold" }, " Services "),
                createVNode(unref(vSelect), {
                  options: __props.services,
                  label: "name",
                  modelValue: unref(form).services_id,
                  "onUpdate:modelValue": ($event) => unref(form).services_id = $event,
                  reduce: (option) => option,
                  multiple: ""
                }, null, 8, ["options", "modelValue", "onUpdate:modelValue", "reduce"]),
                unref(form).errors.services_id ? (openBlock(), createBlock("span", {
                  key: 2,
                  class: "text-sm text-red-600"
                }, toDisplayString(unref(form).errors.services_id), 1)) : createCommentVNode("", true),
                createVNode(_sfc_main$4),
                createVNode("label", { class: "block mb-2 font-bold" }, " Times to pay "),
                createVNode(_sfc_main$5, {
                  errorMessage: unref(form).errors.times_to_pay,
                  modelValue: unref(form).times_to_pay,
                  "onUpdate:modelValue": ($event) => unref(form).times_to_pay = $event
                }, null, 8, ["errorMessage", "modelValue", "onUpdate:modelValue"]),
                createVNode(_sfc_main$4),
                createVNode(_sfc_main$6, { label: "Status" }, {
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
                createVNode(_sfc_main$4),
                createVNode(_sfc_main$6, { label: "address" }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$5, {
                      errorMessage: unref(form).errors.address,
                      modelValue: unref(form).address,
                      "onUpdate:modelValue": ($event) => unref(form).address = $event
                    }, null, 8, ["errorMessage", "modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                })
              ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Transactions/TransactionsForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
