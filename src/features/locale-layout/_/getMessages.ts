import path from 'node:path'

import { createServerFn } from '@tanstack/react-start'
import fs from 'fs/promises'
import { Locale, Messages } from 'use-intl'

import { DEFAULT_LOCALE, LOCALE_LIST } from '~/config/i18n'

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
   .handler(async ({ data: locale }) => {
      const filePath = path.join(process.cwd(), 'messages', `${locale}.json`)
      const messagesStr = await fs.readFile(filePath, 'utf-8')
      return JSON.parse(messagesStr) as Messages
   })
