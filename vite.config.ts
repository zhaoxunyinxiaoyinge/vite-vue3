import { defineConfig,loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import vueJsx from "@vitejs/plugin-vue-jsx";
import AutoImport from "unplugin-auto-import/vite";

let path = require("path");

const env = loadEnv('development', process.cwd(), '');
console.log(env,"env")

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    vueJsx(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: ["vue",'vue-router'],
      dts: "src/auto-imports.d.ts",
    }),    
    vue(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },


    define: {
      'process.env': {

      }
    },

  server: {
    host: "localhost",
    port: 3001,
    open: "/",

    proxy: {
      // 字符串简写写法
      // 选项写法
      "/lookDoctor": {
        target: "https://view.inews.qq.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/lookDoctor/, ""),
      },
      "/api/upload": {
        target: "https://localhost:7001/api/upload",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/upload/, ""),
      },

     "/egg": {
        target: "https://127.0.0.1:7001",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/egg/, ""),
      },

    },
  },
});
