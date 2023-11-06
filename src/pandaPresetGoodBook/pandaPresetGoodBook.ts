import { definePreset } from '@pandacss/dev'
import { globalCss } from './globalCss'
import { colors, fonts, fontWeights } from './tokens'
import { semanticTokens } from './semanticTokens'
import { utilities } from './utilities'

export const pandaPresetGoodBook = definePreset({
	globalCss,
	theme: {
		extend: {
			tokens: {
				colors,
				fonts,
				fontWeights,
			},
			semanticTokens,
		},
	},
	utilities,
})
