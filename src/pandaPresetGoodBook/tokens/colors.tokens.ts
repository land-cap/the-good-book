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
		600: { value: '#A07553' },
		700: { value: '#815E46' },
		800: { value: '#5F483A' },
		900: { value: '#3E332E' },
	},
	white: { value: 'white' },
})
