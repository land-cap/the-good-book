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
	html: {
        bg: 'bg.canvas',
		minH: 'calc(100% + env(safe-area-inset-top))',
		p: 'env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)',
	},
})
