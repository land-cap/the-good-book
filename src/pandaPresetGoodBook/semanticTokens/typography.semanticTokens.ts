import { defineSemanticTokens } from '@pandacss/dev'

export const semanticFontWeights = defineSemanticTokens.fontWeights({
	black: {
		value: {
			_osDark: '750',
			base: '800',
		},
	},
	bold: {
		value: {
			_osDark: '650',
			base: '700',
		},
	},
	regular: {
		value: {
			_osDark: '350',
			base: '400',
		},
	},
})
