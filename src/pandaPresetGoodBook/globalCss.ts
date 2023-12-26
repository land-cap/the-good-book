import { defineGlobalStyles } from '@pandacss/dev'

export const globalCss = defineGlobalStyles({
	':root': {
		fontFamily: 'sans',
		color: 'fg',
		bg: 'bg.surface',
		fontOpticalSizing: 'auto',
	},
})
