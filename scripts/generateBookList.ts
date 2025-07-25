import { writeFile } from 'fs/promises'
import { getBookList } from '../src/db/dbQueries'

const main = async () => {
   const bookList = await getBookList()

   await writeFile('public/book-list.json', JSON.stringify(bookList, null, 2))
   console.log('book-list.json generated with', bookList.length, 'books')
}

main().catch((err) => {
   console.error(err)
   process.exit(1)
})
