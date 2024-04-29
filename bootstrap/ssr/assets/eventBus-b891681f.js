import emitter from "tiny-emitter/instance.js";
const vueSelect = "";
const eventBus = {
  $on: (...args) => emitter.on(...args),
  $once: (...args) => emitter.once(...args),
  $off: (...args) => emitter.off(...args),
  $emit: (...args) => emitter.emit(...args)
};
export {
  eventBus as e
};
