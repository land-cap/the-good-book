import { type ComponentProps } from 'react'
import { css, cva, cx } from 'styled-system/css'
import { type SystemStyleObject } from 'styled-system/types'

export const button = cva({
	base: {
		boxSizing: 'border-box',
		display: 'flex',
		rounded: 'md',
		fontWeight: 'black',
	},
	variants: {
		visual: {
			primary: {
				bg: { base: 'blue.600', _hover: 'blue.500' },
				color: 'white',
				shadow: 'sm',
			},
			secondary: {
				bg: { base: 'white', _hover: 'gray.50' },
				color: 'gray.900',
				borderWidth: '1px',
				borderColor: 'gray.300',
				shadow: 'sm',
			},
			soft: {
				bg: { base: 'blue.50', _hover: 'blue.100' },
				color: 'blue.600',
			},
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
	const className = cx(button({ visual: 'soft', size: 'sm' }), css(_css))
	return <button className={className} {...props}></button>
}
