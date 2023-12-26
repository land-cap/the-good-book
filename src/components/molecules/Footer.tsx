import { Icon } from '~/components/atoms/Icon/Icon'

export const Footer = () => (
	<footer className="col-[content] mx-auto mb-[calc(5rem_+_3.5rem_+_env(safe-area-inset-bottom,0))] mt-20 w-full text-center text-xs leading-relaxed text-fgSubtle sm:my-32 sm:mb-[calc(8rem_+_4rem_+_env(safe-area-inset-bottom,0))]">
		<p className="flex place-content-center items-center">
			Designed & developed with&#32;
			<Icon
				name="favorite"
				fill
				size={16}
				className="mx-1 inline-flex text-fgFaded"
			/>
			by&nbsp;
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
