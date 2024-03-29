import { defineRecipe } from '@pandacss/dev'

export const buttonRecipe = defineRecipe({
	className: 'button',
	base: {
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		px: '4',
		fontWeight: 'bold',
		transition: 'colors',
		transitionDuration: 'fast',
		transitionTimingFunction: 'ease-out',
		_active: { bg: 'bg.subtle', color: 'fg.subtle' },
		_canHover: { _hover: { bg: 'bg.subtle' } },
		'&[aria-disabled=true]': {
			color: 'fg.moreFaded',
			pointerEvents: 'none',
		},
	},
	variants: {
		icon: {
			true: {
				px: '0',
				h: '14',
				aspectRatio: 'square',
			},
		},
	},
})
