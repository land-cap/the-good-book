import { Link, linkOptions } from '@tanstack/react-router'
import { useAtomValue, useSetAtom } from 'jotai'
import { range } from 'ramda'
import { useMemo } from 'react'

import { bookAtom, chapterAtom } from '../../bottomToolbar.state'
import { ChapterListHeader } from './ChapterListHeader'
import {
   selectedBookAtom,
   showChapterPickerMenu,
} from './chapterPickerMenu.state'
import {
   ChapterList,
   ChapterListItem,
   chapterListItemLinkCls,
} from './ChapterPickerMenu.styles'
import { useComputeChapterListItemHeight } from './useComputeChapterListItemHeight'

export const ChapterTabView = () => {
   const selectedBook = useAtomValue(selectedBookAtom)

   const chapterList = useMemo(
      () =>
         selectedBook.chapter_count
            ? range(1)(selectedBook.chapter_count + 1)
            : [],
      [selectedBook],
   )

   const { chapterListItemRef, chapterListItemHeight } =
      useComputeChapterListItemHeight()

   const setShowChapterPickerMenu = useSetAtom(showChapterPickerMenu)

   const currBook = useAtomValue(bookAtom)
   const currChapter = useAtomValue(chapterAtom)

   return (
      <ChapterList
         style={{
            //@ts-expect-error custom property
            '--list-item-height': `${chapterListItemHeight}px`,
         }}
      >
         <ChapterListHeader chapterListItemHeight={chapterListItemHeight}>
            {selectedBook.book_name!.value}
         </ChapterListHeader>
         {chapterList?.map((chapter) => {
            const isCurrChapter =
               selectedBook.id === currBook.id && chapter === currChapter

            const chapterLinkOptions = linkOptions({
               to: '/{-$locale}/read/$book/$chapter',
               params: { book: selectedBook.code, chapter: `${chapter}` },
            })

            return (
               <ChapterListItem
                  key={chapter}
                  ref={chapter === 1 ? chapterListItemRef : null}
                  isCurrChapter={isCurrChapter}
                  onClick={() => setShowChapterPickerMenu(false)}
               >
                  <Link
                     {...chapterLinkOptions}
                     className={chapterListItemLinkCls}
                  >
                     {chapter}
                  </Link>
               </ChapterListItem>
            )
         })}
      </ChapterList>
   )
}
