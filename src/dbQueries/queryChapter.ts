import { dbClient } from '~/dbQueries/dbClient'

export const queryChapter = async (book_id: number, chapter: number) =>
	await dbClient.vdc_chapter.findFirst({ where: { book_id, chapter } })
