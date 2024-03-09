import { styled } from 'styled-system/jsx'

export const FontPreview = styled('span', {
	variants: {
		font: {
			sans: {
				fontFamily: 'sans',
			},
			dyslexic: {
				fontFamily: 'dyslexic',
			},
			condensed: {
				fontFamily: 'condensed',
			},
			old_style: {
				fontFamily: 'old_style',
			},
		},
	},
})
