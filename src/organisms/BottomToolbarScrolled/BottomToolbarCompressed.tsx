'use client'

import { useSetAtom } from 'jotai'
import { css } from 'styled-system/css'
import { caption, center } from 'styled-system/patterns'

import { forceShowControlsAtom } from '~/global.state'

export const BottomToolbarCompressed = () => {
	const setForceShowControls = useSetAtom(forceShowControlsAtom)

	return (
		<div
			className={css({
				column: 'content',
				pb: 'safe_area_bottom',
			})}
			onClick={() => setForceShowControls(true)}
		>
			<div className={center({ h: '8' })}>
				<p
					className={caption({
						fontWeight: 'bold',
					})}
				>
					Faptele Apostolilor 22
				</p>
			</div>
		</div>
	)
}
