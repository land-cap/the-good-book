import path from 'node:path'

import { json } from '@tanstack/react-start'
import { createServerFileRoute } from '@tanstack/react-start/server'
import fs from 'fs/promises'
import { Messages } from 'use-intl'

export const ServerRoute = createServerFileRoute(
   '/api/messages/$locale',
).methods({
   GET: async ({ params: { locale } }) => {
      const filePath = path.join(process.cwd(), 'messages', `${locale}.json`)
      const messagesStr = await fs.readFile(filePath, 'utf-8')
      return json(JSON.parse(messagesStr) as Messages)
   },
})
