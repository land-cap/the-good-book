import { css } from 'styled-system/css'

const Home = () => (
	<main>
		<h1
			className={css({
				fontSize: '2xl',
				fontWeight: 'black',
				color: 'red.500',
			})}>
			Hi. I am The Good Book.
		</h1>
	</main>
)

export default Home
