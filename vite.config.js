import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "@svgr/rollup";

// https://vite.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  base: "/LSY/", // <--- 이 줄을 꼭 추가해야 합니다!
  server: {
    proxy: {
      "/api/velog/rss": {
        target: "https://v2.velog.io",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api\/velog\/rss$/, "/rss/@int_1sy"),
      },
    },
  },
});
