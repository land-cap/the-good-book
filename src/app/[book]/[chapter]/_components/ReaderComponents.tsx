import { styled } from '../../../../../styled-system/jsx'
import { css } from '../../../../../styled-system/css'
import {
	CONTENT_TYPE,
	type TQuote,
	type TVerse,
	VERSE_CONTENT_TYPE,
} from '~/models/bible-data.models'

export const ChapterTitle = styled('h1', {
	base: {
		marginY: '8',
		fontSize: { base: '3xl', lg: '4xl' },
		fontWeight: 'black',
	},
})

export const SectionTitle = styled('h2', {
	base: {
		marginY: '6',
		fontSize: { base: 'md', lg: 'xl' },
		fontWeight: 'black',
	},
})

export const VerseNumber = styled('sup', {
	base: {
		fontFamily: 'sans',
		fontWeight: 'black',
		color: 'neutral.500',
	},
})

export const JesusWords = styled('span', {
	base: {
		color: 'red.600',
	},
})

export const Verse = ({
	verse: { verseNumber, content },
}: {
	verse: TVerse
}) => (
	<>
		<VerseNumber>{verseNumber}</VerseNumber>
		&nbsp;
		{content.map(({ type, content }) =>
			type === VERSE_CONTENT_TYPE.Text ? (
				content
			) : (
				<JesusWords key={content}>{content}</JesusWords>
			),
		)}{' '}
	</>
)

export const BodyCopy = styled('p', {
	base: {
		fontSize: { base: 'md', lg: 'lg' },
		lineHeight: '2',
	},
})

export const Quote = ({
	quote: { verseNumber, content },
}: {
	quote: TQuote
}) => (
	<q
		className={css({
			display: 'block',
			fontFamily: 'mono',
		})}>
		{verseNumber ? (
			<>
				<VerseNumber>{verseNumber}</VerseNumber>
				&nbsp;
			</>
		) : null}
		{content}
	</q>
)

export const contentTypeToComponent = {
	[CONTENT_TYPE.ChapterTitle]: ChapterTitle,
	[CONTENT_TYPE.SectionTitle]: SectionTitle,
	[CONTENT_TYPE.Body]: BodyCopy,
	[CONTENT_TYPE.Quote]: Quote,
}
