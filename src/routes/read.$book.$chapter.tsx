import { createFileRoute, notFound } from '@tanstack/react-router'

// Helper to load chapter data
async function loadChapter({ book, chapter }: { book: string, chapter: string }) {
  // Only use Prisma on the server
  if (typeof window === 'undefined') {
    // Import here to avoid bundling Prisma in client
    const { dbClient } = await import('~/db/dbClient')
    const chapterInt = parseInt(chapter, 10)
    const bookRecord = await dbClient.book.findUnique({ where: { code: book } })
    if (!bookRecord) return null
    return await dbClient.chapter.findFirst({
      where: { book_id: bookRecord.book_id, chapter: chapterInt },
    })
  } else {
    // On the client, fetch from static JSON
    const response = await fetch('/bible-data.json')
    const bibleData = await response.json()
    // Adjust this lookup to match your JSON structure
    return bibleData[book]?.[chapter] ?? null
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
  const chapterData = Route.useLoaderData()

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: chapterData.content }} />
    </div>
  )
}
