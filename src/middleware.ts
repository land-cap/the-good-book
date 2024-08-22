import { cookies } from 'next/headers'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const PREV_SESSION_CHAPTER_URL_COOKIE = 'prev-session-chapter-url'

export const middleware = (request: NextRequest) => {
	const prevSessionChapterUrl = cookies().get(PREV_SESSION_CHAPTER_URL_COOKIE)
		?.value

	console.debug({ prevSessionChapterUrl })

	if (
		prevSessionChapterUrl &&
		request.nextUrl.pathname !== prevSessionChapterUrl
	) {
		return NextResponse.redirect(new URL(prevSessionChapterUrl, request.url))
	}
}
