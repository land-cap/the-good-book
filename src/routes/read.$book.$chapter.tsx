import { createFileRoute, notFound } from '@tanstack/react-router'
import { isOnServer } from '~/utils/shared'
import { ReaderView } from '@/read/shared'

const loadChapter = async ({
														 book,
														 chapter,
													 }: {
	book: string
	chapter: string
}) => {
	if (isOnServer()) {
		const { dbClient } = await import('~/db/dbClient')
		const chapterInt = parseInt(chapter, 10)
		const bookRecord = await dbClient.book.findUnique({ where: { code: book } })
		if (!bookRecord) {
			return null
		}
		return dbClient.chapter.findFirst({
			where: { book_id: bookRecord.book_id, chapter: chapterInt },
		})
	} else {
		const { getChapterFromCache } = await import('~/utils/shared')
		return getChapterFromCache(book, chapter)
	}
}

export const Route = createFileRoute('/read/$book/$chapter')({
	component: ReaderView,
	loader: async ({ params }) => {
		const data = await loadChapter(params)
		if (!data) {
			// eslint-disable-next-line @typescript-eslint/only-throw-error
			 throw notFound()
		}
		return data
	},
})

