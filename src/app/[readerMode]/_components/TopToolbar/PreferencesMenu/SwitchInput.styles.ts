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
		'--switch-track-width': 'token(spacing.12)',
	}),
})

const Control = styled(ArkSwitch.Control, {
	base: hstack.raw({
		flexShrink: 0,
		w: 'var(--switch-track-width)',
		h: 'var(--switch-track-height)',
		bg: 'neutral.200',
		_osDark: { bg: 'neutral.700' },
	}),
})

const Thumb = styled(ArkSwitch.Thumb, {
	base: square.raw({
		size: 'var(--switch-track-height)',
		position: 'relative',
		bg: 'bg.canvas',
		border: '2px solid currentColor',
		transition: 'all',
		transitionDuration: 'faster',
		transitionTimingFunction: 'ease-out',
		_osDark: {
			borderWidth: '1.5px',
		},
		_focus: {
			bg: 'bg.muted',
			borderColor: 'fg.faded',
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
