import { defineSemanticTokens } from '@pandacss/dev'

export const border = defineSemanticTokens.colors({
	DEFAULT: {
		value: {
			base: '{colors.neutral.200}',
			_osDark: '{colors.neutral.800}',
		},
	},
	emphasized: {
		value: {
			base: '{colors.neutral.300}',
			_osDark: '{colors.neutral.700}',
		},
	},
	active: {
		value: {
			base: '{colors.neutral.400}',
			_osDark: '{colors.neutral.600}',
		},
	},
})
