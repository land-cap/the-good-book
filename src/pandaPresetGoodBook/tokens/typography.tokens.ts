import { defineTokens } from '@pandacss/dev'

export const fonts = defineTokens.fonts({
	mono: { value: 'var(--font-mono)' },
	sans: { value: 'var(--font-sans)' },
})

export const fontWeights = defineTokens.fontWeights({
	bold: {
		value: '600',
	},
	regular: {
		value: '400',
	},
})

export const fontSizes = defineTokens.fontSizes({
	'2xs': { value: '0.625rem' },
	caption: {
		value: '0.6875rem',
	},
	captionLarge: {
		value: '0.75rem',
	},
})
