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
				borderColor: 'border.emphasized',
				_active: { borderColor: 'fg' },
				_canHover: { _hover: { borderColor: 'fg' } },
			},
		},
		subtle: {
			true: {
				color: 'fg.subtle',
				_active: { color: 'fg' },
				_canHover: { _hover: { color: 'fg' } },
			},
		},
		size: {
			small: {
				h: '8',
				px: '3',
				fontSize: 'sm',
			},
			large: {
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

	defaultVariants: {
		visual: 'ghost',
		size: 'large',
		weight: 'bold',
	},
})
