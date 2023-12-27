import { defineSemanticTokens } from '@pandacss/dev'
import { colors } from './colors.semanticTokens'
import { shadows } from './shadows.semanticTokens'
import { spacing } from './spacing.semanticTokens'

export const semanticTokens = defineSemanticTokens({ colors, shadows, spacing })
