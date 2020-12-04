---
title: Setup
description: 'Setting up shoyify'
position: 2
category: 'Getting Started'
badge: DOCS WIP
---

<alert type="warning">
shoyify is WIP! Not recommended for production
</alert>


## From NPM
<code-group>
  <code-block label="Yarn" active>

  ```bash
  yarn add shoyify
  ```
  </code-block>

  <code-block label="NPM">

  ```bash
  npm install shoyify
  ```
  </code-block>
</code-group>

<alert type="warning">

You need to have latest version of  [`shoyo`](https://shoyo.sambitsahoo.com) as your project dependency for `shoyify` to work!! Install using 👇🏼

</alert>
<code-group>
  <code-block label="Yarn" active>

  ```bash
  yarn add shoyo
  ```
  </code-block>

  <code-block label="NPM">

  ```bash
  npm install shoyo
  ```
  </code-block>
</code-group>

## Usage as Plugin

Import the whole library as a Vue 3 plugin without `tree-shaking`.

```javascript
import shoyify from "shoyify";

const app = createApp()

// Tell Vue to use shoyify as a plugin
app.use(shoyify);
app.mount('#app)
```
## Usage as Components

Import individual components directly inside`.vue` files
```javascript
<script lang="ts">
import { ShoyoButton } from "shoyify";
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

## Components as Plugins

Import Individual components a Vue 3 plugin with `tree shaking `
```javascript
import { ShoyoButton } from "shoyify";

const app = createApp()

// Tell Vue to use the component as a plugin
app.use(ShoyoButton);
app.mount('#app)
```
