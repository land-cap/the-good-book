import { createFileRoute } from '@tanstack/react-router'
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
      // Handle book not found
      return { content: 'Book not found' }
    }

    const chapterRecord = await dbClient.chapter.findFirst({
      where: {
        book_id: bookRecord.book_id,
        chapter: chapterInt,
      },
    })

    return chapterRecord
  },
})

function ReadChapter() {
  const chapterData = Route.useLoaderData()

  if (!chapterData) {
    return <div>Chapter not found</div>
  }

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: chapterData.content }} />
    </div>
  )
}
