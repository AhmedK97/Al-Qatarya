import { withCtx, unref, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1, a as _sfc_main$2, b as _sfc_main$3 } from "./LayoutAuthenticated-d69f9158.js";
import { mdiAccountMultipleOutline, mdiAccountGroup, mdiFileDocumentMultipleOutline, mdiFileDocumentEditOutline, mdiFileDocumentCheckOutline, mdiFileDocumentRefreshOutline, mdiFileDocumentRemoveOutline, mdiDomain } from "@mdi/js";
import { Head } from "@inertiajs/vue3";
import "./style-a68a90f0.js";
import "pinia";
import "./BaseDivider-9c47c877.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "./BaseLevel-c35b5037.js";
import "./BaseButton-89eb7a62.js";
import "numeral";
import "./PillTag-89a59c6f.js";
import "./FormControl-9ac7bf53.js";
import "axios";
import "./InputError-6aeb8d97.js";
const _sfc_main = {
  __name: "Dashboard",
  __ssrInlineRender: true,
  props: {
    employeesCount: {
      type: Number,
      default: 0
    },
    customersCount: {
      type: Number,
      default: 0
    },
    allProjectCount: {
      type: Number,
      default: 0
    },
    pendingProjectCount: {
      type: Number,
      default: 0
    },
    finishedProjectCount: {
      type: Number,
      default: 0
    },
    inProgressProjectCount: {
      type: Number,
      default: 0
    },
    canceledProjectCount: {
      type: Number,
      default: 0
    },
    serviceAlqataryaProjectCount: {
      type: Number,
      default: 0
    },
    serviceOthmanProjectCount: {
      type: Number,
      default: 0
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Dashboard" }, null, _parent2, _scopeId));
            _push2(`<h1 class="pb-2 ml-8 text-4xl font-semibold text-gray-500 border-b border-gray-500 dark:text-slate-400"${_scopeId}> Dashboard </h1>`);
            _push2(ssrRenderComponent(_sfc_main$2, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h1 class="text-2xl font-semibold text-gray-500 dark:text-slate-400"${_scopeId2}> Users </h1><div class="grid grid-cols-1 gap-6 mt-5 mb-6 lg:grid-cols-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$3, {
                    icon: unref(mdiAccountMultipleOutline),
                    number: __props.employeesCount,
                    label: "Employers",
                    color: "text-green-500"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$3, {
                    icon: unref(mdiAccountGroup),
                    number: __props.customersCount,
                    label: "Customer",
                    color: "text-green-500"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><h1 class="text-2xl font-semibold text-gray-500 dark:text-slate-400"${_scopeId2}> Projects </h1><div class="grid grid-cols-1 gap-6 mt-5 mb-6 lg:grid-cols-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$3, {
                    icon: unref(mdiFileDocumentMultipleOutline),
                    number: __props.allProjectCount,
                    label: "All Projects",
                    color: "text-green-500"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$3, {
                    icon: unref(mdiFileDocumentEditOutline),
                    number: __props.pendingProjectCount,
                    label: "Pending Projects",
                    color: "text-green-500"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$3, {
                    icon: unref(mdiFileDocumentCheckOutline),
                    number: __props.finishedProjectCount,
                    label: "Finished Projects",
                    color: "text-green-500"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$3, {
                    icon: unref(mdiFileDocumentRefreshOutline),
                    number: __props.inProgressProjectCount,
                    label: "In Progress Projects",
                    color: "text-green-500"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$3, {
                    icon: unref(mdiFileDocumentRemoveOutline),
                    number: __props.canceledProjectCount,
                    label: "Canceled Projects",
                    color: "text-green-500"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><h1 class="text-2xl font-semibold text-gray-500 dark:text-slate-400"${_scopeId2}> Companies </h1><div class="grid grid-cols-1 gap-6 mt-5 mb-6 lg:grid-cols-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$3, {
                    icon: unref(mdiDomain),
                    number: __props.serviceAlqataryaProjectCount,
                    label: "Alqatarya Projects",
                    color: "text-green-500"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$3, {
                    icon: unref(mdiDomain),
                    number: __props.serviceOthmanProjectCount,
                    label: "Othman Projects",
                    color: "text-green-500"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("h1", { class: "text-2xl font-semibold text-gray-500 dark:text-slate-400" }, " Users "),
                    createVNode("div", { class: "grid grid-cols-1 gap-6 mt-5 mb-6 lg:grid-cols-4" }, [
                      createVNode(_sfc_main$3, {
                        icon: unref(mdiAccountMultipleOutline),
                        number: __props.employeesCount,
                        label: "Employers",
                        color: "text-green-500"
                      }, null, 8, ["icon", "number"]),
                      createVNode(_sfc_main$3, {
                        icon: unref(mdiAccountGroup),
                        number: __props.customersCount,
                        label: "Customer",
                        color: "text-green-500"
                      }, null, 8, ["icon", "number"])
                    ]),
                    createVNode("h1", { class: "text-2xl font-semibold text-gray-500 dark:text-slate-400" }, " Projects "),
                    createVNode("div", { class: "grid grid-cols-1 gap-6 mt-5 mb-6 lg:grid-cols-4" }, [
                      createVNode(_sfc_main$3, {
                        icon: unref(mdiFileDocumentMultipleOutline),
                        number: __props.allProjectCount,
                        label: "All Projects",
                        color: "text-green-500"
                      }, null, 8, ["icon", "number"]),
                      createVNode(_sfc_main$3, {
                        icon: unref(mdiFileDocumentEditOutline),
                        number: __props.pendingProjectCount,
                        label: "Pending Projects",
                        color: "text-green-500"
                      }, null, 8, ["icon", "number"]),
                      createVNode(_sfc_main$3, {
                        icon: unref(mdiFileDocumentCheckOutline),
                        number: __props.finishedProjectCount,
                        label: "Finished Projects",
                        color: "text-green-500"
                      }, null, 8, ["icon", "number"]),
                      createVNode(_sfc_main$3, {
                        icon: unref(mdiFileDocumentRefreshOutline),
                        number: __props.inProgressProjectCount,
                        label: "In Progress Projects",
                        color: "text-green-500"
                      }, null, 8, ["icon", "number"]),
                      createVNode(_sfc_main$3, {
                        icon: unref(mdiFileDocumentRemoveOutline),
                        number: __props.canceledProjectCount,
                        label: "Canceled Projects",
                        color: "text-green-500"
                      }, null, 8, ["icon", "number"])
                    ]),
                    createVNode("h1", { class: "text-2xl font-semibold text-gray-500 dark:text-slate-400" }, " Companies "),
                    createVNode("div", { class: "grid grid-cols-1 gap-6 mt-5 mb-6 lg:grid-cols-4" }, [
                      createVNode(_sfc_main$3, {
                        icon: unref(mdiDomain),
                        number: __props.serviceAlqataryaProjectCount,
                        label: "Alqatarya Projects",
                        color: "text-green-500"
                      }, null, 8, ["icon", "number"]),
                      createVNode(_sfc_main$3, {
                        icon: unref(mdiDomain),
                        number: __props.serviceOthmanProjectCount,
                        label: "Othman Projects",
                        color: "text-green-500"
                      }, null, 8, ["icon", "number"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Head), { title: "Dashboard" }),
              createVNode("h1", { class: "pb-2 ml-8 text-4xl font-semibold text-gray-500 border-b border-gray-500 dark:text-slate-400" }, " Dashboard "),
              createVNode(_sfc_main$2, null, {
                default: withCtx(() => [
                  createVNode("h1", { class: "text-2xl font-semibold text-gray-500 dark:text-slate-400" }, " Users "),
                  createVNode("div", { class: "grid grid-cols-1 gap-6 mt-5 mb-6 lg:grid-cols-4" }, [
                    createVNode(_sfc_main$3, {
                      icon: unref(mdiAccountMultipleOutline),
                      number: __props.employeesCount,
                      label: "Employers",
                      color: "text-green-500"
                    }, null, 8, ["icon", "number"]),
                    createVNode(_sfc_main$3, {
                      icon: unref(mdiAccountGroup),
                      number: __props.customersCount,
                      label: "Customer",
                      color: "text-green-500"
                    }, null, 8, ["icon", "number"])
                  ]),
                  createVNode("h1", { class: "text-2xl font-semibold text-gray-500 dark:text-slate-400" }, " Projects "),
                  createVNode("div", { class: "grid grid-cols-1 gap-6 mt-5 mb-6 lg:grid-cols-4" }, [
                    createVNode(_sfc_main$3, {
                      icon: unref(mdiFileDocumentMultipleOutline),
                      number: __props.allProjectCount,
                      label: "All Projects",
                      color: "text-green-500"
                    }, null, 8, ["icon", "number"]),
                    createVNode(_sfc_main$3, {
                      icon: unref(mdiFileDocumentEditOutline),
                      number: __props.pendingProjectCount,
                      label: "Pending Projects",
                      color: "text-green-500"
                    }, null, 8, ["icon", "number"]),
                    createVNode(_sfc_main$3, {
                      icon: unref(mdiFileDocumentCheckOutline),
                      number: __props.finishedProjectCount,
                      label: "Finished Projects",
                      color: "text-green-500"
                    }, null, 8, ["icon", "number"]),
                    createVNode(_sfc_main$3, {
                      icon: unref(mdiFileDocumentRefreshOutline),
                      number: __props.inProgressProjectCount,
                      label: "In Progress Projects",
                      color: "text-green-500"
                    }, null, 8, ["icon", "number"]),
                    createVNode(_sfc_main$3, {
                      icon: unref(mdiFileDocumentRemoveOutline),
                      number: __props.canceledProjectCount,
                      label: "Canceled Projects",
                      color: "text-green-500"
                    }, null, 8, ["icon", "number"])
                  ]),
                  createVNode("h1", { class: "text-2xl font-semibold text-gray-500 dark:text-slate-400" }, " Companies "),
                  createVNode("div", { class: "grid grid-cols-1 gap-6 mt-5 mb-6 lg:grid-cols-4" }, [
                    createVNode(_sfc_main$3, {
                      icon: unref(mdiDomain),
                      number: __props.serviceAlqataryaProjectCount,
                      label: "Alqatarya Projects",
                      color: "text-green-500"
                    }, null, 8, ["icon", "number"]),
                    createVNode(_sfc_main$3, {
                      icon: unref(mdiDomain),
                      number: __props.serviceOthmanProjectCount,
                      label: "Othman Projects",
                      color: "text-green-500"
                    }, null, 8, ["icon", "number"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
