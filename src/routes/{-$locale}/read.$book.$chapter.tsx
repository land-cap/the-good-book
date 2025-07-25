import { createFileRoute } from '@tanstack/react-router'

import { loadChapterContent, ReaderView } from '@/read/shared'

export const Route = createFileRoute('/{-$locale}/read/$book/$chapter')({
   component: ReaderView,
   loader: async ({ params }) => loadChapterContent(params),
})
