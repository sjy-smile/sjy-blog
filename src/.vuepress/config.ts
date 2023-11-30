import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "这是一个博客",
  description: "师小师的博客",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
