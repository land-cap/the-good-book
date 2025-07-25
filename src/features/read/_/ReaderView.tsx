import { getRouteApi, Link } from '@tanstack/react-router'
import { css, cx } from 'styled-system/css'
import { hstack } from 'styled-system/patterns'
import { button } from 'styled-system/recipes'

import { Icon } from '~/ui/shared'

export const ReaderView = () => {
   const params = getRouteApi('/read/$book/$chapter').useParams()

   const chapterData = getRouteApi('/read/$book/$chapter').useLoaderData()

   return (
      <div>
         <div className={cx(hstack({ gap: 4, p: 4 }))}>
            <div
               className={css({
                  fontFamily: 'mono',
               })}
            >
               mono font
            </div>
            <div
               className={css({
                  fontFamily: 'soft',
               })}
            >
               soft font
            </div>
            <div
               className={css({
                  fontFamily: 'dyslexic',
               })}
            >
               dyslexic font
            </div>
            <div
               className={css({
                  fontFamily: 'condensed',
               })}
            >
               condensed font
            </div>
            <div
               className={css({
                  fontFamily: 'old_style',
               })}
            >
               old_style font
            </div>
            <Icon name="arrow_drop_down" size={6} />
         </div>
         <Link
            to={'/read/$book/$chapter'}
            params={{
               book: params.book,
               chapter: `${parseInt(params.chapter) - 1}`,
            }}
            className={button({ visual: 'solid', size: 'lg' })}
         >
            Previous chapter
         </Link>
         <Link
            to={'/read/$book/$chapter'}
            params={{
               book: params.book,
               chapter: `${parseInt(params.chapter) + 1}`,
            }}
            className={button({ visual: 'solid', size: 'lg' })}
         >
            Next chapter
         </Link>
         <br />
         <div dangerouslySetInnerHTML={{ __html: chapterData.content }} />
      </div>
   )
}
