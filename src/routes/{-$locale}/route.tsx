import { createFileRoute, getRouteApi, Outlet } from '@tanstack/react-router'
import { IntlProvider, Locale, Messages } from 'use-intl'

import { getMessagesServer } from '@/locale-layout/shared'
import { DEFAULT_LOCALE, LOCALE_LIST } from '~/config/i18n'
import { isOnServer } from '~/utils/shared'

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

const getMessagesClient = async (locale: Locale) => {
   if (messagesCache.has(locale)) {
      return messagesCache.get(locale) as Messages
   } else {
      const messages = await getMessagesServer({ data: locale })
      messagesCache.set(locale, messages)
      return messages
   }
}

export const Route = createFileRoute('/{-$locale}')({
   loader: async ({ params }) => {
      // @ts-expect-error safe
      if (!LOCALE_LIST.includes(params.locale) && params.locale !== undefined) {
         throw new Error('Invalid locale')
      }
      const locale = (params.locale as Locale) || DEFAULT_LOCALE
      if (isOnServer()) {
         return { locale, messages: await getMessagesServer({ data: locale }) }
      } else {
         return { locale, messages: await getMessagesClient(locale) }
      }
   },
   component: LocaleLayout,
   gcTime: 100_000,
   staleTime: 100_000,
})
