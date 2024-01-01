import { definePreset } from '@pandacss/dev'

import { globalCss } from './globalCss'
import { patterns } from './patterns'
import { semanticTokens } from './semanticTokens'
import { tokens } from './tokens'
import { utilities } from './utilities'

export const pandaPresetGoodBook = definePreset({
	conditions: {
		extend: {
			canHover: '@media (hover: hover)',
			isSafari: '@media not all and (min-resolution:.001dpcm)',
		},
	},
	globalCss,
	patterns,
	theme: {
		extend: {
			semanticTokens,
			tokens,
		},
	},
	utilities,
})
