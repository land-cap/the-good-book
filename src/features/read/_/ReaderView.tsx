import { getRouteApi, Link } from '@tanstack/react-router'
import { button } from 'styled-system/recipes'
import { useTranslations } from 'use-intl'

const routeApi = getRouteApi('/{-$locale}/read/$book/$chapter')

export const ReaderView = () => {
   const params = routeApi.useParams()

   const chapterData = routeApi.useLoaderData()

   const t = useTranslations('reader.bottom_toolbar')

   return (
      <div>
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
