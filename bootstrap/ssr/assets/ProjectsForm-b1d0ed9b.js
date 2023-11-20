import { useSSRContext, ref, computed, watch, onMounted, reactive, resolveComponent, mergeProps, withCtx, createVNode, unref, withDirectives, vModelText, openBlock, createBlock, toDisplayString, createCommentVNode } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import cloneDeep from "lodash/cloneDeep.js";
import { useForm, router } from "@inertiajs/vue3";
import { _ as _sfc_main$7 } from "./FormControl-9ac7bf53.js";
import { _ as _sfc_main$2 } from "./InputError-6aeb8d97.js";
import { _ as _sfc_main$6 } from "./FormField-9bc258f4.js";
import { _ as _sfc_main$3, a as _sfc_main$8 } from "./BaseDivider-9c47c877.js";
import { S as SelectField } from "./SelectField-fffe6a40.js";
import { trans } from "laravel-vue-i18n";
import { _ as _sfc_main$4 } from "./BaseButtons-ce2f1900.js";
import { _ as _sfc_main$5 } from "./BaseButton-89eb7a62.js";
import { e as eventBus } from "./eventBus-b891681f.js";
import Swal from "sweetalert2";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "@ckeditor/ckeditor5-vue";
import vSelect from "vue-select";
import "pinia";
import "axios";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "tiny-emitter/instance.js";
const _sfc_main$1 = {
  inheritAttrs: false,
  components: {
    InputError: _sfc_main$2
  },
  props: {
    modelValue: [String, Number, Boolean, null],
    errorMessage: String,
    items: Array,
    itemLabel: {
      type: String,
      default: "name"
    },
    itemValue: {
      type: String,
      default: "id"
    },
    translated: {
      type: Boolean,
      default: false
    },
    currentVal: {
      default: ""
    }
  },
  emits: ["update:selectedIdValue"],
  setup(props, {
    emit,
    slots
  }) {
    const selectedValue = ref(props.currentVal);
    const searchTerm = ref(props.currentVal);
    const showAutocomplete = ref(false);
    const getItemLabel = (item) => {
      const label = item[props.itemLabel];
      return props.translated && label ? trans(label) : label;
    };
    const getItemValue = (item) => item[props.itemValue];
    const handleInput = () => {
      showAutocomplete.value = true;
    };
    const selectItem = (item) => {
      selectedValue.value = item.name;
      searchTerm.value = item.name;
      emit("update:selectedIdValue", item);
      showAutocomplete.value = false;
    };
    const filteredItems = computed(() => {
      return searchTerm.value && typeof searchTerm.value === "string" ? props.items.filter(
        (item) => getItemLabel(item).toLowerCase().includes(searchTerm.value.toLowerCase())
      ) : [];
    });
    const hasLabelSlot = () => !!slots.label;
    watch(
      () => props.currentVal,
      (newVal) => {
        selectedValue.value = newVal;
        searchTerm.value = newVal;
      }
    );
    return {
      getItemLabel,
      getItemValue,
      selectItem,
      selectedValue,
      hasLabelSlot,
      searchTerm,
      showAutocomplete,
      filteredItems,
      handleInput
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/AutoCompleteField.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "ProjectsForm",
  __ssrInlineRender: true,
  props: {
    project: {
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
    }
  },
  setup(__props) {
    const props = __props;
    const editor = ClassicEditor;
    const editorConfig = {};
    onMounted(() => {
      eventBus.$on("openModal", (modalToOpen) => {
        if (modalToOpen === "project::create") {
          resetForm();
        }
      });
    });
    const isUpdate = computed(() => {
      if (!props.project) {
        return false;
      }
      return !!props.project.id;
    });
    const project = reactive(props.project || {});
    const form = useForm({
      title: project.title,
      company: project.company,
      customer_id: project.customer_id,
      employee_id: project.employee_id,
      space_area: project.space_area,
      status: project.status,
      project_date: project.project_date,
      address: project.address,
      notes: project.notes,
      description: project.description,
      services_id: project.services_id
    });
    const resetForm = () => {
      form.reset();
      Object.keys(form.errors).forEach((key) => {
        delete form.errors[key];
      });
    };
    const statues = [
      {
        id: "pending",
        name: "Pending"
      },
      {
        id: "in_progress",
        name: "In Progress"
      },
      {
        id: "finished",
        name: "Finished"
      },
      {
        id: "canceled",
        name: "Canceled"
      }
    ];
    const companies = [
      {
        "id": "othman",
        "name": "othman"
      },
      {
        "id": "qatarya",
        "name": "qatarya"
      }
    ];
    watch(
      () => cloneDeep(props),
      (newProps) => {
        if (!newProps.project) {
          return;
        }
        resetForm();
        Object.assign(project, newProps.project);
        form.title = newProps.project.title;
        form.company = newProps.project.company;
        form.customer_id = newProps.project.customer_id;
        form.employee_id = newProps.project.employee_id;
        form.space_area = newProps.project.space_area;
        form.status = newProps.project.status;
        form.project_date = newProps.project.project_date;
        form.address = newProps.project.address;
        form.notes = newProps.project.notes;
        form.description = newProps.project.description;
        form.services_id = newProps.project.services_id;
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
          route("update.projects", project.id),
          form,
          Object.assign(sharedFormOptions, {
            onSuccess: () => {
              eventBus.$emit("closeModal", "project::update");
              Swal.fire({
                icon: "success",
                title: "Success",
                text: "Project updated successfully",
                timer: 3e3,
                timerProgressBar: true
              });
            }
          })
        );
        return;
      }
      router.post(
        route("store.projects", form),
        Object.assign(sharedFormOptions, {
          onSuccess: () => {
            resetForm();
            eventBus.$emit("closeModal", "project::create");
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Project created successfully",
              timer: 3e3,
              timerProgressBar: true
            });
          }
        })
      );
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ckeditor = resolveComponent("ckeditor");
      _push(ssrRenderComponent(_sfc_main$3, mergeProps({
        form: "",
        onSubmit: submit
      }, _attrs), {
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$4, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$5, {
                    onClick: submit,
                    type: "submit",
                    color: "info",
                    label: "Submit"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$5, {
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
              createVNode(_sfc_main$4, null, {
                default: withCtx(() => [
                  createVNode(_sfc_main$5, {
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
            _push2(ssrRenderComponent(_sfc_main$6, { label: "Name" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$7, {
                    errorMessage: unref(form).errors.title,
                    modelValue: unref(form).title,
                    "onUpdate:modelValue": ($event) => unref(form).title = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$7, {
                      errorMessage: unref(form).errors.title,
                      modelValue: unref(form).title,
                      "onUpdate:modelValue": ($event) => unref(form).title = $event
                    }, null, 8, ["errorMessage", "modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$8, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, { label: "Company" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(SelectField, {
                    errorMessage: unref(form).errors.company,
                    class: "flex w-full py-2 border rounded-md border-fieldgray rtl:text-right placeholder:text-black",
                    modelValue: unref(form).company,
                    "onUpdate:modelValue": ($event) => unref(form).company = $event,
                    items: companies
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(SelectField, {
                      errorMessage: unref(form).errors.company,
                      class: "flex w-full py-2 border rounded-md border-fieldgray rtl:text-right placeholder:text-black",
                      modelValue: unref(form).company,
                      "onUpdate:modelValue": ($event) => unref(form).company = $event,
                      items: companies
                    }, null, 8, ["errorMessage", "modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$8, null, null, _parent2, _scopeId));
            _push2(`<label class="block mb-2 font-bold"${_scopeId}> Customer </label>`);
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
            _push2(ssrRenderComponent(_sfc_main$8, null, null, _parent2, _scopeId));
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
            _push2(ssrRenderComponent(_sfc_main$8, null, null, _parent2, _scopeId));
            _push2(`<label class="block mb-2 font-bold"${_scopeId}> Services </label>`);
            _push2(ssrRenderComponent(unref(vSelect), {
              options: __props.services,
              label: "name",
              modelValue: unref(form).services_id,
              "onUpdate:modelValue": ($event) => unref(form).services_id = $event,
              reduce: (option) => option.id,
              multiple: ""
            }, null, _parent2, _scopeId));
            if (unref(form).errors.services_id) {
              _push2(`<span class="text-sm text-red-600"${_scopeId}>${ssrInterpolate(unref(form).errors.services_id)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_sfc_main$8, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, { label: "Space Area" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$7, {
                    errorMessage: unref(form).errors.space_area,
                    modelValue: unref(form).space_area,
                    "onUpdate:modelValue": ($event) => unref(form).space_area = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$7, {
                      errorMessage: unref(form).errors.space_area,
                      modelValue: unref(form).space_area,
                      "onUpdate:modelValue": ($event) => unref(form).space_area = $event
                    }, null, 8, ["errorMessage", "modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$8, null, null, _parent2, _scopeId));
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
            _push2(ssrRenderComponent(_sfc_main$8, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, { label: "Project Date" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<input type="date" class="flex w-full py-2 border rounded-md border-fieldgray rtl:text-right placeholder:text-black"${ssrRenderAttr("value", unref(form).project_date)}${ssrRenderAttr("errorMessage", unref(form).errors.project_date)}${_scopeId2}>`);
                } else {
                  return [
                    withDirectives(createVNode("input", {
                      type: "date",
                      class: "flex w-full py-2 border rounded-md border-fieldgray rtl:text-right placeholder:text-black",
                      "onUpdate:modelValue": ($event) => unref(form).project_date = $event,
                      errorMessage: unref(form).errors.project_date
                    }, null, 8, ["onUpdate:modelValue", "errorMessage"]), [
                      [vModelText, unref(form).project_date]
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$8, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, { label: "Address" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$7, {
                    errorMessage: unref(form).errors.address,
                    modelValue: unref(form).address,
                    "onUpdate:modelValue": ($event) => unref(form).address = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$7, {
                      errorMessage: unref(form).errors.address,
                      modelValue: unref(form).address,
                      "onUpdate:modelValue": ($event) => unref(form).address = $event
                    }, null, 8, ["errorMessage", "modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$8, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, { label: "Notes" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$7, {
                    type: "textarea",
                    errorMessage: unref(form).errors.notes,
                    modelValue: unref(form).notes,
                    "onUpdate:modelValue": ($event) => unref(form).notes = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$7, {
                      type: "textarea",
                      errorMessage: unref(form).errors.notes,
                      modelValue: unref(form).notes,
                      "onUpdate:modelValue": ($event) => unref(form).notes = $event
                    }, null, 8, ["errorMessage", "modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$8, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, { label: "Description" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div id="app"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ckeditor, {
                    editor: unref(editor),
                    modelValue: unref(form).description,
                    "onUpdate:modelValue": ($event) => unref(form).description = $event,
                    config: editorConfig
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { id: "app" }, [
                      createVNode(_component_ckeditor, {
                        editor: unref(editor),
                        modelValue: unref(form).description,
                        "onUpdate:modelValue": ($event) => unref(form).description = $event,
                        config: editorConfig
                      }, null, 8, ["editor", "modelValue", "onUpdate:modelValue"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$6, { label: "Name" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$7, {
                    errorMessage: unref(form).errors.title,
                    modelValue: unref(form).title,
                    "onUpdate:modelValue": ($event) => unref(form).title = $event
                  }, null, 8, ["errorMessage", "modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_sfc_main$8),
              createVNode(_sfc_main$6, { label: "Company" }, {
                default: withCtx(() => [
                  createVNode(SelectField, {
                    errorMessage: unref(form).errors.company,
                    class: "flex w-full py-2 border rounded-md border-fieldgray rtl:text-right placeholder:text-black",
                    modelValue: unref(form).company,
                    "onUpdate:modelValue": ($event) => unref(form).company = $event,
                    items: companies
                  }, null, 8, ["errorMessage", "modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_sfc_main$8),
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
              createVNode(_sfc_main$8),
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
              createVNode(_sfc_main$8),
              createVNode("label", { class: "block mb-2 font-bold" }, " Services "),
              createVNode(unref(vSelect), {
                options: __props.services,
                label: "name",
                modelValue: unref(form).services_id,
                "onUpdate:modelValue": ($event) => unref(form).services_id = $event,
                reduce: (option) => option.id,
                multiple: ""
              }, null, 8, ["options", "modelValue", "onUpdate:modelValue", "reduce"]),
              unref(form).errors.services_id ? (openBlock(), createBlock("span", {
                key: 2,
                class: "text-sm text-red-600"
              }, toDisplayString(unref(form).errors.services_id), 1)) : createCommentVNode("", true),
              createVNode(_sfc_main$8),
              createVNode(_sfc_main$6, { label: "Space Area" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$7, {
                    errorMessage: unref(form).errors.space_area,
                    modelValue: unref(form).space_area,
                    "onUpdate:modelValue": ($event) => unref(form).space_area = $event
                  }, null, 8, ["errorMessage", "modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_sfc_main$8),
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
              createVNode(_sfc_main$8),
              createVNode(_sfc_main$6, { label: "Project Date" }, {
                default: withCtx(() => [
                  withDirectives(createVNode("input", {
                    type: "date",
                    class: "flex w-full py-2 border rounded-md border-fieldgray rtl:text-right placeholder:text-black",
                    "onUpdate:modelValue": ($event) => unref(form).project_date = $event,
                    errorMessage: unref(form).errors.project_date
                  }, null, 8, ["onUpdate:modelValue", "errorMessage"]), [
                    [vModelText, unref(form).project_date]
                  ])
                ]),
                _: 1
              }),
              createVNode(_sfc_main$8),
              createVNode(_sfc_main$6, { label: "Address" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$7, {
                    errorMessage: unref(form).errors.address,
                    modelValue: unref(form).address,
                    "onUpdate:modelValue": ($event) => unref(form).address = $event
                  }, null, 8, ["errorMessage", "modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_sfc_main$8),
              createVNode(_sfc_main$6, { label: "Notes" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$7, {
                    type: "textarea",
                    errorMessage: unref(form).errors.notes,
                    modelValue: unref(form).notes,
                    "onUpdate:modelValue": ($event) => unref(form).notes = $event
                  }, null, 8, ["errorMessage", "modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_sfc_main$8),
              createVNode(_sfc_main$6, { label: "Description" }, {
                default: withCtx(() => [
                  createVNode("div", { id: "app" }, [
                    createVNode(_component_ckeditor, {
                      editor: unref(editor),
                      modelValue: unref(form).description,
                      "onUpdate:modelValue": ($event) => unref(form).description = $event,
                      config: editorConfig
                    }, null, 8, ["editor", "modelValue", "onUpdate:modelValue"])
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Projects/ProjectsForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
