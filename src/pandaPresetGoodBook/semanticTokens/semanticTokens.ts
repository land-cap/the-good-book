import { defineSemanticTokens } from '@pandacss/dev'

import { semanticColors } from './colors.semanticTokens'
import { semanticShadows } from './shadows.semanticTokens'
import { semanticSpacing } from './spacing.semanticTokens'

export const semanticTokens = defineSemanticTokens({
	colors: semanticColors,
	shadows: semanticShadows,
	spacing: semanticSpacing,
})
