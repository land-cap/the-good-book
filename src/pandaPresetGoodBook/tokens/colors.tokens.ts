import { defineTokens } from '@pandacss/dev'

export const colors = defineTokens.colors({
	black: { value: '{colors.neutral.900}' },
	sepia: {
		50: { value: '#F6F1E7' },
		100: { value: '#F0E8D9' },
		200: { value: '#EBDFCA' },
		300: { value: '#E4D4B7' },
		400: { value: '#CEB17E' },
		500: { value: '#AD8E58' },
		600: { value: '#A08153' },
		700: { value: '#816746' },
		800: { value: '#5F4E3A' },
		900: { value: '#3E362E' },
	},
	white: { value: 'white' },
})
