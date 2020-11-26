<script lang="ts">
import { defineComponent, h } from "vue";

export default defineComponent({
  name: "ShoyoButton",
  setup() {
    return {};
  },
  render() {
    return h("h", {}, [h("p", { class: "btn" }, "yolo")]);
  },
});
</script>
<!-- <template>
  <p>yolo</p>
</template> -->
<style lang="scss" scoped></style>
