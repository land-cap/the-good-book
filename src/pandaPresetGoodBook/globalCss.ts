import { defineGlobalStyles } from '@pandacss/dev'

export const globalCss = defineGlobalStyles({
	'*': {
		'-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)',
		cursor: 'default',
		userSelect: 'none',
	},
	':focus-visible': {
		outline: 'none',
	},
	':root': {
		'-moz-osx-font-smoothing': 'grayscale',
		'-webkit-font-smoothing': 'antialiased',
		color: 'fg',
		fontFamily: 'sans',
		fontOpticalSizing: 'auto',
		fontWeight: 'regular',
	},
	'a *, button *': {
		cursor: 'inherit',
	},
	'a, button': {
		cursor: 'pointer',
	},
	'html, body': {
		touchAction: 'pan-x pan-y',
	},
	'q::before, q::before': {
		all: 'unset',
	},
})
