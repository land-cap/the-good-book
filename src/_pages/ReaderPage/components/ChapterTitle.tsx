import { twMerge } from 'tailwind-merge'
import { withCapsize } from '~/components/Capped'

const H1 = withCapsize('h1')

export const ChapterTitle = ({
	bookName,
	chapter,
}: {
	bookName: string
	chapter: string
}) => (
	<H1
		fontSize="4xl"
		className={twMerge(
			'my-8 md:my-12 text-3xl md:text-4xl font-blacker',
		)}>{`${bookName} ${chapter}`}</H1>
)
