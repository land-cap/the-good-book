import { styled } from '../../../../styled-system/jsx'

export const ChapterContentContainer = styled('div', {
	base: {
		'& :not(:where([data-component="Quote"], [data-component="Paragraph"])) + :where([data-component="Quote"], [data-component="Paragraph"])':
			{
				mt: 'reader-gap',
			},
		'& :not([data-component="Quote"]) + [data-component="Quote"]': {
			mt: 'reader-gap',
		},
		'& :where([data-component="LargeSectionTitle"], [data-component="LargeSectionReference"], [data-component="LargeSectionCrossReference"]) + [data-component="SectionTitle"]':
			{
				mt: 'reader-gap',
			},
		'& :where([data-component="Quote"], [data-component="Paragraph"]) + :not(*:where([data-component="Quote"], [data-component="Paragraph"]))':
			{
				mt: 'reader-gap',
			},
		'& [data-component="Quote"] + :not([data-component="Quote"])': {
			mt: 'reader-gap',
		},
		fontSize: 'base',
		gridColumn: 'content',
		lineHeight: '2em',
		md: {
			lineHeight: '2.25em',
			textStyle: 'lg',
		},
		mt: 'reader-gap',
	},
})
