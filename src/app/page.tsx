import { Button } from '~/components'
import { center } from 'styled-system/patterns'

const Home = () => (
	<main className={center({ height: '100vh' })}>
		<Button visual="secondary" size="xl">
			I am a button
		</Button>
	</main>
)

export default Home
