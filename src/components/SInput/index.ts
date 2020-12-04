import { PluginComponent, SInputProps } from './../../../types/index.d';
import { App as Vue, Plugin } from 'vue';
import SInput from './SInput.vue';

const install: Exclude<Plugin['install'], undefined> = (app: Vue) => {
    app.component(SInput.name, SInput);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(SInput as any as PluginComponent<SInputProps>).install = install;
export default SInput