import { styled } from 'styled-system/jsx'
import { flex } from 'styled-system/patterns'

export const PreferencesList = styled('form', {
	base: flex.raw({
		direction: 'column',
		gap: '8',
		column: 'content',
		overflowY: 'scroll',
		overscrollBehavior: 'contain',
		py: '8',
		sm: {
			gap: '10',
			py: '10',
		},
	}),
})
