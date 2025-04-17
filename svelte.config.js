import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			pages: 'web',
			assets: 'web',
			fallback: 'index.html', // solo se vuoi SPA
			precompress: false,
			strict: true
		}),
		files: {
			assets: 'web'
		},
		prerender: {
			entries: ['*'] // renderizza tutte le rotte staticamente
		}
	}
};

export default config;
