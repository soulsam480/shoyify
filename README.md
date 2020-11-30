## shoyify

A `vue 3 component library` implementing [`shoyo`](https://shoyo.sambitsahoo.com).

Not  a serious project. Learning How component libraries work and how to create one.

### Usage
shoyify will be released on npm after basic components are added. To test right now

```
git clone https://github.com/soulsam480/shoyify
```
In your Vue 3 Project

- Import whole library as a Vue 3 plugin without tree shaking
```javascript
import shoyify from "../../shoyify";

const app = createApp()

// Tell Vue to use shoyify as a plugin
app.use(shoyify);
app.mount('#app)
```
- Import Individual components a Vue 3 plugin with `tree shaking `
```javascript
import {ShoyoButton} from "../../shoyify";

const app = createApp()

// Tell Vue to use the component as a plugin
app.use(ShoyoButton);
app.mount('#app)
```
- Import individual components directly inside`.vue` files
```javascript
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

### Roadmap

- [X] Export Global Plugin
- [X] Add tree Shaking to  Individual components
- [X] Add typescript types
- [X] Add props typings `see issue #1`
- [ ] Add basic components
- [ ] More todos......

Inspired from [Shubhadip/vue3-component-library](https://github.com/shubhadip/vue3-component-library) and [Vue Tailwind](vue-tailwind.com)