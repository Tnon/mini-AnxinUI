import { PropType, ExtractPropTypes } from "vue";
type buttonSize = "large" | "small" | "default";
type buttonStatus = "success" | "primary" | "error";
export const axButtonProps = {
  size: {
    type: String as PropType<buttonSize>,
    default: "default",
  },
  status: {
    type: String as PropType<buttonStatus>,
    default: "primary",
  },
} as const;
export type AxButtonProps = ExtractPropTypes<typeof axButtonProps>;
