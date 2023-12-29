import { defineSemanticTokens } from '@pandacss/dev'

import { semanticColors } from './colors.semanticTokens'
import { semanticShadows } from './shadows.semanticTokens'
import { semanticSpacing } from './spacing.semanticTokens'
import { semanticFontWeights } from './typography.semanticTokens'

export const semanticTokens = defineSemanticTokens({
	colors: semanticColors,
	fontWeights: semanticFontWeights,
	shadows: semanticShadows,
	spacing: semanticSpacing,
})
