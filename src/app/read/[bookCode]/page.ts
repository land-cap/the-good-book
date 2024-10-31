import { redirect } from 'next/navigation'

import { type TReaderPageParams } from '~/_pages'

import { buildReaderUrl } from '../lib'

const BookCodePage = ({
	params: { bookCode },
}: {
	params: Pick<TReaderPageParams, 'bookCode'>
}) => {
	redirect(buildReaderUrl({ bookCode, chapter: 1 }))
}

export default BookCodePage
