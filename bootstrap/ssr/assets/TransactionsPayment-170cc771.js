import { onMounted, reactive, ref, watch, computed, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import cloneDeep from "lodash/cloneDeep.js";
import { useForm, router } from "@inertiajs/vue3";
import { _ as _sfc_main$2 } from "./BaseButtons-ce2f1900.js";
import { _ as _sfc_main$1 } from "./BaseButton-89eb7a62.js";
import { mdiMinus, mdiPlus } from "@mdi/js";
import { e as eventBus } from "./eventBus-b891681f.js";
import Swal from "sweetalert2";
import "tiny-emitter/instance.js";
const _sfc_main = {
  __name: "TransactionsPayment",
  __ssrInlineRender: true,
  props: {
    transaction: {
      type: Object,
      default: () => {
      }
    },
    payments: {
      type: Array,
      default: () => {
      }
    }
  },
  setup(__props) {
    const props = __props;
    onMounted(() => {
      eventBus.$on("openModal", (modalToOpen) => {
        if (modalToOpen === "transaction::ShowTransactionsPayment") {
          resetForm();
        }
      });
    });
    const form = useForm({
      transaction: props.transaction,
      payments: props == null ? void 0 : props.payments
    });
    const transaction = reactive(props.transaction || {});
    reactive(props.payments || {});
    const maxPaymentRetched = ref(false);
    const addFormItem = () => {
      if (form.payments == null) {
        form.payments = [{
          date: "",
          amount: ""
        }];
      } else {
        form.payments.push({
          date: "",
          amount: ""
        });
      }
    };
    const removePayment = (index) => {
      form.payments.splice(index, 1);
      maxPaymentRetched.value = false;
    };
    const resetForm = () => {
      form.reset();
      Object.keys(form.errors).forEach((key) => {
        delete form.errors[key];
      });
      maxPaymentRetched.value = false;
    };
    watch(
      () => cloneDeep(props),
      (newProps) => {
        if (!newProps.transaction) {
          return;
        }
        resetForm();
        Object.assign(transaction, newProps.transaction);
        form.transaction = newProps.transaction;
        form.payments = newProps.payments;
      }
    );
    const totalExtraServicesPrice = computed(() => {
      var _a;
      let total = 0;
      (_a = transaction.extra_services) == null ? void 0 : _a.forEach((extraService) => {
        total += extraService.price * extraService.quantity;
      });
      return total;
    });
    const totalServicesPrice = computed(() => {
      var _a;
      let total = 0;
      (_a = transaction.services) == null ? void 0 : _a.forEach((service) => {
        total += service.price * service.quantity;
      });
      return total;
    });
    const totalPaid = computed(() => {
      var _a;
      let total = 0;
      (_a = transaction.payments) == null ? void 0 : _a.forEach((payment) => {
        total += payment.amount * 1;
      });
      return total;
    });
    const totalPrice = computed(() => {
      var _a, _b;
      let total = 0;
      (_a = transaction.services) == null ? void 0 : _a.forEach((service) => {
        total += service.price * service.quantity;
      });
      (_b = transaction.extra_services) == null ? void 0 : _b.forEach((extraService) => {
        total += extraService.price * extraService.quantity;
      });
      return total;
    });
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
      router.post(
        route("store.payments.transactions", transaction.id),
        form,
        Object.assign(sharedFormOptions, {
          onSuccess: () => {
            resetForm();
            eventBus.$emit("closeModal", "transaction::ShowTransactionsPayment");
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
      _push(`<!--[--><div><div class="px-2 py-4 mt-5 overflow-x-auto bg-white rounded-lg shadow lg:px-10"><h1 class="text-lg text-center underline rounded-full decoration-sky-500 bg-emerald-500"> تفاصيل حساب الخـــدمات </h1><table class="table-auto"><thead><tr><th class="font-bold text-center">السعر</th><th class="font-bold text-center">الكمية</th><th class="font-bold text-center">اسم الخدمة</th></tr></thead><!--[-->`);
      ssrRenderList(transaction.services, (transaction2) => {
        _push(`<tbody><td class="font-bold text-center">${ssrInterpolate(transaction2.price)}</td><td class="font-bold text-center">${ssrInterpolate(transaction2.quantity)}</td><td class="font-bold text-center">${ssrInterpolate(transaction2.name)}</td></tbody>`);
      });
      _push(`<!--]--><tfoot><tr><td colspan="2" class="font-bold text-center text-red-500 bg-gray-600">${ssrInterpolate(totalServicesPrice.value)}</td><td colspan="1" class="font-bold text-center text-red-500 bg-gray-600">الحساب الكلي</td></tr></tfoot></table></div><hr><div class="px-2 py-4 mt-5 overflow-x-auto bg-white rounded-lg shadow lg:px-10"><h1 class="text-lg text-center underline rounded-full decoration-sky-500 bg-emerald-500"> تفاصيل حساب الخـــدمات الاضافية </h1><table class="table-auto"><thead><tr><th class="font-bold text-center">السعر</th><th class="font-bold text-center">الكمية</th><th class="font-bold text-center">اسم الخدمة</th></tr></thead><!--[-->`);
      ssrRenderList(transaction.extra_services, (transaction2) => {
        _push(`<tbody><td class="font-bold text-center">${ssrInterpolate(transaction2.price)}</td><td class="font-bold text-center">${ssrInterpolate(transaction2.quantity)}</td><td class="font-bold text-center">${ssrInterpolate(transaction2.name)}</td></tbody>`);
      });
      _push(`<!--]--><tfoot><tr><td colspan="2" class="font-bold text-center text-red-500 bg-gray-600">${ssrInterpolate(totalExtraServicesPrice.value)}</td><td colspan="1" class="font-bold text-center text-red-500 bg-gray-600">الحساب الكلي</td></tr></tfoot></table></div></div><div class="px-2 py-4 overflow-x-auto bg-white rounded-lg shadow lg:px-10">`);
      if (transaction.times_to_pay > 0) {
        _push(`<div><div class="mt-5"><h1 class="text-lg text-center underline bg-blue-500 rounded-full decoration-sky-500"> ما تم دفعه من اصل (${ssrInterpolate(transaction.times_to_pay)}) دفعات </h1>`);
        if (!Array.isArray(unref(form).payments) || unref(form).payments.length === 0) {
          _push(`<div><h1 class="w-1/2 m-auto mt-10 text-lg text-center underline bg-red-500 rounded-full decoration-sky-500"> لا يوجد دفعات </h1></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="pt-4"><div><div><table class="min-w-full divide-y divide-gray-200"><tbody><!--[-->`);
        ssrRenderList(unref(form).payments, (payment, index) => {
          _push(`<tr><td class="py-2 font-bold text-center">`);
          _push(ssrRenderComponent(_sfc_main$1, {
            class: ["w-5 h-5", "w-24 h-0 mb-4"],
            type: "button",
            icon: unref(mdiMinus),
            color: "danger",
            onClick: ($event) => removePayment(index)
          }, null, _parent));
          _push(`</td><td class="py-2 font-bold text-center">`);
          if (payment.date) {
            _push(`<span class="ml-2 font-bold">${ssrInterpolate(payment.date)}</span>`);
          } else {
            _push(`<span class="ml-2 font-bold">-------------</span>`);
          }
          _push(`</td><td class="py-2 font-bold text-center"><div class="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400"><input type="text" id="first-name" class="w-40 py-3 pl-10 pr-4 mt-2 text-gray-700 bg-gray-200 border border-transparent rounded-md text-end focus:outline-none focus:bg-white focus:border-gray-500 dark:focus:border-purple-400 dark:bg-gray-700 dark:text-gray-300" placeholder="المبلغ"${ssrRenderAttr("value", payment.amount)}></div></td></tr>`);
        });
        _push(`<!--]--></tbody></table><!--[-->`);
        ssrRenderList(unref(form).payments, (payment, index) => {
          var _a;
          _push(`<div class="mt-3 text-center">`);
          if ((_a = unref(form)) == null ? void 0 : _a.errors["payments." + index + ".amount"]) {
            _push(`<span class="block text-sm text-red-600"> يجيب ان يكون المبلغ عددا صحيحا </span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]-->`);
        if (maxPaymentRetched.value) {
          _push(`<div class="mt-8 text-center"><span class="block mt-5 text-red-500"> تم الوصول للحد الاقصى المحدد لمرات الدفع </span>`);
          if (totalPrice.value < totalPaid.value) {
            _push(`<div class="block mx-auto mt-5"><span colspan="1" class="font-bold text-center text-white bg-red-800">${ssrInterpolate(totalPaid.value - totalPrice.value)}</span><span colspan="1" class="font-bold text-center text-white bg-red-800"> خطا فائض في الحسابات </span></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex justify-between mt-8">`);
        _push(ssrRenderComponent(_sfc_main$2, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$1, {
                onClick: submit,
                type: "submit",
                color: "info",
                label: "حفظ"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_sfc_main$1, {
                  onClick: submit,
                  type: "submit",
                  color: "info",
                  label: "حفظ"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_sfc_main$1, {
          type: "button",
          icon: unref(mdiPlus),
          color: "info",
          label: "اضافة دفعة",
          onClick: addFormItem
        }, null, _parent));
        _push(`</div></div></div></div></div>`);
      } else {
        _push(`<div><div><h1 class="text-lg text-center underline bg-red-500 rounded-full decoration-sky-500"> يجب تحديد عدد مرات الدفع اولأ لتتمكن لاضافة دفعات </h1></div></div>`);
      }
      _push(`</div><div class="px-2 py-4 mt-5 overflow-x-auto bg-white rounded-lg shadow lg:px-10"><h1 class="text-lg text-center underline rounded-full decoration-sky-500 bg-emerald-500"> الحساب الكلى </h1><table class="table-auto"><thead><tr><th class="font-bold text-center">الحساب الكلى للخدمات</th><th class="font-bold text-center">ما تم دفعة حتى الان</th></tr></thead><tbody><td class="font-bold text-center">${ssrInterpolate(totalPrice.value)}</td><td class="font-bold text-center">${ssrInterpolate(totalPaid.value)}</td></tbody><tfoot>`);
      if (totalPrice.value < totalPaid.value) {
        _push(`<tr><td colspan="1" class="font-bold text-center text-white bg-red-800">${ssrInterpolate(totalPaid.value - totalPrice.value)}</td><td colspan="1" class="font-bold text-center text-white bg-red-800">خطا فائض في الحسابات</td></tr>`);
      } else if (totalPrice.value === totalPaid.value && totalPrice.value !== 0) {
        _push(`<tr><td colspan="2" class="font-bold text-center text-green-500 bg-gray-600">الحســـــاب مكتمل</td></tr>`);
      } else if (totalPrice.value === 0) {
        _push(`<tr><td colspan="2" class="font-bold text-center text-white bg-gray-600">لا يوجد حسابات</td></tr>`);
      } else {
        _push(`<tr><td colspan="1" class="font-bold text-center text-red-500 bg-gray-600">${ssrInterpolate(totalPrice.value - totalPaid.value)}</td><td colspan="1" class="font-bold text-center text-red-500 bg-gray-600">المتبقى</td></tr>`);
      }
      _push(`</tfoot></table></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Transactions/TransactionsPayment.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
