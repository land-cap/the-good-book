import { defineSemanticTokens } from '@pandacss/dev'

export const border = defineSemanticTokens.colors({
	DEFAULT: {
		value: {
			_osDark: '{colors.neutral.800}',
			base: '{colors.neutral.200}',
		},
	},
	emphasized: {
		value: {
			_osDark: '{colors.neutral.700}',
			base: '{colors.neutral.300}',
		},
	},
	active: {
		value: {
			_osDark: '{colors.neutral.600}',
			base: '{colors.neutral.400}',
		},
	},
})
