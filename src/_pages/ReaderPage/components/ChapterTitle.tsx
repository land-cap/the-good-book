import { twMerge } from 'tailwind-merge'

export const ChapterTitle = ({
	bookName,
	chapter,
}: {
	bookName: string
	chapter: string
}) => (
	<h1
		className={twMerge('my-8 md:my-12 text-3xl md:text-4xl font-blacker')}
	>{`${bookName} ${chapter}`}</h1>
)
