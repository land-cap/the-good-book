import { styled } from 'styled-system/jsx'
import { hstack, square, stack } from 'styled-system/patterns'

const Root = styled('div', {
	base: stack.raw({
		direction: 'column',
		gap: '4',
		position: 'relative',
		column: 'content',
		sm: {
			direction: 'row',
			gap: '6',
		},
	}),
})

const LabelContainer = styled('div', {
	base: hstack.raw({ justify: 'space-between', lineHeight: '1' }),
})

const Control = styled('div', { base: { flexGrow: '1' } })

const Track = styled('div', {
	base: { h: '2', bg: 'neutral.200', _osDark: { bg: 'neutral.700' } },
})

const Range = styled('div', {
	base: { h: '2', bg: 'fg.faded' },
})

const Thumb = styled('div', {
	base: square.raw({
		size: '5',
		position: 'absolute',
		top: 'calc(-6 / 16 * 1rem)',
		bg: 'bg.canvas',
		border: '2px solid currentColor',
		outline: '1.5px solid token(colors.fg.inverted)',
		transition: 'colors',
		transitionDuration: 'faster',
		transitionTimingFunction: 'ease-out',
		_osDark: {
			borderWidth: '1.5px',
			outlineWidth: '2px',
		},
		_focus: {
			bg: 'bg.muted',
			borderColor: 'fg.faded',
		},
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

export const Slider = {
	Root,
	LabelContainer,
	Control,
	Track,
	Range,
	Thumb,
	Marker,
}
