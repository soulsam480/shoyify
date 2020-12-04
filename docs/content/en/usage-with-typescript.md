---
title: Typescript Support
menuTitle: Typescript Support
description: Intro to components in Shoyify.
position: 10
category: FAQ
---
`shoyify` is completely written in `Typescript`. It supports typescript out of the box as the typings are provided in the bundle. 

## Props IntelliSense 

Prop type IntelliSense and suggestions in `template` tags will show up only when using [volar](https://github.com/johnsoncodehk/volar). `Volar` is a Faster and more accurate TypeScript support provider for `Vue 3` as compare to [Vetur](https://vuejs.github.io/vetur/). Please use `Volar` to get type IntelliSense inside `template` tags.

### How it Works ?

When a component is imported from shoyify and registered locally, the typings will work and IntelliSense too.
```vue
<script lang="ts">
import { ShoyoButton } from "../../shoyify";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: {
    ShoyoButton,
  },
  setup() {
    const main = ref<string>("Button");
    return { main };
  },
});
</script>
```
In the template tag, the component prop typings will show up from the declaration files.

### Caveats

When shoyify is registered as a plugin or individual components are registered globally, the typings won't show up.

```typescript
import shoyify from "../../shoyify";

const app = createApp()

// Tell Vue to use shoyify as a plugin
app.use(shoyify);
app.mount('#app)
```
or
```typescript
import {ShoyoButton} from "../../shoyify";

const app = createApp()

// Tell Vue to use the component as a plugin
app.use(ShoyoButton);
app.mount('#app)
```
Both of the above implementations won't provide IntelliSense inside template tags.

So the only way for now to get prop IntelliSense is to register components locally.
