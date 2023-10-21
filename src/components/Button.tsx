import { type ComponentProps } from 'react'
import { css, cva, cx } from 'styled-system/css'
import { type SystemStyleObject } from 'styled-system/types'

export const button = cva({
	base: {
		display: 'flex',
	},
	variants: {
		visual: {
			solid: { bg: 'red.200', color: 'white' },
			outline: { borderWidth: '1px', borderColor: 'red.200' },
		},
		size: {
			sm: { padding: '4', fontSize: '12px' },
			lg: { padding: '8', fontSize: '24px' },
		},
	},
})

export const Button = ({
	css: _css,
	...props
}: ComponentProps<'button'> & { css?: SystemStyleObject }) => {
	const className = cx(button({ visual: 'outline', size: 'lg' }), css(_css))
	return <button className={className} {...props}></button>
}
