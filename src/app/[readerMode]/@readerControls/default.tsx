import { ReaderControls } from '~/components'
import { getBookList } from '~/db'

const ReaderControlsPage = async () => {
	const bookList = await getBookList()

	return <ReaderControls bookList={bookList} />
}

export default ReaderControlsPage
