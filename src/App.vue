<template>
  <ShoyoButton @click="log" :content="content" />
  <ShoyoInput
    v-model="content"
    type="text"
    id="olo"
    placeholder="some data"
    :onKeyUp="log"
  />
  <p>{{ content }}</p>
  <shoyo-button @click="log" :content="content"> </shoyo-button>
</template>

<script lang="ts">
import ShoyoButton from '@/components/ShoyoButton';
import ShoyoInput from '@/components/ShoyoInput';
import { ref } from 'vue';
export default {
  name: 'App',
  components: {
    ShoyoButton,
    ShoyoInput
  },
  setup() {
    const content = ref('button');
    const log = (e: any): void => {
      console.log(e);
    };
    return { content, log };
  }
};
</script>

<style>
@import url('~shoyo/dist/main.css');
</style>
