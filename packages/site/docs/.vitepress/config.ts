import { demoBlockPlugin } from "vitepress-theme-demoblock";
const sidebar = {
  "/": [
    { text: "快速开始", link: "/components/start/" },
    {
      text: "组件",
      children: [
        { text: "按钮", link: "/components/button/" },
        { text: "表格", link: "/components/table/" },
      ],
    },
  ],
};

const config = {
  title: "Anxin-UI",
  themeConfig: {
    sidebar,
  },
  markdown: {
    config: (md) => {
      md.use(demoBlockPlugin);
    },
  },
};

export default config;
