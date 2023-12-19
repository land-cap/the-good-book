import { Icon } from '~/components/atoms/Icon/Icon'

export const Footer = () => (
	<footer className="mx-auto my-20 flex w-full max-w-2xl flex-col items-center gap-12 px-8 text-center text-xs leading-relaxed text-fgSubtle md:my-32">
		<div className="flex flex-col gap-4">
			<p>
				© Drepturi de autor British and Foreign Bible Society (BFBS) și
				Societatea Biblică Interconfesională din România (SBIR) 1924,&nbsp;2014
			</p>
			<p>
				© copyright British and Foreign Bible Society and the Interconfessional
				Bible Society of Romania 1924,&nbsp;2014
			</p>
		</div>
		<p>
			<span className="inline-flex items-center">
				Made with{' '}
				<Icon name="favorite" fill size={16} className="mx-1 text-fgFaded" /> in
				Moldova by
			</span>{' '}
			<a
				href="https://github.com/land-cap"
				target="_blank"
				className="font-bold underline"
			>
				land-cap
			</a>
		</p>
	</footer>
)
