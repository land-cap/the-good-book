import { defineTokens } from '@pandacss/dev'

export const colors = defineTokens.colors({
	black: { value: '{colors.neutral.900}' },
	sepia: {
		50: { value: '#F6EEE7' },
		100: { value: '#F0E4D9' },
		200: { value: '#EBDACA' },
		300: { value: '#E4CDB7' },
		400: { value: '#CEA37E' },
		500: { value: '#AD7F58' },
		600: { value: '#815E46' },
		700: { value: '#755641' },
		800: { value: '#6a4f3d' },
		900: { value: '#5f483a' },
	},
	white: { value: 'white' },
})
