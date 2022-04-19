import Theme from "vitepress/dist/client/theme-default";
import axButton from "@anxin-ui/anxin/components/button";
import axTable from "@anxin-ui/anxin/components/table";
import { registerComponents } from "./register-components.js";
export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(axButton);
    app.use(axTable);
    registerComponents(app);
  },
};
