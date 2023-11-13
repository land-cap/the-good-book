import { type RecipeVariantProps, sva } from 'styled-system/css'

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
			ml: '-0.5',
			w: '4',
			h: '4',
			fontSize: 'token(sizes.4)',
		},
		iconRight: {
			mr: '-0.5',
			w: '4',
			h: '4',
			fontSize: 'token(sizes.4)',
		},
	},
	variants: {
		visual: {
			primary: {
				button: {
					bg: { base: 'neutral.600', _hover: 'neutral.500' },
					color: 'white',
					shadow: 'sm',
				},
			},
			secondary: {
				button: {
					bg: { base: 'bg.surface', _hover: 'bg.subtle' },
					color: 'fg',
					oRingWidth: '1px',
					oRingColor: 'border.emphasized',
					oRingInset: true,
					oShadow: 'sm',
				},
			},
			soft: {
				button: {
					bg: { base: 'neutral.100', _hover: 'neutral.200' },
					color: 'neutral.600',
				},
			},
		},
		size: {
			xs: {
				button: {
					px: '2',
					py: '1',
					textStyle: 'xs',
				},
				icon: { w: '3', h: '3', fontSize: 'token(sizes.3)' },
				iconLeft: { w: '3', h: '3', fontSize: 'token(sizes.3)' },
				iconRight: { w: '3', h: '3', fontSize: 'token(sizes.3)' },
			},
			sm: {
				button: {
					px: '2',
					py: '1',
					textStyle: 'sm',
				},
			},
			md: {
				button: {
					px: '2.5',
					py: '1.5',
					textStyle: 'sm',
				},
			},
			lg: {
				button: {
					px: '3',
					py: '2',
					textStyle: 'sm',
				},
				icon: { w: '5', h: '5', fontSize: 'token(sizes.5)' },
				iconLeft: { w: '5', h: '5', fontSize: 'token(sizes.5)' },
				iconRight: { w: '5', h: '5', fontSize: 'token(sizes.5)' },
			},
			xl: {
				button: {
					px: '3',
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
		iconOnly: {
			true: {
				button: {
					placeContent: 'center',
					alignItems: 'center',
				},
			},
		},
	},
	compoundVariants: [
		{
			rounded: true,
			iconOnly: false,
			size: 'xs',
			css: {
				button: {
					px: '2.5',
				},
			},
		},
		{
			rounded: true,
			iconOnly: false,
			size: 'sm',
			css: { button: { px: '2.5' } },
		},
		{
			rounded: true,
			iconOnly: false,
			size: 'md',
			css: { button: { px: '3' } },
		},
		{
			rounded: true,
			iconOnly: false,
			size: 'lg',
			css: { button: { px: '3.5' } },
		},
		{
			rounded: true,
			iconOnly: false,
			size: 'xl',
			css: { button: { px: '4' } },
		},
		{
			iconOnly: true,
			size: 'xs',
			css: { button: { px: '1' } },
		},
		{
			iconOnly: true,
			size: 'sm',
			css: { button: { px: '1' } },
		},
		{
			iconOnly: true,
			size: 'md',
			css: { button: { px: '1.5' } },
		},
		{
			iconOnly: true,
			size: 'lg',
			css: { button: { px: '2' } },
		},
		{
			iconOnly: true,
			size: 'xl',
			css: { button: { px: '2.5' } },
		},
	],
	defaultVariants: {
		visual: 'secondary',
		size: 'md',
		rounded: false,
		iconOnly: false,
	},
})
export type ButtonVariants = RecipeVariantProps<typeof buttonRecipe>
