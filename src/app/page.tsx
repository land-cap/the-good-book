import { OldButton } from '~/components'
import { center } from 'styled-system/patterns'

const Home = () => (
	<main className={center({ height: '100vh' })}>
		<OldButton visual="primary">I am a button</OldButton>
	</main>
)

export default Home
