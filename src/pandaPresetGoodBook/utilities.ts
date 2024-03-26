import { defineConfig, defineUtility } from '@pandacss/dev'
import { type ShadowToken } from 'styled-system/tokens'

const forceGpu = defineUtility({
	transform(value) {
		if (!value) return {}
		return {
			'-webkit-transform': 'translateZ(0)',
		}
	},
	values: { type: 'boolean' },
})

const column = defineUtility({
	transform: (value: ShadowToken) => ({
		gridColumn: value,
	}),
	values: ['fullbleed', 'content', 'margin-left', 'margin-right'],
})

const gridTemplateColumns = defineUtility({
	transform: (value: ShadowToken) => ({
		gridTemplateColumns: value,
	}),
	values: ['subgrid'],
})

type TGradientDirection = 'toBottom' | 'toTop' | 'toLeft' | 'toRight'

const fadeGradient = defineUtility({
	transform(value: TGradientDirection) {
		if (!value) return {}
		return {
			background: `linear-gradient(
    ${value.replace('to', 'to ').toLowerCase()},
    hsla(0, 0%, 100%, 0) 0%,
    hsla(0, 0%, 100%, 0.013) 8.1%,
    hsla(0, 0%, 100%, 0.049) 15.5%,
    hsla(0, 0%, 100%, 0.104) 22.5%,
    hsla(0, 0%, 100%, 0.175) 29%,
    hsla(0, 0%, 100%, 0.259) 35.3%,
    hsla(0, 0%, 100%, 0.352) 41.2%,
    hsla(0, 0%, 100%, 0.45) 47.1%,
    hsla(0, 0%, 100%, 0.55) 52.9%,
    hsla(0, 0%, 100%, 0.648) 58.8%,
    hsla(0, 0%, 100%, 0.741) 64.7%,
    hsla(0, 0%, 100%, 0.825) 71%,
    hsla(0, 0%, 100%, 0.896) 77.5%,
    hsla(0, 0%, 100%, 0.951) 84.5%,
    hsla(0, 0%, 100%, 0.987) 91.9%,
    hsl(0, 0%, 100%) 100%
  )`,
		}
	},
	values: ['toBottom', 'toTop', 'toLeft', 'toRight'],
})

export const utilities = defineConfig({
	utilities: {
		column,
		forceGpu,
		gridTemplateColumns,
		fadeGradient,
	},
}).utilities
