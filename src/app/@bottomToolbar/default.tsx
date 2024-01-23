import { getBookListWithCache } from '~/db'
import { BottomToolbar } from '~/organisms'

export default async () => {
	const bookList = await getBookListWithCache()

	return <BottomToolbar bookList={bookList} />
}
