import { defineSemanticTokens } from '@pandacss/dev'

export const bg = defineSemanticTokens.colors({
	canvas: {
		value: {
			_osDark: '{colors.neutral.900}',
			base: '{colors.white}',
		},
	},
	muted: {
		value: {
			_osDark: '{colors.neutral.700}',
			base: '{colors.neutral.200}',
		},
	},
	subtle: {
		value: {
			_osDark: '{colors.neutral.800}',
			base: '{colors.neutral.100}',
		},
	},
	inverted: {
		value: {
			_osDark: '{colors.neutral.200}',
			base: '{colors.white}',
		},
	},
})
