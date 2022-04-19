import { defineComponent } from "vue";
import { axTableProps } from "./props";
export const axTable = defineComponent({
  name: "axTable",
  props: axTableProps,
  setup(props, ctx) {
    return () => <div>表格组件</div>;
  },
});
