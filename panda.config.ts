import { defineConfig } from '@pandacss/dev'
import pandaPreset from '@pandacss/preset-panda'
import { pandaPresetGoodBook } from '~/pandaPresetGoodBook'

export default defineConfig({
	emitPackage: true,
	// Files to exclude
	exclude: [],
	// Where to look for your css declarations
	include: [
		'./src/app/**/*.{ts,tsx,js,jsx}',
		'./src/components/**/*.{ts,tsx,js,jsx}',
		'./src/_pages/**/*.{ts,tsx,js,jsx}',
	],
	jsxFramework: 'react',
	//jsxFactory: 'all',
	//jsxStyleProps: 'all',
	// The output directory for your css system
	outdir: 'styled-system',
	// Whether to use css reset
	preflight: true,
	presets: ['@pandacss/dev/presets', pandaPreset, pandaPresetGoodBook],
})
