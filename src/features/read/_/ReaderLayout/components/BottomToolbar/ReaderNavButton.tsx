import { Link, ParsedLocation } from '@tanstack/react-router'
import { button } from 'styled-system/recipes'

import { Icon } from '~/ui/shared'

export const ReaderNavButton = ({
   location,
   direction,
}: {
   location: ParsedLocation | null
   direction: 'left' | 'right'
}) => {
   const buttonCls = button({ icon: true, size: 'xl' })

   return (
      <Link
         to={location?.pathname}
         aria-disabled={location ? undefined : true}
         className={buttonCls}
      >
         <Icon
            size={6}
            name={direction === 'left' ? 'arrow_back' : 'arrow_forward'}
         />
      </Link>
   )
}
