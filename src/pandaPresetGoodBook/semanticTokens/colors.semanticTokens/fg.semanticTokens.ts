import { defineSemanticTokens } from '@pandacss/dev'

export const fg = defineSemanticTokens.colors({
	DEFAULT: {
		value: {
			base: '{colors.neutral.900}',
			_osDark: '{colors.white}',
		},
	},
	emphasized: {
		value: {
			base: '{colors.neutral.700}',
			_osDark: '{colors.neutral.200}',
		},
	},
	muted: {
		value: {
			base: '{colors.neutral.600}',
			_osDark: '{colors.neutral.300}',
		},
	},
	subtle: {
		value: {
			base: '{colors.neutral.500}',
			_osDark: '{colors.neutral.400}',
		},
	},
	faded: {
		value: {
			base: '{colors.neutral.400}',
			_osDark: '{colors.neutral.500}',
		},
	},
	inverted: {
		value: {
			base: '{colors.white}',
			_osDark: '{colors.neutral.950}',
		},
	},
})
