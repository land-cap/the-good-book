import { definePreset } from '@pandacss/dev'
import {
	type ColorToken,
	type ShadowToken,
	type SizeToken,
} from 'styled-system/tokens'

export const pandaGoodBookPreset = definePreset({
	globalCss: {
		':root': {
			fontFamily: 'sans',
			color: 'fg',
			bg: 'bg.surface',
			fontOpticalSizing: 'auto',
			'--ring-offset-width': '0px',
		},
	},
	theme: {
		extend: {
			tokens: {
				colors: {
					black: { value: '{colors.neutral.900}' },
					white: { value: 'white' },
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
					bg: {
						canvas: {
							value: {
								base: '{colors.neutral.25}',
								_osDark: '{colors.neutral.950}',
							},
						},
						surface: {
							value: {
								base: '{colors.white}',
								_osDark: '{colors.neutral.900}',
							},
						},
						subtle: {
							value: {
								base: '{colors.neutral.50}',
								_osDark: '{colors.neutral.800}',
							},
						},
						muted: {
							value: {
								base: '{colors.neutral.100}',
								_osDark: '{colors.neutral.700}',
							},
						},
					},
					fg: {
						DEFAULT: {
							value: {
								base: '{colors.neutral.900}',
								_osDark: '{colors.white}',
							},
						},
						emphasized: {
							value: {
								base: '{colors.neutral.700}',
								_osDark: '{colors.neutral.200}',
							},
						},
						muted: {
							value: {
								base: '{colors.neutral.600}',
								_osDark: '{colors.neutral.300}',
							},
						},
						subtle: {
							value: {
								base: '{colors.neutral.500}',
								_osDark: '{colors.neutral.400}',
							},
						},
						inverted: {
							value: {
								base: '{colors.white}',
								_osDark: '{colors.neutral.950}',
							},
						},
					},
					border: {
						DEFAULT: {
							value: {
								base: '{colors.neutral.200}',
								_osDark: '{colors.neutral.800}',
							},
						},
						emphasized: {
							value: {
								base: '{colors.neutral.300}',
								_osDark: '{colors.neutral.700}',
							},
						},
						active: {
							value: {
								base: '{colors.neutral.400}',
								_osDark: '{colors.neutral.600}',
							},
						},
					},
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
