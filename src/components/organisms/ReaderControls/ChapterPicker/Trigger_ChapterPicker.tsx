import { styled } from 'styled-system/jsx'
import { center } from 'styled-system/patterns'

export const Trigger_ChapterPicker = styled('button', {
	base: center.raw({
		_active: { bg: 'bg.subtle', color: 'fg.subtle' },
		_hover: { bg: 'bg.subtle' },
		flexGrow: 1,
		fontWeight: 'bold',
		h: 'full',
		px: '4',
		transition: 'colors',
		transitionDuration: 'fast',
		transitionTimingFunction: 'ease-in-out',
	}),
})
