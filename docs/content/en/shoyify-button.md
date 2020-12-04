---
title: SBtn
description: 'Shoyify Button'
subtitle: Shoyify Button
position: 4
category: 'Components'
badge: DOCS WIP
---
Shoyify provides a  button component which extends the style of `shoyo` button. The button is pretty basic with some additional features.

## Installation

<alert type="info"> If you have installed shoyify as plugin, every component comes with that, no need to install separately.</alert>

### As Plugin
```javascript
import { SBtn } from "shoyify";

const app = creatApp();
app.use(SBtn)

```

### As Component inside `.vue` files
```vue
<script>
import { SBtn } from "shoyify";
export default {
    components:{
        SBtn
    }
}
</script>
```
## Usage
### Basic buttons
```vue
<template>
    <s-btn content="button" color="red"></s-btn>
    <s-btn content="button" color="blue"></s-btn>
    <s-btn content="button" color="indigo"></s-btn>
    <s-btn content="button" color="purple"></s-btn>
    <s-btn content="button" color="pink"></s-btn>
    <s-btn content="button" color="orange"></s-btn>
    <s-btn content="button" color="yellow"></s-btn>
    <s-btn content="button" color="green"></s-btn>
    <s-btn content="button" color="teal"></s-btn>
    <s-btn content="button" color="cyan"></s-btn>
</template>
```
### Change in Size
```vue
<template>
    <s-btn content="button" size="sm" color="red"></s-btn>
    <s-btn content="button" size="block" color="blue"></s-btn>
</template>
```
### Change State
```vue
<template>
    <s-btn content="button" disabled color="cyan"></s-btn> <br />
</template>
```
<code-sandbox src="https://codesandbox.io/embed/keen-yonath-6xiiz?fontsize=14&hidenavigation=1&theme=dark"></code-sandbox>

## SBtn API
| **Props** | **Type**  | **Options**                                                       | **Description**                             |
| --------- | --------- | ----------------------------------------------------------------- | ------------------------------------------- |
| color     | `string`  | [`shoyo colors`](https://shoyo.sambitsahoo.com/#/colors?id=color) | Change color of shoyify button              |
| size      | `string`  | `sm` , `block`                                                    | Change Size of shoyify button               |
| content   | `string`  |                                                                   | Shoyify button text to be displayed         |
| disabled  | `boolean` |                                                                   | Toggle the disabled state of shoyify button | --> |