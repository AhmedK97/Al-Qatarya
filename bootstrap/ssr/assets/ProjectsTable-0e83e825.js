import { onMounted, reactive, watch, ref, computed, withCtx, createVNode, unref, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { e as eventBus } from "./eventBus-b891681f.js";
import { mdiSquareEditOutline, mdiTrashCan, mdiMultimedia, mdiEyeOutline } from "@mdi/js";
import { _ as _sfc_main$1 } from "./CardBoxComponentEmpty-f088d585.js";
import { _ as _sfc_main$7 } from "./BaseLevel-c35b5037.js";
import { _ as _sfc_main$5 } from "./BaseButtons-ce2f1900.js";
import { _ as _sfc_main$6 } from "./BaseButton-89eb7a62.js";
import { _ as _sfc_main$4 } from "./PillTag-89a59c6f.js";
import _sfc_main$2 from "./ProjectsForm-f0670327.js";
import _sfc_main$3 from "./ProjectsUploadMediaForm-dff4a487.js";
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
import "@ckeditor/ckeditor5-build-classic";
import "@ckeditor/ckeditor5-vue";
import "vue-select";
const _sfc_main = {
  __name: "ProjectsTable",
  __ssrInlineRender: true,
  props: {
    projects: {
      type: Object,
      default: []
    },
    services: {
      type: Object,
      default: []
    },
    filters: {
      type: Object,
      default: {}
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
    }
  },
  setup(__props) {
    var _a, _b, _c, _d, _e, _f;
    const {
      projects,
      filters,
      customers,
      employees
    } = __props;
    onMounted(() => {
      eventBus.$on("openModal", (modalToOpen) => {
        if (modalToOpen === "project::create") {
          currentlyEditedProject.value = null;
          isFormModalOpen.value = true;
        }
      });
      eventBus.$on("closeModal", (modalToClose) => {
        if (modalToClose === "project::create" || modalToClose === "project::update") {
          isFormModalOpen.value = false;
          isUploadMediaModalOpen.value = false;
        }
      });
    });
    const activeFilters = reactive({
      filteredBy: {
        title: (_a = filters == null ? void 0 : filters.filteredBy) == null ? void 0 : _a.title,
        address: (_b = filters == null ? void 0 : filters.filteredBy) == null ? void 0 : _b.address,
        employee: (_c = filters == null ? void 0 : filters.filteredBy) == null ? void 0 : _c.employee,
        customer: (_d = filters == null ? void 0 : filters.filteredBy) == null ? void 0 : _d.customer,
        company: (_e = filters == null ? void 0 : filters.filteredBy) == null ? void 0 : _e.company,
        status: (_f = filters == null ? void 0 : filters.filteredBy) == null ? void 0 : _f.status
      }
    });
    watch(activeFilters, (filledFilters) => {
      router.get(route("index.projects"), filledFilters, {
        preserveState: true,
        replace: true
      });
    });
    const currentlyEditedProject = ref(null);
    const currentlyUploadMediaProject = ref(null);
    const formModalTitle = computed(() => {
      var _a2, _b2;
      return ((_a2 = currentlyEditedProject.value) == null ? void 0 : _a2.id) ? `Edit ${(_b2 = currentlyEditedProject.value) == null ? void 0 : _b2.title} Project` : "Add New Project";
    });
    const formUploadMediaModalTitle = computed(() => {
      var _a2, _b2;
      return ((_a2 = currentlyUploadMediaProject.value) == null ? void 0 : _a2.id) ? `Upload Media ${(_b2 = currentlyUploadMediaProject.value) == null ? void 0 : _b2.title} Project` : "Upload Media Project";
    });
    const isFormModalOpen = ref(false);
    const isUploadMediaModalOpen = ref(false);
    const editProject = (project) => {
      currentlyEditedProject.value = project;
      isFormModalOpen.value = true;
    };
    const uploadMedia = (project) => {
      currentlyUploadMediaProject.value = project;
      isUploadMediaModalOpen.value = true;
    };
    const deleteProject = (project) => {
      Swal.fire({
        title: "Are you sure?",
        text: `You won't be able to revert this - ${project.title}!`,
        icon: "error",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          router.delete(route("delete.projects", project.id), {
            preserveState: true,
            replace: true,
            onSuccess: () => {
              Swal.fire({
                title: "Deleted!",
                text: `${project.title} has been deleted.`,
                icon: "success",
                showConfirmButton: true,
                timer: 2e3
              });
            }
          });
        }
      });
    };
    const viewProject = (project) => {
      const url = route("show.projects", project.slug);
      window.open(url, "_blank");
    };
    const upload = ref(false);
    const uploading = (value) => {
      upload.value = value;
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
              project: currentlyEditedProject.value,
              services: __props.services
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$2, {
                employees: __props.employees,
                customers: __props.customers,
                project: currentlyEditedProject.value,
                services: __props.services
              }, null, 8, ["employees", "customers", "project", "services"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        cardWidthClass: "w-[80%] 2xl:w-4/12",
        scrollable: "",
        hasCancel: true,
        modelValue: isUploadMediaModalOpen.value,
        "onUpdate:modelValue": ($event) => isUploadMediaModalOpen.value = $event,
        noExit: upload.value,
        title: formUploadMediaModalTitle.value
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$3, {
              project: currentlyUploadMediaProject.value,
              onUploading: uploading
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$3, {
                project: currentlyUploadMediaProject.value,
                onUploading: uploading
              }, null, 8, ["project"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<table><thead><tr><th>#</th><th>Name</th><th>Company</th><th>Customer</th><th>Employee</th><th>Services</th><th>Space Area</th><th>Status</th><th>Project Date</th><th>Address</th><th>Notes</th><th>Created At</th><th>Action</th></tr></thead><tbody><tr><td></td><td data-label="Filter Name"><input placeholder="Filter by name"${ssrRenderAttr("value", activeFilters.filteredBy.title)} class="w-full h-8 px-2 py-1 border rounded border-primary-100"></td><td data-label="Filter Company"><select class="w-full h-8 px-2 py-1 border rounded border-primary-100"><option${ssrRenderAttr("value", null)}>Filter</option><option value="othman">othman</option><option value="qatarya">qatarya</option></select></td><td data-label="Filter Customer"><input placeholder="Filter by Customer"${ssrRenderAttr("value", activeFilters.filteredBy.customer)} class="w-full h-8 px-2 py-1 border rounded border-primary-100"></td><td data-label="Filter Employee"><input placeholder="Filter by Employee"${ssrRenderAttr("value", activeFilters.filteredBy.employee)} class="w-full h-8 px-2 py-1 border rounded border-primary-100"></td><td></td><td></td><td data-label="Filter status"><select class="w-full h-8 px-2 py-1 border rounded border-primary-100"><option${ssrRenderAttr("value", null)}>Filter</option><option value="pending">Pending</option><option value="in_progress">In Progress</option><option value="finished">Finished</option><option value="canceled">Canceled</option></select></td><td data-label="Filter Address"><input placeholder="Filter by Address"${ssrRenderAttr("value", activeFilters.filteredBy.address)} class="w-full h-8 px-2 py-1 border rounded border-primary-100"></td><td></td><td></td><td></td><td></td></tr><!--[-->`);
      ssrRenderList(__props.projects.data, (project) => {
        _push(`<tr><td data-label="ID">${ssrInterpolate(project.id)}</td><td data-label="Name">${ssrInterpolate(project.title)}</td><td data-label="company">`);
        _push(ssrRenderComponent(_sfc_main$4, {
          color: project.company === "othman" ? "success" : project.company === "qatarya" ? "info" : "danger",
          label: project.company,
          small: ""
        }, null, _parent));
        _push(`</td><td data-label="Phone">${ssrInterpolate(project.customer_name)}</td><td data-label="Status">${ssrInterpolate(project.employee_name)}</td><td data-label="Services">`);
        if (project.services_name.length > 0) {
          _push(`<span><!--[-->`);
          ssrRenderList(project.services_name, (service_name) => {
            _push(`<span>${ssrInterpolate(service_name)}</span>`);
          });
          _push(`<!--]--></span>`);
        } else {
          _push(`<span><span class="text-red-500">No Services</span></span>`);
        }
        _push(`</td><td data-label="Address">${ssrInterpolate(project.space_area)}</td><td data-label="status">`);
        _push(ssrRenderComponent(_sfc_main$4, {
          color: project.status === "pending" ? "warning" : project.status === "in_progress" ? "info" : project.status === "finished" ? "success" : "danger",
          label: project.status,
          small: ""
        }, null, _parent));
        _push(`</td><td data-label="project_date">${ssrInterpolate(project.project_date)}</td><td data-label="About">${ssrInterpolate(project.address)}</td><td data-label="notes">`);
        if (project.notes.length > 50) {
          _push(`<span>${ssrInterpolate(project.notes.substring(0, 50))}... </span>`);
        } else {
          _push(`<span>${ssrInterpolate(project.notes)}</span>`);
        }
        _push(`</td><td data-label="Created At">${ssrInterpolate(project.created_at)}</td><td data-label="Action" class="before:hidden lg:w-1 whitespace-nowrap">`);
        _push(ssrRenderComponent(_sfc_main$5, {
          type: "justify-start lg:justify-end",
          "no-wrap": ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$6, {
                color: "info",
                icon: unref(mdiSquareEditOutline),
                small: "",
                onClick: ($event) => editProject(project)
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$6, {
                color: "danger",
                icon: unref(mdiTrashCan),
                small: "",
                onClick: ($event) => deleteProject(project)
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$6, {
                color: "success",
                icon: unref(mdiMultimedia),
                small: "",
                onClick: ($event) => uploadMedia(project)
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$6, {
                color: "primary",
                icon: unref(mdiEyeOutline),
                small: "",
                onClick: ($event) => viewProject(project)
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_sfc_main$6, {
                  color: "info",
                  icon: unref(mdiSquareEditOutline),
                  small: "",
                  onClick: ($event) => editProject(project)
                }, null, 8, ["icon", "onClick"]),
                createVNode(_sfc_main$6, {
                  color: "danger",
                  icon: unref(mdiTrashCan),
                  small: "",
                  onClick: ($event) => deleteProject(project)
                }, null, 8, ["icon", "onClick"]),
                createVNode(_sfc_main$6, {
                  color: "success",
                  icon: unref(mdiMultimedia),
                  small: "",
                  onClick: ($event) => uploadMedia(project)
                }, null, 8, ["icon", "onClick"]),
                createVNode(_sfc_main$6, {
                  color: "primary",
                  icon: unref(mdiEyeOutline),
                  small: "",
                  onClick: ($event) => viewProject(project)
                }, null, 8, ["icon", "onClick"])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</td></tr>`);
      });
      _push(`<!--]--></tbody></table>`);
      if ((_b2 = (_a2 = __props.projects) == null ? void 0 : _a2.data) == null ? void 0 : _b2.length) {
        _push(`<div class="p-3 mt-5 border-t border-gray-100 pt-7 lg:px-6 dark:border-slate-800">`);
        _push(ssrRenderComponent(_sfc_main$7, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$5, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(__props.projects.links, (page, index) => {
                      _push3(ssrRenderComponent(_sfc_main$6, {
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
                        only: ["projects"]
                      }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.projects.links, (page, index) => {
                        return openBlock(), createBlock(_sfc_main$6, {
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
                          only: ["projects"]
                        }, null, 8, ["active", "label", "class", "color", "as", "href"]);
                      }), 128))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<small${_scopeId}>Page ${ssrInterpolate(__props.projects.current_page)} of ${ssrInterpolate(__props.projects.total)}</small>`);
            } else {
              return [
                createVNode(_sfc_main$5, null, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.projects.links, (page, index) => {
                      return openBlock(), createBlock(_sfc_main$6, {
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
                        only: ["projects"]
                      }, null, 8, ["active", "label", "class", "color", "as", "href"]);
                    }), 128))
                  ]),
                  _: 1
                }),
                createVNode("small", null, "Page " + toDisplayString(__props.projects.current_page) + " of " + toDisplayString(__props.projects.total), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Projects/ProjectsTable.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
