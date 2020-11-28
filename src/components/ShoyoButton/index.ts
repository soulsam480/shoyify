import { PluginComponent, ShoyoButtonProps } from './../../../types/index.d';
import { App as Vue, Plugin } from "vue";
import ShoyoButton from "./ShoyoButton.vue";


const install: Exclude<Plugin['install'], undefined> = (app: Vue) => {
    app.component(ShoyoButton.name, ShoyoButton)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(ShoyoButton as any as PluginComponent<ShoyoButtonProps>).install = install;

export default ShoyoButton