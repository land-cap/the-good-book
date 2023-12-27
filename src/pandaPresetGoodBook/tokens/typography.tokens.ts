import { defineTokens } from '@pandacss/dev'

export const fonts = defineTokens.fonts({
	mono: { value: 'var(--font-mono)' },
	sans: { value: 'var(--font-sans)' },
})

export const fontWeights = defineTokens.fontWeights({
	blacker: { value: '1000' },
	bold: { value: '700' },
})
