import { styled } from 'styled-system/jsx'

export const FontPreview = styled('span', {
	variants: {
		font: {
			sans: {
				fontFamily: 'sans',
			},
			clean: {
				fontFamily: 'clean',
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
			mono: {
				fontFamily: 'mono',
			},
		},
	},
})
