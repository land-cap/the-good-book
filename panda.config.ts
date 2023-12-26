import { defineConfig } from '@pandacss/dev'
import pandaPreset from '@pandacss/preset-panda'
import { pandaPresetGoodBook } from '~/pandaPresetGoodBook'

export default defineConfig({
	presets: ['@pandacss/dev/presets', pandaPreset, pandaPresetGoodBook],
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
	//jsxFactory: 'all',
	//jsxStyleProps: 'all',
	// The output directory for your css system
	outdir: 'styled-system',
})
