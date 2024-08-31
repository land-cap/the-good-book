import { cookies } from 'next/headers'
import { type NextRequest, NextResponse } from 'next/server'

import { buildReaderUrl } from '~/hooks'
import { PREV_SESSION_READER_URL_COOKIE } from '~/layouts/ReaderLayout/readerLayout.constants'

export const config = {
	matcher: [
		/**
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico, sitemap.xml, robots.txt (metadata files)
		 * - manifest file
		 */
		{
			source:
				'/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|manifest).*)',
			missing: [
				{ type: 'header', key: 'next-router-prefetch' },
				{ type: 'header', key: 'purpose', value: 'prefetch' },
			],
			/**
			 * Match only HTML document requests.
			 */
			has: [{ type: 'header', key: 'accept', value: '.*text/html.*' }],
		},
	],
}

const handleReaderRootPath = (request: NextRequest) => {
	const prevSessionChapterUrl = cookies().get(PREV_SESSION_READER_URL_COOKIE)
		?.value

	const reqPathname = request.nextUrl.pathname

	const isReaderLayoutPath = reqPathname === '/read'

	if (!isReaderLayoutPath) {
		return
	}

	const redirectUrl =
		prevSessionChapterUrl ?? buildReaderUrl({ bookCode: 'jhn', chapter: 1 })

	return NextResponse.redirect(new URL(redirectUrl, request.url))
}

const handleRootPath = (request: NextRequest) => {
	const reqPathname = request.nextUrl.pathname

	const isReaderLayoutPath = reqPathname === '/'

	if (!isReaderLayoutPath) {
		return
	}

	return NextResponse.redirect(new URL(buildReaderUrl(), request.url))
}

export const middleware = (request: NextRequest) => {
	const handleRootPathResponse = handleRootPath(request)
	if (handleRootPathResponse) {
		return handleRootPathResponse
	}

	const handleReaderRootPathResponse = handleReaderRootPath(request)
	if (handleReaderRootPathResponse) {
		return handleReaderRootPathResponse
	}
}
