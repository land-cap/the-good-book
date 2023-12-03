import { twMerge } from 'tailwind-merge'
import { withCapsize } from '~/components/withCapsize'

const H1 = withCapsize('h1')

export const ChapterTitle = ({
	bookName,
	chapter,
}: {
	bookName: string
	chapter: string
}) => (
	<H1
		fontSize={{ base: '4xl', md: '5xl' }}
		className={twMerge(
			'my-8 md:my-12 text-3xl md:text-4xl font-blacker',
		)}>{`${bookName} ${chapter}`}</H1>
)
