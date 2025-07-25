import * as path from 'node:path'

import { createServerFn } from '@tanstack/react-start'
import * as fs from 'fs/promises'

import { DEFAULT_LOCALE, LOCALE_LIST } from '../../../config/i18n'

export type TMessages = Record<string, string | Record<string, string>>

export const getMessages = createServerFn({
   method: 'GET',
   response: 'data',
})
   .validator((locale: string | undefined) => {
      if (locale === undefined) {
         return DEFAULT_LOCALE
      }
      // @ts-expect-error safe
      if (!LOCALE_LIST.includes(locale)) {
         throw new Error('Invalid locale param')
      }
      return locale
   })
   .handler(async ({ data: locale }) => {
      const filePath = path.join(process.cwd(), 'messages', `${locale}.json`)
      const messagesStr = await fs.readFile(filePath, 'utf-8')
      return JSON.parse(messagesStr) as TMessages
   })
