import { App as Application } from 'vue';

const config = {};

export { config as default };
let VueInstance: Application;
export const setVueInstance = (instance: Application) => {
  VueInstance = instance;
};

export { VueInstance }
