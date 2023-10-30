import { center } from 'styled-system/patterns'
import { Button } from '~/components/atoms/Button/Button'

const Home = () => (
	<main className={center({ height: '100vh' })}>
		<Button visual="secondary" label="I am a button" />
	</main>
)

export default Home
