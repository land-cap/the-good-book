import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { isOnServer } from '~/utils/shared'

async function loadChapter({
														 book,
														 chapter,
													 }: {
	book: string
	chapter: string
}) {
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
	component: ReadChapter,
	loader: async ({ params }) => {
		const data = await loadChapter(params)
		if (!data) {
			throw notFound()
		}
		return data
	},
})

function ReadChapter() {
	const params = Route.useParams()

	const chapterData = Route.useLoaderData()

	return (
		<div>
			<Link to={'/read/$book/$chapter'} params={{ book: params.book, chapter: `${parseInt(params.chapter) - 1}` }}>Previous
				chapter</Link>
			<Link to={'/read/$book/$chapter'} params={{ book: params.book, chapter: `${parseInt(params.chapter) + 1}` }}>Next
				chapter</Link>
			<br />
			<div dangerouslySetInnerHTML={{ __html: chapterData.content }} />
		</div>
	)
}
