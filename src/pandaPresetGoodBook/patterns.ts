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
		column: column as GRID_COLUMN,
		display: 'grid',
		gridTemplateColumns: 'subgrid',
		...props,
	}),
})

const caption = definePattern({
	transform: (props) => ({
		color: 'fg.subtle',
		fontFamily: 'mono',
		fontSize: 'caption',
		letterSpacing: '0.05em',
		lineHeight: 'token(spacing.6)',
		textTransform: 'uppercase',
		sm: {
			fontSize: 'captionLarge',
		},
		...props,
	}),
})

const underlined = definePattern({
	properties: {
		subtle: {
			type: 'boolean',
		},
	},
	transform: ({ subtle, ...props }) => ({
		textDecoration: 'underline',
		textDecorationThickness: '1px',
		textUnderlineOffset: 'token(spacing.1)',
		textDecorationColor: subtle ? 'fg.moreFaded' : 'fg',
		...props,
	}),
})

const smallText = definePattern({
	transform: (props) => ({
		color: 'fg.subtle',
		fontSize: 'sm',
		...props,
	}),
})

export const patterns = defineConfig({
	patterns: {
		caption,
		smallText,
		underlined,
		macrogrid,
		subgrid,
	},
}).patterns
