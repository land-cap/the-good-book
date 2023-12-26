import { defineTokens } from '@pandacss/dev'

export const colors = defineTokens.colors({
	black: { value: '{colors.neutral.900}' },
	white: { value: 'white' },
	primary: {
		50: { value: '{colors.green.50}' },
		100: { value: '{colors.green.100}' },
		200: { value: '{colors.green.200}' },
		300: { value: '{colors.green.300}' },
		400: { value: '{colors.green.400}' },
		500: { value: '{colors.green.500}' },
		600: { value: '{colors.green.600}' },
		700: { value: '{colors.green.700}' },
		800: { value: '{colors.green.800}' },
		900: { value: '{colors.green.900}' },
		950: { value: '{colors.green.950}' },
	},
})
