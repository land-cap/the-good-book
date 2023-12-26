import { defineConfig, defineUtility } from '@pandacss/dev'
import { type ShadowToken } from 'styled-system/tokens'

const gridColumn = defineUtility({
	values: ['fullbleed', 'content', 'margin-left', 'margin-right'],
	transform: (value: ShadowToken) => ({
		gridColumn: value,
	}),
})

const gridTemplateColumns = defineUtility({
	values: ['subgrid'],
	transform: (value: ShadowToken) => ({
		gridTemplateColumns: value,
	}),
})

export const utilities = defineConfig({
	utilities: {
		gridColumn,
		gridTemplateColumns,
	},
}).utilities
