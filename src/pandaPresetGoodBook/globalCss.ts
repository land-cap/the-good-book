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
	html: {
		h: 'calc(100% + env(safe-area-inset-top)',
		p: 'env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)',
		bg: 'red',
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
	'a *, button *': {
		cursor: 'inherit',
	},
	'a, button': {
		cursor: 'pointer',
	},

	'q::before, q::before': {
		all: 'unset',
	},
})
