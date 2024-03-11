import { motion } from 'framer-motion'
import { type ReactNode } from 'react'
import useMeasure from 'react-use-measure'
import { Macrogrid } from 'styled-system/jsx'

export const PreferencesMenuContentContainer = ({
	animateHeight,
	children,
}: {
	animateHeight: boolean
	children: ReactNode
}) => {
	const [ref, { height }] = useMeasure()

	return (
		<motion.div
			transition={{ duration: 0.3, ease: 'easeOut' }}
			animate={{ height: animateHeight ? height : undefined }}
		>
			<Macrogrid
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
