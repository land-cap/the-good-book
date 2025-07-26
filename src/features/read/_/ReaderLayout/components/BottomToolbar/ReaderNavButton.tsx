import { Link, LinkOptions, useLocation } from '@tanstack/react-router'
import { button } from 'styled-system/recipes'

import { Icon, Tooltip } from '~/ui/shared'

const buttonCls = button({ icon: true, size: 'xl' })

export const ReaderNavButton = ({
   linkOptions,
   direction,
   label,
}: {
   linkOptions: LinkOptions | null
   direction: 'left' | 'right'
   label: string
}) => {
   const location = useLocation()

   const icon = (
      <Icon
         size={6}
         name={direction === 'left' ? 'arrow_back' : 'arrow_forward'}
      />
   )

   const link = (
      <Link
         {...(linkOptions || { href: location.href })}
         aria-disabled={linkOptions ? undefined : true}
         className={buttonCls}
      >
         {icon}
      </Link>
   )

   return <Tooltip text={label}>{link}</Tooltip>
}
