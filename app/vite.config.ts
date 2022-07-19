import postcss from './postcss.config.js';
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svelte()],
	css:{
		postcss
	},
	resolve: {
	  alias: {
        'domain': path.resolve('src/domain'),
        'infrastructure': path.resolve('src/infrastructure'),
	    'interfaces': path.resolve('src/interfaces'),
        'lib': path.resolve('src/lib')
        // 'usecase': path.resolve('src/usecase')
	  }
	},
    server: {
		host: 'localhost',
		port: 5000
	},
    build: {
        rollupOptions: {
            external: ['axios']
        }
    }
})