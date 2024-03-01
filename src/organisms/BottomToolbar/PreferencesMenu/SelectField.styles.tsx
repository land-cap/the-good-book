import { Select as ArkSelect, type SelectTriggerProps } from '@ark-ui/react'
import { css, cx } from 'styled-system/css'
import { styled } from 'styled-system/jsx'
import { hstack } from 'styled-system/patterns'
import { button } from 'styled-system/recipes'

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

const Control = styled(ArkSelect.Control, {
	base: {
		w: '1/2',
		sm: {
			w: '1/3',
		},
	},
})

const Trigger = (props: SelectTriggerProps) => (
	<ArkSelect.Trigger
		{...props}
		className={cx(
			button({ border: true, size: 'md' }),
			css({
				gap: '1.5',
				justifyContent: 'space-between',
				alignItems: 'center',
				w: 'full',
				fontWeight: 'regular',
			}),
		)}
	/>
)

const Content = styled(ArkSelect.Content, {
	base: {
		zIndex: '10',
		w: 'full',
		py: '4',
		bg: 'bg.canvas',
		borderWidth: '1px',
		borderColor: 'border.emphasized',
	},
})

const Item = styled(ArkSelect.Item, {
	base: hstack.raw({ gap: '2', justify: 'space-between', py: '2', px: '4' }),
})

export const Select = {
	Root,
	Label,
	Control,
	Trigger,
	Content,
	Item,
}
