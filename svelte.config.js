import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

import { mdsvex } from 'mdsvex'
import relativeImages from "mdsvex-relative-images";

import highlighter from './src/lib/highlighter.js'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	extensions: ['.svelte', '.md'],
	preprocess: [
		preprocess(),
		mdsvex({
			layout: "./src/lib/BlogLayout.svelte",
      extensions: ['.md'],
			remarkPlugins: [relativeImages],
			highlight: {
				highlighter,
			},
    })
	],
	kit: {
		prerender: { default: true },
		adapter: adapter()
	}
};

export default config;
