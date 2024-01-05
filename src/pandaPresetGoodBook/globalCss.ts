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
		'--font-mono': 'Roboto Mono',
		'--font-sans': 'Roboto Flex',
		'-moz-osx-font-smoothing': 'grayscale',
		'-webkit-font-smoothing': 'antialiased',
		bg: 'bg.canvas',
		color: 'fg',
		fontFamily: 'sans',
		fontOpticalSizing: 'auto',
		fontStretch: '62.5',
		fontWeight: 'regular',
	},
	'a *, button *': {
		cursor: 'inherit',
	},
	'a, button': {
		cursor: 'pointer',
	},
	'html, body': {
		bg: 'bg.canvas',
		touchAction: 'pan-x pan-y',
	},
	'q::before, q::before': {
		all: 'unset',
	},
})
