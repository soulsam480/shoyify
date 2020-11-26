import { Plugin } from "vue";

declare const shoyify: Exclude<Plugin["install"], undefined>;
export default shoyify;

export const ShoyoButton: Plugin;