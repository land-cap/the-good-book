import { cva, cx, type RecipeVariantProps } from 'styled-system/css'

export const iconRecipe = cva({
	base: {
		fontFamily: 'Material Symbols Sharp',
		fontWeight: 'normal',
		fontStyle: 'normal',
		lineHeight: '1',
		letterSpacing: 'normal',
		textTransform: 'none',
		display: 'flex',
		whiteSpace: 'nowrap',
		wordWrap: 'normal',
		direction: 'ltr',
		// @ts-ignore
		'-webkit-font-feature-settings': "'liga'",
		'-webkit-font-smoothing': 'antialiased',
		'font-variation-settings': "'FILL' 1, 'wght' 600",
	},
	variants: {
		size: {
			3: {
				w: '3',
				h: '3',
				fontSize: 'token(sizes.3)',
			},
			4: {
				w: '4',
				h: '4',
				fontSize: 'token(sizes.4)',
			},
			5: { w: '5', h: '5', fontSize: 'token(sizes.5)' },
			6: { w: '6', h: '6', fontSize: 'token(sizes.6)' },
			10: { w: '10', h: '10', fontSize: 'token(sizes.10)' },
			12: { w: '12', h: '12', fontSize: 'token(sizes.12)' },
		},
	},
})

export type IconVariants = RecipeVariantProps<typeof iconRecipe>

export type IconProps = {
	name: string
	className?: string
} & IconVariants

export const Icon = ({ name, className, ...variants }: IconProps) => (
	<span className={cx(iconRecipe(variants), className)}>{name}</span>
)
