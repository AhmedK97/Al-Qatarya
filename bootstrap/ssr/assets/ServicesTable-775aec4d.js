import { onMounted, reactive, watch, ref, computed, withCtx, createVNode, unref, openBlock, createBlock, createCommentVNode, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { e as eventBus } from "./eventBus-b891681f.js";
import { mdiSquareEditOutline, mdiTrashCan } from "@mdi/js";
import { _ as _sfc_main$1, C as CardBoxComponentEmpty } from "./CardBoxComponentEmpty-f088d585.js";
import { _ as _sfc_main$5 } from "./BaseLevel-c35b5037.js";
import { _ as _sfc_main$3 } from "./BaseButtons-ce2f1900.js";
import { _ as _sfc_main$4 } from "./BaseButton-89eb7a62.js";
import "./PillTag-89a59c6f.js";
import _sfc_main$2 from "./ServicesForm-cfaf65a0.js";
import { router } from "@inertiajs/vue3";
import Swal from "sweetalert2";
import "tiny-emitter/instance.js";
import "./BaseDivider-9c47c877.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "./style-a68a90f0.js";
import "pinia";
import "lodash/cloneDeep.js";
import "./FormControl-9ac7bf53.js";
import "axios";
import "./InputError-6aeb8d97.js";
import "./FormField-9bc258f4.js";
import "./SelectField-fffe6a40.js";
import "laravel-vue-i18n";
const _sfc_main = {
  __name: "ServicesTable",
  __ssrInlineRender: true,
  props: {
    services: {
      type: Object,
      default: []
    },
    filters: {
      type: Object,
      default: {}
    }
  },
  setup(__props) {
    var _a, _b, _c;
    const {
      services,
      filters
    } = __props;
    onMounted(() => {
      eventBus.$on("openModal", (modalToOpen) => {
        if (modalToOpen === "service::create") {
          currentlyEditedService.value = null;
          isFormModalOpen.value = true;
        }
      });
      eventBus.$on("closeModal", (modalToClose) => {
        if (modalToClose === "service::create" || modalToClose === "service::update") {
          isFormModalOpen.value = false;
        }
      });
    });
    const activeFilters = reactive({
      filteredBy: {
        name: (_a = filters == null ? void 0 : filters.filteredBy) == null ? void 0 : _a.name,
        phone: (_b = filters == null ? void 0 : filters.filteredBy) == null ? void 0 : _b.phone,
        company_name: (_c = filters == null ? void 0 : filters.filteredBy) == null ? void 0 : _c.company_name
      }
    });
    watch(activeFilters, (filledFilters) => {
      router.get(route("index.services"), filledFilters, {
        preserveState: true,
        replace: true
      });
    });
    const currentlyEditedService = ref(null);
    const formModalTitle = computed(() => {
      var _a2, _b2;
      return ((_a2 = currentlyEditedService.value) == null ? void 0 : _a2.id) ? `Edit ${(_b2 = currentlyEditedService.value) == null ? void 0 : _b2.name} Service` : "Add New Service";
    });
    const isFormModalOpen = ref(false);
    const editService = (service) => {
      currentlyEditedService.value = service;
      isFormModalOpen.value = true;
    };
    const deleteService = (service) => {
      Swal.fire({
        title: "Are you sure?",
        text: `You won't be able to revert this - ${service.name}!`,
        icon: "error",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          router.delete(route("delete.services", {
            service: service.id
          }), {
            preserveState: true,
            replace: true,
            onSuccess: () => {
              Swal.fire({
                icon: "success",
                title: "Success",
                text: "Service deleted successfully",
                timer: 3e3,
                timerProgressBar: true
              });
            }
          });
        }
      });
    };
    const openFormModal = () => {
      eventBus.$emit("openModal", "service::create");
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        cardWidthClass: "w-[80%] 2xl:w-4/12",
        scrollable: "",
        hasCancel: true,
        modelValue: isFormModalOpen.value,
        "onUpdate:modelValue": ($event) => isFormModalOpen.value = $event,
        title: formModalTitle.value
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, { service: currentlyEditedService.value }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$2, { service: currentlyEditedService.value }, null, 8, ["service"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<table><thead><tr><th>#</th><th>Name</th><th>Company</th><th>Language</th><th>Created At</th><th>Action</th></tr></thead><tbody><tr><td></td><td data-label="Filter Name"><input placeholder="Filter by name"${ssrRenderAttr("value", activeFilters.filteredBy.name)} class="w-full h-8 px-2 py-1 border rounded border-primary-100"></td><td data-label="Filter Status"><select class="w-full h-8 px-2 py-1 border rounded border-primary-100"><option${ssrRenderAttr("value", null)}>Filter</option><option value="qatarya">Qatarya</option><option value="othman">Othman</option></select></td><td data-label="Filter Status"><select class="w-full h-8 px-2 py-1 border rounded border-primary-100"><option${ssrRenderAttr("value", null)}>Filter</option><option value="ar">Arabic</option><option value="en">English</option></select></td><td></td><td></td></tr>`);
      if (__props.services.data.length === 0) {
        _push(`<tr><td colspan="12">`);
        _push(ssrRenderComponent(CardBoxComponentEmpty, {
          title: "No Users Found, Click here to add new user",
          description: "You can add new user by clicking on the button below",
          onClick: openFormModal
        }, null, _parent));
        _push(`</td></tr>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(__props.services.data, (service) => {
        _push(`<tr><td data-label="ID">${ssrInterpolate(service.id)}</td><td data-label="Name">${ssrInterpolate(service.name)}</td><td data-label="Status">${ssrInterpolate(service.company_name)}</td><td data-label="Language">${ssrInterpolate(service.lang == "ar" ? "Arabic" : "English")}</td><td data-label="Created At">${ssrInterpolate(service.created_at)}</td><td data-label="Action" class="before:hidden lg:w-1 whitespace-nowrap">`);
        _push(ssrRenderComponent(_sfc_main$3, {
          type: "justify-start lg:justify-end",
          "no-wrap": ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$4, {
                color: "info",
                icon: unref(mdiSquareEditOutline),
                small: "",
                onClick: ($event) => editService(service)
              }, null, _parent2, _scopeId));
              if (!service.is_used) {
                _push2(ssrRenderComponent(_sfc_main$4, {
                  color: "danger",
                  icon: unref(mdiTrashCan),
                  small: "",
                  onClick: ($event) => deleteService(service)
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (service.is_used) {
                _push2(ssrRenderComponent(_sfc_main$4, {
                  color: "danger",
                  icon: unref(mdiTrashCan),
                  small: "",
                  disabled: ""
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                createVNode(_sfc_main$4, {
                  color: "info",
                  icon: unref(mdiSquareEditOutline),
                  small: "",
                  onClick: ($event) => editService(service)
                }, null, 8, ["icon", "onClick"]),
                !service.is_used ? (openBlock(), createBlock(_sfc_main$4, {
                  key: 0,
                  color: "danger",
                  icon: unref(mdiTrashCan),
                  small: "",
                  onClick: ($event) => deleteService(service)
                }, null, 8, ["icon", "onClick"])) : createCommentVNode("", true),
                service.is_used ? (openBlock(), createBlock(_sfc_main$4, {
                  key: 1,
                  color: "danger",
                  icon: unref(mdiTrashCan),
                  small: "",
                  disabled: ""
                }, null, 8, ["icon"])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</td></tr>`);
      });
      _push(`<!--]--></tbody></table>`);
      if ((_b2 = (_a2 = __props.services) == null ? void 0 : _a2.data) == null ? void 0 : _b2.length) {
        _push(`<div class="p-3 mt-5 border-t border-gray-100 pt-7 lg:px-6 dark:border-slate-800">`);
        _push(ssrRenderComponent(_sfc_main$5, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$3, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(__props.services.links, (page, index) => {
                      _push3(ssrRenderComponent(_sfc_main$4, {
                        key: index,
                        active: page.active,
                        label: page.label,
                        "render-label-as-html": true,
                        class: {
                          "text-white": page.active
                        },
                        color: page.active ? "contrast" : "whiteDark",
                        small: "",
                        as: page.url ? "Link" : "span",
                        href: page.url,
                        "preserve-state": "",
                        only: ["services"]
                      }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.services.links, (page, index) => {
                        return openBlock(), createBlock(_sfc_main$4, {
                          key: index,
                          active: page.active,
                          label: page.label,
                          "render-label-as-html": true,
                          class: {
                            "text-white": page.active
                          },
                          color: page.active ? "contrast" : "whiteDark",
                          small: "",
                          as: page.url ? "Link" : "span",
                          href: page.url,
                          "preserve-state": "",
                          only: ["services"]
                        }, null, 8, ["active", "label", "class", "color", "as", "href"]);
                      }), 128))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<small${_scopeId}>Page ${ssrInterpolate(__props.services.current_page)} of ${ssrInterpolate(__props.services.total)}</small>`);
            } else {
              return [
                createVNode(_sfc_main$3, null, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.services.links, (page, index) => {
                      return openBlock(), createBlock(_sfc_main$4, {
                        key: index,
                        active: page.active,
                        label: page.label,
                        "render-label-as-html": true,
                        class: {
                          "text-white": page.active
                        },
                        color: page.active ? "contrast" : "whiteDark",
                        small: "",
                        as: page.url ? "Link" : "span",
                        href: page.url,
                        "preserve-state": "",
                        only: ["services"]
                      }, null, 8, ["active", "label", "class", "color", "as", "href"]);
                    }), 128))
                  ]),
                  _: 1
                }),
                createVNode("small", null, "Page " + toDisplayString(__props.services.current_page) + " of " + toDisplayString(__props.services.total), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Services/ServicesTable.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
