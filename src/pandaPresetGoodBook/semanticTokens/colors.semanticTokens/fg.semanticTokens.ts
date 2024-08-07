import { defineSemanticTokens } from '@pandacss/dev'

export const fg = defineSemanticTokens.colors({
	DEFAULT: {
		value: {
			base: '{colors.neutral.900}',
			_osDark: '{colors.neutral.300}',
			_themeSepia: {
				base: '{colors.sepia.900}',
				_osDark: '{colors.sepia.300}',
			},
		},
	},
	muted: {
		value: {
			base: '{colors.neutral.600}',
			_osDark: '{colors.neutral.300}',
			_themeSepia: {
				base: '{colors.sepia.800}',
				_osDark: '{colors.sepia.300}',
			},
		},
	},
	subtle: {
		value: {
			base: '{colors.neutral.500}',
			_osDark: '{colors.neutral.400}',
			_themeSepia: {
				base: '{colors.sepia.600}',
				_osDark: '{colors.sepia.500}',
			},
		},
	},
	faded: {
		value: {
			base: '{colors.neutral.400}',
			_osDark: '{colors.neutral.500}',
			_themeSepia: {
				base: '{colors.sepia.500}',
				_osDark: '{colors.sepia.600}',
			},
		},
	},
	moreFaded: {
		value: {
			base: '{colors.neutral.300}',
			_osDark: '{colors.neutral.600}',
			_themeSepia: {
				base: '{colors.sepia.400}',
				_osDark: '{colors.sepia.900}',
			},
		},
	},
	inverted: {
		value: {
			base: '{colors.white}',
			_osDark: '{colors.neutral.900}',
			_themeSepia: {
				base: '{colors.sepia.50}',
				_osDark: '{colors.sepia.900}',
			},
		},
	},
	jesusWords: {
		value: {
			base: '{colors.red}',
			_osDark: '{colors.red.light}',
			_themeSepia: {
				base: '{colors.red.sepia}',
				_osDark: '{colors.red.sepia.light}',
			},
		},
	},
})
