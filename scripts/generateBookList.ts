import { writeFile } from 'fs/promises'
import prismaModule from '@prisma/client'

const { PrismaClient } = prismaModule

const prisma = new PrismaClient()

const main = async () => {
   const bookList = await prisma.book.findMany({
      include: { book_name: true, book_abbreviation: true },
      orderBy: { order: 'asc' },
   })

   await writeFile('public/book-list.json', JSON.stringify(bookList, null, 2))
   console.log('book-list.json generated with', bookList.length, 'books')
}

main()
   .catch((err) => {
      console.error(err)
      process.exit(1)
   })
   .finally(() => prisma.$disconnect())
