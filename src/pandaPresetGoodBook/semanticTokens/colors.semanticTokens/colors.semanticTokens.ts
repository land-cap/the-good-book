import { defineSemanticTokens } from '@pandacss/dev'

import { bg } from './bg.semanticTokens'
import { border } from './border.semanticTokens'
import { fg } from './fg.semanticTokens'

export const semanticColors = defineSemanticTokens.colors({
	bg,
	border,
	fg,
})
