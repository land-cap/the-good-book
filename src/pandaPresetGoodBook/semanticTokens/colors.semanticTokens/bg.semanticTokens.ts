import { defineSemanticTokens } from '@pandacss/dev'

export const bg = defineSemanticTokens.colors({
	canvas: {
		value: {
			base: '{colors.white}',
			_osDark: '{colors.neutral.800}',
			_themeSepia: {
				base: '{colors.sepia.50}',
				_osDark: '{colors.sepia.950}',
			},
		},
	},
	subtle: {
		value: {
			base: '{colors.neutral.100}',
			_osDark: '{colors.neutral.700}',
			_themeSepia: {
				base: '{colors.sepia.100}',
				_osDark: '{colors.sepia.900}',
			},
		},
	},
	muted: {
		value: {
			base: '{colors.neutral.200}',
			_osDark: '{colors.neutral.600}',
			_themeSepia: {
				base: '{colors.sepia.200}',
				_osDark: '{colors.sepia.800}',
			},
		},
	},
	more_muted: {
		value: {
			base: '{colors.neutral.300}',
			_osDark: '{colors.neutral.500}',
			_themeSepia: {
				base: '{colors.sepia.300}',
				_osDark: '{colors.sepia.700}',
			},
		},
	},
	inverted: {
		value: {
			base: '{colors.neutral.900}',
			_osDark: '{colors.white}',
			_themeSepia: {
				base: '{colors.sepia.900}',
				_osDark: '{colors.sepia.50}',
			},
		},
	},
	highlight: {
		value: {
			base: '{colors.yellow.100}',
			_osDark: '{colors.yellow.900}',
		},
	},
})
