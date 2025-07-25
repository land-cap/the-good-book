'use client'

import { useAtomValue } from 'jotai'
import { hstack, subgrid } from 'styled-system/patterns'

import {
   nextChapterLocationAtom,
   prevChapterLocationAtom,
} from './bottomToolbar.state'
import { BottomToolbarContainer } from './BottomToolbarContainer'
import { ReaderNavButton } from './ReaderNavButton'

export const BottomToolbar = () => {
   const prevChapterLocation = useAtomValue(prevChapterLocationAtom)
   const nextChapterLocation = useAtomValue(nextChapterLocationAtom)

   return (
      <BottomToolbarContainer>
         <div
            className={subgrid({
               column: 'content',
               pos: 'relative',
               pb: 'safe_area_bottom',
            })}
         >
            {/*<ReturnFromReferenceFab />*/}
            <div
               className={hstack({
                  gap: '0',
                  h: '14',
               })}
            >
               <ReaderNavButton
                  location={prevChapterLocation}
                  direction="left"
               />
               {/*<ChapterPickerMenuRoot />*/}
               <ReaderNavButton
                  location={nextChapterLocation}
                  direction="right"
               />
            </div>
         </div>
      </BottomToolbarContainer>
   )
}
