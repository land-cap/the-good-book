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
		},
	},
	globalCss,
	patterns,
	theme: {
		extend: {
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				fadeOut: {
					'0%': { opacity: '1' },
					'100%': { opacity: '0' },
				},
				fadeInBottom: {
					'0%': { opacity: '0', transform: 'translateY(token(spacing.8))' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				fadeOutBottom: {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(token(spacing.8))' },
				},
				scaleIn: {
					'0%': { scale: '0.75' },
					'100%': { scale: '1' },
				},
				scaleOut: {
					'0%': { scale: '1' },
					'100%': { scale: '0.75' },
				},
			},
			semanticTokens,
			tokens,
		},
	},
	utilities,
})
