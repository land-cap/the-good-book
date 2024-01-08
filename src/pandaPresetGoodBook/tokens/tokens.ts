import { defineTokens } from '@pandacss/dev'

import { colors } from './colors.tokens'
import { spacing } from './spacing.tokens'
import { fonts, fontSizes, fontWeights } from './typography.tokens'

export const tokens = defineTokens({
	colors,
	fontWeights,
	fonts,
	fontSizes,
	spacing,
})
