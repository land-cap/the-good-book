import { defineSemanticTokens } from '@pandacss/dev'

export const semanticSpacing = defineSemanticTokens.spacing({
	reader_gap: { value: { base: '1.25rem', sm: '1.5rem' } },
})
