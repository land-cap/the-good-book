import { createServerFn } from '@tanstack/react-start'
import { Locale, Messages } from 'use-intl'

import { DEFAULT_LOCALE, LOCALE_LIST } from '~/config/i18n'

const LOCALE_TO_MESSAGES: Record<Locale, () => Promise<Messages>> = {
   en: () => import('messages/en.json'),
   ro: () => import('messages/ro.json'),
   ru: () => import('messages/ru.json'),
}

export const getMessagesServer = createServerFn()
   .validator((locale) => {
      if (locale === undefined) {
         return DEFAULT_LOCALE
      }
      if (!LOCALE_LIST.includes(locale as Locale)) {
         throw new Error('Invalid locale param')
      }
      return locale as Locale
   })
   .handler(async ({ data: locale }) => await LOCALE_TO_MESSAGES[locale]())
