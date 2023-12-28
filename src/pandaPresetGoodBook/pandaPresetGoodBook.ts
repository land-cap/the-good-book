import { definePreset } from '@pandacss/dev'
import { globalCss } from './globalCss'
import { patterns } from './patterns'
import { semanticTokens } from './semanticTokens'
import { colors, fonts, spacing } from './tokens'
import { utilities } from './utilities'

export const pandaPresetGoodBook = definePreset({
	conditions: {
		extend: {
			canHover: '@media (hover: hover)',
		},
	},
	globalCss,
	patterns,
	theme: {
		extend: {
			semanticTokens,
			tokens: {
				colors,
				fonts,
				spacing,
			},
		},
	},
	utilities,
})
