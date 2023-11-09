import { css } from 'styled-system/css'
import { mockChapterMarkup } from '~/mocks/MockChapterMarkup'

const Reader = ({
	params,
}: {
	params: {
		bookCode: string
		chapter: string
	}
}) => {
	const { bookCode, chapter } = params
	console.log({ bookCode, chapter })

	return (
		<main className={css({ color: { _osDark: 'fg.muted' } })}>
			{mockChapterMarkup}
		</main>
	)
}

export default Reader
