import { Link, ParsedLocation } from '@tanstack/react-router'
import { button } from 'styled-system/recipes'

import { Icon, Tooltip } from '~/ui/shared'

export const ReaderNavButton = ({
   location,
   direction,
   label,
}: {
   location: ParsedLocation | null
   direction: 'left' | 'right'
   label: string
}) => {
   const buttonCls = button({ icon: true, size: 'xl' })

   const link = (
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

   return <Tooltip text={label}>{link}</Tooltip>
}
