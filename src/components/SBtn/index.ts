import { PluginComponent, SBtnProps } from './../../../types/index.d';
import { App as Vue, Plugin } from "vue";
import SBtn from "./SBtn.vue";


const install: Exclude<Plugin['install'], undefined> = (app: Vue) => {
    app.component(SBtn.name, SBtn)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(SBtn as any as PluginComponent<SBtnProps>).install = install;

export default SBtn