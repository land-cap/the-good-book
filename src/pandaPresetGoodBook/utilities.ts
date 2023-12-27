import { defineConfig, defineUtility } from '@pandacss/dev'
import { type ShadowToken } from 'styled-system/tokens'

const gridColumn = defineUtility({
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

export const utilities = defineConfig({
	utilities: {
		gridColumn,
		gridTemplateColumns,
	},
}).utilities