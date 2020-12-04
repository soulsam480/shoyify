import { PluginComponent, SContainProps } from './../../../types/index.d';
import { App as Vue, Plugin } from 'vue';
import SContain from './SContain.vue';


const install: Exclude<Plugin['install'], undefined> = (app: Vue) => {
    app.component(SContain.name, SContain)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(SContain as any as PluginComponent<SContainProps>).install = install;
export default SContain