import { defineRecipe } from '@pandacss/dev'

export const buttonRecipe = defineRecipe({
	className: 'button',
	base: {
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		px: '4',
		fontWeight: 'bold',
		lineHeight: '1',
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
		icon: {
			true: {
				px: '0',
				h: '14',
				aspectRatio: 'square',
			},
		},
	},
	defaultVariants: {
		visual: 'ghost',
		icon: false,
	},
})
