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
		my: '8',
		fontSize: '2xl',
		fontWeight: 'blacker',
		lg: { fontSize: '4xl' },
	},
})

export const SectionTitle = styled('h2', {
	base: {
		my: '4',
		fontWeight: 'bold',
		fontSize: 'lg',
		lg: { fontSize: '2xl' },
	},
})

export const VerseNumber = styled('sup', {
	base: {
		fontFamily: 'mono',
		color: 'fg.subtle',
	},
})

export const JesusWords = styled('span', {
	base: {
		color: { base: 'red.600', _osDark: 'red.400' },
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
	<p
		className={css({
			fontSize: 'sm',
			lineHeight: '2.25',
			lg: { fontSize: 'lg' },
		})}>
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
			fontSize: 'sm',
			lineHeight: '2.25',
			lg: { fontSize: 'lg' },
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
