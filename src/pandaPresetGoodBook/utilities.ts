import { defineConfig, defineUtility } from '@pandacss/dev'
import {
	type ColorToken,
	type ShadowToken,
	type SizeToken,
} from 'styled-system/tokens'

const oShadow = defineUtility({
	className: 'o_shadow',
	values: 'shadows',
	transform: (value: ShadowToken) => ({
		'--shadow': value,
	}),
})

const oRingWidth = defineUtility({
	className: 'o_ring_width',
	values: 'sizes',
	transform: (value: SizeToken) => ({
		boxShadow: `1px 0 0 0 calc(${value} + var(--ring-offset-width)) var(--ring-color), var(--shadow)`,
	}),
})

const oRingOffsetWidth = defineUtility({
	className: 'o_ring_offset_width',
	values: 'sizes',
	transform: (value: SizeToken) => ({
		'--ring-offset-width': value,
	}),
})

const oRingColor = defineUtility({
	className: 'o_ring_color',
	values: 'colors',
	transform: (value: ColorToken) => ({
		'--ring-color': value,
	}),
})

const oRingInset = defineUtility({
	className: 'o_ring_inset',
	values: { type: 'boolean' },
	transform: (value) =>
		value
			? {
					'--ring-inset': 'inset',
			  }
			: {},
})

export const utilities = defineConfig({
	utilities: {
		extend: {
			oShadow,
			oRingWidth,
			oRingOffsetWidth,
			oRingColor,
			oRingInset,
		},
	},
}).utilities
