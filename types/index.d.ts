import { Plugin } from "vue";
import { DefineComponent } from "vue"

//todo imports

export interface PluginComponent<T> extends DefineComponent<T> {
    install: Exclude<Plugin['install'], undefined>;
}

declare const shoyify: Exclude<Plugin["install"], undefined>;

export default shoyify;

export type ShoyoButtonTypes = "btn"
    | "red"
    | "blue"
    | "indigo"
    | "purple"
    | "pink"
    | "orange"
    | "yellow"
    | "green"
    | "tea"
    | "cyan";

export type ShoyoButtonSizes = "sm" | "block";

export interface SBtnProps {
    type: ShoyoButtonTypes;
    size: ShoyoButtonSizes;
    content: string;
    disabled: boolean;
}

interface ShoyoInputKeyUp {
    method: (payload?: KeyboardEvent) => void;
    modifier: string;
}

export type KeyUp = ((payload?: KeyboardEvent) => void) | ShoyoInputKeyUp;

export interface SInputProps {
    id: string;
    type: "text" | "email" | "password" | "number";
    onKeyUp: KeyUp;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    attrs: Record<string, any>;
}

export interface SContainProps {
    type: "c-xl" | "c-lg" | "c-md" | "c-sm" | "c-res" | string;
}

export const SBtn: PluginComponent<SBtnProps>;
export const SInput: PluginComponent<ShoyoInputProps>;
export const SContain: PluginComponent<SContainProps>;