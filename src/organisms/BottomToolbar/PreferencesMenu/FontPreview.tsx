import { styled } from 'styled-system/jsx'

export const FontPreview = styled('span', {
	variants: {
		font: {
			sans: {
				fontFamily: 'sans',
			},
			serif: {
				fontFamily: 'serif',
			},
			soft: {
				fontFamily: 'soft',
			},
			dyslexic: {
				fontFamily: 'dyslexic',
			},
		},
	},
})
