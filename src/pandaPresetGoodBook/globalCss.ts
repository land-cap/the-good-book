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
	'html, body': {
		touchAction: 'pan-x pan-y',
	},
	':root': {
		'-moz-osx-font-smoothing': 'grayscale',
		'-webkit-font-smoothing': 'antialiased',
		color: 'fg',
		fontFamily: 'sans',
		fontOpticalSizing: 'auto',
		fontWeight: 'regular',
	},
	'a, button, [role=button]': {
		cursor: 'pointer',
	},
	'a *, button *, [role=button] *': {
		cursor: 'inherit',
	},

	'q::before, q::before': {
		all: 'unset',
	},
})
