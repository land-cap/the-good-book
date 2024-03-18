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
	variants: {
		disabled: {
			true: {
				cursor: 'revert',
				bg: 'bg.muted',
				_checked: {
					bg: 'bg.muted',
				},
			},
		},
	},
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
	variants: {
		disabled: {
			true: {
				cursor: 'revert',
				borderColor: 'bg.muted',
			},
		},
	},
})

const Label = styled(ArkSwitch.Label, {
	base: {
		transition: 'colors',
		transitionDuration: 'normal',
		transitionTimingFunction: 'ease-out',
	},
	variants: {
		disabled: {
			true: {
				color: 'fg.faded',
			},
		},
	},
})

const Message = styled('p', {
	base: {
		fontSize: 'xs',
		color: 'fg.subtle',
	},
})

export const Switch = {
	Root,
	Control,
	Thumb,
	Label,
	Message,
}
