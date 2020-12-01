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
