import { styled } from 'styled-system/jsx'
import { macrogrid } from 'styled-system/patterns'

export const PreferencesList = styled('form', {
	base: macrogrid.raw({
		rowGap: '8',
		column: 'fullbleed',
		overflowY: 'scroll',
		overscrollBehavior: 'contain',
		py: '8',
		sm: {
			rowGap: '10',
			py: '10',
		},
	}),
})
