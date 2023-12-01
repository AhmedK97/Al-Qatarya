import { withCtx, unref, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import "./FormControl-9ac7bf53.js";
import { Head } from "@inertiajs/vue3";
import { mdiAccountPlus, mdiDomain, mdiPlus, mdiExport } from "@mdi/js";
import { _ as _sfc_main$1, a as _sfc_main$2, b as _sfc_main$3 } from "./LayoutAuthenticated-dae51493.js";
import _sfc_main$7 from "./EmployeesTable-1cf9fc6d.js";
import { _ as _sfc_main$6 } from "./BaseDivider-9c47c877.js";
import { _ as _sfc_main$5 } from "./BaseButton-89eb7a62.js";
import { _ as _sfc_main$4 } from "./SectionTitleLineWithButton-6ea4389b.js";
import { e as eventBus } from "./eventBus-b891681f.js";
import Swal from "sweetalert2";
import "pinia";
import "axios";
import "./InputError-6aeb8d97.js";
import "./style-a68a90f0.js";
import "./BaseLevel-c35b5037.js";
import "numeral";
import "./PillTag-89a59c6f.js";
import "./CardBoxComponentEmpty-f088d585.js";
import "./BaseButtons-ce2f1900.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "./EmployeesForm-9ee675aa.js";
import "lodash/cloneDeep.js";
import "./FormField-9bc258f4.js";
import "./SelectField-fffe6a40.js";
import "laravel-vue-i18n";
import "tiny-emitter/instance.js";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    employees: {
      type: Object,
      default: []
    },
    employeesCount: {
      type: Number,
      default: 0
    },
    filters: {
      type: Object,
      default: {}
    }
  },
  setup(__props) {
    const exportTable = () => {
      Swal.fire({
        title: "Are you sure?",
        text: "Export Employees table to excel file!",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, export it!"
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.cancel) {
          console.log("Export cancelled");
        } else if (result.value) {
          window.open(route("export.employees"), "_blank");
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "List Employee" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$3, {
                    icon: unref(mdiAccountPlus),
                    number: __props.employeesCount,
                    label: "Employees",
                    color: "text-blue-500"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    icon: unref(mdiDomain),
                    title: "Employees"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex items-center space-x-3"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_sfc_main$5, {
                          onClick: () => unref(eventBus).$emit("openModal", "employee::create"),
                          color: "info",
                          icon: unref(mdiPlus),
                          label: "Add",
                          small: ""
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$5, {
                          onClick: exportTable,
                          color: "success",
                          icon: unref(mdiExport),
                          label: "Export",
                          small: ""
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex items-center space-x-3" }, [
                            createVNode(_sfc_main$5, {
                              onClick: () => unref(eventBus).$emit("openModal", "employee::create"),
                              color: "info",
                              icon: unref(mdiPlus),
                              label: "Add",
                              small: ""
                            }, null, 8, ["onClick", "icon"]),
                            createVNode(_sfc_main$5, {
                              onClick: exportTable,
                              color: "success",
                              icon: unref(mdiExport),
                              label: "Export",
                              small: ""
                            }, null, 8, ["icon"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$6, { "has-table": "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$7, {
                          filters: __props.filters,
                          employees: __props.employees
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$7, {
                            filters: __props.filters,
                            employees: __props.employees
                          }, null, 8, ["filters", "employees"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3" }, [
                      createVNode(_sfc_main$3, {
                        icon: unref(mdiAccountPlus),
                        number: __props.employeesCount,
                        label: "Employees",
                        color: "text-blue-500"
                      }, null, 8, ["icon", "number"])
                    ]),
                    createVNode(_sfc_main$4, {
                      icon: unref(mdiDomain),
                      title: "Employees"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center space-x-3" }, [
                          createVNode(_sfc_main$5, {
                            onClick: () => unref(eventBus).$emit("openModal", "employee::create"),
                            color: "info",
                            icon: unref(mdiPlus),
                            label: "Add",
                            small: ""
                          }, null, 8, ["onClick", "icon"]),
                          createVNode(_sfc_main$5, {
                            onClick: exportTable,
                            color: "success",
                            icon: unref(mdiExport),
                            label: "Export",
                            small: ""
                          }, null, 8, ["icon"])
                        ])
                      ]),
                      _: 1
                    }, 8, ["icon"]),
                    createVNode(_sfc_main$6, { "has-table": "" }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$7, {
                          filters: __props.filters,
                          employees: __props.employees
                        }, null, 8, ["filters", "employees"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Head), { title: "List Employee" }),
              createVNode(_sfc_main$2, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3" }, [
                    createVNode(_sfc_main$3, {
                      icon: unref(mdiAccountPlus),
                      number: __props.employeesCount,
                      label: "Employees",
                      color: "text-blue-500"
                    }, null, 8, ["icon", "number"])
                  ]),
                  createVNode(_sfc_main$4, {
                    icon: unref(mdiDomain),
                    title: "Employees"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex items-center space-x-3" }, [
                        createVNode(_sfc_main$5, {
                          onClick: () => unref(eventBus).$emit("openModal", "employee::create"),
                          color: "info",
                          icon: unref(mdiPlus),
                          label: "Add",
                          small: ""
                        }, null, 8, ["onClick", "icon"]),
                        createVNode(_sfc_main$5, {
                          onClick: exportTable,
                          color: "success",
                          icon: unref(mdiExport),
                          label: "Export",
                          small: ""
                        }, null, 8, ["icon"])
                      ])
                    ]),
                    _: 1
                  }, 8, ["icon"]),
                  createVNode(_sfc_main$6, { "has-table": "" }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$7, {
                        filters: __props.filters,
                        employees: __props.employees
                      }, null, 8, ["filters", "employees"])
                    ]),
                    _: 1
                  })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Employee/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
