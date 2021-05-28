import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import vitePluginImp from "vite-plugin-imp";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     reactRefresh(),
//     vitePluginImp({
//       libList:[
//         {
//           libName: "antd-mobile",
//           libDirectory: "es",
//           style: (name) => `antd-mobile/es/${name}/style`,
//         },
//       ]
//     })
//   ],
//   css: {
//     preprocessorOptions: {
//       less: {
//         javascriptEnabled: true,
//       },
//     }
//   },
//   server: {
//     port: "3050",
//   }
// });

const config = {
  plugins: [
    reactRefresh(),
    vitePluginImp({
      libList: [
        {
          libName: "antd-mobile",
          libDirectory: "es",
          style: (name) => `antd-mobile/es/${name}/style`,
        },
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  server: {
    port: "3050",
  },
};

export default config

// export default ({ command, mode }) => {
//   if (command === "serve") {
//     return config;
//   } else {
//     return config;
//   }
// };
