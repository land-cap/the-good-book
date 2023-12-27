import { Dialog } from '@ark-ui/react'
import { css } from 'styled-system/css'
import { center, flex } from 'styled-system/patterns'
import { Icon, Separator } from '~/components'

const ButtonClose = () => (
	<Dialog.CloseTrigger
		className={center({
			_active: { color: 'fg.subtle' },
			_hover: { bg: 'bg.subtle' },
			h: '14',
			transition: 'colors',
			transitionDuration: 'fast',
			transitionTimingFunction: 'ease-in-out',
			w: '14',
		})}
	>
		<Icon size={6} name="close" />
	</Dialog.CloseTrigger>
)

export const ChapterPickerHeader = () => (
	<div className={css({ gridColumn: 'content' })}>
		<div
			className={flex({ align: 'center', h: '14', justify: 'space-between' })}
		>
			<Dialog.Title className={css({ fontWeight: 'bold' })}>Book</Dialog.Title>
			<ButtonClose />
		</div>
		<Separator />
	</div>
)
