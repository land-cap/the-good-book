import { defineSemanticTokens } from '@pandacss/dev'

export const bg = defineSemanticTokens.colors({
	canvas: {
		value: {
			base: '#F6EEE7',
			_osDark: '{colors.neutral.800}',
		},
	},
	subtle: {
		value: {
			base: '#F0E4D9',
			_osDark: '{colors.neutral.700}',
		},
	},
	muted: {
		value: {
			base: '#EBDACA',
			_osDark: '{colors.neutral.600}',
		},
	},
	more_muted: {
		value: {
			base: '#E4CDB7',
			_osDark: '{colors.neutral.500}',
		},
	},
	inverted: {
		value: {
			base: '#5f483a',
			_osDark: '{colors.white}',
		},
	},
	highlight: {
		value: {
			base: '{colors.yellow.100}',
			_osDark: '{colors.yellow.900}',
		},
	},
})
