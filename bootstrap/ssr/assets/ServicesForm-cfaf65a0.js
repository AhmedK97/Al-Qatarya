import { computed, createVNode, resolveDynamicComponent, mergeProps, withCtx, openBlock, createBlock, createCommentVNode, toDisplayString, useSSRContext, ref, watch, onMounted, reactive, unref, Fragment, renderList } from "vue";
import { ssrRenderVNode, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderAttrs, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import cloneDeep from "lodash/cloneDeep.js";
import { Link, useForm, router } from "@inertiajs/vue3";
import { _ as _sfc_main$9 } from "./FormControl-9ac7bf53.js";
import "./InputError-6aeb8d97.js";
import { _ as _sfc_main$8 } from "./FormField-9bc258f4.js";
import { _ as _sfc_main$5, a as _sfc_main$a } from "./BaseDivider-9c47c877.js";
import { S as SelectField } from "./SelectField-fffe6a40.js";
import { _ as _sfc_main$6 } from "./BaseButtons-ce2f1900.js";
import { g as getButtonColor, a as _sfc_main$4, _ as _sfc_main$7 } from "./BaseButton-89eb7a62.js";
import { mdiUpload, mdiMinus, mdiPlus } from "@mdi/js";
import { e as eventBus } from "./eventBus-b891681f.js";
import Swal from "sweetalert2";
import "pinia";
import "axios";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "laravel-vue-i18n";
import "tiny-emitter/instance.js";
const _sfc_main$3 = {
  __name: "BaseButton",
  __ssrInlineRender: true,
  props: {
    label: {
      type: [String, Number],
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    iconSize: {
      type: [String, Number],
      default: null
    },
    href: {
      type: String,
      default: null
    },
    target: {
      type: String,
      default: null
    },
    routeName: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: null
    },
    color: {
      type: String,
      default: "white"
    },
    as: {
      type: String,
      default: null
    },
    renderLabelAsHtml: {
      type: Boolean,
      default: false
    },
    small: Boolean,
    outline: Boolean,
    active: Boolean,
    disabled: {
      type: Boolean,
      default: false
    },
    roundedFull: Boolean,
    loading: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const is = computed(() => {
      if (props.as && props.as === "Link") {
        return Link;
      }
      if (props.as) {
        return props.as;
      }
      if (props.routeName) {
        return Link;
      }
      if (props.href) {
        return "a";
      }
      return "button";
    });
    const computedType = computed(() => {
      if (is.value === "button") {
        return props.type ?? "button";
      }
      return null;
    });
    const labelClass = computed(
      () => props.small && props.icon ? "px-1" : "px-2"
    );
    const isDisabled = computed(() => props.disabled || props.loading);
    const componentClass = computed(() => {
      const base = [
        "inline-flex",
        "justify-center",
        "items-center",
        "whitespace-nowrap",
        "focus:outline-none",
        "transition-colors",
        "focus:ring",
        "duration-150",
        "border",
        isDisabled.value ? "cursor-not-allowed" : "cursor-pointer",
        props.roundedFull ? "rounded-full" : "rounded",
        getButtonColor(
          props.color,
          props.outline,
          !isDisabled.value,
          props.active
        )
      ];
      if (!props.label && props.icon) {
        base.push("p-1");
      } else if (props.small) {
        base.push("text-sm", props.roundedFull ? "px-3 py-1" : "p-1");
      } else {
        base.push("py-2", props.roundedFull ? "px-6" : "px-3");
      }
      if (isDisabled.value) {
        base.push(props.outline ? "opacity-50" : "opacity-70");
      }
      return base;
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(is.value), mergeProps(_ctx.$attrs, {
        class: componentClass.value,
        href: __props.routeName ? _ctx.route(__props.routeName) : __props.href,
        type: computedType.value,
        target: __props.target,
        disabled: __props.disabled
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.icon) {
              _push2(ssrRenderComponent(_sfc_main$4, {
                path: __props.icon,
                size: __props.iconSize
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (__props.label && !__props.renderLabelAsHtml) {
              _push2(`<span class="${ssrRenderClass(labelClass.value)}"${_scopeId}>${ssrInterpolate(__props.label)}</span>`);
            } else if (__props.label && __props.renderLabelAsHtml) {
              _push2(`<span class="${ssrRenderClass(labelClass.value)}"${_scopeId}>${__props.label}</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              __props.icon ? (openBlock(), createBlock(_sfc_main$4, {
                key: 0,
                path: __props.icon,
                size: __props.iconSize
              }, null, 8, ["path", "size"])) : createCommentVNode("", true),
              __props.label && !__props.renderLabelAsHtml ? (openBlock(), createBlock("span", {
                key: 1,
                class: labelClass.value
              }, toDisplayString(__props.label), 3)) : __props.label && __props.renderLabelAsHtml ? (openBlock(), createBlock("span", {
                key: 2,
                innerHTML: __props.label,
                class: labelClass.value
              }, null, 10, ["innerHTML"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }), _parent);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Admin/BaseButton.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "InputError",
  __ssrInlineRender: true,
  props: {
    message: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: __props.message ? null : { display: "none" }
      }, _attrs))}><p class="text-sm text-red-600">${ssrInterpolate(__props.message)}</p></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/InputError.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "FormFilePicker",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: [Object, File, Array],
      default: null
    },
    label: {
      type: String,
      default: null
    },
    errorMessage: {
      type: String
    },
    icon: {
      type: String,
      default: mdiUpload
    },
    accept: {
      type: String,
      default: null
    },
    color: {
      type: String,
      default: "info"
    },
    isRoundIcon: Boolean
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const root = ref(null);
    const file = ref(props.modelValue);
    const showFilename = computed(() => !props.isRoundIcon && file.value);
    const modelValueProp = computed(() => props.modelValue);
    watch(modelValueProp, (value) => {
      file.value = value;
      if (!value) {
        root.value.input.value = null;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="relative flex items-stretch justify-start"><label class="inline-flex">`);
      _push(ssrRenderComponent(_sfc_main$3, {
        as: "a",
        class: { "w-12 h-12": __props.isRoundIcon, "rounded-r-none": showFilename.value },
        "icon-size": __props.isRoundIcon ? 24 : void 0,
        label: __props.isRoundIcon ? null : __props.label,
        icon: __props.icon,
        color: __props.color,
        "rounded-full": __props.isRoundIcon
      }, null, _parent));
      _push(`<input type="file" class="absolute top-0 left-0 w-full h-full outline-none opacity-0 cursor-pointer -z-1"${ssrRenderAttr("accept", __props.accept)}></label>`);
      if (showFilename.value) {
        _push(`<div class="px-4 py-2 bg-gray-100 border border-gray-200 rounded-r dark:bg-slate-800 dark:border-slate-700"><span class="text-ellipsis line-clamp-1">${ssrInterpolate(file.value.name)}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        class: "mt-2",
        style: __props.errorMessage ? null : { display: "none" },
        message: __props.errorMessage
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/FormFilePicker.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "ServicesForm",
  __ssrInlineRender: true,
  props: {
    service: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    const props = __props;
    onMounted(() => {
      eventBus.$on("openModal", (modalToOpen) => {
        if (modalToOpen === "service::create") {
          resetForm();
        }
      });
    });
    const isUpdate = computed(() => {
      if (!props.service) {
        return false;
      }
      return !!props.service.id;
    });
    const service = reactive(props.service || {});
    const formItems = reactive([{
      title: "",
      description: ""
    }]);
    const addFormItem = () => {
      formItems.push({
        title: "",
        description: ""
      });
    };
    const addFormItemUpdate = () => {
      service.additional_info.push({
        title: "",
        description: ""
      });
    };
    watch(formItems, (filledFilters) => {
      form.additional_info = filledFilters;
    });
    const form = useForm({
      name: service.name,
      company_name: service.company_name,
      additional_info: isUpdate.value == true ? service.additional_info : formItems,
      files: null,
      lang: service.lang
    });
    const resetForm = () => {
      form.reset();
      Object.keys(form.errors).forEach((key) => {
        delete form.errors[key];
      });
    };
    const companies = [
      {
        id: "qatarya",
        name: "qatarya"
      },
      {
        id: "othman",
        name: "othman"
      }
    ];
    const lang = [
      {
        id: "en",
        name: "English"
      },
      {
        id: "ar",
        name: "Arabic"
      }
    ];
    watch(
      () => cloneDeep(props),
      (newProps) => {
        if (!newProps.service) {
          return;
        }
        resetForm();
        Object.assign(service, newProps.service);
        form.name = newProps.service.name;
        form.company_name = newProps.service.company_name;
        form.additional_info = newProps.service.additional_info;
        form.lang = newProps.service.lang;
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
        router.post(
          route("update.services", service.id),
          form,
          Object.assign(sharedFormOptions, {
            onSuccess: () => {
              eventBus.$emit("closeModal", "service::update");
              Swal.fire({
                icon: "success",
                title: "Success",
                text: "Services updated successfully",
                timer: 3e3,
                timerProgressBar: true
              }).then(() => {
                form.files = null;
              });
            }
          })
        );
        return;
      }
      router.post(
        route("store.services"),
        form,
        Object.assign(sharedFormOptions, {
          onSuccess: () => {
            resetForm();
            eventBus.$emit("closeModal", "service::create");
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Services created successfully",
              timer: 3e3,
              timerProgressBar: true
            });
          }
        })
      );
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$5, mergeProps({
        form: "",
        onSubmit: submit
      }, _attrs), {
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$6, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$7, {
                    onClick: submit,
                    type: "submit",
                    color: "info",
                    label: "Submit"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$7, {
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
              createVNode(_sfc_main$6, null, {
                default: withCtx(() => [
                  createVNode(_sfc_main$7, {
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
            _push2(ssrRenderComponent(_sfc_main$8, { label: "Name" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$9, {
                    errorMessage: unref(form).errors.name,
                    modelValue: unref(form).name,
                    "onUpdate:modelValue": ($event) => unref(form).name = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$9, {
                      errorMessage: unref(form).errors.name,
                      modelValue: unref(form).name,
                      "onUpdate:modelValue": ($event) => unref(form).name = $event
                    }, null, 8, ["errorMessage", "modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$a, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$8, { label: "Company" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(SelectField, {
                    errorMessage: unref(form).errors.company_name,
                    class: "flex w-full py-2 border rounded-md border-fieldgray rtl:text-right placeholder:text-black",
                    modelValue: unref(form).company_name,
                    "onUpdate:modelValue": ($event) => unref(form).company_name = $event,
                    items: companies
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(SelectField, {
                      errorMessage: unref(form).errors.company_name,
                      class: "flex w-full py-2 border rounded-md border-fieldgray rtl:text-right placeholder:text-black",
                      modelValue: unref(form).company_name,
                      "onUpdate:modelValue": ($event) => unref(form).company_name = $event,
                      items: companies
                    }, null, 8, ["errorMessage", "modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$8, { label: "Image" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$1, {
                    errorMessage: unref(form).errors.files,
                    accept: "image/*",
                    class: "mt-5",
                    label: "Image Cover",
                    modelValue: unref(form).files,
                    "onUpdate:modelValue": ($event) => unref(form).files = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$1, {
                      errorMessage: unref(form).errors.files,
                      accept: "image/*",
                      class: "mt-5",
                      label: "Image Cover",
                      modelValue: unref(form).files,
                      "onUpdate:modelValue": ($event) => unref(form).files = $event
                    }, null, 8, ["errorMessage", "modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$a, null, null, _parent2, _scopeId));
            if (!isUpdate.value) {
              _push2(`<div${_scopeId}><!--[-->`);
              ssrRenderList(formItems, (formItem, index) => {
                _push2(`<div${_scopeId}><div class="flex justify-end"${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$7, {
                  type: "button",
                  class: "w-24 h-0",
                  icon: unref(mdiMinus),
                  color: "danger",
                  label: "Remove",
                  onClick: ($event) => formItems.splice(index, 1)
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
                _push2(ssrRenderComponent(_sfc_main$8, { label: "Title" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_sfc_main$9, {
                        modelValue: formItem.title,
                        "onUpdate:modelValue": ($event) => formItem.title = $event
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_sfc_main$9, {
                          modelValue: formItem.title,
                          "onUpdate:modelValue": ($event) => formItem.title = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_sfc_main$8, { label: "Description" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_sfc_main$9, {
                        type: "textarea",
                        modelValue: formItem.description,
                        "onUpdate:modelValue": ($event) => formItem.description = $event
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_sfc_main$9, {
                          type: "textarea",
                          modelValue: formItem.description,
                          "onUpdate:modelValue": ($event) => formItem.description = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_sfc_main$a, null, null, _parent2, _scopeId));
                _push2(`</div>`);
              });
              _push2(`<!--]--><div class="flex justify-end"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$7, {
                type: "button",
                icon: unref(mdiPlus),
                color: "info",
                label: "Add More Info",
                onClick: addFormItem
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (isUpdate.value) {
              _push2(`<div${_scopeId}><!--[-->`);
              ssrRenderList(service.additional_info, (formItem, index) => {
                _push2(`<div${_scopeId}><div class="flex justify-end"${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$7, {
                  type: "button",
                  class: "w-24 h-0",
                  icon: unref(mdiMinus),
                  color: "danger",
                  label: "Remove",
                  onClick: ($event) => service.additional_info.splice(index, 1)
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
                _push2(ssrRenderComponent(_sfc_main$8, { label: "Title" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    var _a, _b;
                    if (_push3) {
                      _push3(ssrRenderComponent(_sfc_main$9, {
                        modelValue: formItem.title,
                        "onUpdate:modelValue": ($event) => formItem.title = $event,
                        "error-message": unref(form).errors.additional_info ? (_a = unref(form).errors.additional_info[index]) == null ? void 0 : _a.title : null
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_sfc_main$9, {
                          modelValue: formItem.title,
                          "onUpdate:modelValue": ($event) => formItem.title = $event,
                          "error-message": unref(form).errors.additional_info ? (_b = unref(form).errors.additional_info[index]) == null ? void 0 : _b.title : null
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "error-message"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_sfc_main$8, { label: "Description" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    var _a, _b;
                    if (_push3) {
                      _push3(ssrRenderComponent(_sfc_main$9, {
                        type: "textarea",
                        "error-message": unref(form).errors.additional_info ? (_a = unref(form).errors.additional_info[index]) == null ? void 0 : _a.description : null,
                        modelValue: formItem.description,
                        "onUpdate:modelValue": ($event) => formItem.description = $event
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_sfc_main$9, {
                          type: "textarea",
                          "error-message": unref(form).errors.additional_info ? (_b = unref(form).errors.additional_info[index]) == null ? void 0 : _b.description : null,
                          modelValue: formItem.description,
                          "onUpdate:modelValue": ($event) => formItem.description = $event
                        }, null, 8, ["error-message", "modelValue", "onUpdate:modelValue"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_sfc_main$a, null, null, _parent2, _scopeId));
                _push2(`</div>`);
              });
              _push2(`<!--]-->`);
              if (unref(form).errors) {
                _push2(`<span class="text-red-500"${_scopeId}>${ssrInterpolate(unref(form).errors.additional_info)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="flex justify-end"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$7, {
                type: "button",
                icon: unref(mdiPlus),
                color: "info",
                label: "Add More Info",
                onClick: addFormItemUpdate
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_sfc_main$a, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$8, { label: "Language" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(SelectField, {
                    errorMessage: unref(form).errors.lang,
                    class: "flex w-full py-2 border rounded-md border-fieldgray rtl:text-right placeholder:text-black",
                    modelValue: unref(form).lang,
                    "onUpdate:modelValue": ($event) => unref(form).lang = $event,
                    items: lang
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(SelectField, {
                      errorMessage: unref(form).errors.lang,
                      class: "flex w-full py-2 border rounded-md border-fieldgray rtl:text-right placeholder:text-black",
                      modelValue: unref(form).lang,
                      "onUpdate:modelValue": ($event) => unref(form).lang = $event,
                      items: lang
                    }, null, 8, ["errorMessage", "modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$8, { label: "Name" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$9, {
                    errorMessage: unref(form).errors.name,
                    modelValue: unref(form).name,
                    "onUpdate:modelValue": ($event) => unref(form).name = $event
                  }, null, 8, ["errorMessage", "modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_sfc_main$a),
              createVNode(_sfc_main$8, { label: "Company" }, {
                default: withCtx(() => [
                  createVNode(SelectField, {
                    errorMessage: unref(form).errors.company_name,
                    class: "flex w-full py-2 border rounded-md border-fieldgray rtl:text-right placeholder:text-black",
                    modelValue: unref(form).company_name,
                    "onUpdate:modelValue": ($event) => unref(form).company_name = $event,
                    items: companies
                  }, null, 8, ["errorMessage", "modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_sfc_main$8, { label: "Image" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$1, {
                    errorMessage: unref(form).errors.files,
                    accept: "image/*",
                    class: "mt-5",
                    label: "Image Cover",
                    modelValue: unref(form).files,
                    "onUpdate:modelValue": ($event) => unref(form).files = $event
                  }, null, 8, ["errorMessage", "modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_sfc_main$a),
              !isUpdate.value ? (openBlock(), createBlock("div", { key: 0 }, [
                (openBlock(true), createBlock(Fragment, null, renderList(formItems, (formItem, index) => {
                  return openBlock(), createBlock("div", { key: index }, [
                    createVNode("div", { class: "flex justify-end" }, [
                      createVNode(_sfc_main$7, {
                        type: "button",
                        class: "w-24 h-0",
                        icon: unref(mdiMinus),
                        color: "danger",
                        label: "Remove",
                        onClick: ($event) => formItems.splice(index, 1)
                      }, null, 8, ["icon", "onClick"])
                    ]),
                    createVNode(_sfc_main$8, { label: "Title" }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$9, {
                          modelValue: formItem.title,
                          "onUpdate:modelValue": ($event) => formItem.title = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_sfc_main$8, { label: "Description" }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$9, {
                          type: "textarea",
                          modelValue: formItem.description,
                          "onUpdate:modelValue": ($event) => formItem.description = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_sfc_main$a)
                  ]);
                }), 128)),
                createVNode("div", { class: "flex justify-end" }, [
                  createVNode(_sfc_main$7, {
                    type: "button",
                    icon: unref(mdiPlus),
                    color: "info",
                    label: "Add More Info",
                    onClick: addFormItem
                  }, null, 8, ["icon"])
                ])
              ])) : createCommentVNode("", true),
              isUpdate.value ? (openBlock(), createBlock("div", { key: 1 }, [
                (openBlock(true), createBlock(Fragment, null, renderList(service.additional_info, (formItem, index) => {
                  return openBlock(), createBlock("div", { key: index }, [
                    createVNode("div", { class: "flex justify-end" }, [
                      createVNode(_sfc_main$7, {
                        type: "button",
                        class: "w-24 h-0",
                        icon: unref(mdiMinus),
                        color: "danger",
                        label: "Remove",
                        onClick: ($event) => service.additional_info.splice(index, 1)
                      }, null, 8, ["icon", "onClick"])
                    ]),
                    createVNode(_sfc_main$8, { label: "Title" }, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createVNode(_sfc_main$9, {
                            modelValue: formItem.title,
                            "onUpdate:modelValue": ($event) => formItem.title = $event,
                            "error-message": unref(form).errors.additional_info ? (_a = unref(form).errors.additional_info[index]) == null ? void 0 : _a.title : null
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error-message"])
                        ];
                      }),
                      _: 2
                    }, 1024),
                    createVNode(_sfc_main$8, { label: "Description" }, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createVNode(_sfc_main$9, {
                            type: "textarea",
                            "error-message": unref(form).errors.additional_info ? (_a = unref(form).errors.additional_info[index]) == null ? void 0 : _a.description : null,
                            modelValue: formItem.description,
                            "onUpdate:modelValue": ($event) => formItem.description = $event
                          }, null, 8, ["error-message", "modelValue", "onUpdate:modelValue"])
                        ];
                      }),
                      _: 2
                    }, 1024),
                    createVNode(_sfc_main$a)
                  ]);
                }), 128)),
                unref(form).errors ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: "text-red-500"
                }, toDisplayString(unref(form).errors.additional_info), 1)) : createCommentVNode("", true),
                createVNode("div", { class: "flex justify-end" }, [
                  createVNode(_sfc_main$7, {
                    type: "button",
                    icon: unref(mdiPlus),
                    color: "info",
                    label: "Add More Info",
                    onClick: addFormItemUpdate
                  }, null, 8, ["icon"])
                ])
              ])) : createCommentVNode("", true),
              createVNode(_sfc_main$a),
              createVNode(_sfc_main$8, { label: "Language" }, {
                default: withCtx(() => [
                  createVNode(SelectField, {
                    errorMessage: unref(form).errors.lang,
                    class: "flex w-full py-2 border rounded-md border-fieldgray rtl:text-right placeholder:text-black",
                    modelValue: unref(form).lang,
                    "onUpdate:modelValue": ($event) => unref(form).lang = $event,
                    items: lang
                  }, null, 8, ["errorMessage", "modelValue", "onUpdate:modelValue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Services/ServicesForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
