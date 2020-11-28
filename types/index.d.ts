import { Plugin } from "vue";
import { DefineComponent } from "vue"

//todo imports

export interface PluginComponent<T> extends DefineComponent<T> {
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

export type ShoyoButtonSizes = "sm" | "block";

export interface ShoyoButtonProps {
    type: ShoyoButtonTypes;
    size: ShoyoButtonSizes;
    content: string;
    disabled: boolean;
}

interface ShoyoButtonInputKeyUp {
    method: (payload?: KeyboardEvent) => void;
    modifier: string;
}

export type KeyUp = ((payload?: KeyboardEvent) => void) | ShoyoButtonInputKeyUp;

export interface ShoyoInputProps {
    id: string;
    type: "text" | "email" | "password" | "number";
    onKeyUp: KeyUp;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    attrs: Record<string, any>;
}

export const ShoyoButton: PluginComponent<ShoyoButtonProps>;
export const ShoyoInput: PluginComponent<ShoyoInputProps>;