import { motion } from 'framer-motion'
import { type ReactNode } from 'react'
import useMeasure from 'react-use-measure'
import { css } from 'styled-system/css'
import { Macrogrid } from 'styled-system/jsx'

export const PreferencesMenuContentContainer = ({
	children,
}: {
	children: ReactNode
}) => {
	const [ref, { height }] = useMeasure()

	return (
		<motion.div
			layout
			animate={{ height }}
			transition={{ duration: 0.5, ease: 'easeInOut' }}
			className={css({ forceGpu: true, willChange: 'height' })}
		>
			<Macrogrid
				direction="column"
				ref={ref}
				overflow="auto"
				overscrollBehavior="contain"
				h="fit-content"
			>
				{children}
			</Macrogrid>
		</motion.div>
	)
}
