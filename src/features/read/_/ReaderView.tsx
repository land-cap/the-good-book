import { getRouteApi, Link } from '@tanstack/react-router'
import { css, cx } from 'styled-system/css'
import { hstack } from 'styled-system/patterns'
import { button } from 'styled-system/recipes'
import { useTranslations } from 'use-intl'

import { Icon } from '~/ui/shared'

const routeApi = getRouteApi('/{-$locale}/read/$book/$chapter')

export const ReaderView = () => {
   const params = routeApi.useParams()

   const chapterData = routeApi.useLoaderData()

   const t = useTranslations('reader.bottom_toolbar')

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
            to={'/{-$locale}/read/$book/$chapter'}
            params={{
               ...params,
               chapter: `${parseInt(params.chapter) - 1}`,
            }}
            className={button({ visual: 'solid', size: 'lg' })}
         >
            {t('previous_btn')}
         </Link>
         <Link
            to={'/{-$locale}/read/$book/$chapter'}
            params={{
               ...params,
               chapter: `${parseInt(params.chapter) + 1}`,
            }}
            className={button({ visual: 'solid', size: 'lg' })}
         >
            {t('next_btn')}
         </Link>
         <br />
         <div dangerouslySetInnerHTML={{ __html: chapterData.content }} />
      </div>
   )
}
