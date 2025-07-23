import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { isOnServer } from '~/utils/shared'

// Helper to load chapter data
async function loadChapter({
	book,
	chapter,
}: {
	book: string
	chapter: string
}) {
	// Only use Prisma on the server
	if (isOnServer()) {
		// Import here to avoid bundling Prisma in client
		const { dbClient } = await import('~/db/dbClient')
		const chapterInt = parseInt(chapter, 10)
		const bookRecord = await dbClient.book.findUnique({ where: { code: book } })
		if (!bookRecord) return null
		return await dbClient.chapter.findFirst({
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
		if (!data) throw notFound()
		return data
	},
})

function ReadChapter() {
	const params = Route.useParams()

	const chapterData = Route.useLoaderData()

	return (
		<div>
			<Link to={'/read/$book/$chapter'} params={{ book: params.book, chapter: `${parseInt(params.chapter) -1}` }}>Previous chapter</Link>
			<Link to={'/read/$book/$chapter'} params={{ book: params.book, chapter: `${parseInt(params.chapter) +1}` }}>Next chapter</Link>
			<br/>
			<div dangerouslySetInnerHTML={{ __html: chapterData.content }} />
		</div>
	)
}
