import { defineSemanticTokens } from '@pandacss/dev'

export const bg = defineSemanticTokens.colors({
	canvas: {
		value: {
			_osDark: '{colors.neutral.900}',
			base: '{colors.white}',
		},
	},
	subtle: {
		value: {
			_osDark: '{colors.neutral.800}',
			base: '{colors.neutral.100}',
		},
	},
	muted: {
		value: {
			_osDark: '{colors.neutral.700}',
			base: '{colors.neutral.200}',
		},
	},
	more_muted: {
		value: {
			_osDark: '{colors.neutral.600}',
			base: '{colors.neutral.300}',
		},
	},
	inverted: {
		value: {
			_osDark: '{colors.white}',
			base: '{colors.neutral.900}',
		},
	},
})
