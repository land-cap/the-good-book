import { styled } from 'styled-system/jsx'
import { css } from 'styled-system/css'
import {
	CONTENT_TYPE,
	type TQuote,
	type TVerse,
	VERSE_CONTENT_TYPE,
} from '~/models/bible-data.models'

export const ChapterTitle = styled('h1', {
	base: {
		marginY: '4',
		fontSize: { base: '3xl', lg: '4xl' },
		fontWeight: 'blacker',
	},
})

export const SectionTitle = styled('h2', {
	base: {
		marginY: '0.5em',
		fontWeight: 'bold',
	},
})

export const VerseNumber = styled('sup', {
	base: {
		fontFamily: 'sans',
		fontWeight: 'bold',
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

export const Body = ({ verseList }: { verseList: TVerse[] }) => (
	<p>
		{verseList.map((verse) => (
			<Verse key={JSON.stringify(verse)} verse={verse} />
		))}
	</p>
)

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
	[CONTENT_TYPE.Body]: Body,
	[CONTENT_TYPE.Quote]: Quote,
}
