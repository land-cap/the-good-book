import { defineSemanticTokens } from '@pandacss/dev'

export const bg = defineSemanticTokens.colors({
	canvas: {
		value: {
			base: '{colors.neutral.25}',
			_osDark: '{colors.neutral.950}',
		},
	},
	surface: {
		value: {
			base: '{colors.white}',
			_osDark: '{colors.neutral.900}',
		},
	},
	subtle: {
		value: {
			base: '{colors.neutral.50}',
			_osDark: '{colors.neutral.800}',
		},
	},
	muted: {
		value: {
			base: '{colors.neutral.100}',
			_osDark: '{colors.neutral.700}',
		},
	},
})
