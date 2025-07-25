import { createFileRoute, getRouteApi, Outlet } from '@tanstack/react-router'
import { IntlProvider } from 'use-intl'

import { getMessages } from '@/root-layout/shared'

import { DEFAULT_LOCALE } from '../../config/i18n'

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
      const messages = await getMessages({ data: params.locale })
      return { locale: params.locale || DEFAULT_LOCALE, messages }
   },
   component: LocaleLayout,
})
