import 'use-intl'
import messages from './messages/en.json'
import { LOCALE_LIST } from './src/config/i18n'

declare module 'use-intl' {
   interface AppConfig {
      Locale: (typeof LOCALE_LIST)[number]
      Messages: typeof messages
   }
}
