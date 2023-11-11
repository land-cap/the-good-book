import { css } from 'styled-system/css'
import { styled } from 'styled-system/jsx'

export const ChapterTitle = styled('h1', {
	base: {
		my: '8',
		textStyle: '4xl',
		fontWeight: 'blacker',
		lg: { fontSize: '4xl' },
	},
})

const bodyStyles = {
	textStyle: 'md',
	lineHeight: { base: '2.25em', md: '2.5em' },
}

export const readerStyles = css({
	...bodyStyles,
	color: { _osDark: 'fg.muted' },

	'& *:where(.note, .chapter > .label)': { display: 'none' },

	'& .r': {
		my: '4',
		fontSize: 'xs',
		fontWeight: 'bold',
		color: 'fg.subtle',
	},

	'& [class^="q"]': { mt: '4', fontFamily: 'mono' },

	'& [class^="q"] + [class^="q"]': { mt: '0' },

	'& [class^="q"] + :not([class^="q"])': { mt: '4' },

	'& .wj': { color: { base: 'red.600', _osDark: 'red.400' } },

	'& *:where([class^="ms"], .mr)': {
		display: 'flex',
	},

	'& *:where([class^="ms"], .mr) .heading': {
		textStyle: 'xs',
		fontWeight: 'blacker',
		letterSpacing: '0.05em',
		lineHeight: bodyStyles.lineHeight,
		color: 'fg.subtle',
	},

	'& [class^="s"] .heading': {
		display: 'block',
		my: '4',
		fontWeight: 'bold',
		textStyle: 'xl',
	},

	'& .verse .label': {
		fontFamily: 'mono',
		fontWeight: 'bold',

		'&:after': {
			content: '" "',
			...bodyStyles,
			fontFamily: 'sans',
		},
	},
})
