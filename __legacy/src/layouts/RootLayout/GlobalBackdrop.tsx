'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useAtomValue } from 'jotai'
import { css } from 'styled-system/css'

import { showBackdropAtom } from '~/state'

export const GlobalBackdrop = () => {
	const show = useAtomValue(showBackdropAtom)

	return (
		<AnimatePresence>
			{show && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 0.5 }}
					exit={{ opacity: 0, transition: { duration: 0.15, ease: 'easeOut' } }}
					transition={{ duration: 0.3, ease: 'easeOut' }}
					className={css({
						zIndex: 1,
						pos: 'fixed',
						inset: 0,
						bg: 'bg.canvas',
					})}
				/>
			)}
		</AnimatePresence>
	)
}
