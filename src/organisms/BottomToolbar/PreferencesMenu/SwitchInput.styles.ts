import { Switch as ArkSwitch } from '@ark-ui/react'
import { styled } from 'styled-system/jsx'
import { hstack, square } from 'styled-system/patterns'

const Root = styled(ArkSwitch.Root, {
	base: hstack.raw({
		justify: 'space-between',
		'--switch-track-diff':
			'calc(var(--switch-track-width) - var(--switch-track-height))',
		'--switch-thumb-x': 'var(--switch-track-diff)',
		'--switch-track-height': 'token(spacing.6)',
		'--switch-track-width': 'token(spacing.12)',
		column: 'content',
		h: '10',
	}),
})

const Control = styled(ArkSwitch.Control, {
	base: hstack.raw({
		flexShrink: 0,
		cursor: 'pointer',
		w: 'var(--switch-track-width)',
		h: 'var(--switch-track-height)',
		bg: 'fg.moreFaded',
		transition: 'colors',
		transitionDuration: 'normal',
		transitionTimingFunction: 'ease-out',
		_checked: {
			bg: 'fg.muted',
		},
		_osDark: { bg: 'bg.muted' },
	}),
})

const Thumb = styled(ArkSwitch.Thumb, {
	base: square.raw({
		size: 'var(--switch-track-height)',
		pos: 'transform',
		cursor: 'pointer',
		bg: 'bg.canvas',
		borderWidth: '2px',
		borderStyle: 'solid',
		borderColor: 'fg.muted',
		transition: 'all',
		transitionDuration: 'normal',
		transitionTimingFunction: 'ease-out',
		_osDark: {
			borderWidth: '1.5px',
		},
		_checked: {
			transform: 'translateX(var(--switch-thumb-x))',
		},
	}),
})

const Label = styled(ArkSwitch.Label, { base: {} })

export const Switch = {
	Root,
	Control,
	Thumb,
	Label,
}
