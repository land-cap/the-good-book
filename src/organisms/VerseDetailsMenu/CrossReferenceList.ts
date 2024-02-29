import { styled } from 'styled-system/jsx'
import { macrogrid } from 'styled-system/patterns'

export const CrossReferenceList = styled('ul', {
	base: macrogrid.raw({
		rowGap: '4',
		py: '8',
		h: 'fit-content',
	}),
})
