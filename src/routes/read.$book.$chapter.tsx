import { createFileRoute, notFound } from '@tanstack/react-router'
import { dbClient } from '~/db/dbClient'

export const Route = createFileRoute('/read/$book/$chapter')({
  component: ReadChapter,
  loader: async ({ params }) => {
    const { book, chapter } = params
    const chapterInt = parseInt(chapter, 10)

    const bookRecord = await dbClient.book.findUnique({
      where: { code: book },
    })

    if (!bookRecord) {
      throw notFound()
    }

    const chapterRecord = await dbClient.chapter.findFirst({
      where: {
        book_id: bookRecord.book_id,
        chapter: chapterInt,
      },
    })

    if (!chapterRecord) {
      throw notFound()
    }

    return chapterRecord
  },
})

function ReadChapter() {
  const chapterData = Route.useLoaderData()

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: chapterData.content }} />
    </div>
  )
}
