import { type ComponentProps } from 'react'
import { css } from 'styled-system/css'
import { type SystemStyleObject } from 'styled-system/types'

const buttonStyle: SystemStyleObject = {
	rounded: 'full',
	color: 'white',
	bg: 'blue.500',
}

export const Button = ({
	css: _css,
	...props
}: ComponentProps<'button'> & { css?: SystemStyleObject }) => {
	const className = css(buttonStyle, _css)
	return <button className={className} {...props}></button>
}
