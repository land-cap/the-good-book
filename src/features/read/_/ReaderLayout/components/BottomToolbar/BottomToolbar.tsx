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
               pos: 'relative',
               pb: 'safe_area_bottom',
               column: 'content',
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
                  label={t('previous_btn')}
                  direction="left"
               />
               <ChapterPickerMenuRoot />
               <ReaderNavButton
                  location={nextChapterLocation}
                  label={t('next_btn')}
                  direction="right"
               />
            </div>
         </div>
      </BottomToolbarContainer>
   )
}
