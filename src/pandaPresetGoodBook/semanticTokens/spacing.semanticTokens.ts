import { defineSemanticTokens } from '@pandacss/dev'

export const spacing = defineSemanticTokens.spacing({
	'reader-gap': { value: { base: '1.25rem', sm: '1.5rem' } },
})
