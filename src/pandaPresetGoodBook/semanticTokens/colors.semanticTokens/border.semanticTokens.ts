import { defineSemanticTokens } from '@pandacss/dev'

export const border = defineSemanticTokens.colors({
	DEFAULT: {
		value: {
			base: '{colors.neutral.300}',
			_osDark: '{colors.neutral.600}',
		},
	},
	emphasized: {
		value: {
			base: '{colors.fg}',
		},
	},
	onBgMuted: {
		value: {
			base: '{colors.neutral.300}',
			_osDark: '{colors.neutral.500}',
		},
	},
})
