const Home = ({ params }: { params: { book: string; chapter: string } }) => {
	const { book, chapter } = params
	console.log({ book, chapter })
	return <main></main>
}

export default Home
