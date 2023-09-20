import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/cxbm",

  lang: "zh-CN",
  title: "辰心编码",
  description: "辰心编码的博客",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
