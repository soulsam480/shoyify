<script lang="ts">
import { firstCapitalize } from '@/utils/plugins';
import { defineComponent, h, PropType } from 'vue';
import { KeyUp } from '../../../types';
export default defineComponent({
  name: 'ShoyoInput',
  emits: ['shoyo-input', 'shoyo-change', 'update:modelValue'],
  props: {
    id: {
      type: String,
      default: Math.random()
        .toString(36)
        .substr(7)
    },
    type: {
      type: String as PropType<'text' | 'email' | 'password' | 'number'>,
      defult: 'text'
    },
    modelValue: {
      type: String,
      default: null
    },
    onKeyUp: {
      type: Object as PropType<KeyUp>,
      default: undefined
    },
    attrs: {
      type: Object as PropType<Record<string, any>>,
      default: null
    }
  },
  setup() {
    return {};
  },
  render() {
    return h('input', {
      type: this.$props.type,
      class: 'input',
      id: this.$props.id,
      value: this.$props.modelValue,
      ...this.$props.attrs,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      oninput: (e: any) => {
        this.$emit('update:modelValue', e.target.value);
        this.$emit('shoyo-input', e.target.value);
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onchange: (e: any) => {
        this.$emit('shoyo-change', e.target.value);
      },
      onKeyUp: (e: KeyboardEvent) => {
        if (this.$props.onKeyUp === undefined) return;
        if (
          typeof this.$props.onKeyUp !== 'object' &&
          this.$props.onKeyUp !== null
        ) {
          this.$props.onKeyUp(e);
        } else {
          if (e.key !== firstCapitalize(this.$props.onKeyUp.modifier)) return;
          this.$props.onKeyUp.method(e);
        }
      }
    });
  }
});
</script>
<style module></style>
