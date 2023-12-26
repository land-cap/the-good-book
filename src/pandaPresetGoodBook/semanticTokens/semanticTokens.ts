import { defineSemanticTokens } from '@pandacss/dev'
import { colors } from './colors.semanticTokens'
import { shadows } from './shadows.semanticTokens'

export const semanticTokens = defineSemanticTokens({ colors, shadows })
