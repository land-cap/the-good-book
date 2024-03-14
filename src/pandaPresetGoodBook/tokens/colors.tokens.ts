import { defineTokens } from '@pandacss/dev'

export const colors = defineTokens.colors({
	black: { value: '{colors.neutral.900}' },
	sepia: {
		50: { value: '#f4f1ea' },
		100: { value: '#eee8dd' },
		200: { value: '#e7dfd0' },
		300: { value: '#dfd5bf' },
		400: { value: '#d3c6aa' },
		500: { value: '#a39069' },
		600: { value: '#978362' },
		700: { value: '#7a6950' },
		800: { value: '#5a5041' },
		900: { value: '#3c3631' },
	},
	white: { value: 'white' },
})
