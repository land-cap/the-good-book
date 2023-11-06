import { definePreset } from '@pandacss/dev'
import {
	type ColorToken,
	type ShadowToken,
	type SizeToken,
} from 'styled-system/tokens'

export const capdUiPreset = definePreset({
	globalCss: {
		':root': {
			fontFamily: 'sans',
			fontOpticalSizing: 'auto',
			'--ring-offset-width': '0px',
		},
	},
	theme: {
		extend: {
			tokens: {
				colors: {
					primary: {
						50: { value: '{colors.green.50}' },
						100: { value: '{colors.green.100}' },
						200: { value: '{colors.green.200}' },
						300: { value: '{colors.green.300}' },
						400: { value: '{colors.green.400}' },
						500: { value: '{colors.green.500}' },
						600: { value: '{colors.green.600}' },
						700: { value: '{colors.green.700}' },
						800: { value: '{colors.green.800}' },
						900: { value: '{colors.green.900}' },
						950: { value: '{colors.green.950}' },
					},
				},
				fonts: {
					sans: { value: 'var(--font-sans)' },
					mono: { value: 'var(--font-mono)' },
				},
				fontWeights: { blacker: { value: '1000' } },
			},
			semanticTokens: {
				colors: {
					black: { value: '{colors.gray.900}' },
				},
			},
		},
	},
	utilities: {
		extend: {
			oShadow: {
				className: 'o_shadow',
				values: 'shadows',
				transform: (value: ShadowToken) => ({
					'--shadow': value,
				}),
			},
			oRingWidth: {
				className: 'o_ring_width',
				values: 'sizes',
				transform: (value: SizeToken) => ({
					boxShadow: `var(--ring-inset) 0 0 0 calc(${value} + var(--ring-offset-width)) var(--ring-color), var(--shadow)`,
				}),
			},
			oRingOffsetWidth: {
				className: 'o_ring_offset_width',
				values: 'sizes',
				transform: (value: SizeToken) => ({
					'--ring-offset-width': value,
				}),
			},
			oRingColor: {
				className: 'o_ring_color',
				values: 'colors',
				transform: (value: ColorToken) => ({
					'--ring-color': value,
				}),
			},
			oRingInset: {
				className: 'o_ring_inset',
				values: { type: 'boolean' },
				transform: (value) =>
					value
						? {
								'--ring-inset': 'inset',
						  }
						: {},
			},
		},
	},
})
