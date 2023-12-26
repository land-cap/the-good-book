import { definePreset } from '@pandacss/dev'
import { globalCss } from './globalCss'
import { patterns } from './patterns'
import { semanticTokens } from './semanticTokens'
import { colors, fonts, fontWeights } from './tokens'
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
	patterns,
})
