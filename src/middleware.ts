import { cookies } from 'next/headers'
import { type NextRequest, NextResponse } from 'next/server'

import { PREV_SESSION_READER_URL_COOKIE } from '~/layouts/ReaderLayout/readerLayout.constants'

export const config = {
	matcher: [
		/**
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico, sitemap.xml, robots.txt (metadata files)
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

export const middleware = (request: NextRequest) => {
	const prevSessionChapterUrl = cookies().get(PREV_SESSION_READER_URL_COOKIE)
		?.value

	const reqPathname = request.nextUrl.pathname

	const shouldRedirect =
		typeof prevSessionChapterUrl === 'string' && reqPathname === '/read'

	if (shouldRedirect) {
		return NextResponse.redirect(new URL(prevSessionChapterUrl, request.url))
	}
}
