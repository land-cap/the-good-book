import { styled } from 'styled-system/jsx'
import { type SystemStyleObject } from 'styled-system/types'

export const setPageWidth: SystemStyleObject = {
	mx: 'auto',
	w: { base: 'full', sm: '3/4' },
	maxW: '2xl',
	px: '8',
}

export const Page = styled('div', {
	base: {
		...setPageWidth,
		flexGrow: 1,
	},
})
