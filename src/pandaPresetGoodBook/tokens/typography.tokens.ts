import { defineTokens } from '@pandacss/dev'

export const fonts = defineTokens.fonts({
	mono: { value: 'var(--font-mono)' },
	sans: { value: 'var(--font-sans)' },
})

export const fontWeights = defineTokens.fontWeights({
	black: {
		value: '800',
	},
	bold: {
		value: '700',
	},
	regular: {
		value: '400',
	},
})
