---
title: Components
menuTitle: Introduction
description: Intro to components in Shoyify.
position: 3
category: 'Components'
badge: DOCS WIP
---
Shoyify is based on [`shoyo`](https://shoyo.sambitsahoo.com). It extends the library by providing basic components to build the base of any large scale app. Even if it uses the stylesheet of shoyo, there is a lot of options to customise the style, look and feel.

## Architecture
To understand how `shoyify` components can be used, let's discuss a little bit  about how they are built. Shoyify is completely built atop the [Vue 3 API](https://v3.vuejs.org) and it supports Vue 3 only. The exported component is of custom type `PluginComponent`, which extends the Vue 3 `Component` type. The exported component holds an additional `install` method which enables the component to be used as a plugin.

## Structure

Here is the structure of the `ShoyoButton` component.

```vue
<script lang="ts">
import { defineComponent, h, PropType, ref, toRefs } from 'vue';
import { ShoyoButtonSizes, ShoyoButtonTypes } from '../../../types';
export default defineComponent({
  name: 'ShoyoButton',
  props: {
    type: {
      type: String as PropType<ShoyoButtonTypes>,
      default: 'btn'
    },
    size: {
      type: String as PropType<ShoyoButtonSizes>,
      default: ''
    },
    content: {
      type: String,
      default: 'button'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const { type, size } = toRefs(props);
    const changeType = ref<string>(type.value);
    const changeClass = ref<string>('');
    if (type.value !== 'btn') {
      changeType.value = `btn + ${changeType.value}`;
    }

    changeClass.value = `${size.value} ${changeType.value}`;

    return { changeClass };
  },
  render() {
    return h(
      'button',
      { class: this.changeClass, disabled: this.$props.disabled },
      this.$props.content
    );
  }
});
</script>
<style module></style>
```
The exported component is of custom type `PluginComponent`, which extends the Vue 3 `Component` type. The exported component holds an additional `install` method which enables the component to be used as a plugin.

```typescript
import { PluginComponent, ShoyoButtonProps } from './../../../types/index.d';
import { App as Vue, Plugin } from "vue";
import ShoyoButton from "./ShoyoButton.vue";


const install: Exclude<Plugin['install'], undefined> = (app: Vue) => {
    app.component(ShoyoButton.name, ShoyoButton)
}

(ShoyoButton as any as PluginComponent<ShoyoButtonProps>).install = install;

export default ShoyoButton
```
Again by using `ES`modules by default, `Tree Shaking` can be achieved which leads to a much smaller bundle size.

## Build

All the components are bundled by [Rollup](https://rollupjs.org) with support for `Tree Shaking`. [Rollup plugin Vue](https://rollup-plugin-vue.vuejs.org/) is used to load and parse `*.vue` files. The `<style>` tags inside vue components are processed by [PostCSS](https://postcss.org/) and inlined inside the component after build. 