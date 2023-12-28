import { Dialog } from '@ark-ui/react'
import { type ReactNode } from 'react'
import { center } from 'styled-system/patterns'

export const ChapterPickerTrigger = ({ children }: { children: ReactNode }) => (
	<Dialog.Trigger
		className={center({
			_active: { bg: 'bg.subtle', color: 'fg.subtle' },
			_hover: { bg: 'bg.subtle' },
			flexGrow: 1,
			fontWeight: 'bold',
			h: 'full',
			px: '4',
			transition: 'colors',
			transitionDuration: 'fast',
			transitionTimingFunction: 'ease-in-out',
		})}
	>
		{children}
	</Dialog.Trigger>
)
