import { DefineComponent, Plugin } from "vue";

export interface PluginComponent extends DefineComponent {
    install: Exclude<Plugin['install'], undefined>;
}

declare const shoyify: Exclude<Plugin["install"], undefined>;

export default shoyify;

export type ShoyoButtonTypes = "btn"
    | "btn-red"
    | "btn-blue"
    | "btn-indigo"
    | "btn-purple"
    | "btn-pink"
    | "btn-orange"
    | "btn-yellow"
    | "btn-green"
    | "btn-tea"
    | "btn-cyan";

export type ShoyoButtonSizes = "sm";


export const ShoyoButton: PluginComponent;