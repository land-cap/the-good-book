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
			fontSize: 'sm',
			fontWeight: 'black',
			lineHeight: '1',
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
			sm: {
				button: {
					h: '6',
					px: '2',
					fontSize: 'xs',
				},
				icon: { w: '3', h: '3', fontSize: 'token(sizes.3)' },
				iconLeft: { w: '3', h: '3', fontSize: 'token(sizes.3)' },
				iconRight: { w: '3', h: '3', fontSize: 'token(sizes.3)' },
			},
			md: {
				button: {
					h: '8',
					px: '3',
				},
			},
			lg: {
				button: {
					h: '10',
					px: '4',
				},
			},
			xl: {
				button: {
					h: '12',
					px: '5',
				},
				icon: { w: '5', h: '5', fontSize: 'token(sizes.5)' },
				iconLeft: { w: '5', h: '5', fontSize: 'token(sizes.5)' },
				iconRight: { w: '5', h: '5', fontSize: 'token(sizes.5)' },
			},
			'2xl': {
				button: {
					h: '14',
					px: '6',
					gap: '2',
					fontSize: 'md',
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
			size: 'sm',
			css: {
				button: {
					px: '2.5',
				},
			},
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
			css: { button: { px: '4' } },
		},
		{
			rounded: true,
			iconOnly: false,
			size: 'xl',
			css: { button: { px: '5' } },
		},
		{
			rounded: true,
			iconOnly: false,
			size: '2xl',
			css: { button: { px: '6' } },
		},
		{
			iconOnly: true,
			size: 'sm',
			css: { button: { w: '6' } },
		},
		{
			iconOnly: true,
			size: 'md',
			css: { button: { w: '8' } },
		},
		{
			iconOnly: true,
			size: 'lg',
			css: { button: { w: '10' } },
		},
		{
			iconOnly: true,
			size: 'xl',
			css: { button: { w: '12' } },
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
