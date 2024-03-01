import { defineRecipe } from '@pandacss/dev'

export const buttonRecipe = defineRecipe({
	className: 'button',
	base: {
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		fontWeight: 'bold',
		lineHeight: 'normal',
		transition: 'colors',
		transitionDuration: 'fast',
		transitionTimingFunction: 'ease-out',
		'& *': {
			transition: 'colors',
			transitionDuration: 'fast',
			transitionTimingFunction: 'ease-out',
		},
		'&[aria-disabled=true]': {
			pointerEvents: 'none',
		},
	},

	variants: {
		visual: {
			ghost: {
				bg: 'bg.canvas',
				_active: { bg: 'bg.subtle', color: 'fg.subtle' },
				_canHover: { _hover: { bg: 'bg.subtle' } },
				'&[aria-disabled=true]': {
					color: 'fg.moreFaded',
				},
			},
			solid: {
				bg: 'bg.muted',
				_active: { bg: 'bg.more_muted', color: 'fg.subtle' },
				_canHover: { _hover: { bg: 'bg.more_muted' } },
				'&[aria-disabled=true]': {
					color: 'fg.faded',
				},
			},
		},
		border: {
			true: {
				borderWidth: '1px',
				borderColor: 'border',
				_active: { borderColor: 'fg' },
				_canHover: { _hover: { borderColor: 'fg' } },
			},
		},
		muted: {
			true: {
				color: 'fg.muted',
				_active: { color: 'fg' },
			},
		},
		size: {
			sm: {
				h: '8',
				px: '3',
				fontSize: 'xs',
			},
			md: {
				h: '10',
				px: '4',
			},
			lg: {
				h: '14',
				px: '4',
			},
		},
		icon: {
			true: {
				px: '0',
				aspectRatio: 'square',
			},
		},
		weight: {
			regular: {
				fontWeight: 'regular',
			},
			bold: {
				fontWeight: 'bold',
			},
		},
	},

	compoundVariants: [
		{
			visual: 'solid',
			muted: true,
			css: {
				_active: { color: 'fg' },
			},
		},
	],

	defaultVariants: {
		visual: 'ghost',
		size: 'lg',
		weight: 'bold',
	},
})
