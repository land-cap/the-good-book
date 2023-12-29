import { defineGlobalStyles } from '@pandacss/dev'

export const globalCss = defineGlobalStyles({
	'*': {
		'-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)',
	},
	':root': {
		'-moz-osx-font-smoothing': 'grayscale',
		'-webkit-font-smoothing': 'antialiased',
		bg: 'bg.canvas',
		color: 'fg',
		fontFamily: 'sans',
		fontOpticalSizing: 'auto',
		fontWeight: 'regular',
	},
})
