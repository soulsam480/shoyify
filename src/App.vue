<template>
  <s-contain>
    <SBtn @click="log" :content="content" />
    <SInput
      v-model="content"
      type="text"
      id="olo"
      placeholder="some data"
      :onKeyUp="log"
    />
    <p>{{ content }}</p>
    <s-btn @click="log" :color="'yellow'" :content="content"></s-btn>
  </s-contain>
</template>

<script lang="ts">
import SBtn from '@/components/SBtn/SBtn.vue';
import SInput from '@/components/SInput/SInput.vue';
import SContain from '@/components/SContain/SContain.vue';
import { ref } from 'vue';
export default {
  name: 'App',
  components: {
    SBtn,
    SInput,
    SContain
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
