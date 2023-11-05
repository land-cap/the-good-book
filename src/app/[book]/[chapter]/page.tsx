const Home = ({ params }: { params: { book: string; chapter: string } }) => {
	const { book, chapter } = params
	return (
		<main>
			{book} {chapter}
		</main>
	)
}

export default Home
