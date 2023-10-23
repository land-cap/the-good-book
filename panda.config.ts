import { defineConfig } from '@pandacss/dev'

export default defineConfig({
	theme: {
		extend: {
			tokens: {
				colors: {
					primary: {
						50: { value: '{colors.violet.50}' },
						100: { value: '{colors.violet.100}' },
						200: { value: '{colors.violet.200}' },
						300: { value: '{colors.violet.300}' },
						400: { value: '{colors.violet.400}' },
						500: { value: '{colors.violet.500}' },
						600: { value: '{colors.violet.600}' },
						700: { value: '{colors.violet.700}' },
						800: { value: '{colors.violet.800}' },
						900: { value: '{colors.violet.900}' },
						950: { value: '{colors.violet.950}' },
					},
				},
			},
			semanticTokens: {
				colors: {
					black: { value: '{colors.gray.900}' },
					danger: { value: '{colors.red}' },
					success: { value: '{colors.green}' },
				},
			},
		},
	},

	jsxFramework: 'react',

	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: [
		'./src/components/**/*.{ts,tsx,js,jsx}',
		'./src/app/**/*.{ts,tsx,js,jsx}',
	],

	// Files to exclude
	exclude: [],

	// The output directory for your css system
	outdir: 'styled-system',
})
