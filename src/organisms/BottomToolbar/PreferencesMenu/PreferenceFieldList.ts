import { styled } from 'styled-system/jsx'
import { flex } from 'styled-system/patterns'

export const PreferenceFieldList = styled('form', {
	base: flex.raw({
		direction: 'column',
		gap: '8',
		column: 'content',
		py: '8',
	}),
})
