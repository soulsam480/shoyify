<script lang="ts">
import { defineComponent, h, PropType } from 'vue';
export default defineComponent({
  name: 'SContain',
  props: {
    type: {
      type: String as PropType<
        'c-xl' | 'c-lg' | 'c-md' | 'c-sm' | 'c-res' | string
      >,
      default: ''
    }
  },
  setup() {
    return {};
  },
  render() {
    return h(
      'div',
      {
        class: `container ${this.$props.type}`
      },
      (this.$slots as any).default()
    );
  }
});
</script>

<style module></style>
