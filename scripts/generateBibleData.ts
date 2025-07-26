import prismaModule from '@prisma/client'
const { PrismaClient } = prismaModule

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

   await writeFile(
      'public/chapter-content-data.json',
      JSON.stringify(data, null, 2),
   )
   console.log(
      'chapter-content-data.json generated with',
      books.length,
      'books',
   )
}

main()
   .catch((err) => {
      console.error(err)
      process.exit(1)
   })
   .finally(() => prisma.$disconnect())
