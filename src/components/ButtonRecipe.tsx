import { cva } from 'styled-system/css'
import { styled } from 'styled-system/jsx'

export const buttonRecipe = cva({
	base: {
		boxSizing: 'border-box',
		cursor: 'pointer',
		display: 'flex',
		rounded: 'md',
		fontWeight: 'black',
	},
	variants: {
		visual: {
			primary: {
				bg: { base: 'primary.600', _hover: 'primary.500' },
				color: 'white',
				shadow: 'sm',
			},
			secondary: {
				bg: { base: 'white', _hover: 'gray.50' },
				color: 'black',
				borderWidth: '1px',
				borderColor: 'gray.300',
				shadow: 'sm',
			},
			soft: {
				bg: { base: 'primary.50', _hover: 'primary.100' },
				color: 'primary.600',
			},
		},
		size: {
			xs: { px: 2, py: 1, fontSize: 'xs' },
			sm: { px: 2, py: 1, fontSize: 'sm' },
			md: { px: 2.5, py: 1.5, fontSize: 'sm' },
			lg: { px: 3, py: 2, fontSize: 'sm' },
			xl: { px: 3.5, py: 2.5, fontSize: 'sm' },
		},
	},
	defaultVariants: {
		visual: 'soft',
		size: 'md',
	},
})

export const Button = styled('button', buttonRecipe)
