import { styled } from 'styled-system/jsx'
import { square, stack } from 'styled-system/patterns'

const Root = styled('div', {
	base: stack.raw({
		direction: 'column',
		gap: '4',
		position: 'relative',
		column: 'content',
		pb: 'calc(22 / 16 * 1rem)',
		sm: {
			direction: 'row',
		},
	}),
})

const Control = styled('div', { base: { flexGrow: '1' } })

const Track = styled('div', {
	base: { h: '2', bg: 'neutral.200' },
})

const Range = styled('div', {
	base: { h: '2', bg: 'fg.subtle' },
})

const Thumb = styled('div', {
	base: square.raw({
		size: '5',
		position: 'absolute',
		top: 'calc(-6 / 16 * 1rem)',
		bg: 'white',
		border: '2px solid token(colors.fg)',
		outline: '1px solid token(colors.fg.inverted)',
	}),
})

const Marker = styled('span', {
	base: {
		mt: '3',
		color: 'fg.subtle',
		fontSize: '2xs',
		lineHeight: '1',
	},
})

export const Slider = { Root, Control, Track, Range, Thumb, Marker }
