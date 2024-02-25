import { styled } from 'styled-system/jsx'
import { flex } from 'styled-system/patterns'

export const CrossReferenceList = styled('ul', {
	base: flex.raw({
		direction: 'column',
		gap: '4',
		column: 'content',
		my: '8',
	}),
})
