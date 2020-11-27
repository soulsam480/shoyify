<template>
  <ShoyoButton :content="content" />
</template>

<script lang="ts">
import ShoyoButton from "@/components/ShoyoButton";
export default {
  name: "App",
  components: {
    ShoyoButton,
  },
  setup() {
    const content = "Button";
    return { content };
  },
};
</script>

<style>
@import url("~shoyo/dist/main.css");
</style>
