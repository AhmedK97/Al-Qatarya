import { onMounted, reactive, watch, ref, computed, withCtx, createVNode, unref, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { e as eventBus } from "./eventBus-b891681f.js";
import { mdiSquareEditOutline, mdiTrashCan } from "@mdi/js";
import { _ as _sfc_main$1, C as CardBoxComponentEmpty } from "./CardBoxComponentEmpty-f088d585.js";
import { _ as _sfc_main$5 } from "./BaseLevel-c35b5037.js";
import { _ as _sfc_main$3 } from "./BaseButtons-ce2f1900.js";
import { _ as _sfc_main$4 } from "./BaseButton-89eb7a62.js";
import "./PillTag-89a59c6f.js";
import _sfc_main$2 from "./CustomersForm-1c4121a3.js";
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
  __name: "CustomersTable",
  __ssrInlineRender: true,
  props: {
    customers: {
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
      customers,
      filters
    } = __props;
    onMounted(() => {
      eventBus.$on("openModal", (modalToOpen) => {
        if (modalToOpen === "customer::create") {
          currentlyEditedCustomer.value = null;
          isFormModalOpen.value = true;
        }
      });
      eventBus.$on("closeModal", (modalToClose) => {
        if (modalToClose === "customer::create" || modalToClose === "customer::update") {
          isFormModalOpen.value = false;
        }
      });
    });
    const activeFilters = reactive({
      filteredBy: {
        name: (_a = filters == null ? void 0 : filters.filteredBy) == null ? void 0 : _a.name,
        phone: (_b = filters == null ? void 0 : filters.filteredBy) == null ? void 0 : _b.phone,
        status: (_c = filters == null ? void 0 : filters.filteredBy) == null ? void 0 : _c.status
      }
    });
    watch(activeFilters, (filledFilters) => {
      router.get(route("index.customers"), filledFilters, {
        preserveState: true,
        replace: true
      });
    });
    const currentlyEditedCustomer = ref(null);
    const formModalTitle = computed(() => {
      var _a2, _b2;
      return ((_a2 = currentlyEditedCustomer.value) == null ? void 0 : _a2.id) ? `Edit ${(_b2 = currentlyEditedCustomer.value) == null ? void 0 : _b2.name} Customer` : "Add New Employee";
    });
    const isViewModalOpen = ref(false);
    const isFormModalOpen = ref(false);
    const editEmployee = (customer) => {
      currentlyEditedCustomer.value = customer;
      isFormModalOpen.value = true;
    };
    const deleteEmployee = (customer) => {
      Swal.fire({
        title: "Are you sure?",
        text: `You won't be able to revert this - ${customer.name}!`,
        icon: "error",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          router.delete(route("delete.customers", customers.id), {
            preserveState: true,
            replace: true,
            onSuccess: () => {
              Swal.fire({
                title: "Deleted!",
                text: `${customers.name} has been deleted.`,
                icon: "success",
                showConfirmButton: true,
                timer: 2e3
              });
            }
          });
        }
      });
    };
    const openformModal = () => {
      eventBus.$emit("openModal", "customer::create");
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
            _push2(ssrRenderComponent(_sfc_main$2, { customer: currentlyEditedCustomer.value }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$2, { customer: currentlyEditedCustomer.value }, null, 8, ["customer"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        cardWidthClass: "w-[80%] 2xl:w-4/12",
        scrollable: "",
        hasCancel: true,
        modelValue: isViewModalOpen.value,
        "onUpdate:modelValue": ($event) => isViewModalOpen.value = $event,
        title: _ctx.viewModalTitle
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, { customer: currentlyEditedCustomer.value }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$2, { customer: currentlyEditedCustomer.value }, null, 8, ["customer"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<table><thead><tr><th>#</th><th>Name</th><th>Phone</th><th>Status</th><th>Address</th><th>About</th><th>Created At</th><th>Action</th></tr></thead><tbody><tr><td></td><td data-label="Filter Name"><input placeholder="Filter by name"${ssrRenderAttr("value", activeFilters.filteredBy.name)} class="w-full h-8 px-2 py-1 border rounded border-primary-100"></td><td data-label="Filter Phone"><input placeholder="Filter by Phone"${ssrRenderAttr("value", activeFilters.filteredBy.phone)} class="w-full h-8 px-2 py-1 border rounded border-primary-100"></td><td data-label="Filter Status"><select class="w-full h-8 px-2 py-1 border rounded border-primary-100"><option${ssrRenderAttr("value", null)}>Filter</option><option value="active">Active</option><option value="inactive">Inactive</option></select></td><td></td><td></td><td></td><td></td></tr>`);
      if (__props.customers.data.length === 0) {
        _push(`<tr><td colspan="12">`);
        _push(ssrRenderComponent(CardBoxComponentEmpty, {
          title: "No Users Found, Click here to add new user",
          description: "You can add new user by clicking on the button below",
          onClick: openformModal
        }, null, _parent));
        _push(`</td></tr>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(__props.customers.data, (customer) => {
        _push(`<tr><td data-label="ID">${ssrInterpolate(customer.id)}</td><td data-label="Name">${ssrInterpolate(customer.name)}</td><td data-label="Phone">${ssrInterpolate(customer.phone)}</td><td data-label="Status">${ssrInterpolate(customer.status)}</td><td data-label="Address">${ssrInterpolate(customer.address)}</td><td data-label="About">${ssrInterpolate(customer.about)}</td><td data-label="Created At">${ssrInterpolate(customer.created_at)}</td><td data-label="Action" class="before:hidden lg:w-1 whitespace-nowrap">`);
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
                onClick: ($event) => editEmployee(customer)
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$4, {
                color: "danger",
                icon: unref(mdiTrashCan),
                small: "",
                onClick: ($event) => deleteEmployee(customer)
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_sfc_main$4, {
                  color: "info",
                  icon: unref(mdiSquareEditOutline),
                  small: "",
                  onClick: ($event) => editEmployee(customer)
                }, null, 8, ["icon", "onClick"]),
                createVNode(_sfc_main$4, {
                  color: "danger",
                  icon: unref(mdiTrashCan),
                  small: "",
                  onClick: ($event) => deleteEmployee(customer)
                }, null, 8, ["icon", "onClick"])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</td></tr>`);
      });
      _push(`<!--]--></tbody></table>`);
      if ((_b2 = (_a2 = __props.customers) == null ? void 0 : _a2.data) == null ? void 0 : _b2.length) {
        _push(`<div class="p-3 mt-5 border-t border-gray-100 pt-7 lg:px-6 dark:border-slate-800">`);
        _push(ssrRenderComponent(_sfc_main$5, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$3, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(__props.customers.links, (page, index) => {
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
                        only: ["customers"]
                      }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.customers.links, (page, index) => {
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
                          only: ["customers"]
                        }, null, 8, ["active", "label", "class", "color", "as", "href"]);
                      }), 128))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<small${_scopeId}>Page ${ssrInterpolate(__props.customers.current_page)} of ${ssrInterpolate(__props.customers.total)}</small>`);
            } else {
              return [
                createVNode(_sfc_main$3, null, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.customers.links, (page, index) => {
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
                        only: ["customers"]
                      }, null, 8, ["active", "label", "class", "color", "as", "href"]);
                    }), 128))
                  ]),
                  _: 1
                }),
                createVNode("small", null, "Page " + toDisplayString(__props.customers.current_page) + " of " + toDisplayString(__props.customers.total), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Customers/CustomersTable.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
