import { styled } from 'styled-system/jsx'
import { macrogrid } from 'styled-system/patterns'

export const BookList_ChapterPicker = styled('ul', {
	base: macrogrid.raw({
		gridColumn: 'fullbleed',
		h: 'fit-content',
	}),
})
