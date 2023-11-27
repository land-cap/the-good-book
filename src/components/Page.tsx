import { type SystemStyleObject } from 'styled-system/types'
import { css } from 'styled-system/css'

export const setPageWidth: SystemStyleObject = {
	mx: 'auto',
	w: { base: 'full', sm: '3/4' },
	maxW: '2xl',
	px: '8',
}

export const pageCss = css({
	...setPageWidth,
	flexGrow: 1,
})
