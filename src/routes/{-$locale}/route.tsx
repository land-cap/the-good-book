import { createFileRoute, getRouteApi, Outlet } from '@tanstack/react-router'
import { IntlProvider, Locale, Messages } from 'use-intl'

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

const messagesCache = new Map<Locale, Messages>()

export const Route = createFileRoute('/{-$locale}')({
   loader: async ({ params }) => {
      // @ts-expect-error safe
      if (!LOCALE_LIST.includes(params.locale) && params.locale !== undefined) {
         throw new Error('Invalid locale')
      }
      const locale = (params.locale as Locale) || DEFAULT_LOCALE
      if (messagesCache.has(locale)) {
         return { locale, messages: messagesCache.get(locale) }
      } else {
         const messagesRes = await fetch('/api/messages/' + locale)
         const messages = (await messagesRes.json()) as Messages
         messagesCache.set(locale, messages)
         return { locale, messages }
      }
   },
   component: LocaleLayout,
   gcTime: 100_000,
   staleTime: 100_000,
})
