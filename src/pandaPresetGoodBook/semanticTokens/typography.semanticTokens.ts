import { defineSemanticTokens } from '@pandacss/dev'

export const fontWeights = defineSemanticTokens.fontWeights({
	normal: {
		value: {
			_osDark: '300',
			base: '400',
		},
	},
	bold: {
		value: {
			_osDark: '500',
			base: '600',
		},
	},
	black: {
		value: {
			_osDark: '600',
			base: '700',
		},
	},
})
