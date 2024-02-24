import { defineSemanticTokens } from '@pandacss/dev'

export const bg = defineSemanticTokens.colors({
	canvas: {
		value: {
			base: '{colors.white}',
			_osDark: '{colors.neutral.800}',
		},
	},
	subtle: {
		value: {
			base: '{colors.neutral.100}',
			_osDark: '{colors.neutral.700}',
		},
	},
	muted: {
		value: {
			base: '{colors.neutral.200}',
			_osDark: '{colors.neutral.600}',
		},
	},
	more_muted: {
		value: {
			base: '{colors.neutral.300}',
			_osDark: '{colors.neutral.500}',
		},
	},
	inverted: {
		value: {
			base: '{colors.neutral.900}',
			_osDark: '{colors.white}',
		},
	},
	highlight: {
		value: {
			base: '{colors.yellow.200}',
			_osDark: '{colors.yellow.900}',
		},
	},
})
