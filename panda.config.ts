import { defineConfig } from '@pandacss/dev';

export default defineConfig({
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: ['./src/**/*.{js,ts,svelte}'],

	// Files to exclude
	exclude: [],

	// The output directory for your css system
	outdir: 'src/styled-system'
});
