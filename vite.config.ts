import { fileURLToPath, URL } from 'url'
import svgLoader from 'vite-svg-loader'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), svgLoader()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	},
	server: {
		port:3000,
		strictPort:true,
		https: {
			key: fs.readFileSync('.cert/streamwork.dev.key'),
			cert: fs.readFileSync('.cert/streamwork.dev.crt')
		}
	}
})
