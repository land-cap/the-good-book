import { defineSemanticTokens } from '@pandacss/dev'

export const bg = defineSemanticTokens.colors({
	canvas: {
		value: {
			_osDark: '{colors.neutral.950}',
			base: '{colors.neutral.25}',
		},
	},
	muted: {
		value: {
			_osDark: '{colors.neutral.700}',
			base: '{colors.neutral.100}',
		},
	},
	subtle: {
		value: {
			_osDark: '{colors.neutral.800}',
			base: '{colors.neutral.50}',
		},
	},
	surface: {
		value: {
			_osDark: '{colors.neutral.900}',
			base: '{colors.white}',
		},
	},
})
