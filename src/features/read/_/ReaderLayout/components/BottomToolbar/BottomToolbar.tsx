import { useAtomValue } from 'jotai'
import { hstack, subgrid } from 'styled-system/patterns'
import { useTranslations } from 'use-intl'

import {
   nextChapterLocationAtom,
   prevChapterLocationAtom,
} from './bottomToolbar.state'
import { BottomToolbarContainer } from './BottomToolbarContainer'
import { ChapterPickerMenuRoot } from './ChapterPickerMenu/ChapterPickerMenuRoot'
import { ReaderNavButton } from './ReaderNavButton'

export const BottomToolbar = () => {
   const t = useTranslations('reader.bottom_toolbar')

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
            {/* TODO: implement ReturnFromReferenceFab */}
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
                  label={t('previous_btn')}
               />
               <ChapterPickerMenuRoot />
               <ReaderNavButton
                  location={nextChapterLocation}
                  direction="right"
                  label={t('next_btn')}
               />
            </div>
         </div>
      </BottomToolbarContainer>
   )
}
