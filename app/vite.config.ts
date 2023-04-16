import postcss from './postcss.config.js';
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	// root: 'public',
	plugins: [svelte()],
	css:{
		postcss
	},
	resolve: {
		alias: {
		'models': path.resolve('src/models'),
		'api': path.resolve('src/api'),
		'config': path.resolve('src/config'),
		'components': path.resolve('src/components'),
		'database': path.resolve('src/database'),
		'features': path.resolve('src/features'),
		'pages': path.resolve('src/pages'),
		'lib': path.resolve('src/lib'),
		'utils': path.resolve('src/utils')
		// 'usecase': path.resolve('src/usecase')
	  }
	},
	server: {
		host: 'localhost',
		port: 8000,
	},
	// build: {
		// outDir: 'build',
		// rollupOptions: {
		// 	external: ['axios']
		// }
	// }
})
