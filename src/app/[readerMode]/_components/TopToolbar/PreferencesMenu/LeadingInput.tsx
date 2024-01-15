'use client'

import { Slider } from '@ark-ui/react'
import { useAtom } from 'jotai'
import { css } from 'styled-system/css'
import { square, stack } from 'styled-system/patterns'

import { leadingAtom } from '~/app/[readerMode]/_components/TopToolbar/TopToolbar.state'

export const LeadingInput = () => {
	const [leading, setLeading] = useAtom(leadingAtom)

	return (
		<Slider.Root
			min={14}
			max={22}
			value={[14, leading]}
			onValueChange={({ value }) => setLeading(value[1])}
			onValueChangeEnd={({ value }) => setLeading(value[1])}
			className={stack({
				direction: 'column',
				gap: '6',
				position: 'relative',
				column: 'content',
				sm: {
					direction: 'row',
				},
			})}
		>
			<Slider.Label>Line spacing</Slider.Label>
			<Slider.Control className={css({ flexGrow: '1' })}>
				<Slider.Track className={css({ h: '1', bg: 'fg.moreFaded' })}>
					<Slider.Range className={css({ h: '1', bg: 'fg' })} />
				</Slider.Track>
				<Slider.Thumb
					key={1}
					index={1}
					className={square({
						size: '5',
						position: 'absolute',
						top: '-2',
						bg: 'white',
						border: '2px solid token(colors.fg)',
					})}
				/>
			</Slider.Control>
		</Slider.Root>
	)
}
