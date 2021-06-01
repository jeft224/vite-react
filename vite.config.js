import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import vitePluginImp from 'vite-plugin-imp';

const domainName = 'https://bizdev1.zuolin.com'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    vitePluginImp({
      libList:[
        {
          libName: "antd-mobile",
          libDirectory: "es",
          style: (name) => `antd-mobile/es/${name}/style`,
        },
      ]
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    }
  },
  server: {
    port: "3001",
    proxy: {
      '/evh/': {
        target: domainName,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/evh/, '/evh/'),
      },
      '/ec/': {
        target:domainName,
        rewrite: (path) => path.replace(/^\/ec/, '/ec/'),
        changeOrigin: true
      },
      '/user/': {
        target: domainName,
        rewrite: (path) => path.replace(/^\/user/, '/user/'),
        changeOrigin: true
      },
      '/prmt/': {
        target: domainName,
        rewrite: (path) => path.replace(/^\/prmt/, '/prmt/'),
        changeOrigin: true
      }
    }
  }
});

// const config = {
// 	plugins: [
// 		reactRefresh(),
// 		vitePluginImp({
// 			libList: [
// 				{
// 					libName: 'antd-mobile',
// 					libDirectory: 'es',
// 					style: name => `antd-mobile/es/${name}/style`
// 				}
// 			]
// 		})
// 	],
// 	css: {
// 		preprocessorOptions: {
// 			less: {
// 				javascriptEnabled: true
// 			}
// 		}
// 	},
// 	server: {
// 		port: '3050',
// 		proxy: {
			
// 		}
// 	}
// };

// export default config;

// export default ({ command, mode }) => {
//   if (command === "serve") {
//     return config;
//   } else {
//     return config;
//   }
// };
