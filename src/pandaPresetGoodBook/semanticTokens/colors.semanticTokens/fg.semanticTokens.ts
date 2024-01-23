import { defineSemanticTokens } from '@pandacss/dev'

export const fg = defineSemanticTokens.colors({
	DEFAULT: {
		value: {
			_osDark: '{colors.white}',
			base: '{colors.neutral.900}',
		},
	},
	emphasized: {
		value: {
			_osDark: '{colors.neutral.200}',
			base: '{colors.neutral.700}',
		},
	},
	faded: {
		value: {
			_osDark: '{colors.neutral.500}',
			base: '{colors.neutral.400}',
		},
	},
	inverted: {
		value: {
			_osDark: '{colors.neutral.950}',
			base: '{colors.white}',
		},
	},
	moreFaded: {
		value: {
			_osDark: '{colors.neutral.600}',
			base: '{colors.neutral.300}',
		},
	},
	muted: {
		value: {
			_osDark: '{colors.neutral.300}',
			base: '{colors.neutral.600}',
		},
	},
	subtle: {
		value: {
			_osDark: '{colors.neutral.400}',
			base: '{colors.neutral.500}',
		},
	},
	jesus_words: {
		value: {
			_osDark: '{colors.red.400}',
			base: '{colors.red.700}',
		},
	},
})
