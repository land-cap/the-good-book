import { defineSemanticTokens } from '@pandacss/dev'

export const border = defineSemanticTokens.colors({
	DEFAULT: {
		value: {
			base: '#E4CDB7',
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
			base: '#E4CDB7',
			_osDark: '{colors.neutral.500}',
		},
	},
})
