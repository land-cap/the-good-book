import { createFileRoute, getRouteApi, Outlet } from '@tanstack/react-router'
import { IntlProvider, Locale } from 'use-intl'

import { getMessages } from '@/root-layout/shared'

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
   loader: async ({ params }) => {
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
      const messages = await getMessages({ data: locale })
      return { locale, messages }
   },
   component: LocaleLayout,
})
