import prismaMod from '@prisma/client'

const { PrismaClient } = prismaMod
import { writeFile } from 'fs/promises'

const prisma = new PrismaClient()

const main = async () => {
	const books = await prisma.book.findMany({
		orderBy: { order: 'asc' },
		include: { chapter: { orderBy: { chapter: 'asc' } } },
	})

	const data = Object.fromEntries(
		books.map((book) => [
			book.code,
			Object.fromEntries(
				book.chapter.map((ch) => [ch.chapter, { content: ch.content }]),
			),
		]),
	)

	await writeFile('public/bible-data.json', JSON.stringify(data, null, 2))
	console.log('bible-data.json generated with', books.length, 'books')
}

main()
	.catch((err) => {
		console.error(err)
		process.exit(1)
	})
	.finally(() => prisma.$disconnect())
