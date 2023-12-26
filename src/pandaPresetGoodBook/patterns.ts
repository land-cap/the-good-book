import { defineConfig, definePattern } from '@pandacss/dev'

const macrogrid = definePattern({
	transform: () => ({
		display: 'grid',
		gridAutoFlow: 'row',
		gridTemplateColumns: {
			base: `[fullbleed-start margin-left-start] 2rem [margin-left-end content-start] auto [content-end margin-right-start] 2rem [margin-right-end fullbleed-end] 0`,
			sm: '[fullbleed-start margin-left-start] 1fr [margin-left-end content-start] minmax(auto,min(calc(75% - 4rem),calc(42rem - 4rem))) [content-end margin-right-start] 1fr [margin-right-end fullbleed-end] 0',
		},
	}),
})

const subgrid = definePattern({
	properties: {
		column: {
			type: 'enum',
			value: ['fullbleed', 'content', 'margin-left', 'margin-right'],
		},
	},
	transform: ({ column }) => ({
		display: 'grid',
		gridTemplateColumns: 'subgrid',
		gridColumn: column,
	}),
})

export const patterns = defineConfig({
	patterns: {
		macrogrid,
		subgrid,
	},
}).patterns
