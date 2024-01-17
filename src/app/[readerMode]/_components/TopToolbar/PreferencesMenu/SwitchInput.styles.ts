import { Switch as ArkSwitch } from '@ark-ui/react'
import { styled } from 'styled-system/jsx'
import { hstack, square } from 'styled-system/patterns'

const Root = styled(ArkSwitch.Root, {
	base: hstack.raw({
		justify: 'space-between',
		column: 'content',
		'--switch-track-diff':
			'calc(var(--switch-track-width) - var(--switch-track-height))',
		'--switch-thumb-x': 'var(--switch-track-diff)',
		'--switch-track-height': 'token(spacing.6)',
		'--switch-track-width': 'calc(token(spacing.12) - 2px)',
	}),
})

const Control = styled(ArkSwitch.Control, {
	base: hstack.raw({
		flexShrink: 0,
		cursor: 'pointer',
		w: 'var(--switch-track-width)',
		h: 'var(--switch-track-height)',
		bg: 'fg.moreFaded',
		transition: 'all',
		transitionDuration: 'fast',
		transitionTimingFunction: 'ease-out',
		_checked: {
			bg: 'fg.muted',
		},
		_osDark: { bg: 'neutral.700' },
	}),
})

const Thumb = styled(ArkSwitch.Thumb, {
	base: square.raw({
		size: 'var(--switch-track-height)',
		position: 'relative',
		cursor: 'pointer',
		bg: 'bg.canvas',
		borderWidth: '2px',
		borderStyle: 'solid',
		borderColor: 'fg.muted',
		transition: 'all',
		transitionDuration: 'fast',
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
