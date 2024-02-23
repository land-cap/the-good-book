import { definePreset } from '@pandacss/dev'

import { buttonRecipe } from '~/pandaPresetGoodBook/recipes/buttonRecipe'

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
					'100%': { opacity: 'var(--opacity,1)' },
				},
				fadeOut: {
					'0%': { opacity: 'var(--opacity,1)' },
					'100%': { opacity: '0' },
				},
				fadeInBottom: {
					'0%': { opacity: '0', transform: 'translateY(token(spacing.4))' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				fadeOutBottom: {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(token(spacing.4))' },
				},
				scaleIn: {
					'0%': { scale: '0.75' },
					'100%': { scale: '1' },
				},
				scaleOut: {
					'0%': { scale: '1' },
					'100%': { scale: '0.75' },
				},
				flashBackground: {
					'0%': { backgroundColor: 'token(colors.bg.highlight)' },
					'100%': { backgroundColor: 'transparent' },
				},
			},
			semanticTokens,
			tokens,
			recipes: {
				button: buttonRecipe,
			},
		},
	},
	utilities,
})
