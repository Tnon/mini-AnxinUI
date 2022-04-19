import { AutoInstall } from "@anxin-ui/utils/autoinstall";
import axButton from "./button";
import axTable from "./table";
const components = [axButton, axTable];
export default {
  version: "1.0.0",
  install(): void {
    components.forEach((component) => AutoInstall(component));
  },
};
