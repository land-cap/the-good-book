import { css } from 'styled-system/css'
import { subgrid } from 'styled-system/patterns'

import { Separator } from '~/components'

export const BottomToolbarScrolled = () => (
	<>
		<Separator className={css({ column: 'content' })} />
		<div
			className={subgrid({
				column: 'content',
				pb: 'safe_area_bottom',
			})}
		>
			Faptele Apostolilor 22
		</div>
	</>
)
