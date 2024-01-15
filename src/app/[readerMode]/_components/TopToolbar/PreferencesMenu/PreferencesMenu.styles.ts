import { styled } from 'styled-system/jsx'
import { macrogrid } from 'styled-system/patterns'

export const PreferencesList = styled('form', {
	base: macrogrid.raw({
		rowGap: '6',
		column: 'fullbleed',
		py: '6',
		sm: {
			rowGap: '8',
			py: '8',
		},
	}),
})
