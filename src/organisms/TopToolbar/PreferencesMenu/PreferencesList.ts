import { styled } from 'styled-system/jsx'
import { flex } from 'styled-system/patterns'

export const PreferencesList = styled('form', {
	base: flex.raw({
		direction: 'column',
		gap: '4',
		column: 'content',
		overflowY: 'scroll',
		overscrollBehavior: 'contain',
		py: '8',
	}),
})
