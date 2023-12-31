import { styled } from 'styled-system/jsx'
import { macrogrid } from 'styled-system/patterns'

export const Positioner_ChapterPicker = styled('div', {
	base: { inset: '0', position: 'fixed', zIndex: '1' },
})

export const Container_ChapterPicker = styled('div', {
	base: macrogrid.raw({
		bg: 'bg.canvas',
		h: 'full',
	}),
})
