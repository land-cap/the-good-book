import { cva } from 'styled-system/css'
import { styled } from 'styled-system/jsx'

export const buttonStyle = cva({
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
			xs: { px: 2, py: 1, fontSize: 'xs' },
			sm: { px: 2, py: 1, fontSize: 'sm' },
			md: { px: 2.5, py: 1.5, fontSize: 'sm' },
			lg: { px: 3, py: 2, fontSize: 'sm' },
			xl: { px: 3.5, py: 2.5, fontSize: 'sm' },
		},
		rounded: {
			true: { rounded: 'full' },
		},
	},
})

export const Button = styled('button', buttonStyle)
