import { css } from 'styled-system/css'
import { styled } from 'styled-system/jsx'

const bodyStyles = {
	textStyle: 'md',
	lineHeight: 2.25,
	md: {
		lineHeight: 2.5,
	},
	lg: {
		lineHeight: 2.75,
	},
}

export const readerStyles = css({
	...bodyStyles,
	color: { _osDark: 'fg.muted' },

	'& *:where(.r, .note, .chapter > .label)': { display: 'none' },

	'& [class^="q"]': { mt: '4', fontFamily: 'mono' },

	'& [class^="q"] + [class^="q"]': { mt: '0' },

	'& [class^="q"] + :not([class^="q"])': { mt: '4' },

	'& .wj': { color: { base: 'red.600', _osDark: 'red.400' } },

	'& .s1 .heading': {
		display: 'block',
		my: '4',
		fontWeight: 'bold',
		textStyle: 'lg',
		lg: { textStyle: '2xl' },
	},

	'& .verse .label': {
		fontFamily: 'mono',
		fontWeight: 'light',
		color: 'fg.subtle',

		'&:after': {
			content: '" "',
			...bodyStyles,
			fontFamily: 'sans',
		},
	},
})

export const ChapterTitle = styled('h1', {
	base: {
		my: '8',
		fontSize: '2xl',
		fontWeight: 'blacker',
		lg: { fontSize: '4xl' },
	},
})
