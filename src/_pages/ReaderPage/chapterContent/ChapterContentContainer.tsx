import { styled } from 'styled-system/jsx'

export const ChapterContentContainer = styled('div', {
	base: {
		'& :not(:where([data-component="Quote"], [data-component="Paragraph"])) + :where([data-component="Quote"], [data-component="Paragraph"])':
			{
				mt: 'reader_gap',
			},
		'& :not([data-component="Quote"]) + [data-component="Quote"]': {
			mt: 'reader_gap',
		},
		'& :where([data-component="LargeSectionTitle"], [data-component="LargeSectionReference"], [data-component="LargeSectionCrossReference"]) + [data-component="SectionTitle"]':
			{
				mt: 'reader_gap',
			},
		'& :where([data-component="Quote"], [data-component="Paragraph"]) + :not(*:where([data-component="Quote"], [data-component="Paragraph"]))':
			{
				mt: 'reader_gap',
			},
		'& [data-component="FancyAside"] + [data-component="LargeSectionTitle"]': {
			mt: 'reader_gap',
		},
		'& [data-component="LargeSectionTitle"] + [data-component="FancyAside"]': {
			mt: 'reader_gap',
		},
		'& [data-component="Quote"] + :not([data-component="Quote"])': {
			mt: 'reader_gap',
		},
		column: 'content',
		fontSize: 'regular',
		lineHeight: '2em',
		md: {
			lineHeight: '2.25em',
			textStyle: 'lg',
		},
		mt: 'reader_gap',
	},
})
