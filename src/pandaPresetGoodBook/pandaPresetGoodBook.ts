import { definePreset } from '@pandacss/dev'
import { globalCss } from './globalCss'
import { patterns } from './patterns'
import { semanticTokens } from './semanticTokens'
import { colors, fonts, fontWeights } from './tokens'
import { utilities } from './utilities'

export const pandaPresetGoodBook = definePreset({
	globalCss,
	patterns,
	theme: {
		extend: {
			semanticTokens,
			tokens: {
				colors,
				fontWeights,
				fonts,
			},
		},
	},
	utilities,
})
