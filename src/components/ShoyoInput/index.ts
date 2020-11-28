import { PluginComponent, ShoyoInputProps } from './../../../types/index.d';
import { App as Vue, Plugin } from 'vue';
import ShoyoInput from './ShoyoInput.vue';

const install: Exclude<Plugin['install'], undefined> = (app: Vue) => {
    app.component(ShoyoInput.name, ShoyoInput);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(ShoyoInput as any as PluginComponent<ShoyoInputProps>).install = install;
export default ShoyoInput