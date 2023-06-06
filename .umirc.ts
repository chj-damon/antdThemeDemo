import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "homepage" },
    { path: "/echarts", component: "echarts" },
  ],
  npmClient: 'pnpm',
});
