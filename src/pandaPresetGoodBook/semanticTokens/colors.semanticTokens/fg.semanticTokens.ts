import { defineSemanticTokens } from '@pandacss/dev'

export const fg = defineSemanticTokens.colors({
	DEFAULT: {
		value: {
			base: '#5f483a',
			_osDark: '{colors.neutral.300}',
		},
	},
	muted: {
		value: {
			base: '#815E46',
			_osDark: '{colors.neutral.300}',
		},
	},
	subtle: {
		value: {
			base: '#AD7F58',
			_osDark: '{colors.neutral.400}',
		},
	},
	faded: {
		value: {
			base: '#CEA37E',
			_osDark: '{colors.neutral.500}',
		},
	},
	moreFaded: {
		value: {
			base: '#DCBC9F',
			_osDark: '{colors.neutral.600}',
		},
	},
	jesus_words: {
		value: {
			base: '{colors.red.700}',
			_osDark: '{colors.red.400}',
		},
	},
	inverted: {
		value: {
			base: '{colors.white}',
			_osDark: '{colors.neutral.950}',
		},
	},
})
