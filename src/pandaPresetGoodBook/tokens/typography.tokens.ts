import { defineTokens } from '@pandacss/dev'

export const fonts = defineTokens.fonts({
	sans: { value: 'var(--font-sans)' },
	mono: { value: 'var(--font-mono)' },
})

export const fontWeights = defineTokens.fontWeights({
	bold: { value: '800' },
	blacker: { value: '1000' },
})
