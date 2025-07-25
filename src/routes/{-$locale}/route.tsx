import { createFileRoute, getRouteApi, Outlet } from '@tanstack/react-router'
import messages from 'messages/ro.json'
import { IntlProvider, Locale } from 'use-intl'

import { DEFAULT_LOCALE, LOCALE_LIST } from '../../config/i18n'

const routeApi = getRouteApi('/{-$locale}')

const LocaleLayout = () => {
   const { locale, messages } = routeApi.useLoaderData()

   return (
      <IntlProvider messages={messages} locale={locale}>
         <Outlet />
      </IntlProvider>
   )
}

export const Route = createFileRoute('/{-$locale}')({
   loader: ({ params }) => {
      // @ts-expect-error safe
      if (!LOCALE_LIST.includes(params.locale) && params.locale !== undefined) {
         throw new Error(
            'Invalid locale: ' +
               params.locale +
               '.\nMust be one of ' +
               LOCALE_LIST.join(','),
         )
      }
      const locale = (params.locale as Locale) || DEFAULT_LOCALE
      return { locale, messages }
   },
   component: LocaleLayout,
})
