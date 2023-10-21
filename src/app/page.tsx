import { css } from 'styled-system/css'
import { Button } from '~/components'

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
		<Button css={{ color: 'blue.500' }}>I am a button</Button>
	</main>
)

export default Home
