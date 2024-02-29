import { Select as ArkSelect } from '@ark-ui/react'
import { styled } from 'styled-system/jsx'
import { hstack } from 'styled-system/patterns'

const Root = styled(ArkSelect.Root, {
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

const Label = styled(ArkSelect.Label, {
	base: {
		transition: 'colors',
		transitionDuration: 'normal',
		transitionTimingFunction: 'ease-out',
	},
})

export const Select = {
	Root,
	Label,
}
