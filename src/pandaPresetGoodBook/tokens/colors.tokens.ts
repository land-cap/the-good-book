import { defineTokens } from '@pandacss/dev'

export const colors = defineTokens.colors({
	black: { value: '{colors.neutral.900}' },
	sepia: {
		50: { value: '#f4f1ea' },
		100: { value: '#eee8dd' },
		200: { value: '#e7dfd0' },
		300: { value: '#dfd5bf' },
		400: { value: '#d3c6aa' },
		500: { value: '#bbab89' },
		600: { value: '#a39069' },
		700: { value: '#978362' },
		800: { value: '#7a6950' },
		900: { value: '#5a5041' },
		950: { value: '#3c3631' },
	},
	red: {
		DEFAULT: {
			value: '{colors.red.700}',
		},
		light: {
			value: '#f37c7c',
		},
		sepia: {
			DEFAULT: {
				value: '#bb523e',
			},
			light: {
				value: '#e88575',
			},
		},
	},
	white: { value: 'white' },
})
