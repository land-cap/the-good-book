import 'use-intl'
import messages from './messages/en.json'
import { locales } from './src/config/i18n'

declare module 'use-intl' {
   interface AppConfig {
      Locale: (typeof locales)[number]
      Messages: typeof messages
   }
}
