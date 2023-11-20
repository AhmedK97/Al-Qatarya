import { onMounted, reactive, watch, ref, computed, withCtx, createVNode, unref, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { e as eventBus } from "./eventBus-b891681f.js";
import { mdiSquareEditOutline, mdiTrashCan, mdiCashMultiple, mdiSend } from "@mdi/js";
import { _ as _sfc_main$1, C as CardBoxComponentEmpty } from "./CardBoxComponentEmpty-f088d585.js";
import { _ as _sfc_main$8 } from "./BaseLevel-c35b5037.js";
import { _ as _sfc_main$6 } from "./BaseButtons-ce2f1900.js";
import { _ as _sfc_main$7 } from "./BaseButton-89eb7a62.js";
import { _ as _sfc_main$5 } from "./PillTag-89a59c6f.js";
import _sfc_main$2 from "./TransactionsForm-93dd3fb4.js";
import _sfc_main$4 from "./AddMoreTransactionsForm-694dbade.js";
import _sfc_main$3 from "./TransactionsPayment-170cc771.js";
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
import "vue-select";
const TransactionsTable_vue_vue_type_style_index_0_scope_true_lang = "";
const _sfc_main = {
  __name: "TransactionsTable",
  __ssrInlineRender: true,
  props: {
    transactions: {
      type: Object,
      default: []
    },
    customers: {
      type: Object,
      default: []
    },
    employees: {
      type: Object,
      default: []
    },
    services: {
      type: Object,
      default: []
    },
    projects: {
      type: Object,
      default: []
    },
    filters: {
      type: Object,
      default: {}
    }
  },
  setup(__props) {
    var _a, _b, _c, _d;
    const {
      transactions,
      filters
    } = __props;
    onMounted(() => {
      eventBus.$on("openModal", (modalToOpen) => {
        if (modalToOpen === "transaction::create") {
          currentlyEditedTransaction.value = null;
          isFormModalOpen.value = true;
        }
      });
      eventBus.$on("openModal", (modalToOpen) => {
        if (modalToOpen === "transaction::AddMoreTransactionForm") {
          currentAddMoreTransaction.value = null;
          isAddMoreTransactionModalOpen.value = true;
        }
      });
      eventBus.$on("openModal", (modalToOpen) => {
        if (modalToOpen === "transaction::ShowTransactionsPayment") {
          currentShowTransactionsPayment.value = null;
          isShowTransactionsPayment.value = true;
        }
      });
      eventBus.$on("closeModal", (modalToClose) => {
        if (modalToClose === "transaction::create" || modalToClose === "transaction::update" || modalToClose === "transaction::ShowTransactionsPayment" || modalToClose === "transaction::AddMoreTransactionForm") {
          isFormModalOpen.value = false;
          isAddMoreTransactionModalOpen.value = false;
          isShowTransactionsPayment.value = false;
        }
      });
    });
    const activeFilters = reactive({
      filteredBy: {
        customer_name: (_a = filters == null ? void 0 : filters.filteredBy) == null ? void 0 : _a.customer_name,
        phone: (_b = filters == null ? void 0 : filters.filteredBy) == null ? void 0 : _b.phone,
        employee_name: (_c = filters == null ? void 0 : filters.filteredBy) == null ? void 0 : _c.employee_name,
        address: (_d = filters == null ? void 0 : filters.filteredBy) == null ? void 0 : _d.address
      }
    });
    watch(activeFilters, (filledFilters) => {
      router.get(route("index.transactions"), filledFilters, {
        preserveState: true,
        replace: true
      });
    });
    const currentlyEditedTransaction = ref(null);
    const currentAddMoreTransaction = ref(null);
    const currentShowTransactionsPayment = ref(null);
    const isFormModalOpen = ref(false);
    const isAddMoreTransactionModalOpen = ref(false);
    const isShowTransactionsPayment = ref(false);
    const addMoreTransaction = (transaction) => {
      currentAddMoreTransaction.value = transaction;
      isAddMoreTransactionModalOpen.value = true;
    };
    const editTransaction = (transaction) => {
      currentlyEditedTransaction.value = transaction;
      isFormModalOpen.value = true;
    };
    const showTransactionsPayment = (transaction) => {
      currentShowTransactionsPayment.value = transaction;
      isShowTransactionsPayment.value = true;
    };
    const formModalTitle = computed(() => {
      var _a2, _b2;
      return ((_a2 = currentlyEditedTransaction.value) == null ? void 0 : _a2.id) ? `Edit ${(_b2 = currentlyEditedTransaction.value) == null ? void 0 : _b2.name} Transaction` : "Add New Transaction";
    });
    const AddMoreTransactionModalTitle = computed(() => {
      var _a2, _b2;
      return ((_a2 = currentAddMoreTransaction.value) == null ? void 0 : _a2.id) ? `Add More ${(_b2 = currentAddMoreTransaction.value) == null ? void 0 : _b2.name} Transaction` : "Add More Transaction";
    });
    const ShowTransactionsPaymentModalTitle = computed(() => {
      var _a2;
      return ((_a2 = currentShowTransactionsPayment.value) == null ? void 0 : _a2.id) ? `Show  Transaction` : "Show Transaction";
    });
    const deleteTransaction = (transaction) => {
      Swal.fire({
        title: "Are you sure?",
        text: `You won't be able to revert this - ${transaction.name}!`,
        icon: "error",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          router.delete(route("delete.transactions", transaction.id), {
            preserveState: true,
            replace: true,
            onSuccess: () => {
              Swal.fire({
                title: "Deleted!",
                text: `${transaction.name} has been deleted.`,
                icon: "success",
                showConfirmButton: true,
                timer: 2e3
              });
            }
          });
        }
      });
    };
    const openFormModal = () => {
      eventBus.$emit("openModal", "transaction::create");
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
            _push2(ssrRenderComponent(_sfc_main$2, {
              employees: __props.employees,
              customers: __props.customers,
              projects: __props.projects,
              transaction: currentlyEditedTransaction.value,
              services: __props.services
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$2, {
                employees: __props.employees,
                customers: __props.customers,
                projects: __props.projects,
                transaction: currentlyEditedTransaction.value,
                services: __props.services
              }, null, 8, ["employees", "customers", "projects", "transaction", "services"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        cardWidthClass: "w-[80%] 2xl:w-4/12",
        scrollable: "",
        hasCancel: true,
        modelValue: isShowTransactionsPayment.value,
        "onUpdate:modelValue": ($event) => isShowTransactionsPayment.value = $event,
        title: ShowTransactionsPaymentModalTitle.value
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b3;
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$3, {
              transaction: currentShowTransactionsPayment.value,
              payments: (_a3 = currentShowTransactionsPayment.value) == null ? void 0 : _a3.payments,
              totalServicesPrice: _ctx.totalServicesPrice,
              totalExtraServicesPrice: _ctx.totalExtraServicesPrice,
              totalPrice: _ctx.totalPrice
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$3, {
                transaction: currentShowTransactionsPayment.value,
                payments: (_b3 = currentShowTransactionsPayment.value) == null ? void 0 : _b3.payments,
                totalServicesPrice: _ctx.totalServicesPrice,
                totalExtraServicesPrice: _ctx.totalExtraServicesPrice,
                totalPrice: _ctx.totalPrice
              }, null, 8, ["transaction", "payments", "totalServicesPrice", "totalExtraServicesPrice", "totalPrice"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        cardWidthClass: "w-96 overflow-y-auto 2xl:w-4/12",
        scrollable: "",
        hasCancel: true,
        modelValue: isAddMoreTransactionModalOpen.value,
        "onUpdate:modelValue": ($event) => isAddMoreTransactionModalOpen.value = $event,
        title: AddMoreTransactionModalTitle.value
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b3, _c2, _d2;
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$4, {
              project: (_a3 = currentAddMoreTransaction.value) == null ? void 0 : _a3.project.id,
              services: (_b3 = currentAddMoreTransaction.value) == null ? void 0 : _b3.services,
              transaction: currentAddMoreTransaction.value
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$4, {
                project: (_c2 = currentAddMoreTransaction.value) == null ? void 0 : _c2.project.id,
                services: (_d2 = currentAddMoreTransaction.value) == null ? void 0 : _d2.services,
                transaction: currentAddMoreTransaction.value
              }, null, 8, ["project", "services", "transaction"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<table><thead><tr><th>#</th><th>Project Name</th><th>Customer Name</th><th>Phone Number</th><th>Employee Name</th><th>Address</th><th>Total Price</th><th>Times To Pay</th><th>Status</th><th>Created At</th><th>Action</th></tr></thead><tbody><tr><td></td><td></td><td data-label="Filter Customer Name"><input placeholder="Filter by Customer Name"${ssrRenderAttr("value", activeFilters.filteredBy.customer_name)} class="w-full h-8 px-2 py-1 border rounded border-primary-100"></td><td data-label="Filter Phone Number"><input placeholder="Filter by Phone Number"${ssrRenderAttr("value", activeFilters.filteredBy.phone)} class="w-full h-8 px-2 py-1 border rounded border-primary-100"></td><td data-label="Filter Employee Name"><input placeholder="Filter by Employee Name"${ssrRenderAttr("value", activeFilters.filteredBy.employee_name)} class="w-full h-8 px-2 py-1 border rounded border-primary-100"></td><td data-label="Address"><input placeholder="Filter by Address"${ssrRenderAttr("value", activeFilters.filteredBy.address)} class="w-full h-8 px-2 py-1 border rounded border-primary-100"></td><td></td><td></td><td></td><td></td><td></td></tr>`);
      if (__props.transactions.data.length === 0) {
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
      ssrRenderList(__props.transactions.data, (transaction) => {
        _push(`<tr><td data-label="ID">${ssrInterpolate(transaction.id)}</td><td data-label="Project Name">${ssrInterpolate(transaction.project.title)}</td><td data-label="Customer Name">${ssrInterpolate(transaction.customer.name)}</td><td data-label="Phone Number">${ssrInterpolate(transaction.customer.phone)}</td><td data-label="Customer Employee">${ssrInterpolate(transaction.employee.name)}</td><td data-label="Address">${ssrInterpolate(transaction.address.address)}</td><td data-label="Full Price">${ssrInterpolate(transaction.full_price)}</td><td data-label="Times To Pay">${ssrInterpolate(transaction.times_to_pay)}</td><td data-label="Status">`);
        _push(ssrRenderComponent(_sfc_main$5, {
          color: transaction.status === "Paid" ? "success" : "info",
          label: transaction.status
        }, null, _parent));
        _push(`</td><td data-label="Created At">${ssrInterpolate(transaction.created_at)}</td><td data-label="Action" class="before:hidden lg:w-1 whitespace-nowrap">`);
        _push(ssrRenderComponent(_sfc_main$6, {
          type: "justify-start lg:justify-end",
          "no-wrap": ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$7, {
                color: "info",
                icon: unref(mdiSquareEditOutline),
                small: "",
                onClick: ($event) => editTransaction(transaction)
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$7, {
                color: "danger",
                icon: unref(mdiTrashCan),
                small: "",
                onClick: ($event) => deleteTransaction(transaction)
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$7, {
                color: "success",
                icon: unref(mdiCashMultiple),
                small: "",
                onClick: ($event) => addMoreTransaction(transaction)
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$7, {
                color: "success",
                icon: unref(mdiSend),
                small: "",
                onClick: ($event) => showTransactionsPayment(transaction)
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_sfc_main$7, {
                  color: "info",
                  icon: unref(mdiSquareEditOutline),
                  small: "",
                  onClick: ($event) => editTransaction(transaction)
                }, null, 8, ["icon", "onClick"]),
                createVNode(_sfc_main$7, {
                  color: "danger",
                  icon: unref(mdiTrashCan),
                  small: "",
                  onClick: ($event) => deleteTransaction(transaction)
                }, null, 8, ["icon", "onClick"]),
                createVNode(_sfc_main$7, {
                  color: "success",
                  icon: unref(mdiCashMultiple),
                  small: "",
                  onClick: ($event) => addMoreTransaction(transaction)
                }, null, 8, ["icon", "onClick"]),
                createVNode(_sfc_main$7, {
                  color: "success",
                  icon: unref(mdiSend),
                  small: "",
                  onClick: ($event) => showTransactionsPayment(transaction)
                }, null, 8, ["icon", "onClick"])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</td></tr>`);
      });
      _push(`<!--]--></tbody></table>`);
      if ((_b2 = (_a2 = __props.transactions) == null ? void 0 : _a2.data) == null ? void 0 : _b2.length) {
        _push(`<div class="p-3 mt-5 border-t border-gray-100 pt-7 lg:px-6 dark:border-slate-800">`);
        _push(ssrRenderComponent(_sfc_main$8, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$6, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(__props.transactions.links, (page, index) => {
                      _push3(ssrRenderComponent(_sfc_main$7, {
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
                        only: ["transactions"]
                      }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.transactions.links, (page, index) => {
                        return openBlock(), createBlock(_sfc_main$7, {
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
                          only: ["transactions"]
                        }, null, 8, ["active", "label", "class", "color", "as", "href"]);
                      }), 128))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<small${_scopeId}>Page ${ssrInterpolate(__props.transactions.current_page)} of ${ssrInterpolate(__props.transactions.total)}</small>`);
            } else {
              return [
                createVNode(_sfc_main$6, null, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.transactions.links, (page, index) => {
                      return openBlock(), createBlock(_sfc_main$7, {
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
                        only: ["transactions"]
                      }, null, 8, ["active", "label", "class", "color", "as", "href"]);
                    }), 128))
                  ]),
                  _: 1
                }),
                createVNode("small", null, "Page " + toDisplayString(__props.transactions.current_page) + " of " + toDisplayString(__props.transactions.total), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Transactions/TransactionsTable.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
