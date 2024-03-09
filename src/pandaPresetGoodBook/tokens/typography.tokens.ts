import { defineTokens } from '@pandacss/dev'

export const fonts = defineTokens.fonts({
	sans: { value: 'var(--font-sans)' },
	mono: { value: 'var(--font-mono)' },
	dyslexic: { value: 'var(--font-dyslexic)' },
	condensed: { value: 'var(--font-condensed)' },
	old_style: { value: 'var(--font-old-style)' },
})

export const fontWeights = defineTokens.fontWeights({
	regular: {
		value: '400',
	},
	bold: {
		value: '600',
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
