import { defineSemanticTokens } from '@pandacss/dev'
import { bg } from './bg.semanticTokens'
import { fg } from './fg.semanticTokens'
import { border } from './border.semanticTokens'

export const colors = defineSemanticTokens.colors({
	bg,
	border,
	fg,
})
