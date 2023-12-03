import { Icon } from '~/components/atoms/Icon/Icon'
import { withCapsize } from '~/components/withCapsize'

const P = withCapsize('p')

export const Footer = () => (
	<footer className="flex flex-col gap-6 items-center text-center text-xs text-fgSubtle mx-auto w-full max-w-2xl px-8 my-20 md:my-32">
		<P fontSize="xs">
			© Drepturi de autor British and Foreign Bible Society (BFBS) și
			Societatea Biblică Interconfesională din România (SBIR) 1924,&nbsp;2014
			<br />© copyright British and Foreign Bible Society and the
			Interconfessional Bible Society of Romania 1924,&nbsp;2014
		</P>
		<P fontSize="xs">
			<span className="inline-flex items-center">
				Made with <Icon name="favorite" className="mx-1 text-sm" /> in Moldova
				by
			</span>{' '}
			<a
				href="https://github.com/land-cap"
				target="_blank"
				className="font-bold underline">
				land-cap
			</a>
		</P>
	</footer>
)
