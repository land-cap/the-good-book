import { type RecipeVariantProps, sva } from '../../../../styled-system/css'

const ACCENT = 'sky'
const NEUTRAL = 'neutral'

export const buttonRecipe = sva({
	slots: ['button', 'icon', 'iconLeft', 'iconRight'],
	base: {
		button: {
			cursor: 'pointer',
			display: 'inline-flex',
			alignItems: 'center',
			gap: '1.5',
			rounded: '0',
			fontWeight: 'black',
		},
		icon: {
			w: '4',
			h: '4',
			fontSize: 'token(sizes.4)',
		},
		iconLeft: {
			ml: { base: '-0.5' },
			w: '4',
			h: '4',
			fontSize: 'token(sizes.4)',
		},
		iconRight: {
			mr: { base: '-0.5' },
			w: '4',
			h: '4',
			fontSize: 'token(sizes.4)',
		},
	},
	variants: {
		visual: {
			primary: {
				button: {
					bg: { base: `${ACCENT}.600`, _hover: `${ACCENT}.500` },
					color: 'white',
					shadow: 'sm',
				},
			},
			secondary: {
				button: {
					bg: { base: 'white', _hover: `${NEUTRAL}.50` },
					color: `${NEUTRAL}.900`,
					oRingWidth: '1px',
					oRingColor: `${NEUTRAL}.300`,
					oRingInset: true,
					oShadow: 'sm',
				},
			},
			soft: {
				button: {
					bg: { base: `${ACCENT}.100`, _hover: `${ACCENT}.200` },
					color: `${ACCENT}.600`,
				},
			},
		},
		size: {
			xs: {
				button: {
					px: { base: '2', '&:has(.icon)': '1' },
					py: '1',
					textStyle: 'xs',
				},
				icon: { w: '3', h: '3', fontSize: 'token(sizes.3)' },
				iconLeft: { w: '3', h: '3', fontSize: 'token(sizes.3)' },
				iconRight: { w: '3', h: '3', fontSize: 'token(sizes.3)' },
			},
			sm: {
				button: {
					px: { base: '2', '&:has(.icon)': '1' },
					py: '1',
					textStyle: 'sm',
				},
			},
			md: {
				button: {
					px: { base: '2.5', '&:has(.icon)': '1.5' },
					py: '1.5',
					textStyle: 'sm',
				},
			},
			lg: {
				button: {
					px: { base: '2', '&:has(.icon)': '2' },
					py: '2',
					textStyle: 'sm',
				},
				icon: { w: '5', h: '5', fontSize: 'token(sizes.5)' },
				iconLeft: { w: '5', h: '5', fontSize: 'token(sizes.5)' },
				iconRight: { w: '5', h: '5', fontSize: 'token(sizes.5)' },
			},
			xl: {
				button: {
					px: { base: '3', '&:has(.icon)': '2.5' },
					py: '2.5',
					gap: '2',
					textStyle: 'sm',
				},
				icon: { w: '5', h: '5', fontSize: 'token(sizes.5)' },
				iconLeft: { w: '5', h: '5', fontSize: 'token(sizes.5)' },
				iconRight: { w: '5', h: '5', fontSize: 'token(sizes.5)' },
			},
		},
		rounded: { true: { button: { rounded: 'full' } } },
	},
	compoundVariants: [
		{
			rounded: true,
			size: 'xs',
			css: { button: { px: '2.5' } },
		},
		{
			rounded: true,
			size: 'sm',
			css: { button: { px: '2.5' } },
		},
		{
			rounded: true,
			size: 'md',
			css: { button: { px: '3' } },
		},
		{
			rounded: true,
			size: 'lg',
			css: { button: { px: '3.5' } },
		},
		{
			rounded: true,
			size: 'xl',
			css: { button: { px: '4' } },
		},
	],
	defaultVariants: {
		visual: 'secondary',
		size: 'md',
	},
})
export type ButtonVariants = RecipeVariantProps<typeof buttonRecipe>
