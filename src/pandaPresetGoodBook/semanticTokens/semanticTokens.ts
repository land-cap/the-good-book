import { defineSemanticTokens } from '@pandacss/dev'
import { colors } from './colors.semanticTokens'
import { shadows } from './shadows.semanticTokens'
import { spacing } from './spacing.semanticTokens'
import { fontWeights } from './typography.semanticTokens'

export const semanticTokens = defineSemanticTokens({ colors, shadows, spacing })
