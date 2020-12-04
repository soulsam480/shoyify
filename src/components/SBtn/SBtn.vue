<script lang="ts">
import { defineComponent, h, PropType, ref, toRefs } from 'vue';
import { ShoyoButtonSizes, ShoyoButtonTypes } from '../../../types';
export default defineComponent({
  name: 'SBtn',
  props: {
    color: {
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
    const { color, size } = toRefs(props);
    const changeType = ref<string>(color.value);
    const changeClass = ref<string>('');
    if (color.value !== 'btn') {
      changeType.value = `btn btn-${changeType.value}`;
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
