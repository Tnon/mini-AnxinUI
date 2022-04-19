import { defineComponent } from "vue";
import { axButtonProps } from "./props";
export const axButton = defineComponent({
  name: "axButton",
  props: axButtonProps,
  setup(props, ctx) {
    return () => <div>按钮ss组件ss</div>;
  },
});
