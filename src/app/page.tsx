import { center } from 'styled-system/patterns'
import { Button } from '~/components/atoms/Button/Button'

const Home = () => (
	<main className={center({ height: '100vh' })}>
		<Button visual="soft" label="I am a button" leftIcon="favorite" />
	</main>
)

export default Home
