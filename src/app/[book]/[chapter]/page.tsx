import { ChapterTitle, SectionTitle } from './_components/ReaderComponents'

const Home = ({ params }: { params: { book: string; chapter: string } }) => {
	const { book, chapter } = params
	console.log({ book, chapter })
	return (
		<main>
			<ChapterTitle>Chapter title</ChapterTitle>
			<SectionTitle>Section title</SectionTitle>
		</main>
	)
}

export default Home
