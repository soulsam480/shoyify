<script lang="ts">
import { defineComponent, h, PropType, ref, toRefs } from "vue";
import { ShoyoButtonSizes, ShoyoButtonTypes } from "../../../types";
export default defineComponent({
  name: "ShoyoButton",
  props: {
    type: {
      type: String as PropType<ShoyoButtonTypes>,
      default: "btn",
    },
    size: {
      type: String as PropType<ShoyoButtonSizes>,
      default: null,
    },
    content: {
      type: String,
      default: "button",
    },
  },
  setup(props) {
    const { type, size } = toRefs(props);
    const changeType = ref<string>(type.value);
    const changeSize = ref<string>(size.value);
    const changeClass = ref<string>("");
    if (type.value !== "btn") {
      changeType.value = `btn + ${changeType.value}`;
    }
    if (!changeSize.value) {
      changeSize.value = "";
    }

    changeClass.value = `${changeSize.value} ${changeType.value}`;

    return { changeClass };
  },
  render() {
    return h("h", {}, [h("button", { class: this.changeClass }, this.content)]);
  },
});
</script>
<style module></style>
