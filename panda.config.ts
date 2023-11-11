import { defineConfig } from '@pandacss/dev'
import pandaPreset from '@pandacss/preset-panda'
import { pandaGoodBookPreset } from '~/panda-good-book-preset'

export default defineConfig({
	presets: ['@pandacss/dev/presets', pandaPreset, pandaGoodBookPreset],
	jsxFramework: 'react',
	// Whether to use css reset
	preflight: true,
	// Where to look for your css declarations
	include: [
		'./src/app/**/*.{ts,tsx,js,jsx}',
		'./src/components/**/*.{ts,tsx,js,jsx}',
		'./src/_pages/**/*.{ts,tsx,js,jsx}',
	],
	// Files to exclude
	exclude: [],
	// The output directory for your css system
	outdir: 'styled-system',
})
