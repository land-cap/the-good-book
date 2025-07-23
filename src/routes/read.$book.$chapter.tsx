import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { isOnServer } from '~/utils/shared'
import { getChapterFromCache } from '~/utils/shared'

type LoadChapterArgs = { book: string; chapter: string }

export const Route = createFileRoute('/read/$book/$chapter')({
	beforeLoad: async ({ params }) => {
		if (isOnServer()) {
			const { loadChapterFromDb } = await import('~/utils/server')
			return { loadChapter: (args: LoadChapterArgs) => loadChapterFromDb(args) }
		} else {
			return { loadChapter: (args: LoadChapterArgs) => getChapterFromCache(args.book, args.chapter) }
		}
	},

	loader: async ({ context, params }) => {
		const data = await context.loadChapter(params)
		if (!data) throw notFound()
		return data
	},
})

function ReadChapter() {
	const params = Route.useParams()
	const chapterData = Route.useLoaderData()

	return (
		<div>
			<Link
				to="/read/$book/$chapter"
				params={{ book: params.book, chapter: `${parseInt(params.chapter) - 1}` }}
			>
				Previous chapter
			</Link>
			<Link
				to="/read/$book/$chapter"
				params={{ book: params.book, chapter: `${parseInt(params.chapter) + 1}` }}
			>
				Next chapter
			</Link>
			<br />
			<div dangerouslySetInnerHTML={{ __html: chapterData.content }} />
		</div>
	)
}