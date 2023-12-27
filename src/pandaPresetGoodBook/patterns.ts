import { defineConfig, definePattern } from '@pandacss/dev'

export enum GRID_COLUMN {
	Fullbleed = 'fullbleed',
	Content = 'content',
	MarginLeft = 'margin-left',
	MarginRight = 'margin-right',
}

const macrogrid = definePattern({
	transform: (props) => ({
		display: 'grid',
		gridAutoFlow: 'row',
		gridTemplateColumns: {
			base: `[fullbleed-start margin-left-start] 2rem [margin-left-end content-start] auto [content-end margin-right-start] 2rem [margin-right-end fullbleed-end] 0`,
			sm: '[fullbleed-start margin-left-start] 1fr [margin-left-end content-start] minmax(auto,min(calc(75% - 4rem),calc(42rem - 4rem))) [content-end margin-right-start] 1fr [margin-right-end fullbleed-end] 0',
		},
		...props,
	}),
})

const subgrid = definePattern({
	properties: {
		column: {
			type: 'enum',
			value: Object.values(GRID_COLUMN),
		},
	},
	transform: ({ column, ...props }) => ({
		display: 'grid',
		gridColumn: column as GRID_COLUMN,
		gridTemplateColumns: 'subgrid',
		...props,
	}),
})

export const patterns = defineConfig({
	patterns: {
		macrogrid,
		subgrid,
	},
}).patterns
